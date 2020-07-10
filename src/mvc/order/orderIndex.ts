/**
* name 
*/
import baseWindow from '../baseView/component/baseWindow'
import orderController from './orderController'
import tmp_http from '../../net/httpJson'
import dataJson from '../resconfig/dataJson'
import dataGlobal from '../resconfig/dataGlobal'
import { ui } from '../../ui/layaMaxUI'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import globalFun from '../resconfig/globalFun'
// import net from '../event/NETWORKEVENT'
export default class orderIndex extends baseWindow {

  private _orderIndex: Laya.Sprite;//顶层对象
  private _orderItem: any;//任务列表子对象
  private _orderList: Laya.List;
  // private _y_btn: fairygui.GLoader;//提交按钮
  // private _close: fairygui.GLoader;//关闭按钮
  private _good_list: Laya.List;//物品列表
  // private _gold_val: fairygui.GTextField;//下面金币
  // private _exp_val: fairygui.GTextField;//下面经验
  private _time: any;//倒计时时间

  constructor() {
    super();
    this._orderItem = {}
  }
  /**显示订单弹窗 */
  public onShowOrder() {
    console.log('显示订单弹窗')
    this._orderIndex = new ui.order.orderIndexUI();
    this._orderIndex.name = 'orderIndex';
    // this.setScale(this._orderIndex.displayObject);
    this._orderIndex.pivot(this._orderIndex.width / 2, this._orderIndex.height / 2);//设置轴心
    this.addChild(this._orderIndex);
    this.tweenShow();
    // //初始化参数
    // this._good_list = this._orderIndex.getChild('good_list').asList;
    // this._gold_val = this._orderIndex.getChild('gold_val').asTextField;
    // this._exp_val = this._orderIndex.getChild('exp_val').asTextField;
    // this._time = this._orderIndex.getChild('time').asTextField;
    // this._y_btn = this._orderIndex.getChild('y_btn').asLoader;
    // this._close = this._orderIndex.getChild('close').asLoader;
    this._orderIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeOrder);
    //获取订单列表
    this.getLotteryInfo();
  }
  /**
   * 获取订单列表的信息
   */
  public getLotteryInfo() {
    // let tmp_http = net.httpJson.getInstance();
    // let tmp_data = {
    //   'a': "lottery_info",
    //   'm': "init",
    //   'd': {},
    //   'code': 1
    // };
    // console.log("发送数据", tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    var data = {}
    Laya.stage.event(NETWORKEVENT.LOTTERYINFOBAK, data)
  }
  /**
   * 获取物品
   */
  public sendGood(data) {
    var tmp_arr = [];
    for (var i in data) {
      //查找任务的ID
      var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[data[i].lottery_id];
      var good_list = lottery_info.goods;
      for (var i in good_list) {
        tmp_arr.push(good_list[i].id);
      }
    }
    // let tmp_http = net.httpJson.getInstance();
    // let tmp_data = {
    //   'a': "send_good",
    //   'm': "init",
    //   'd': {
    //     'good_id': tmp_arr
    //   },
    //   'code': 1
    // };
    // console.log("发送数据", tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);

    Laya.stage.event(NETWORKEVENT.SENDGOODBAK)
  }
  /**
   * 展示任务列表
   */
  public setLotteryList() {
    this._orderList = this._orderIndex.scene.order_list;
    //获取任务信息
    var lottery_list = dataGlobal.getInstance().lotteryInfo;
    // var order_list = this._orderIndex.scene.order_list;
    this._orderList.dataSource = [];
    console.log('展示任务列表-1', lottery_list, this._orderList)
    var num = 1;
    var key = '';
    this._orderItem = {
      name: '',
      order_gold_val: {
        text: ''
      },
      order_exp_val: {
        text: ''
      },
      gou: {
        visible: false
      },
      tijiao: {
        visible: false
      },
      aperture: {
        visible: false
      }
    };//重置一下选项
    if (lottery_list) {
      for (var i in lottery_list) {
        var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[lottery_list[i].lottery_id];//获取任务信息
        //获取现在的等级
        var level = dataGlobal.getInstance().userInfo.grade;
        if (Math.floor(level) >= Math.floor(lottery_info.grade) && Math.floor(level) <= Math.floor(lottery_info.grade2)) {
          //创建任务的选项
          // this._orderItem[lottery_info.id] = fairygui.UIPackage.createObject('order', 'orderItem').asCom;
          this._orderItem.name = lottery_info.id + '_item';
          this._orderItem.id = lottery_info.id;
          var lottery_goods = lottery_info.goods3;//奖励的物品
          for (var q in lottery_goods) {
            if (lottery_goods[q].id == 'g001') {//金币
              this._orderItem.order_gold_val.text = lottery_goods[q].num;
              // this._orderItem[lottery_info.id].getChild('gold_val').asTextField.text = lottery_goods[q].num;
            } else if (lottery_goods[q].id == 'exp001') {//经验
              this._orderItem.order_exp_val.text = lottery_goods[q].num;
              // this._orderItem[lottery_info.id].getChild('exp_val').asTextField.text = lottery_goods[q].num;
            }
          }
          // this._orderItem[lottery_info.id].on(Laya.Event.CLICK, this, this.clickOrderItem, [lottery_list[i].lottery_id]);//设置选项点击监听
          this._orderList.addItem(this._orderItem);
          this._orderList.renderHandler = new Laya.Handler(this, this.itemSelectHandler, this._orderItem[lottery_info.id], false)
          this.setOrderStatu(lottery_list[i].lottery_id);//设置订单的状态
          if (num == 1) {
            key = i;
          }
          num++;
        }
      }
      // //初始化选中的任务
      // var id = orderController.getInstance().model._order_id;
      // if (id && this._orderItem[id]) {
      //   this.clickOrderItem(id);
      // } else {
      //   if (key && lottery_list[key].lottery_id) {
      //     this.clickOrderItem(lottery_list[key].lottery_id);
      //   }
      // }
    }
  }

  /**
   * 订单列表渲染完成
   * itemSelectHandler 
   */
  public itemSelectHandler(cell) {
    cell.on(Laya.Event.CLICK, this, this.clickOrderItem, [cell.dataSource.id])
  }
  // /**
  //  * 
  //  * @param 点击订单
  //  */
  // public clickItem(cell) {
  //    console.log(cell)
  // }
  /**
   * 设置订单状态
   * id：订单的ID
   */
  private setOrderStatu(id) {
    //获取订单信息
    var order_info = dataGlobal.getInstance().lotteryInfo[id];
    var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id];//获取系统任务信息
    this._orderIndex.scene.y_btn.off(Laya.Event.CLICK, this, this.lotteryAct);
    if (order_info.is_ok == 1) {//未完成
      var is_goods = this.isGoodsEnough(lottery_info.goods);
      if (is_goods) {//材料足够了
        console.log(this._orderItem)
        for (var i = 0; i < this._orderList.cells.length; i++) {
          if (this._orderList.getItem(i)) {
            this._orderList.getItem(i).gou.visible = true
            console.log(this._orderIndex.scene.y_btn.skin)
            this._orderIndex.scene.y_btn.skin = 'order/btn_huang.png';
            this._orderIndex.scene.y_btn.on(Laya.Event.CLICK, this, this.lotteryAct, [1]);
          }
        }
      } else {//材料不足
        console.log('材料不足')
        for (var i = 0; i < this._orderList.cells.length; i++) {
          if (this._orderList.getItem(i)) {
            this._orderList.getItem(i).tijiao.visible = true
            console.log(this._orderIndex.scene.y_btn.skin)
            this._orderIndex.scene.y_btn.skin = 'order/btn_hui.png';
            this._orderIndex.scene.y_btn.on(Laya.Event.CLICK, this, this.lotteryAct, [2]);
          }
        }
      }
    } else {//提交了
      console.log('提交了')
      for (var i = 0; i < this._orderList.cells.length; i++) {
        if (this._orderList.getItem(i)) {
          this._orderList.getItem(i).tijiao.visible = true
          console.log(this._orderIndex.scene.y_btn.skin)
          this._orderIndex.scene.y_btn.skin = 'order/btn_hui.png';
        }
      }
    }
  }
  /**
   * 点击订单任务选项
   */
  public clickOrderItem(id) {
    this.setClicAperture(id);//设置选中圈
    orderController.getInstance().model.setOrderId(id);//保存当前选中的订单
    this.setOrderStatu(id);//刷新订单的状态，并且设置提交按钮事件
    this.setGoodList(id);//设置物品列表

  }
  /**
   * 设置选中光圈
   * id:任务ID
   */
  public setClicAperture(id) {
    var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id];//获取系统任务信息
    console.log(dataJson.getInstance().GET_SYS_FLOWER_LOTTERY(), id)
    var lottery_goods_list = lottery_info.goods3;
    for (var i in lottery_goods_list) {
      if (lottery_goods_list[i].id == 'g001') {//金币
        this._orderIndex.scene.gold_val.text = lottery_goods_list[i].num;
      } else if (lottery_goods_list[i].id == 'exp001') {//经验
        this._orderIndex.scene.exp_val.text = lottery_goods_list[i].num;
      }
    }
    if (this._orderItem.id == id) {
      for (var j = 0; j < this._orderList.cells.length; j++) {
        if (this._orderList.getItem(j)) {
          var source =  this._orderList.getItem(j)
          source.aperture.visible = true;
          this._orderList.setItem(j,source)
        }
      }
    } else {
      for (var j = 0; j < this._orderList.cells.length; j++) {
        if (this._orderList.getItem(j)) {
          var source =  this._orderList.getItem(j)
          source.aperture.visible = false;
          this._orderList.setItem(j,source)
        }
      }
    }

  }
  /**
   * 设置物品列表
   */
  public setGoodList(id) {
    //获取订单的物品
    var lottery_good = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id].goods;
    var user_good_info = dataGlobal.getInstance().userGoodInfo;
    this._good_list = this._orderIndex.scene.good_list;
    this._good_list.dataSource=[]
    for (var i in lottery_good) {
      var tmp_arr = [];
      tmp_arr.push({ 'id': lottery_good[i].id, 'num': lottery_good[i].num });
      var result = this.isGoodsEnough(tmp_arr);
      //获取系统物品的信息
      var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[lottery_good[i].id];
      if (!good_info) {
        continue;
      }
      let index = good_info.pic.lastIndexOf("/")
      var _skin = good_info.pic.substring(index + 1, good_info.pic.length)
      console.log(_skin)
      //创建列表项
      var good_item = {
        name:good_info.id,
        gicon :{
          skin:"main/"+_skin+".png"
        },
        gnum:{
          text:''
        }
      }
    console.log(good_item)
      // good_item.getChild('gicon').asLoader.url = good_info.pic;
      if (result) {//够了
        var str = "" + user_good_info[lottery_good[i].id].num + "/" + lottery_good[i].num + '';
      } else {//不够
        var str = "" + user_good_info[lottery_good[i].id].num + "/" + lottery_good[i].num + '';
      }
      good_item.gnum.text = str;
      this._good_list.addItem(good_item);
      this._good_list.renderHandler =  new Laya.Handler(this, this.goodSelectHandler, [good_item, good_info.id], false)
      // good_item.on(Laya.Event.CLICK, this, this.clickGoodItem, [good_item, good_info.id]);
    }

  }
  /**
   * 订单详情渲染完成
   */
  private goodSelectHandler(item,id,cell){
    cell.on(Laya.Event.CLICK, this, this.clickGoodItem, [item,id])
  }
  /**
   * 展示物品的信息
   */
  public clickGoodItem(obj, id) {
    for (var i = 0 ; i <this._good_list.cells.length;i++ ) {
      if(this._good_list.getCell(i).name == id){
        console.log(this._good_list.getCell(i))
        var x = this._good_list.getCell(i).x+this._good_list.x;
        var y = this._good_list.getCell(i).y+this._good_list.y;
        orderController.getInstance().showOrderGoodGoTip(x, y, id)
      }
    }

    // var x = this._good_list.x + this._good_list.margin.left + obj.x + obj.width / 2 - this._good_list.scrollPane.posX;//(列表的x坐标+列表左填充位置+对象的x坐标+对象框/2-滚动条的x定位)
    // console.log(obj.x,obj.y,this._good_list.scrollPane.posX,this._good_list.scrollPane.posY);
    // var y = this._good_list.y;
    // orderController.getInstance().showOrderGoodGoTip(x, y, id);

  }
  /**
   * 判断物品是否足够
   * data:[{'id','num'}]
   */
  public isGoodsEnough(data) {
    //获取用户的物品信息
    var userGoodInfo = dataGlobal.getInstance().userGoodInfo;
    var result = true;
    if (data && data.length > 0) {
      for (var i in data) {
        if (Math.floor(data[i].num) > Math.floor(userGoodInfo[data[i].id].num)) {
          result = false;
          return result;
        }
      }
    }
    return result;
  }
  /**
   * 订单提交
   */
  private lotteryAct(type) {
    if (type == 2) {
      Laya.stage.event(GAMEEVENT.TXTTIP, ['物品不足，无法提交']);
      return;
    }
    var id = orderController.getInstance().model._order_id;
    // let tmp_websocket = net.webSocketJson.getInstance();
    // let tmp_data = {
    //   'a': "lottery_act",
    //   'm': "gzhq_lottery",
    //   'd': {
    //     'lottery_id': id
    //   },
    //   'code': 1
    // };
    // tmp_websocket.sendMessage(tmp_data);
    console.log('提交')
    // Laya.stage.event(NETWORKEVENT.LOTTERYACTBAK);
  }
  /**
   * 展示时间倒计时
   */
  public showOrderTime() {
    //获取时间
    var timeStr = orderController.getInstance().model.thisDay;
    // this._time.text = globalFun.getInstance().getCountDown(timeStr);

  }
  /**
   * 关闭按钮
   */
  public closeOrder() {
    orderController.getInstance().model.clearOrderTime();//清除掉定时器
    this.tweenHide();
  }




}