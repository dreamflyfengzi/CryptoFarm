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
import webSocketJson from '../../net/webSocketJson'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
// import net from '../event/NETWORKEVENT'
export default class orderIndex extends baseWindow {

  private _orderIndex: Laya.Sprite;//顶层对象
  private _orderItem: any;//任务列表子对象
  private _orderList: Laya.List;
  private _good_list: Laya.List;//物品列表
  private _time: any;//倒计时时间

  constructor() {
    super();
    this._orderItem = {}
  }
  /**显示订单弹窗 */
  public onShowOrder() {
    this._orderIndex = new ui.order.gradeOrderUI();
    this._orderIndex.name = 'orderIndex';
    this._orderIndex.pivot(this._orderIndex.width / 2, this._orderIndex.height / 2);//设置轴心
    this.addChild(this._orderIndex);
    this.tweenShow();
    this._orderIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeOrder);
    // 初始化
    this._orderIndex.scene.order_list.visible = false;
    this._orderIndex.scene.order_list.vScrollBarSkin = "";
    this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = false;
    this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName("good_list").visible = false;
    this._orderIndex.scene.inner_box.getChildByName("order_await").visible = false;
    this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('btn_remove').on(Laya.Event.CLICK, this, this.removeLottery);

    //获取订单列表
    this.getLotteryInfo();
  }
  /**
   * 获取订单列表的信息
   */
  public getLotteryInfo() {
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "lottery_info",
    //   'm': "init",
    //   'd': {},

    //   'code': 1
    // };
    // console.log("发送数据", tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    Laya.stage.event(NETWORKEVENT.LOTTERYINFOBAK)
  }
  /**
   * 1.获取物品
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
    let tmp_http = httpJson.getInstance();
    let tmp_data = {
      'a': "send_good",
      'm': "init",
      'd': {
        'good_id': tmp_arr
      },
      'code': 1
    };
    console.log("发送数据", tmp_data);
    tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);

    Laya.stage.event(NETWORKEVENT.SENDGOODBAK)
  }
  /**
   * 2.订单列表
   */
  public setLotteryList() {
    this._orderList = this._orderIndex.scene.order_list;
    //获取任务信息
    var lottery_list = dataGlobal.getInstance().lotteryInfo;
    this._orderList.dataSource = [];
    var num = 1;
    var key = '';
    if (lottery_list) {
      for (var i in lottery_list) {
        console.log('目前的小订单信息---', lottery_list[i])
        this._orderItem = {
          name: '',
          id: '',
          done_box: {
            visible: true
          },
          enough: {
            visible: false
          },
          order_n0: {
            skin: "",
            visible: true
          },
          order_customer: {
            skin: "",
            visible: true
          }
        };
        var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[lottery_list[i].lottery_id];//获取任务信息
        console.log('---', i)
        this.setOrderItem(lottery_info, i)

        this._orderList.addItem(this._orderItem);
        
        this._orderList.visible = true;
        if (num == 1) {
          key = i;
        }
        num++;
        this._orderList.renderHandler = new Laya.Handler(this, this.itemSelectHandler, null, false)
      }
      //初始化选中的任务
      var id = orderController.getInstance().model._order_id;
      if (id && this._orderItem[id]) {
        this.clickOrderItem(id, this._orderList.getCell(0));
      } else {
        if (key && lottery_list[key].lottery_id) {
          this.clickOrderItem(lottery_list[key].lottery_id, this._orderList.getCell(0));
        }
      }
    }
  }
  /**
   * 设置订单信息
   * @param setOrderItem 
   */
  private setOrderItem(info, index) {
    console.log('目前的任务状态信息--========================--', info, this._orderItem)
    console.log(index)
    var lottery_goods = info.goods3;//奖励的物品
    this._orderItem.id = info.id;
    this._orderItem.name = info.id + '_item';
    if (info.status == 1) {
      this._orderIndex.scene.inner_box.getChildByName("order_await").visible = false;
      this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = true;
      this._orderItem.order_n0.skin = "order/Order_01.png"
      this._orderItem.order_customer.skin = "order/Avatar 6 Enable.png";

      for (var q in lottery_goods) {
        if (lottery_goods[q].id == 'g001') {//金币
          this._orderIndex.scene.inner_box.getChildByName('order_detail').getChildByName('gold_val').text = lottery_goods[q].num;
        } else if (lottery_goods[q].id == 'exp001') {//经验
          this._orderIndex.scene.inner_box.getChildByName('order_detail').getChildByName('exp_val').text = lottery_goods[q].num;
        }
      }

      this.setOrderStatus(info.id);//设置订单的状态

    } else {
      this._orderIndex.scene.inner_box.getChildByName("order_await").visible = true;
      this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = false;
      this._orderItem.order_n0.skin = "order/Order_03.png"
      this._orderItem.order_customer.visible = false;
      this._orderItem.done_box.visible = false;
    }

    this._orderList.setItem(index, this._orderItem);
  }
  /**
   * 订单列表渲染完成
   * itemSelectHandler 
   */
  public itemSelectHandler(cell) {
    console.log(cell)
    cell.on(Laya.Event.CLICK, this, this.clickOrderItem, [cell.dataSource.id, cell])
  }

  /**
   * 设置订单状态
   * id：订单的ID
   */
  private setOrderStatus(id) {
    //获取订单信息
    var order_info = dataGlobal.getInstance().lotteryInfo[id];
    var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id];//获取系统任务信息

    // this._orderIndex.scene.y_btn.off(Laya.Event.CLICK, this, this.lotteryAct)
    //显示订单详情
    if(lottery_info.status == 2) {

      return
    }
    if (order_info.is_ok == 1) {//未完成
      var is_goods = this.isGoodsEnough(lottery_info.goods);
      if (is_goods) {//材料足够了
        
        for (var k = 0; k < this._orderList.cells.length; k++) {
          if (this._orderList.getItem(k)) {
            if (this._orderList.getItem(k).id === id) {
              this._orderList.getItem(k).done_box.visible = true;
              this._orderList.getItem(k).enough.visible = false;
              this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('get_btn').skin = "warehouse/btn_green_medium.png";
              this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('get_btn').on(Laya.Event.CLICK, this, this.lotteryAct, [1]);
            }
          }
        }
      } else {//材料不足
        console.log(id, "材料不足")
        for (var i = 0; i < this._orderList.cells.length; i++) {
          if (this._orderList.getItem(i)) {
            if (this._orderList.getItem(i).id === id) {
              this._orderList.getItem(i).done_box.visible = false
              this._orderList.getItem(i).enough.visible = true
              this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('get_btn').skin = "warehouse/btn_gray_medium.png";
              this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('get_btn').off(Laya.Event.CLICK, this, this.lotteryAct);

            }
          }
        }
      }
    }


  }
  /**
   * 点击订单任务选项
   */
  public clickOrderItem(id, cell) {
    var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id];//获取系统任务信息
    cell.rotation = 10;
    orderController.getInstance().model.setOrderId(id);//保存当前选中的订单
    this.setClicAperture(id);//设置选中订单
    this.setOrderStatus(id);//刷新订单的状态，并且设置提交按钮事件 todo
    this.setGoodList(id);//设置物品列表
  }
  /**
   * 设置选中任务改变获得参数
   * id:任务ID
   */
  public setClicAperture(id) {
    var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id];//获取系统任务信息
    var lottery_goods_list = lottery_info.goods3;
    if (lottery_info.status == 1) {
      //显示订单详情
      this._orderIndex.scene.inner_box.getChildByName("order_await").visible = false;
      this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = true;
    } else {
      //显示等待时间
      this._orderIndex.scene.inner_box.getChildByName("order_await").visible = true;
      this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = false;
    }
    for (var _z in this._orderList.dataSource) {
      if (this._orderList.dataSource[_z].id !== id) {
        var index = Number(_z)
        var _cell = this._orderList.getCell(index);
        _cell.rotation = 0
       
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
    this._good_list = this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName("good_list");
    this._good_list.dataSource = []
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

      //创建列表项
      var good_item = {
        name: good_info.id,
        gicon: {
          skin: "factory/" + _skin + ".png"
        },
        gnum: {
          text: ''
        },
        already: {
          visible: true
        }
      }
      // good_item.getChild('gicon').asLoader.url = good_info.pic;
      if (result) {//够了
        var str = "" + user_good_info[lottery_good[i].id].num + "/" + lottery_good[i].num + '';
        good_item.already.visible = true;
      } else {//不够
        var str = "" + user_good_info[lottery_good[i].id].num + "/" + lottery_good[i].num + '';
        good_item.already.visible = false;
      }
      good_item.gnum.text = str;
      this._good_list.addItem(good_item);
      // this._good_list.renderHandler = new Laya.Handler(this, this.goodSelectHandler, null, false) //点击物品详情
      this._good_list.visible = true;
    }

  }
  /**
   * 订单详情渲染完成
   */
  // private goodSelectHandler(cell, index) {
  //   cell.on(Laya.Event.CLICK, this, this.clickGoodItem, [cell.dataSource, index])
  // }
  // /**
  //  * 展示物品的信息
  //  */
  // public clickGoodItem(obj, index) {
  //   var id = this._good_list.getCell(index).name
  //   var x = this._good_list.getCell(index).x + this._good_list.x;
  //   var y = this._good_list.getCell(index).y + this._good_list.y;
  //   orderController.getInstance().showOrderGoodGoTip(x, y, id)
  // }
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
    console.log('提交订单')
    // if (type == 2) {
    //   Laya.stage.event(GAMEEVENT.TXTTIP, ['物品不足，无法提交']);
    //   return;
    // }
    // var id = orderController.getInstance().model._order_id;
    // let tmp_websocket = webSocketJson.getInstance();
    // let tmp_data = {
    //   'a': "lottery_act",
    //   'm': "gzhq_lottery",
    //   'd': {
    //     'lottery_id': id
    //   },
    //   'code': 1
    // };
    // tmp_websocket.sendMessage(tmp_data);

    // Laya.stage.event(NETWORKEVENT.LOTTERYACTBAK);
  }
  /**
   * 展示时间倒计时
   */
  public showOrderTime() {
    //获取时间
    // var timeStr = orderController.getInstance().model.thisDay;
    // this._time.text = globalFun.getInstance().getCountDown(timeStr);
    // this._time.visible = true;

  }
  /**
   * 关闭按钮
   */
  public closeOrder() {
    orderController.getInstance().model.clearOrderTime();//清除掉定时器
    this.tweenHide();
  }

  /**
   * 删除订单
   */
  public removeLottery() {
    var _id = orderController.getInstance().model._order_id;

  }


}
