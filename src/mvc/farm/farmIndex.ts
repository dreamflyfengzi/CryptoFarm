/**
* name 
*/
import { ui } from '../../ui/layaMaxUI'
import { baseScene } from '../baseView/component/baseScene'
import NETWORKEVENT from '../event/NETWORKEVENT'
import GAMECONFIG from '../../const/GAMECONFIG'
import farmLand from './farmLand'
import farmController from './farmController'
import farmSeedList from './farmSeedList'
import warehouseController from '../warehouse/warehouseController'
import orderController from '../order/orderController'
import exchangeController from '../exchange/exchangeController'
import CONST from '../../const/CONST'
import rankController from '../rank/rankController'
import emailController from '../email/emailController'
import webSocketJson from '../../net/webSocketJson'
import animalIndex from './animalIndex'
import dataGlobal from '../resconfig/dataGlobal'
import httpJson from '../../net/httpJson'
import dataJson from '../resconfig/dataJson'
import materialController from '../materialOrder/materialController'

import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Event = Laya.Event;
import Browser = Laya.Browser;
import WebGL = Laya.WebGL;
import materialView from '../materialOrder/materialView'
export default class farmIndex extends baseScene {
  private _farmIndex: Laya.Sprite;
  private _materialbox: Laya.Box;//气球订单
  private _material_1: Laya.Sprite;//气球1
  private _material_2: Laya.Sprite;//气球2
  private _material_3: Laya.Sprite;//气球3
  private land_div: Laya.Sprite;//花田的层
  private muneClickStr: string;//当前所在的菜单操作
  private landArr: any;//花田的数组
  private _seedListClass: farmSeedList;
  private _seedList: Laya.Sprite;//种子列表
  private _animalIndex: animalIndex;


  //上次记录的两个触模点之间距离
  private lastDistance: number = 0;

  constructor() {
    super();
  }
  /** */
  public onShow(type) {
    if (this._farmIndex == null) {
      this._farmIndex = new ui.farm.farmIndexsceneUI();
      this._animalIndex = new animalIndex;
      this.width = this._farmIndex.width;
      this.height = this._farmIndex.height;

      this._farmIndex.name = 'farmIndex';

      this.setScale(this._farmIndex);

      this.loadSeedList();
      //初始化页面的参数
      this.showInit();

      //先添加一下农田的层
      this.land_div = new Laya.Sprite;
      this.land_div.name = 'land_div';
      this.land_div.x = 12;
      this.land_div.y = 1079;
      this._farmIndex.addChild(this.land_div);
      //获取所有农田的状态
      this.getFarmLand();
      //获取农田的种子信息
      this.getFarmSeed();
    }
    if (type == 2) {
      this.tweenAlphaAdd(this._farmIndex, 'farmIndex', type);
    } else {
      this.tweenTranAdd(this._farmIndex, 'farmIndex', type, 'right');
    }

    // Laya.stage.scaleX = 1;
    // Laya.stage.scaleY = 1;
    // Laya.stage.on(Event.MOUSE_OUT, this, this.onMouseUp);
  }

  /**
   * 初始化页面的参数
   */
  private showInit() {
    this.landArr = {};

    //监听点击
    this._farmIndex.scene.bg_kuan.on(Laya.Event.CLICK, this, this.cleanAllStatu);
    this._farmIndex.scene.building.on(Laya.Event.CLICK, this, this.onMenuClick, ['building']); //右上角红色建筑
    this._farmIndex.scene.order.on(Laya.Event.CLICK, this, this.onMenuClick, ['order']);//订单
    this._farmIndex.scene.email.on(Laya.Event.CLICK, this, this.onMenuClick, ['email']);//邮件
    this._farmIndex.scene.upgrade.on(Laya.Event.CLICK, this, this.onMenuClick, ['upgrade']);//邮件
    this._farmIndex.scene.exchange.on(Laya.Event.CLICK, this, this.onMenuClick, ['exchange']);//交易
    this._farmIndex.scene.rank.on(Laya.Event.CLICK, this, this.onMenuClick, ['rank']);//排行榜
    this._farmIndex.scene.material_box.on(Laya.Event.CLICK, this, this.onMenuClick, ['material_order']);//材料订单
  
    this._materialbox = this._farmIndex.scene.material_box;
    this._material_1 = this._farmIndex.scene.material_1;
    this._material_2 = this._farmIndex.scene.material_2;
    this._material_3 = this._farmIndex.scene.material_3;
    this.cleanAllStatu();//重置所有的按钮状态
    this.initMaterial()

    this.initAnimal()
  }
  /**
   * 获取订单数量
   */
  private initMaterial() {
    var material_info = dataJson.getInstance().GET_SYS_MATERIAL_INFO();
    console.log('farm-index', 'material_info-------------------------', material_info)
    for (var i in material_info) {
      if (material_info[i].is_lock == 1) {
        if (i == 'MATERIAL301' && material_info[i].t == 0) {
          this._material_1.visible = true;
          this.setBalloonAni(this._material_1,'onbase')
        }
        if (i == 'MATERIAL302' && material_info[i].t == 0) {
          this._material_2.visible = true;
          this.setBalloonAni(this._material_2,'onbase')
        }
        if (i == 'MATERIAL303' && material_info[i].t == 0) {
          this._material_3.visible = true;
          this.setBalloonAni(this._material_3,'onbase')
        }
      }
    }
  }
  /**
   * 设置气球的动画
   */
  public setBalloonAni(_sprite,type) {
    if (type == 'onbase') {
      //播放在位置上的动画
    }
    if (type == 'flyout') {
      //飞出去
    }
    if (type == 'flyin') {
      //飞回来
    }
  }

