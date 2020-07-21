import emailNetwork from './emailNetwork'
import emailView from './emailView'
export default class emailController {
  private static _instance: emailController;
  private  _emailView: emailView;
  private  _emailNetwork:emailNetwork;
  public static getInstance(): emailController {
    if (emailController._instance == null) {
      emailController._instance = new emailController;
    }
    return emailController._instance;
  }
  constructor() {

  }
  /**显示邮箱弹窗 */
  public onShowEmail() {
    if (this._emailView == null) {
      //初始化视图的类
      this._emailView = new emailView;
    }
    this._emailView.onShowEmail();
  }
}