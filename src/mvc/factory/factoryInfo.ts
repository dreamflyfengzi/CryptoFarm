/**
* name 
*/
import baseWindow from '../baseView/component/baseWindow'
import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI';
import GAMEEVENT from '../event/GAMEEVENT'
import factoryController from './factoryController'
import CONST from '../../const/CONST'
import dataGlobal from '../resconfig/dataGlobal'
import dataJson from '../resconfig/dataJson'
import globalFun from '../resconfig/globalFun'
import tipController from '../baseView/public/tip/tipController'
import NETWORKEVENT from '../event/NETWORKEVENT'
import webSocketJson from '../../net/webSocketJson'
import httpJson from '../../net/httpJson'
export default class factoryInfo extends baseTips {

  private _factoryInfo: Laya.Sprite;//顶层对象
  private _id: string;//当前工厂ID
  private thisProduction: any;//生产槽的数组对象
  // private _close:Laya.GLoader;//关闭按钮
  private _top_div: Laya.List;//上框
  private _center_div: Laya.List;//中框
  private _bottom_div: Laya.List;//下框
  private _pro_tool: Laya.List;//生产工具

  private _waitingList: Laya.List; //等待生产列表
  private _successList: Laya.List; //生产成功列表
  private _productList: Laya.List; //生产物种列表
  private _moveX: Number;
  private _moveY: Number;

  constructor() {
    super();
    this.thisProduction = {};

  }
  /**显示工厂加工页面 */
  public onShowFactoryInfo(id: string) {
    factoryController.getInstance().model._mf_id = id;
    this._factoryInfo = new ui.factory.baseFactoryUI;
    this._factoryInfo.name = 'factoryInfo';
    this._factoryInfo.pivot(this._factoryInfo.width / 2, this._factoryInfo.height / 2);//设置轴心

    // this.setScale(this._factoryInfo);
    this.addChild(this._factoryInfo);
    this.showLayer();
    //初始化这间工厂信息
    this.initFactoryInfo(id);
    // Laya.stage.event(GAMEEVENT.HIDEINFODIV);//隐藏最上层的浮框
    this._factoryInfo.scene.close_btn.on(Laya.Event.CLICK, this, this.closeFactoryInfo);
  }

