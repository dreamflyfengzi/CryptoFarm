import mailView from "./mailView";
import mailNetwork from './mailNetwork'
import NETWORKEVENT from '../event/NETWORKEVENT'
export default class mailController {
  private static _instance: mailController;
  private _mailView: mailView;
  private _network: mailNetwork;
  public static getInstance(): mailController {
    if (mailController._instance == null) {
      mailController._instance = new mailController;
    }
    return mailController._instance;
  }
  constructor() {
    this._mailView = new mailView;
    this._network = new mailNetwork;
    Laya.stage.on(NETWORKEVENT.MAILINFOBAK,this,this._network.MailInfoBak);//获取邮件信息
    Laya.stage.on(NETWORKEVENT.MAILOPERATE,this,this._network.MailOperate);//收获返回物品
  }
  
  /**
   * 展示邮箱
   */
  public onShowMail(){
    if (this._mailView == null) {
      //初始化视图的类
      this._mailView = new mailView;
    }
    this._mailView.onShowMail();
  }

  /**
   * 初始化邮箱list
   */
  public initMailList(){
    this._mailView.initMailList();
  }
}