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
import emailController from '../setting/settingController'
import webSocketJson from '../../net/webSocketJson'
import animalIndex from './animalIndex'
import dataGlobal from '../resconfig/dataGlobal'
import httpJson from '../../net/httpJson'
import dataJson from '../resconfig/dataJson'
import materialController from '../materialOrder/materialController'
import tipController from '../baseView/public/tip/tipController'
import GAMEEVENT from '../event/GAMEEVENT'
import animalController from '../animal/animalController'

import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Event = Laya.Event;
import Browser = Laya.Browser;
import WebGL = Laya.WebGL;
import Skeleton = Laya.Skeleton;
import Templet = Laya.Templet;
import Stat = Laya.Stat;
import materialView from '../materialOrder/materialView'
import factoryController from '../factory/factoryController'
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

  private mAniPath: string;
  private mStartX: number = 400;
  private mStartY: number = 500;
  private mFactory: Templet;
  private mActionIndex: number = 0;
  private mCurrIndex: number = 0;
  private mArmature: Skeleton;
  private mCurrSkinIndex: number = 0;


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
    this._farmIndex.scene.factory_btn.on(Laya.Event.CLICK, this, this.onMenuClick, ['factory']);//工厂

    this._materialbox = this._farmIndex.scene.material_box;
    this._material_1 = this._farmIndex.scene.material_1;
    this._material_2 = this._farmIndex.scene.material_2;
    this._material_3 = this._farmIndex.scene.material_3;
    this.cleanAllStatu();//重置所有的按钮状态
    this.initMaterial()

    this.getAnimalInfo()
  }
  /**
   * 获取订单数量
   */
  private initMaterial() {
    var material_info = dataJson.getInstance().GET_SYS_MATERIAL_INFO();
    for (var i in material_info) {
      if (material_info[i].is_lock == 1) {
        if (i == 'MATERIAL301' && material_info[i].t == 0) {
          this._material_1.visible = true;
          this.setBalloonAni(this._material_1, 'onbase')
        }
        if (i == 'MATERIAL302' && material_info[i].t == 0) {
          this._material_2.visible = true;
          this.setBalloonAni(this._material_2, 'onbase')
        }
        if (i == 'MATERIAL303' && material_info[i].t == 0) {
          this._material_3.visible = true;
          this.setBalloonAni(this._material_3, 'onbase')
        }
      }
    }
  }
  /**
   * 设置气球的动画
   */
  public setBalloonAni(_sprite, type) {
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
   * 获取动物信息
   */
  public getAnimalInfo() {
    var data = dataGlobal.getInstance().animalInfo;
    for (var i in data) {
      if (data[i].is_lock) { //已解锁 显示动画
        this.renderAnimalBones(data[i])
      } else {//未解锁 虚化
        this.renderAnimalStatic(data[i])
      }
    }
  }

  /**
   * 渲染动物动画
   */
  private renderAnimalBones(data) {
   
    var _x = 0;
    var _y = 0;
    var _path = "";
    var _scale = 0.3;
    if (data.id == "chicken") {
      _x = 0
      _y = 80
      _path = "res/animalBones/niu.sk";
    }
    if (data.id == "cow") {
      _x = 150
      _y = 0;
      _path = "res/animalBones/niu.sk";
    }
    if (data.id == "sheep") {
      _x = 300
      _y = -80;
      _path = "res/animalBones/yang.sk";
      _scale = 0.5;
    }
    if (data.id == "pig") {
      _y = -160;
      _x = 450
      _path = "res/animalBones/niu.sk";
    }
    let templetStone: Laya.Templet = new Laya.Templet();

    templetStone.on(Laya.Event.COMPLETE, this, () => {
      //创建第一个动画
      var skeleton: Laya.Skeleton;
      //从动画模板创建动画播放对象
      skeleton = templetStone.buildArmature(1);
      skeleton.scaleX = _scale;
      skeleton.scaleY = _scale;
      //切换动画皮肤 使用标号为0的皮肤
      skeleton.showSkinByIndex(0);
      // skeleton.mouseEnabled = true;
      //播放
      skeleton.play('full', true);
      this._farmIndex.scene.animalsContainer.addChild(skeleton);
      let bound: Laya.Rectangle = skeleton.getBounds();
      // var W = bound.width, H = bound.height;
      skeleton.autoSize = true;
      // skeleton.width = W;
      // skeleton.height = H;
      console.log(skeleton)
      skeleton.pos(_x, _y);
      // var rect: Laya.Rectangle = new Laya.Rectangle(_x + W, H, skeleton.displayWidth, skeleton.displayHeight);
      // skeleton.hitArea = rect;
      // proxy.height = H;
      // proxy.width = W;
      // proxy.graphics.drawRect(_x + W / 2, 0, proxy.width, proxy.height, "#fff");
      // this._farmIndex.scene.animalsContainer.addChild(proxy);
      // console.log(proxy)
      // proxy.on(Laya.Event.MOUSE_DOWN, this, function() {
      //     console.log("MouseDown Event",data.id);
      // });
      // skeleton.pos(_x, 0);
      // skeleton.width = bound.width; 
      // skeleton.height = bound.height; 
      // skeleton.x = bound.x + bound.width*1.5; 
      // skeleton.y = -bound.y; 
      // var rectBox: Laya.Sprite = new Laya.Sprite();
      // rectBox.graphics.drawRect(_x + W, H, skeleton.displayWidth, skeleton.displayHeight, "#ffff00");
      // this._farmIndex.scene.animalsContainer.addChild(rectBox);
      // rect.intersects
      // this._farmIndex.scene.animalsContainer.addChild(rect);
      // skeleton.hitArea= rect;
      // mArmature.on(Event.CLICK,this,onClick);
      skeleton.on(Laya.Event.CLICK, this, this.enterAnimalScene, [data.id]) //todo
      // console.log(bound)
      // this.bindClick(skeleton,templetStone, data)
    });
    templetStone.loadAni(_path);
  }

  /**
   * @param data 绑定点击事件
   */
  private bindClick(skeleton, templetStone, data) {
    skeleton.on(Laya.Event.CLICK, this, this.enterAnimalScene, [data.id]) //todo
    templetStone.on(Laya.Event.CLICK, this, this.enterAnimalScene, [data.id]) //todo
  }
  /**
   * 渲染动物静态
   */
  private renderAnimalStatic(data) {
   
    var _x = 0;
    var _y = 0;
    var _path = "";
    if (data.id == "chicken") {
      _x = 0
      _y = 80
      _path = "base/2_Hide.png";
    }
    if (data.id == "cow") {
      _x = 150
      _y = 0;
      _path = "base/1_Hide.png";
    }
    if (data.id == "sheep") {
      _x = 300
      _y = -80;
      _path = "base/3_Hide.png";
    }
    if (data.id == "pig") {
       _y = -160;
      _x = 450
      _path = "base/3_Hide.png";
    }
    let StaticSprite: Laya.Image = new Laya.Image();
    this._farmIndex.scene.animalsContainer.addChild(StaticSprite)
    StaticSprite.skin = _path;
    StaticSprite.pos(_x - StaticSprite.width / 2, _y -  StaticSprite.height )
    // StaticSprite.pivotX = StaticSprite.width
    // StaticSprite.pivotY = StaticSprite.height
    StaticSprite.on(Laya.Event.CLICK, this, this.unlockAnimal, [data]);
  }

  /**
   * 解锁动物
   */
  private unlockAnimal(data) {
    //进入动物界面
    animalController.getInstance().onShowAnimal(data.id)
    return
    console.log('解锁动物', data.id, data)
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;//用户金币
    var grade = dataGlobal.getInstance().userInfo.grade;//用户等级
    tipController.getInstance();
    //判断当前是否可以解锁
    if (grade < data.locklevel) {//升级才可以解锁
      var _str = "升级至" + data.locklevel + "级才可解锁";
      Laya.stage.event(GAMEEVENT.TIPSKUAN, [_str, '确认', "取消", function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
    } else { //金币解锁
      var _str = '确认花费' + data.unlocknum + '金币解锁动物'
      var _skin = ''
      if (data.id == "chicken") {
        _skin = "base/2_Hide.png";
      }
      if (data.id == "cow") {
        _skin = "base/1_Hide.png";
      }
      if (data.id == "sheep") {
        _skin = "base/3_Hide.png";
      }
      if (data.id == "pig") {
        _skin = "base/3_Hide.png";
      }
      var _info = {
        skin: _skin,
        price: data.unlocknum,
        type: 'coin'
      }
      var confirm_fun = function () {
        console.log('进行解锁，发送请求')
      }
      Laya.stage.event(GAMEEVENT.BASETIPS, ['解锁', _str, _info, confirm_fun]);
    }
  }

  /**
   * 进入动物生产
  */
  public enterAnimalScene(id) {
    console.log("成功", id)
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
      case "factory":
        this.onClickFactory();
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
   * 点击工厂跳转按钮
   */
  private onClickFactory(){
    factoryController.getInstance().onShow()
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
