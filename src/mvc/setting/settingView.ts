/**
* name 
*/
import settingIndex from './settingIndex'
export default class settingView {
  private _settingCom: settingIndex;
  constructor() {
  }
  /**显示订单弹窗 */
  public onShowSetting() {
    this._settingCom = new settingIndex;
    this._settingCom.onShow();
  }
}