  /**
   * 初始化动物所有的
   */
  public initAnimal() {
    var ani: Laya.Animation = new Laya.Animation();
    ani.loadAtlas("animal/NI_02_tex.json"); // 加载图集动画
    // ani.interval = 30; // 设置播放间隔（单位：毫秒）
    // ani.index = 1; // 当前播放索引
    ani.play(); // 播放图集动画

    // // 获取动画的边界信息
  
    ani.pivot(100, 100);

    // ani.pos(Laya.stage.width / 2, Laya.stage.height / 2);

    Laya.stage.addChild(ani);

    
  }
  /**
   * 设置动物定时器
   * @param type setAnimalTimer
   */
  private setAnimalTimer(type) {
    var data = dataGlobal.getInstance().animalInfo[type];
    var _animalBox = this._farmIndex.scene.getChildByName(type + '_box')
    //设置定时器
    if (data.feed_time > 0 || data.product.grow_time_tol > 0) {
      //先清除定时器
      if (_animalBox._timer) {
        _animalBox._timer.clear(this, this.timerFun);
      }
      //设置定时器
      _animalBox._timer = new Laya.Timer();
      _animalBox._timer.loop(1000, this, this.timerFun, [type]);
    }
  }
  /**
   * 定时器处理的内容
   */
  private timerFun(type) {
    var data = dataGlobal.getInstance().animalInfo[type];
    var _animalBox = this._farmIndex.scene.getChildByName(type + '_box')
    var _surplus_grow_time = data.product.grow_time_tol - data.product.mature_time;
    if (data.feed_time == 0 && _surplus_grow_time == 0) {
      _animalBox._timer.clear(this, this.timerFun);
    }
    if (_surplus_grow_time > 0) {
      data.product.mature_time++
      // console.log(_surplus_grow_time)
    }
    if (data.product.grow_time_tol < data.product.mature_time || data.product.grow_time_tol == data.product.mature_time) {
      if (_animalBox.static != "harvest") {
        _animalBox.static = "harvest"
        //改变状态 发请求
        Laya.stage.event(NETWORKEVENT.ANIMALPRODUCTMATURE, _animalBox.type);
      }
    }
  }
  /**
   * 动物状态
   */
  private initAnimalStatic(type) {
    var data = dataGlobal.getInstance().animalInfo[type]
    var _animalBox = this._farmIndex.scene.getChildByName(type + '_box')
    _animalBox.type = type;
    //先全部隐藏
    _animalBox.getChildByName('bgkuang').visible = false;
    _animalBox.getChildByName('crop').visible = false;
    _animalBox.getChildByName('feed').visible = false;
    //移除事件
    _animalBox.off(Laya.Event.CLICK, this, this.onClickAnimal)
    if (!data.is_lock) {
      //未解锁不进行展示 未进行购买的展示购买相关
      _animalBox.static = 'unlock'
      _animalBox.visible = false
    } else {//已经购买的展示动物
      // 判断动物的状态
      if (data.feed_time <= 0) { //饥饿状态 需要进行喂养 展示喂养框
        _animalBox.static = 'feed'
        _animalBox.getChildByName('feed').visible = true;
        _animalBox.getChildByName('bgkuang').visible = true;
        // 绑定喂养事件
      } else { //饱腹状态 
        //判断是否有产物 有产物展示产物 没有产物隐藏喂养框
        if (data.product.grow_time_tol == data.product.mature_time) { //有产物 状态收获
          _animalBox.static = 'harvest'
          _animalBox.getChildByName('crop').visible = true;
          _animalBox.getChildByName('bgkuang').visible = true;
        } else {
          _animalBox.static = 'producing' //生产中
        }
      }
    }
    _animalBox.on(Laya.Event.CLICK, this, this.onClickAnimal, [_animalBox]);
  }

