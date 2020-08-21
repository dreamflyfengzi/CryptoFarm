/**
* name 
*/
import tipView from './tipView'
import basetipview from './baseTipView'
import tipIndex from './tipIndex'
import GAMEEVENT from '../../../event/GAMEEVENT'
import NETWORKEVENT from '../../../event/NETWORKEVENT'

export default class tipController {
  private _tipview: tipView;
  private _basetipview: basetipview;
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
    Laya.stage.on(GAMEEVENT.BASETIPS, this, this.baseTipsShow);
    Laya.stage.on(GAMEEVENT.GOLDTIP, this, this.goldTipShow);
    Laya.stage.on(NETWORKEVENT.GAMEFAILTIP, this, this.gameFailTip);
    Laya.stage.on(GAMEEVENT.TXTTIP, this, this.gameTxtTip); //飘字提醒

  }
  /**基础弹窗 */
  public baseTipsShow(title_txt: string, tips: string, info:object, confirm_fun: Function) {
    console.log("提示1")
    if (this._basetipview == null) {
      this._basetipview = new basetipview();
    }
    this._basetipview.tipShow(title_txt, tips, info, confirm_fun);
  }
  /**提醒弹窗 */
  public tipShow(content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    console.log("提示2")
    if (this._tipview == null) {
      this._tipview = new tipView();
    }
    this._tipview.tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
  }
  /**金币提醒弹窗 */
  public goldTipShow(title: string, content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    console.log("提示2")
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