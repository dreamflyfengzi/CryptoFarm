import settingView from './settingView'
import baseWindow from '../baseView/component/baseWindow'
import CONST from '../../const/CONST'
import { ui } from '../../ui/layaMaxUI'
export default class settingIndex extends baseWindow {
  private _settingScene: Laya.Sprite;
  constructor() {
    super();
  }
  public onShow() {
    this._settingScene = new ui.setting.settingUI;
    // this._settingScene.scene.top_kuan.on(Laya.Event.CLICK, this, this.userCountInfo);
    // this._settingScene.scene.farm_green_btn.on(Laya.Event.CLICK, this, this.showSecen, ['factory']);
    // this._settingScene.scene.factory_fu_btn.on(Laya.Event.CLICK, this, this.showSecen, ['farm']);
    // this._settingScene.scene.top_kuan.on(Laya.Event.CLICK, this, function () {
    //   Laya.stage.event(NETWORKEVENT.USERCOUNTINFO)
    // });
    this._settingScene.scene.close_btn.on(Laya.Event.CLICK, this, this.tweenHide);
    this._settingScene.pivot(this._settingScene.width / 2, this._settingScene.height / 2);//设置轴心
    this.addChild(this._settingScene);
    this.tweenShow();
  }

  /**
   * 关闭按钮
   */
  public closeScene() {

  }
}