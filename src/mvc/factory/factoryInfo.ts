/**
* name 
*/
import baseWindow from '../baseView/component/baseWindow'
import { ui } from '../../ui/layaMaxUI';
import GAMEEVENT from '../event/GAMEEVENT'
import factoryController from './factoryController'
import CONST from '../../const/CONST'
import dataGlobal from '../resconfig/dataGlobal'
import dataJson from '../resconfig/dataJson'
import globalFun from '../resconfig/globalFun'
import tipController from '../baseView/public/tip/tipController'
import NETWORKEVENT from '../event/NETWORKEVENT'
export default class factoryInfo extends baseWindow {

  private _factoryInfo: Laya.Sprite;//顶层对象
  private _id: string;//当前工厂ID
  private thisProduction: any;//生产槽的数组对象
  // private _close:Laya.GLoader;//关闭按钮
  private _top_div: Laya.List;//上框
  private _center_div: Laya.List;//中框
  private _bottom_div: Laya.List;//下框
  private _pro_tool: Laya.List;//生产工具

  constructor() {
    super();
    this.thisProduction = {};

  }
  /**显示工厂加工页面 */
  public onShowFactoryInfo(id: string) {
    factoryController.getInstance().model._mf_id = id;
    this._factoryInfo = new ui.factory.factoryInfoUI;
    // //赋值
    // this._top_div = this._factoryInfo.getChildByName('top_div');
    // this._center_div = this._factoryInfo.getChildByName('center_div');
    // this._bottom_div = this._factoryInfo.getChildByName('bottom_div');
    // this._pro_tool = this._factoryInfo.getChildByName('pro_tool');
    //适配
    this._factoryInfo.name = 'factoryInfo';
    this._factoryInfo.pivot(this._factoryInfo.width / 2, this._factoryInfo.height / 2);//设置轴心

    // this.setScale(this._factoryInfo);
    this.adaption();
    this.addChild(this._factoryInfo);
    this.tweenShow();
    //初始化这间工厂信息
    this.initFactoryInfo(id);
    Laya.stage.event(GAMEEVENT.HIDEINFODIV);//隐藏最上层的浮框
    this._factoryInfo.scene.close_btn.on(Laya.Event.CLICK, this, this.closeFactoryInfo);
  }
  /**
   * 自适应
   */
  private adaption() {
    console.log(this._factoryInfo)
    // this._top_div.y = this._top_div.y + CONST.ADAPTION;
    // this._center_div.y = this._center_div.y - CONST.ADAPTION;
    // this._bottom_div.y = this._bottom_div.y - CONST.ADAPTION;
    // console.log(this._pro_tool);
    // // this._pro_tool.scale(CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH,CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH);
    // this._pro_tool.scaleX = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    // this._pro_tool.scaleY = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    // console.log(this._pro_tool);
    // console.log('this._login_group.y',this._login_group.y,CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH,CONST.DESIGNSTAGEHEIGHT);
    // var sc = CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH;
    // var a = (sc*CONST.DESIGNSTAGEHEIGHT-CONST.STAGEHEIGHT)/sc;
    // for(var i=1;i<=6;i++){


    // 	var factory_item = this._factory.getChildByName('factory_'+i).asCom;
    // 	if(i = 1){
    // 		var y = factory_item.y  ;
    // 	}
    // 	factory_item.y = y;
    // 	y = y + CONST.ADAPTION + 284*CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH;
    // if(factory_item.y < CONST.DESIGNSTAGEHEIGHT/2){
    // 	factory_item.y = y + CONST.ADAPTION + 284*CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH;
    // }else{
    // 	factory_item.y = y + CONST.ADAPTION + 284*CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH;
    // }

    // }
  }
  public closeFactoryInfo() {
    factoryController.getInstance().model._mf_id = '';
    this.tweenHide();
    Laya.stage.event(GAMEEVENT.SHOWINFODIV);//显示最上层的浮框
  }
  /**
   * //初始化这间工厂页面的所有信息
   * @param id 工厂的ID
   */
  public initFactoryInfo(id: string) {
    console.log('初始化所有信息')
    this._id = id;
    //设置工厂的基本信息
    this.initSetFactoryInfo(id);
    //生产位处理
    this.initProduction(id);
    //处理正在生产的物品
    this.initProductionGood(id);
    //获取用户的物品信息
    this.getUserGood(id);
    // //处理升级按钮
    this.upGradeBtn(id);
  }
  /**
   * 设置工厂的基本信息
   */
  initSetFactoryInfo(id: string) {
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade];
    var factory_name = this._factoryInfo.scene.top_div.getChildByName('factory_name');
    var factory_level = this._factoryInfo.scene.top_div.getChildByName('factory_level');
    factory_level.text = data.grade;
    factory_name.text = factory_info.name;
  }
  /**
   * 生产位处理  三个加号
   * @param id 工厂的ID
   */
  public initProduction(id: string) {
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    console.log('获取用户这间工厂信息,',data)
    var myData = data.queue_goods;//等待生产的位置
    console.log(myData)
    var num: number = 1;//当前处理的槽位
    var good_div: Laya.List;//当前处理槽位的物品层
    var unlock_div: Laya.List;//当前处理槽位的解锁层
    for (var y in this.thisProduction) {
      this.thisProduction[y].off(Laya.Event.CLICK, this, this.factory_open_seat_num);
    }
    //先添加预生产的
    for (var i in myData) {
      this.thisProduction[num] = this._factoryInfo.scene.top_div.getChildByName('goods_' + num);
      this.thisProduction[num].off(Laya.Event.CLICK, this, this.factory_open_seat_num);
      var good_icon = this.thisProduction[num].getChildByName('good_div').getChildByName('good_icon');
      var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[myData[i].id];//配置表物品信息
      let index = good_info.pic.lastIndexOf("/")
      var _skin = good_info.pic.substring(index + 1, good_info.pic.length)

      good_icon.skin = 'factory/' + _skin + '.png';
      good_div = this.thisProduction[num].getChildByName('good_div');
      good_div.visible = true;
      unlock_div = this.thisProduction[num].getChildByName('unlock_div');
      unlock_div.visible = false;
      num++;
    }
   
    for (num; num <= 3; num++) {//
      this.thisProduction[num] = this._factoryInfo.scene.top_div.getChildByName('goods_' + num);
      good_div = this.thisProduction[num].getChildByName('good_div');
      unlock_div = this.thisProduction[num].getChildByName('unlock_div');
      if (num <= data.open_seat_num) {//有该槽位，并且没有生产的东西
        good_div.visible = false;
        unlock_div.visible = false;
      } else {//需要购买的
        if (num == 2) {
          var pirce = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade].buy_num;//获取槽位的信息
        } else if (num == 3) {
          var pirce = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade].buy_num2;//获取槽位的信息
        }
        var gold = unlock_div.getChildByName('gold');
        this.thisProduction[num].getChildByName('unlock_div').getChildByName('gold').text = pirce;
        good_div.visible = false;
        unlock_div.visible = true;
        //监听购买槽位
        var seat_num = num - 1;
        this.thisProduction[num].off(Laya.Event.CLICK, this, this.factory_open_seat_num);
        this.thisProduction[num].on(Laya.Event.CLICK, this, this.factory_open_seat_num, [id, seat_num]);
      }
    }
  }
  /**
   * 初始化正在生产的物品
   */
  private initProductionGood(id: string) {
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    var myData = data.being_goods;//获取正在生产的物品
    var pro_tool = this._factoryInfo.scene.center_div.getChildAt(1)

    var good_icon = pro_tool.getChildByName('good_now');//物品的图标
    var good_txt = pro_tool.getChildByName('good_txt');//制作中字样
    var time_txt = pro_tool.getChildByName('time_txt');//时间倒计时文字
    var time_pro = pro_tool.getChildByName('time_pro');//时间倒计时进度条
    var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade];//获取工厂生产物品的信息

    console.log(good_icon, good_txt, time_txt)
    if (myData && myData.id) {//有物品在生产
      var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[myData.id];//配置表物品信息
      var factory_good_info = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id][myData.id];//获取工厂生产物品的信息
      let index = good_info.pic2.lastIndexOf("/")
      var _skin = good_info.pic2.substring(index + 1, good_info.pic.length)

      good_icon.skin = 'factory/' + _skin + '.png';
      good_icon.visible = true;
      good_txt.visible = true;
      time_txt.text = globalFun.getInstance().formatSeconds(myData.t);
      time_txt.visible = true;

      time_pro.value = Math.floor(myData.t) / (Math.floor(factory_good_info.t) / (Math.floor(factory_good_info.speed) + Math.floor(factory_info.speed))) * 100;
    } else {//没有物品
      good_icon.visible = false;
      good_txt.visible = false;
      time_txt.visible = false;
      time_pro.value = 0;
    }
  }
  /**
   * 购买生产槽位
   * @param id 工厂ID
   * @param num 生产位ID（1或者2）
   */
  private factory_open_seat_num(id: string, num: number) {
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    if (num == 2 && data.open_seat_num == 1) {//有该槽位，并且没有生产的东西
      Laya.stage.event(GAMEEVENT.TXTTIP, ['请先购买第二个生产队列']);
      return;
    }

    //获取用户的信息
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;
    //获取工厂这个物品的信息
    var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id];
    var user_factory_level = dataGlobal.getInstance().factory[id].grade;
    if (num == 1) {
      var gold = factory_info[user_factory_level].buy_num;
    } else if (num == 2) {
      var gold = factory_info[user_factory_level].buy_num2;
    }
    if (Math.floor(have_gold) < Math.floor(gold)) {
      //金币不足
      Laya.stage.event(GAMEEVENT.TXTTIP, ['宝石不足，无法购买！']);
      return;
    }

    Laya.stage.event(GAMEEVENT.TIPSKUAN, ['确定消耗' + gold + '宝石购买额外队列？', '确定', '取消', function () {
      this.factory_open_seat_num_act(id, num);
      tipController.getInstance().close();
    }.bind(this), function () {
      tipController.getInstance().close();
    }]);
  }
  /**
   * 购买生产槽位响应
   * @param id 工厂ID
   * @param num 生产位ID（1或者2）
   */
  private factory_open_seat_num_act(id: string, num: number) {

    // let tmp_websocket = net.webSocketJson.getInstance();
    // let tmp_data = {
    // 	'a':"factory_open_seat_num",
    // 	'm':"gzhq_factory",
    // 	'd':{
    // 		'mf_id':id,
    // 		'num':num
    // 	},
    // 	'code':1
    // };
    // console.log("发送websocket数据",tmp_data);
    // tmp_websocket.sendMessage(tmp_data);
    Laya.stage.event(NETWORKEVENT.FACTORYOPENSEATNUMBAK);
  }
  /**
   * 设置生产列表
   * @param id ：工厂ID
   */
  private getUserGood(id: string) {
    var data = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id];//获取配置表工厂的物品信息

    var good_arr = [];
    for (var i in data) {
      var good_data = data[i].good;
      good_arr.push(data[i].id);
      for (var q in good_data) {
        good_arr.push(good_data[q].id);
      }
    }
    // let tmp_http = net.httpJson.getInstance();
    // let tmp_data = {
    // 	'a':"send_good",
    // 	'm':"init",
    // 	'd':{
    // 		'good_id':good_arr
    // 	},
    // 	'code':1
    // };
    // console.log("发送websocket数据",tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL,tmp_data);
    Laya.stage.event(NETWORKEVENT.SENDGOODBAK);
  }
  /**
   * 添加工厂可生产物品信息
   */
  public initProductionGoodList() {
    console.log('添加工厂可生产物品信息')
    var science_list = this._factoryInfo.scene.bottom_div.getChildByName('science_list');
    science_list.dataSource = [];
    var id = this._id;
    var data = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id];//获取配置表工厂的物品信息
    var level = dataGlobal.getInstance().userInfo.grade;//玩家等级
    var user_good_info = dataGlobal.getInstance().userGoodInfo;//用户的物品信息
    var _index = -1;
    console.log(data)
    console.log(user_good_info)
    for (var i in data) {
      var isshow = true;//是否需要显示了下一个了
      if ((Math.floor(level) + 1) < Math.floor(data[i].grade2)) {//如果大于下一级的，则跳过
        continue;
      }
      // var factoryGoodsItem = Laya.UIPackage.createObject('factory','factoryGoodsItem').asCom;
      var science = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];//获取生产物品信息

      let index = science.pic.lastIndexOf("/")
      var _skin = science.pic.substring(index + 1, science.pic.length)
      var factoryGoodsItem = {
        name: 'factoryGoodsItem_' + data[i].id,
        id: 'factoryGoodsItem_' + data[i].id,
        good_pic: {
          skin: "factory/" + _skin + '.png'
        },
        good_num: {
          text: user_good_info[data[i].id].num
        },
        good_name: {
          text: science.name
        },
        good_lock_div: {
          visible: true
        },
        good_info: {
          visible: true
        }
      }
      _index++
      science_list.addItem(factoryGoodsItem)

      console.log(science_list.getItem(_index))
      console.log(science_list.getCell(_index))

      if (Math.floor(level) >= Math.floor(data[i].grade2)) {//够等级，只需要判断是否够材料
          factoryGoodsItem.good_info.visible = true;
          factoryGoodsItem.good_lock_div.visible = false;
          var goods_list = data[i].good;
          var goods_num = 1;
          var isMake = true;
          for (var q in goods_list) {
            //查询材料物品信息
            var material_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[goods_list[q].id];//物品的信息
            console.log('查询材料物品信息', material_info)
            console.log(science_list.getItem(_index))
            if (science_list.getItem(_index)) {
              if (science_list.getItem(_index).name == factoryGoodsItem.name) {
                var factoryGoodsCell = science_list.getCell(_index);
                var material_num = factoryGoodsCell.getChildByName('good_info').getChildByName('good' + goods_num + '_num');
                var material_icon = factoryGoodsCell.getChildByName('good_info').getChildByName('good' + goods_num + '_icon');
                console.log(material_info.pic)
                let index = material_info.pic.lastIndexOf("/")
                var _skin = material_info.pic.substring(index + 1, material_info.pic.length)
                material_icon.skin = 'main/' + _skin + '.png';
                material_icon.visible = true;
                console.log(user_good_info)
                console.log(goods_list[q].id)
                // var user_num = user_good_info[goods_list[q].id].num;
                var user_num = 3;
                if (Math.floor(user_num) >= Math.floor(goods_list[q].num)) {
                  material_num.color = '#A2613A';
                } else {
                  material_num.color = '#F8393B';
                  isMake = false;
                }

                material_num.text = goods_list[q].num;
                material_num.visible = true;
                goods_num++;
                // var good_sprite = this.getGoodInfo(goods_list[q].id, goods_list[q].num);//
                // factoryGoodsItem.addChild(good_sprite);
              }
            }

          }
          if (isMake) {//可以制造
            factoryGoodsCell.off(Laya.Event.CLICK, this, this.factoryAct);
            factoryGoodsCell.on(Laya.Event.CLICK, this, this.factoryAct, [data[i].id]);
          } else {//不能制造
            factoryGoodsCell.off(Laya.Event.CLICK, this, this.showFactoryMake);
            factoryGoodsCell.on(Laya.Event.CLICK, this, this.showFactoryMake, [id, data[i].id]);
          }

        } else {//上面有判断是否下一级的生产商品
          console.log("上面有判断是否下一级的生产商品",data[i])
          if (isshow) {
            isshow = false;
            factoryGoodsItem.good_info.visible = false;
            factoryGoodsItem.good_lock_div.visible = true;
            var good_lock_info = factoryGoodsCell.getChildByName('good_lock_div').getChildByName('good_lock_info');
            good_lock_info.text = data[i].grade2 + '级可解锁';
          }
        }

      

    }
  }
  /**
   * 工厂生产产品协议
   * @param id 物品ID
   */
  private factoryAct(id: string) {
    //判断是否有多余的生产位
    var factory_id = factoryController.getInstance().model._mf_id;
    var factory_info = dataGlobal.getInstance().factory[factory_id];
    if (factory_info.open_seat_num <= factory_info.queue_goods.length) {//没有多余的生产位
      Laya.stage.event(GAMEEVENT.TXTTIP, ['没有足够商品队列']);
      return;
    }
    // open_seat_num
    // let tmp_websocket = net.webSocketJson.getInstance();
    // let tmp_data = {
    // 	'a':"factory_act",
    // 	'm':"gzhq_factory",
    // 	'd':{
    // 		'mf_id':this._id,
    // 		'id':id
    // 	},
    // 	'code':1
    // };
    // console.log("发送websocket数据",tmp_data);
    // tmp_websocket.sendMessage(tmp_data);
    Laya.stage.event(NETWORKEVENT.FACTORYACTBAK);
  }
  /**
   * 打开界面
   * @param mf_id 工厂ID
   * @param id 物品ID
   */
  private showFactoryMake(mf_id: string, id: string) {
    factoryController.getInstance().showFactoryMake(mf_id, id);
  }
  /**
   * 处理升级按钮
   */
  private upGradeBtn(id: string) {
    var upgare_btn = this._factoryInfo.scene.bottom_div.getChildAt(4);
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id];
    if (data.grade >= factory_info.lenght) {
      upgare_btn.visible = false;
    } else {
      upgare_btn.off(Laya.Event.CLICK, this, this.showFactoryUpgrade);
      upgare_btn.on(Laya.Event.CLICK, this, this.showFactoryUpgrade, [id]);
      upgare_btn.visible = true;
    }
  }
  /**
   * 展示工厂升级弹窗
   */
  public showFactoryUpgrade(id: string) {
    factoryController.getInstance().showFactoryUpgrade(id);
  }
  /**
   * 正在生产倒计时
   */
  public initFormatSeconds() {
    //获取这间工厂正在生产的倒计时
    var data = dataGlobal.getInstance().factory[this._id];
    //获取这间工厂的加速
    var factory_seed = dataJson.getInstance().GET_SYS_FACTORY_INFO()[this._id][data.grade].speed;
    if (data.being_goods && data.being_goods.id) {
      //获取花的倒计时
      var flower = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[this._id][data.being_goods.id];
      var time_txt = this._factoryInfo.scene.center_div.getChildByName('pro_tool').getChildByName("time_txt");//时间倒计时文字
      time_txt.text = globalFun.getInstance().formatSeconds(data.being_goods.t);
      var time_pro= this._factoryInfo.scene.center_div.getChildByName('pro_tool').getChildByName("time_pro");//时间倒计时进度条
      // time_pro.value = Math.floor(data.being_goods.t)/(Math.floor(flower.t)/(Math.floor(flower.speed)+Math.floor(factory_seed)))*100;
      time_pro.value = Math.floor(data.being_goods.t)/(Math.floor(flower.t));
      // time_txt.visible = true;
    }
  }
}
