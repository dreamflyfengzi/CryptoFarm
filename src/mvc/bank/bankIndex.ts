import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI'
export default class bankIndex extends baseTips {
  private _type: string;
  private _bankScene:Laya.Sprite;//顶层对象
  constructor() {
    super();
  }
  public onShowBank(type) {
    this._bankScene = new ui.bank.bankSceneUI;
    this._bankScene.pivotX = 0.5*this._bankScene.width;
    this._bankScene.pivotY = 0.5*this._bankScene.height;
    this.addChild(this._bankScene);
    this.showLayer();
    this._bankScene.scene.close_btn.on(Laya.Event.CLICK,this,this.closeScene);
  }

  /**
   * 关闭界面
   */
  public closeScene(){
    this.hideLayer();
  }
}