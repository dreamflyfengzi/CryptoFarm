import IBaseView from './IBaseView'
import gameLayer from "../../gameLayer";
import CONST from '../../../const/CONST'
export default class BaseView extends Laya.View implements IBaseView {

  public callback: Function;
  public isRemoveBanner: boolean = true;

  private _myParent: any;
  private _isInit: boolean;
  private _resources: string[] = null;
  private _ui: any;
  private _isShowMask: boolean;
  private _datas: any[];

  /** 构造函数 */
  public constructor($class: any, isShowMask: boolean = true) {
    super();
    // this._myParent = $layer;
    this._isInit = false;
    this._isShowMask = isShowMask;
    this._ui = $class;
    this.initUIView();
  }

  /** 获取我的父级 */
  public get myParent(): any {
    return this._myParent;
  }

  /* 切换场景(obj:场景对象，name:名字，type=1.隐藏2.移除) */
  // 第三个参数 1 2 3 4 层
  public tweenAlphaAdd(name: string, type: number, index: number) {
    var obj = this
    //查找是否有该对象
    var node: any = gameLayer.bglayer.getChildByName(name);
    if (node) {//有该对象的话就显示就行了
      obj = node;
      obj.visible = true;
      obj.zOrder = 0;
    } else {//没有改对象的话就添加
      obj.zOrder = 0;
      gameLayer.bglayer.addChild(obj);
      
    }
    if (index == 1) {
      var _index = gameLayer.bglayer;
    } else if (index == 3) {
      var _index = gameLayer.windowlayer;
    }
    Laya.Tween.to(_index, { alpha: 0.1 }, 300, Laya.Ease.elasticIn, Laya.Handler.create(this, function () {
      this.clearChild(type);
      obj.zOrder = 1;
      this.tweenAlphaAllShow(obj);
    }.bind(this)))
    
  }
  /**添加对象，并且渐显显示 */
  public tweenAlphaAllShow(obj: any) {
    // gameLayer.bglayer.addChild(obj);
    Laya.Tween.to(gameLayer.bglayer, { alpha: 1 }, 300, Laya.Ease.elasticOut);
  }
  /* 清除在上层的子节点 */
  public clearChild(type) {
    var obj: any = gameLayer.bglayer.getChildAt(1);
    if (type == 1) {
      obj.visible = false;
    } else if (type == 2) {
      gameLayer.bglayer.removeChildAt(1);
    }
  }

  /** 添加到父级 */
  public addToParent(): void {
    // AlignUtils.setToScreenGoldenPos(this); 位置调整
    // todo
    if (this._isShowMask) {
      this._myParent.addChildWithMaskCall(this, () => {
        this.removeFromParent();
        this.close();
      });
    } else {
      this._myParent.addChild(this);
    }
  }

  /** 初始化UI界面 */
  public initUIView(): void {
    try {
      this._ui = new this._ui();
    } catch (error) {

    } finally {
      this.addChild(this._ui);
    }
  }

  /** 从父级移除 */
  public removeFromParent(): void {
    this.removeSelf();
  }

  /** 对面板进行显示初始化，用于子类继承 */
  public initUI(): void {
    this._isInit = true;
  }

  /** 对面板数据的初始化，用于子类继承 */
  public initData(): void {
    this._isInit = true;
  }

  /** 添加监听事件 */
  public addEvents(): void { }

  /** 移除监听事件 */
  public removeEvents(): void { }

  /** 是否已经初始化 */
  public isInit(): boolean {
    return this._isInit;
  }

  /** 面板是否显示 */
  public isShow(): boolean {
    return this.stage != null && this.visible && this._myParent.contains(this);
  }

  /** 面板开启执行函数，用于子类继承 */
  public open(...param: any[]): void {
    this._datas = param;
  }

  /** 设置是否隐藏 */
  public setVisible(value: boolean): void {
    this.visible = value;
  }

  /** 设置初始加载资源 */
  public setResources(resources: string[]): void {
    this._resources = resources;
  }

  /** 加载面板所需资源 */
  public loadResource(loadComplete: Function, initComplete: Function): void {
    if (this._resources && this._resources.length > 0) {
      // ResUtils.loadGroup(this._resources, () => {
      //     loadComplete && loadComplete();
      //     initComplete && initComplete();
      // }, this);
    } else {
      loadComplete && loadComplete();
      initComplete && initComplete();
    }
  }

  /** 面板关闭执行函数，用于子类继承 */
  public close(...param: any[]): void {
    this.removeEvents();
    if (this.isRemoveBanner) {
      // SDKManager.Instance.closeBannerAd();
    }
  }

  /** 销毁 */
  public destroy(): void {
    this.removeEvents();
    this._myParent = null;
    this._ui.removeSelf();
    this._ui = null;
    // SDKManager.Instance.closeBannerAd();
  }

  // 窗口
  /** */
  public tweenHide() {     
    this.off(Laya.Event.CLICK, this, this.onClick);
    Laya.Tween.to(this, { scaleX: 0, scaleY: 0 }, 100, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onComplete));
    Laya.Tween.to(this, { alpha: 0 }, 100, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onAlphaComplete));
  }
  /** */
  public onClick() {
  }
  /** */
  private onComplete() {
    gameLayer.windowlayer.removeChild(this);
    this.scale(1, 1);
    this.clearAll();
  }
  /** */
  private onAlphaComplete(){
    gameLayer.windowlayer.removeChild(this);
    this.alpha = 1;
    this.clearAll();
  }
  /** */
  public clearAll() {
    this.graphics.clear();
    this.off(Laya.Event.CLICK, this, this.onClick);
    // this.removeChildren();
    Laya.Tween.clearAll(this);
    this.visible = false;
    this.removeFromParent()
  }
  	/** */
		public tweenShow(){
			this.visible = true;
			this.setCenter();
			this.scale(0,0);
			this.alpha = 0;
			Laya.Tween.to(this,{alpha:1},1000,Laya.Ease.linearIn);
			Laya.Tween.to(this,{scaleX:1,scaleY:1},1000,Laya.Ease.elasticOut);
			this.showModal();
    }
    	/** */
		public showModal(){
			this.visible = true;
			this.graphics.clear();
			this.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,'#000000');
      this.alpha = 0.25;
			this.width = Laya.stage.width;
      this.height = Laya.stage.height;
			gameLayer.windowlayer.addChild(this);
      this.on(Laya.Event.CLICK,this,this.onClick);
		}
    		/** */
		public setCenter(){
			this.pivotX = this.width*.5;
			this.pivotY = this.height*.5;
			this.x = Laya.stage.width*.5;
			this.y = Laya.stage.height*.5;
		}


  //设置缩放比例
  public setScale(obj: any) {
    var str = 0;
    if (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH > 1) {
      str = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    }
    if (CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT > 1) {
      str = CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
    }
    if (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH > CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT) {
      str = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    } else {
      str = CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
    }
    obj.scale(CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH, CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT);
  }

  public get ui(): any { return this._ui; }
  public set ui(value: any) { this._ui = value; }

  public get datas(): any[] { return this._datas; }
  public set datas(value: any[]) { this._datas = value; }
}