  public closeFactoryInfo() {
    factoryController.getInstance().model._mf_id = '';
    this.hideLayer();
    // Laya.stage.event(GAMEEVENT.SHOWINFODIV);//显示最上层的浮框
  }
  /**
   * //初始化这间工厂页面的所有信息
   * @param id 工厂的ID
   */
  public initFactoryInfo(id: string) {
    this._id = id;
    //设置工厂的基本信息
    this.initSetFactoryInfo(id);
    //生产位处理
    this.initProduction(id);
    //底部商品信息渲染
    this.initProductTypeBtn(id)
    //处理正在生产的物品
    this.initProductionGood(id);
    //成熟商品渲染
    this.initProductSuccess(id);

    // //获取用户的物品信息
    // this.getUserGood(id);
    // //处理升级按钮
    // this.upGradeBtn(id);
  }
  /**
   * 设置工厂的基本信息
   */
  initSetFactoryInfo(id: string) {
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade];
    var factory_name = this._factoryInfo.scene.getChildByName('factory_name');
    var factory_level = this._factoryInfo.scene.getChildByName('factory_level');
    factory_level.text = data.grade + "级";
    factory_name.text = factory_info.name;
    console.log('工厂基本信息', data, factory_info, factory_name, factory_name, factory_level)
  }
  /**
   * 生产位处理 
   * @param id 工厂的ID
   */
  public initProduction(id: string) {
    this._waitingList = this._factoryInfo.scene.waiting_list;
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    var myData = data.queue_goods;//等待生产队列信息
    // for (var y in this.thisProduction) {
    //   this.thisProduction[y].off(Laya.Event.CLICK, this, this.factory_open_seat_num);
    // }
    //先添加等待生产的
    this._waitingList.dataSource = []
    for (var i in myData) {
      var _waitItem = {
        id: i,
        product_icon: {
          skin: "",
          visible: true
        },
        lock_div: {
          visible: false
        }
      }
      if (myData[i].lock == '1') { //已解锁
        console.log('已解锁', i)
        _waitItem.lock_div.visible = false;
        if (myData[i].product) {//有产品
          var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[myData[i].product.id];//配置表物品信息
          let index = good_info.pic.lastIndexOf("/")
          var _skin = good_info.pic.substring(index + 1, good_info.pic.length)
          _waitItem.product_icon.skin = 'factory/' + _skin + '.png'
          _waitItem.product_icon.visible = true;
        }
      } else {//未解锁
        _waitItem.product_icon.visible = false;
        _waitItem.lock_div.visible = true;
      }
      this._waitingList.addItem(_waitItem);
    }
    this._waitingList.renderHandler = new Laya.Handler(this, this.initWaitingListItem, [id])
    console.log(this._waitingList)
  }

  /**
   * 初始化生产列表项
   * @param 
   */
  private initWaitingListItem(factoryId, cell, index) {
    var data = dataGlobal.getInstance().factory[factoryId];//获取用户这间工厂信息
    var itemData = data.queue_goods[cell.dataSource.id];//等待生产队列信息
    if (itemData.lock == '1') { //已解锁
      if (itemData.product) {//有产品
      } else { //未解锁

      }
    } else {//未解锁
      var lock_price = cell.getChildByName('lock_div').getChildByName('price')
      lock_price.text = itemData.price;
      cell.on(Laya.Event.CLICK, this, this.lockSeat, [itemData, cell.getChildByName('bg').skin])
    }
  }

  /**
   * 解锁栏位
   * @param id 
   */
  private lockSeat(data, _skin) {
    tipController.getInstance();
    var _info = {
      "skin": _skin,
      // "num_txt": '1',
      "price": data.price
    }
    var confirm_fun = function () {
      //发送收获动物产物的请求
      // let tmp_http = httpJson.getInstance();
      // let tmp_data = {
      //   'a': "animal_slot_lock",
      //   'm': "animal",
      //   'd': {
      //     'id': data.id
      //   },
      //   'code': 1
      // };
      // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
      this.close()
      // Laya.stage.event(NETWORKEVENT.ANIMALSlOTLOCK);
    }
    Laya.stage.event(GAMEEVENT.BASETIPS, ["开启卡槽", '确认花费' + data.price + '钻石开启队列', _info, confirm_fun]);
  }

  /**
   * 展示生产提示信息
   * @param 
   */
  private productTipsShow(rawMaterialInfo, cell, index) {
    console.log('展示生产时间信息', rawMaterialInfo, cell)
    var source = cell.dataSource;
    if (source.making_tips.visible) {
      return
    }
    var product_name: Laya.Label = cell.getChildByName('making_tips').getChildByName("product_name"); //产品名
    var product_time: Laya.Label = cell.getChildByName('making_tips').getChildByName("product_time"); //产品时间
    var _materialList: Laya.List = cell.getChildByName('making_tips').getChildByName("tips_list"); //原材料列表

    this._initMaterialList(_materialList, rawMaterialInfo)
    product_name.text = rawMaterialInfo.name;
    product_time.text = rawMaterialInfo.t;
    source.making_tips.visible = true;
    this._productList.setItem(index, source);

    this._moveY = cell.y;
    this._moveX = cell.x;
    cell.startDrag(null, false, 100);
  }

  /**
   * 渲染原材料列表
   * @param _materialList
   * @param cell 
   * @param index 
   */
  private _initMaterialList(_materialList, rawMaterialInfo) {
    _materialList.dataSource = [];
    var _goods = rawMaterialInfo.good;
    for (var i in _goods) {
      var _item = {
        icon: {
          skin: ""
        },
        num: {
          text: "",
          color: "#cc8250" //棕色
        }
      }
      if (dataGlobal.getInstance().userGoodInfo[_goods[i].id]) {
        var get_num = dataGlobal.getInstance().userGoodInfo[_goods[i].id].num;
        _item.num.text = get_num + "/" + _goods[i].num
        if (Number(get_num) < Number(_goods[i].num)) {
          _item.num.color = '#d63426' //红色
        } else {
          _item.num.color = '#51af33' //绿色
        }
      } else {
        _item.num.text = "0" + "/" + _goods[i].num
        _item.num.color = '#d63426' //红色
      }
      _materialList.addItem(_item)
    }

  }
  /**
   * 展示生产提示信息
   * @param 
   */
  private productTipsClose(rawMaterialInfo, cell, index) {
    console.log('关闭生产时间信息', rawMaterialInfo)
    var source = cell.dataSource;
    source.making_tips.visible = false;
    this._productList.setItem(index, source)
    var _curX = cell.x + cell.parent.parent.x;
    var _curY = cell.y + cell.parent.parent.y;
    var _waitBoxRightX = this._waitingList.x;
    var _waitBoxLeftX = this._waitingList.x + this._waitingList.width;
    var _waitBoxTopY = this._waitingList.y;
    var _waitBoxBottomY = this._waitingList.y + this._waitingList.height;

    if (_curX < _waitBoxLeftX && _curX > _waitBoxRightX) {
      if (_curY < _waitBoxBottomY && _curY > _waitBoxTopY) { //位于等待生产列表区域
        this.joinProductWaitQueue(rawMaterialInfo, cell)
        return
      }
    }
    var _makingBoxRightX = this._factoryInfo.scene.making.x;
    var _makingBoxLeftX = this._factoryInfo.scene.making.x + this._factoryInfo.scene.making.width;
    var _makingBoxTopY = this._factoryInfo.scene.making.y;
    var _makingBoxBottomY = this._factoryInfo.scene.making.y + this._factoryInfo.scene.making.height;
    if (_curX < _makingBoxLeftX && _curX > _makingBoxRightX) {
      if (_curY < _makingBoxBottomY && _curY > _makingBoxTopY) { //位于等待生产列表区域
        this.joinProductWaitQueue(rawMaterialInfo, cell)
        return
      }
    }

    this.backToBottom(cell)
  }

  /**
   * 成熟列表渲染
   * @param info 
   * @param cell 
   */
  public initProductSuccess(id: string) {
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    var data = data.succ_goods;//获取正在生产的物品
    this._successList = this._factoryInfo.scene.getChildByName('success_list');
    this._successList.dataSource = [];
    for (var i in data) {
      var _item = {
        id: data[i].id,
        icon: {
          skin: ""
        }
      }
      var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];//配置表物品信息

      let index = good_info.pic2.lastIndexOf("/")
      var _skin = good_info.pic2.substring(index + 1, good_info.pic.length)
      _item.icon.skin = 'factory/' + _skin + '.png';
      this._successList.addItem(_item)
    }
    this._successList.renderHandler = new Laya.Handler(this, this.successItemBindEvent);
  }

  /**
   * 成熟物品绑定事件 
   */
  private successItemBindEvent(cell, index) {
    cell.on(Laya.Event.CLICK, this, this.harvestProduct, [cell, index]);
  }

  /**
   * 收获物品
   */
  private harvestProduct(cell, index) {
    var id = cell.dataSource.id;
    // let tmp_websocket = webSocketJson.getInstance();
    // let tmp_data = {
    //   'a': "factory_good_save",
    //   'm': "gzhq_factory",
    //   'd': {
    //     'mf_id': id
    //   },
    //   'code': 1
    // };
    // tmp_websocket.sendMessage(tmp_data);
    Laya.stage.event(NETWORKEVENT.FACTORYGOODSAVEBAK);
  }

  /**
   * 加入生产等待列表
   * @param id
   */
  private joinProductWaitQueue(info, cell) {
    var _goods = info.good;
    var _flag = true;
    for (var i in _goods) {
      if (dataGlobal.getInstance().userGoodInfo[_goods[i].id]) {
        var get_num = dataGlobal.getInstance().userGoodInfo[_goods[i].id].num;
        if (Number(get_num) > Number(_goods[i].num) || Number(get_num) == Number(_goods[i].num)) { //可以生产
          _flag = false;
        }
      } else {
        _flag = true;
      }
    }
    if (!_flag) { //可以加入 
      //查询是否有卡槽位置
      console.log(factoryController.getInstance().model._mf_id, '工厂ID')
      var factoryInfo = dataGlobal.getInstance().factory[factoryController.getInstance().model._mf_id];//获取用户这间工厂信息
      var myData = factoryInfo.queue_goods;//获取队列信息
      for (var i in myData) {
        if (!myData[i].product) { //发送加入队列请求
          // let tmp_http = httpJson.getInstance();
          // let tmp_data = {
          //   'a': "factory_add_waiting",
          //   'm': "init",
          //   'd': {
          //     'factory_id':factoryController.getInstance().model._mf_id,
          //     'good_id': info.id
          //   },
          //   'code': 1
          // };
          // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
          Laya.stage.event(NETWORKEVENT.FACTORYADDWAITING);
          this.backToBottom(cell);
          console.log('有空位', info.id)
          return
        }
      }
    } else { //不可以
      console.log("不可以")
    }
  }
  /**
   * 回到原位
   * @param id cell
   */
  private backToBottom(cell) {
    cell.x = this._moveX;
    cell.y = this._moveY;
  }

  /**
   * 初始化正在生产的物品
   */
  private initProductionGood(id: string) {
    var data = dataGlobal.getInstance().factory[id];//获取用户这间工厂信息
    var myData = data.being_goods;//获取正在生产的物品
    var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade];//获取工厂生产物品的信息

    var pro_tool = this._factoryInfo.scene.making;

    var good_icon = pro_tool.getChildByName('making_icon');//物品的图标
    var time_pro = pro_tool.getChildByName('making_time');//时间倒计时进度条
    var _speedUpMaking = this._factoryInfo.scene.get_btn; //立即生产成功按钮
    _speedUpMaking.visible = false;
    if (myData && myData.id) {//有物品在生产
      var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[myData.id];//配置表物品信息
      var factory_good_info = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id][myData.id];//获取工厂生产物品的信息

      let index = good_info.pic2.lastIndexOf("/")
      var _skin = good_info.pic2.substring(index + 1, good_info.pic.length)
      good_icon.skin = 'factory/' + _skin + '.png';
      good_icon.visible = true;
      _speedUpMaking.visible = true;
      _speedUpMaking.getChildByName("btn_name").text = good_info.num2
      _speedUpMaking.on(Laya.Event.CLICK, this, this.speedUpMaking, [good_info.id]);
      console.log(factory_good_info)
      console.log(good_info)
      //动起来
      var ani_size = new Laya.TimeLine()
      ani_size.addLabel("turnUp", 0).to(good_icon, { scaleX: 1.1, scaleY: 1.1 }, 1000, null, 0)
        .addLabel("turnDown", 0).to(good_icon, { scaleX: 0.9, scaleY: 0.9 }, 1000, null, 0)
        .addLabel("turnDown", 0).to(good_icon, { scaleX: 1.1, scaleY: 1.1 }, 1000, null, 0)
        .addLabel("turnDown", 0).to(good_icon, { scaleX: 1, scaleY: 1 }, 1000, null, 0)
      ani_size.play(0, true)
      var gear_top = this._factoryInfo.scene.gear_top;//齿轮
      var gear_bottom = this._factoryInfo.scene.gear_bottom;//齿轮
      var gear_scr = new Laya.TimeLine()
      gear_scr.addLabel("turnUp", 0).to(gear_top, { rotation: -360 }, 20000, null, 0)
      gear_scr.play(0, true)
      var gear_scr_bottom = new Laya.TimeLine()
      gear_scr_bottom.addLabel("turnUp", 0).to(gear_bottom, { rotation: 360 }, 10000, null, 0)
      gear_scr_bottom.play(0, true)

      time_pro.value = Math.floor(myData.t) / (Math.floor(factory_good_info.t) / (Math.floor(factory_good_info.speed) + Math.floor(factory_info.speed))) * 100;
    } else {//没有物品
      good_icon.visible = false;
      time_pro.value = 0;
    }
  }

  /**
   * 立即加速生产
   * @param id 
   * @param num 
   */
  private speedUpMaking(id) {
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "factory_product_speedup",
    //   'm': "init",
    //   'd': {
    //     'factory_id':this._id,
    //     'good_id': id
    //   },
    //   'code': 1
    // };
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    Laya.stage.event(NETWORKEVENT.FACTORYPRODUCTSPEEDUP);
  }
  /**
   * 购买生产槽位
   * @param id 工厂ID
   * @param num 生产位ID（1或者2）
   */
  private factory_open_seat_num(id: string, num: number) {
    tipController.getInstance()
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
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "factory_open_seat_num",
      'm': "gzhq_factory",
      'd': {
        'mf_id': id,
        'num': num
      },
      'code': 1
    };
    tmp_websocket.sendMessage(tmp_data);
    // Laya.stage.event(NETWORKEVENT.FACTORYOPENSEATNUMBAK);
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
    let tmp_http = httpJson.getInstance();
    let tmp_data = {
      'a': "send_good",
      'm': "init",
      'd': {
        'good_id': good_arr
      },
      'code': 1
    };
    tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    // Laya.stage.event(NETWORKEVENT.SENDGOODBAK);
  }
  /**
   * 添加工厂可生产物品信息
   */
  public initProductionGoodList() {
    return
    var science_list = this._factoryInfo.scene.bottom_div.getChildByName('science_list');
    science_list.dataSource = [];
    var id = this._id;
    var data = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id];//获取配置表工厂的物品信息
    var level = dataGlobal.getInstance().userInfo.grade;//玩家等级
    var user_good_info = dataGlobal.getInstance().userGoodInfo;//用户的物品信息
    var _index = -1;
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
      science_list.visible = true;
      science_list.hScrollBarSkin = ""

      if (Math.floor(level) >= Math.floor(data[i].grade2)) {//够等级，只需要判断是否够材料
        factoryGoodsItem.good_info.visible = true;
        factoryGoodsItem.good_lock_div.visible = false;
        var goods_list = data[i].good;
        var goods_num = 1;
        var isMake = true;
        for (var q in goods_list) {
          //查询材料物品信息
          var material_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[goods_list[q].id];//物品的信息
          if (science_list.getItem(_index)) {
            if (science_list.getItem(_index).name == factoryGoodsItem.name) {
              var factoryGoodsCell = science_list.getCell(_index);
              var material_num = factoryGoodsCell.getChildByName('good_info').getChildByName('good' + goods_num + '_num');
              var material_icon = factoryGoodsCell.getChildByName('good_info').getChildByName('good' + goods_num + '_icon');
              let index = material_info.pic.lastIndexOf("/")
              var _skin = material_info.pic.substring(index + 1, material_info.pic.length)
              material_icon.skin = 'main/' + _skin + '.png';
              material_icon.visible = true;
              var user_num = user_good_info[goods_list[q].id].num;
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
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "factory_act",
      'm': "gzhq_factory",
      'd': {
        'mf_id': this._id,
        'id': id
      },
      'code': 1
    };
    tmp_websocket.sendMessage(tmp_data);
    // Laya.stage.event(NETWORKEVENT.FACTORYACTBAK);
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
      // var time_txt = this._factoryInfo.scene.center_div.getChildByName('pro_tool').getChildByName("time_txt");//时间倒计时文字
      // time_txt.text = globalFun.getInstance().formatSeconds(data.being_goods.t);
      var time_pro = this._factoryInfo.scene.making.getChildByName('making_time');//时间倒计时进度条
      // time_pro.value = Math.floor(data.being_goods.t)/(Math.floor(flower.t)/(Math.floor(flower.speed)+Math.floor(factory_seed)))*100;
      time_pro.value = Math.floor(data.being_goods.t) / (Math.floor(flower.t));
      // time_txt.visible = true;
    }
  }

  /**
   * 底部点击的按钮
   */
  public initProductTypeBtn(id: string) {
    this._productList = this._factoryInfo.scene.getChildByName('making_list');
    //获取工厂信息
    var data = dataGlobal.getInstance().factory[id];
    var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade];//获取工厂信息
    var production_goods = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id]; //可以生产的物品信息
    this._productList.dataSource = [];

    for (var i in production_goods) {
      var _goodItem = {
        id: i,
        making_tips: {
          visible: false
        },
        icon: {
          skin: "",
          gray: false
        }
      }
      var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[production_goods[i].id];//配置表物品信息
      let index = good_info.pic.lastIndexOf("/")
      var _skin = good_info.pic.substring(index + 1, good_info.pic.length)
      _goodItem.icon.skin = 'factory/' + _skin + '.png'
      console.log(factory_info.grade)
      if (factory_info.grade < production_goods[i].grade2) { //等级不够 无法生产
        _goodItem.icon.gray = true
      }
      this._productList.addItem(_goodItem)
    }

    this._productList.renderHandler = new Laya.Handler(this, this.initProductList, [production_goods, id])
  }

  /**
   * 底部列表绑定事件
   */
  private initProductList(productionInfo, factoryId, cell, index) {
    var _id = cell.dataSource.id;
    var production_goods = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[factoryId][_id]; //可以生产的物品信息
    var rawMaterialInfo = production_goods;
    var factoryGrade = dataGlobal.getInstance().factory[factoryId].grade;

    if (factoryGrade < production_goods.grade2) {
      return
    }
    cell.on(Laya.Event.MOUSE_DOWN, this, this.productTipsShow, [rawMaterialInfo, cell, index])
    cell.on(Laya.Event.MOUSE_UP, this, this.productTipsClose, [rawMaterialInfo, cell, index])
  }
}
