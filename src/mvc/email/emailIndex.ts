import emailView from './emailView'
import baseWindow from '../baseView/component/baseWindow'
import CONST from '../../const/CONST'
import { ui } from '../../ui/layaMaxUI'
export default class emailIndex extends baseWindow {
  private _emailScene: Laya.Sprite;
  constructor() {
    super();
  }
  public onShow() {
    this._emailScene = new ui.email.emailUI;
    // this._emailScene.scene.top_kuan.on(Laya.Event.CLICK, this, this.userCountInfo);
    // this._emailScene.scene.farm_green_btn.on(Laya.Event.CLICK, this, this.showSecen, ['factory']);
    // this._emailScene.scene.factory_fu_btn.on(Laya.Event.CLICK, this, this.showSecen, ['farm']);
    // this._emailScene.scene.top_kuan.on(Laya.Event.CLICK, this, function () {
    //   Laya.stage.event(NETWORKEVENT.USERCOUNTINFO)
    // });
    this._emailScene.scene.close_btn.on(Laya.Event.CLICK, this, this.tweenHide);
    this._emailScene.pivot(this._emailScene.width / 2, this._emailScene.height / 2);//设置轴心
    this.addChild(this._emailScene);
    this.tweenShow();
  }

  /**
   * 关闭按钮
   */
  public closeScene() {

  }
}