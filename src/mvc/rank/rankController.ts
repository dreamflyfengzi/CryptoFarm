/**
* name 
*/
import NETWORKEVENT from '../event/NETWORKEVENT'
import rankView from './rankView'
import rankNetwork from './rankNetwork'
// import rankModel from './rankModel'
export default class rankController {
  private _rankView: rankView;
  private static _instance: rankController;
  // public model: rankModel;
  private _network: rankNetwork;
  /** */
  public static getInstance(): rankController {
    if (rankController._instance == null) {
      rankController._instance = new rankController;
    }
    return rankController._instance;
  }

  constructor() {
    // this.model = new rankModel;
    this._network = new rankNetwork;
    Laya.stage.on(NETWORKEVENT.MARKETINFOBAK, this, this._network.MarketInfoBak);//获取市场信息
    // Laya.stage.on(NETWORKEVENT.LOTTERYINFOBAK,this,this._network.LotteryInfoBak);//获取当天市场列表的协议
    // Laya.stage.on(NETWORKEVENT.SENDGOODBAK,this,this._network.SendGoodBak);//获取当天市场列表的协议
    // Laya.stage.on(NETWORKEVENT.LOTTERYACTBAK,this,this._network.LotteryActBak);//提交市场协议
  }
  /**显示市场弹窗 */
  public onShowRank() {
    if (this._rankView == null) {
      //初始化视图的类
      this._rankView = new rankView;
    }
    this._rankView.onShowRank();
  }

  /**
   * initMarketGoodList 
   * 市场列表
   */
  public initMarketGoodList() {
    if (this._rankView) {
      //初始化视图的类
      this._rankView.initMarketGoodList();
    }
  }


}