  /**
   * 点击动物
   * onClickAnimal
   */
  private onClickAnimal(animalBox) {
    console.log(animalBox.static)
    if (animalBox.static == 'harvest') { //收获产物
      this.onHarvest(animalBox);
    }
    if (animalBox.static == 'feed') { //喂饲料
      this.onFeed(animalBox);
    }
    if (animalBox.static == 'producing') { //正在生产中
      // 飘字提醒

    }
  }

  /**
   * 收获
   */
  private onHarvest(animalBox) {
    //发送收获请求
    console.log('发送收获请求')
  }

  /**
   * 喂饲料
   */
  private onFeed(animalBox) {
    //发送喂饲料请求
    console.log('发送喂饲料请求')
  }

  /**
   * 加载种子列表
   */
  private loadSeedList() {
    this._seedListClass = new farmSeedList();
    this._seedList = this._seedListClass.init();
    this._seedList.x = 30;
    this._seedList.y = 2200;
    this._seedList.zOrder = 2;
    this._farmIndex.addChild(this._seedList);
  }
  /**
   * 获取农田种子信息
   */
  private getFarmSeed() {
    // 试着进行websocke请求
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "init_seed_list",
      'm': "init",
      'd': {},
      'code': 1
    };
    console.log("发送websocket数据", tmp_data);
    tmp_websocket.sendMessage(tmp_data);
    // Laya.stage.event(NETWORKEVENT.FARMINITSEEDLIST);
  }
  /**
   * 设置种子列表信息
   */
  public onFarmInitSeedList(data) {
    this._seedListClass.addSeedListItem(data);
  }
  /**
   * 展示花种列表
   */
  public showSeepList() {
    //展示虚拟的背景
    this.showBgKuan();
    this._seedListClass.setSeedListItem();
  }
  /**
   * 获取所有农田的状态
   */
  private getFarmLand() {
    //试着进行websocke请求
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "init_field",
      'm': "init",
      'd': {},
      'code': 1
    };
    console.log("发送websocket数据", tmp_data);
    tmp_websocket.sendMessage(tmp_data);
    // Laya.stage.event(NETWORKEVENT.FARMINITFIELD);
  }
  /**
   * 展示农田信息
   */
  public onShowFarmInitField(data) {
    //获取农田
    var land_config = GAMECONFIG.farmLand;
    for (var i in data) {
      var land_data = land_config[data[i].ff_id];
      data[i].zOrder = land_data.zOrder;
      data[i].x = land_data.x;
      data[i].y = land_data.y;
      this.forFarmLand(data[i]);
    }
  }
  /**
   * 
   * @param data ：农田的参数，包括位置，状态等信息
   */
  private forFarmLand(data) {
    var landObj = new farmLand;
    this.landArr[data.ff_id] = landObj;
    this.land_div.addChild(landObj.init(data));
  }
  /**
   * 清除所有状态
   */
  private cleanAllStatu() {
    this._farmIndex.scene.bg_kuan.visible = false;
    //重置一下农田
    farmController.getInstance().model.setLandId('');
    farmController.getInstance().model.setClickLandStatic('');
    this.setLandStatic('');
    this.initLand();
    //种子的框
    this._seedListClass.hide();
    this.recoveryBtn();
  }
  /**
   * 修改单个农田的状态
   */
  public setThisLandStatic(id, str) {
    this.landArr[id].land_static = str;
  }
  /**
   * 设置单个农田的定时器
   * id：农田的ID
   */
  public setThisLandTimer(id) {
    this.landArr[id].setTimer();
  }
  /**
   * 自动选择下一个农田
   */
  public setPlantFramLand() {
    //获取当前农田
    var landId = farmController.getInstance().model.landId;
    var arr = this.landArr;
    for (var i in arr) {
      if (arr[i].land_static == 'plant') {
        arr[i].onClickLand();
        return;
      }
    }
    this.cleanAllStatu();//没有农田可以种植就直接关闭操作
  }
  /**
   * 重置农田
   */
  public initLand() {
    for (var i in this.landArr) {
      this.landArr[i].initLand();
    }
  }
  /**
   * 显示虚拟背景
   */
  private showBgKuan() {
    //显示模糊背景
    this._farmIndex.scene.bg_kuan.visible = true;
  }
  /**
   * 建筑物点击:type:点击的按钮
   */
  private onMenuClick(type) {
    //判断一下当前是否在这个菜单里面了
    // if (this.muneClickStr == type) {
    //   return;
    // }
    //恢复所有的按钮状态
    this.recoveryBtn(type);
    switch (type) {
      case 'building':
        this._farmIndex.scene.building.skin = 'main/warehouse.png.png';
        this.onClickBuilding();
        break;
      case 'upgrade':
        this.onClickUpgrade();
        break;
      case 'email':
        this._farmIndex.scene.email.skin = 'main/btn_youxiang2.png';
        this.onClickEmail();
        break;
      case 'order':
        this.onClickOrder();
        this._farmIndex.scene.order.skin = 'main/btn_dingdan2.png';
        break;
      case 'exchange':
        this.onClickExchange();
        this._farmIndex.scene.exchange.skin = 'farm/pic_factory3a.png';
        break;
      case 'rank':
        this.onClickRank();
        // this._farmIndex.scene.exchange.skin = 'farm/pic_factory3a.png';
        break;
      case "material_order":
        this.onClickMaterialOrder();
        break;
    }

  }
  /**
   * 恢复所点击按钮的状态
   * type:类型
   */
  private recoveryBtn(type?: string) {
    this.muneClickStr = type;
    this._farmIndex.scene.building.skin = 'main/warehouse.png';
    this._farmIndex.scene.upgrade.skin = 'main/btn_shengji1.png';
    this._farmIndex.scene.email.skin = 'main/btn_youxiang1.png';
    this._farmIndex.scene.order.skin = 'main/btn_dingdan1.png';

  }
  /**
   * 点击升级按钮
   */
  private onClickUpgrade() {
    this._farmIndex.scene.upgrade.skin = "main/btn_shengji2.png";
    this.showBgKuan();
    farmController.getInstance().model.setClickLandStatic('upgrade');
    this.setLandStatic('upgrade');//设置花田状态为升级
    this.initLand();//重置下花田
  }
  /**
   * 设置所有花田的状态
   */
  private setLandStatic(str: string) {
    var data = this.landArr;
    for (var i in data) {
      data[i].land_static = str;
    }
  }
  /**
   * 点击建筑按钮
   */
  private onClickBuilding() {
    warehouseController.getInstance().onShowWarehouse();
  }
  /**
   * 点击订单
   */
  private onClickOrder() {
    orderController.getInstance().onShowOrder();
  }
  /**
   * 点击市场
   */
  private onClickExchange() {
    exchangeController.getInstance().onShowExchange();
  }
  /**
  * 点击排行榜
  */
  private onClickRank() {
    rankController.getInstance().onShowRank();
  }

  /**
   * 点击邮箱
   */
  private onClickEmail() {
    emailController.getInstance().onShowEmail();
  }

  /**
   * 点击材料订单
   * @param e 
   */
  private onClickMaterialOrder() {
    materialController.getInstance().onShow()
  }
  /**
   * 设置缩放
   */
  private onMouseDown(e: Event): void {
    var touches: Array<any> = e.touches;

    if (touches && touches.length == 2) {
      this.lastDistance = this.getDistance(touches);
      console.log('双指缩放', this.lastDistance)
      Laya.stage.on(Event.MOUSE_MOVE, this, this.onMouseMove);
    }
  }

  private onMouseMove(e: Event): void {
    var distance: number = this.getDistance(e.touches);
    console.log('判断当前距离与上次距离变化，确定是放大还是缩小')
    console.log(distance)
    const factor: number = 0.01;
    // var _scale = Laya.stage.scaleX;
    //  _scale += (distance - this.lastDistance) * factor;
    // console.log(_scale,'---------_scale')
    //判断当前距离与上次距离变化，确定是放大还是缩小

    // console.log('-------------', Laya.stage.scaleY, Laya.stage.scaleX)
    this.lastDistance = distance;
  }

  private onMouseUp(e: Event): void {
    Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouseMove);
  }

  /**计算两个触摸点之间的距离*/
  private getDistance(points: Array<any>): number {
    var distance: number = 0;
    if (points && points.length == 2) {
      var dx: number = points[0].stageX - points[1].stageX;
      var dy: number = points[0].stageY - points[1].stageY;

      distance = Math.sqrt(dx * dx + dy * dy);
    }
    return distance;
  }
}
