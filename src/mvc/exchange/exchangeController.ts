/**
* name 
*/
import NETWORKEVENT from '../event/NETWORKEVENT'
import exchangeView from './exchangeView'
import exchangeNetwork from './exchangeNetwork'
// import exchangeModel from './exchangeModel'
export default class exchangeController {
  private _exchangeView: exchangeView;
  private static _instance: exchangeController;
  // public model: exchangeModel;
  private _network: exchangeNetwork;
  /** */
  public static getInstance(): exchangeController {
    if (exchangeController._instance == null) {
      exchangeController._instance = new exchangeController;
    }
    return exchangeController._instance;
  }

  constructor() {
    // this.model = new exchangeModel;
    this._network = new exchangeNetwork;
    Laya.stage.on(NETWORKEVENT.MARKETINFOBAK, this, this._network.MarketInfoBak);//获取市场信息
    // Laya.stage.on(NETWORKEVENT.LOTTERYINFOBAK,this,this._network.LotteryInfoBak);//获取当天市场列表的协议
    // Laya.stage.on(NETWORKEVENT.SENDGOODBAK,this,this._network.SendGoodBak);//获取当天市场列表的协议
    // Laya.stage.on(NETWORKEVENT.LOTTERYACTBAK,this,this._network.LotteryActBak);//提交市场协议
  }
  /**显示市场弹窗 */
  public onShowExchange() {
    if (this._exchangeView == null) {
      //初始化视图的类
      this._exchangeView = new exchangeView;
    }
    this._exchangeView.onShowExchange();
  }

  /**
   * initMarketGoodList 
   * 市场列表
   */
  public initMarketGoodList() {
    if (this._exchangeView) {
      //初始化视图的类
      this._exchangeView.initMarketGoodList();
    }
  }
  /**
  * 购买框
  */
  public showBuyTip(id: string) {
    if (this._exchangeView) {
      this._exchangeView.showBuyTip(id);
    }
  }

  /**
 * 出售框
 */
  public showSellTip(id: string) {
    if (this._exchangeView) {
      this._exchangeView.showSellTip(id);
    }
  }

}