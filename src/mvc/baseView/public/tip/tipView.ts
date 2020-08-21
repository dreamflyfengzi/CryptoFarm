/**
* name 
*/
import tipIndex from './tipIndex'
export default class tipView {
  private _tipCom: tipIndex;
  constructor() {
    //先添加包
    // fairygui.UIConfig.packageFileExtension = 'json';
    // var base = resConfig.getResUrl('base').split(".");
    // fairygui.UIPackage.addPackage(base[0]);
  }
  /**提醒弹窗 */
  public tipShow(content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    if (this._tipCom == null) {
      this._tipCom = new tipIndex;
    }
    this._tipCom.tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
  }
  /**金币提醒弹窗 */
  public goldTipShow(title: string, content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    if (this._tipCom == null) {
      this._tipCom = new tipIndex;
    }
    this._tipCom.goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
  }
  /**飘字提醒 */
  public gameTxtTip(txt: string, call_fun?: Function) {
    if (this._tipCom == null) {
      this._tipCom = new tipIndex;
    }
    this._tipCom.gameTxtTip(txt, call_fun);
  }
  /**服务的错误提醒 */
  public gameFailTip(data) {
    if (this._tipCom == null) {
      this._tipCom = new tipIndex;
    }
    this._tipCom.gameFailTip(data);
  }
  /**
   * 关闭
   */
  public close() {
    if (this._tipCom == null) {
      this._tipCom = new tipIndex;
    }
    this._tipCom.close();
  }

}
