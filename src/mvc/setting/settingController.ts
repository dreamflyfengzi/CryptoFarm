import settingNetwork from './settingNetwork'
import settingView from './settingView'
export default class settingController {
  private static _instance: settingController;
  private  _settingView: settingView;
  private  _settingNetwork:settingNetwork;
  public static getInstance(): settingController {
    if (settingController._instance == null) {
      settingController._instance = new settingController;
    }
    return settingController._instance;
  }
  constructor() {

  }
  /**显示邮箱弹窗 */
  public onShowSetting() {
    if (this._settingView == null) {
      //初始化视图的类
      this._settingView = new settingView;
    }
    this._settingView.onShowSetting();
  }
}