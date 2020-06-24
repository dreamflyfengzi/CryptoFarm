/**
* name 
*/
import tipView from './tipView'
import tipIndex from './tipIndex'
import GAMEEVENT from '../../../event/GAMEEVENT'
import NETWORKEVENT from '../../../event/NETWORKEVENT'

export default class tipController {
  private _tipview: tipView;
  private static _instance: tipController;
  // public model: tipModel;
  // private _network: tipNetwork;
  /** */
  public static getInstance(): tipController {
    if (tipController._instance == null) {
      tipController._instance = new tipController;
    }
    return tipController._instance;
  }

  constructor() {
    // this.model = new tipModel;
    // this._network = new tipNetwork;


    Laya.stage.on(GAMEEVENT.TIPSKUAN, this, this.tipShow);
    Laya.stage.on(GAMEEVENT.GOLDTIP, this, this.goldTipShow);
    Laya.stage.on(NETWORKEVENT.GAMEFAILTIP, this, this.gameFailTip);


  }
  /**提醒弹窗 */
  public tipShow(content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    if (this._tipview == null) {
      this._tipview = new tipView();
    }
    this._tipview.tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
  }
  /**金币提醒弹窗 */
  public goldTipShow(title: string, content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    if (this._tipview == null) {
      this._tipview = new tipView;
    }
    this._tipview.goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
  }
  /**飘字提醒 */
  public gameTxtTip(txt: string, call_fun?: Function) {
    if (this._tipview == null) {
      this._tipview = new tipView;
    }
    this._tipview.gameTxtTip(txt, call_fun);
  }
  /**服务的错误提醒 */
  public gameFailTip(data) {
    if (this._tipview == null) {
      this._tipview = new tipView;
    }
    this._tipview.gameFailTip(data);
  }
	/**
	 * 关闭
	 */
  public close() {
    if (this._tipview == null) {
      this._tipview = new tipView;
    }
    this._tipview.close();
  }

}