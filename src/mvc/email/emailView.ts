/**
* name 
*/
import emailIndex from './emailIndex'
export default class emailView {
  private _emailCom: emailIndex;
  constructor() {
  }
  /**显示订单弹窗 */
  public onShowEmail() {
    this._emailCom = new emailIndex;
    this._emailCom.onShow();
  }
}