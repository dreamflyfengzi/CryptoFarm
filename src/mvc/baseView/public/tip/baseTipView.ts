/**
* name 
*/
import baseTipIndex from './baseTipIndex'
export default class baseTipView {
  private _baseTipIndex: baseTipIndex;
  constructor() {
    //先添加包
    // fairygui.UIConfig.packageFileExtension = 'json';
    // var base = resConfig.getResUrl('base').split(".");
    // fairygui.UIPackage.addPackage(base[0]);
  }
  /**提醒弹窗 */
  public tipShow(title_txt: string, tips: string, info: object, confirm_fun: Function) {
    if (this._baseTipIndex == null) {
      this._baseTipIndex = new baseTipIndex;
    }
    this._baseTipIndex.tipShow(title_txt, tips, info, confirm_fun);
  }
  /**金币提醒弹窗 */
  public goldTipShow(title: string, content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    if (this._baseTipIndex == null) {
      this._baseTipIndex = new baseTipIndex;
    }
    this._baseTipIndex.goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
  }
  /**飘字提醒 */
  public gameTxtTip(txt: string, call_fun?: Function) {
    if (this._baseTipIndex == null) {
      this._baseTipIndex = new baseTipIndex;
    }
    this._baseTipIndex.gameTxtTip(txt, call_fun);
  }
  /**服务的错误提醒 */
  public gameFailTip(data) {
    if (this._baseTipIndex == null) {
      this._baseTipIndex = new baseTipIndex;
    }
    this._baseTipIndex.gameFailTip(data);
  }
  /**
   * 关闭
   */
  public close() {
    if (this._baseTipIndex == null) {
      this._baseTipIndex = new baseTipIndex;
    }
    this._baseTipIndex.close();
  }

}
