/**
* name 
*/
import exchangeIndex from './exchangeIndex'
import tradeingHome from './tradeingHome'
import exchangeSellCom from './exchangeSellTip'
export default class exchangeView {
  private _exchangeCom: exchangeIndex;
  private _tradeingHome: tradeingHome;
  private _exchangeSellCom: exchangeSellCom;
  constructor() {
    //先添加包
    // fairygui.UIConfig.packageFileExtension = 'json';
    // var exchange = resConfig.getResUrl('exchange').split(".");
    // fairygui.UIPackage.addPackage(exchange[0]);
  }
  /**显示订单弹窗 */
  public onShowExchange() {
    this._exchangeCom = new exchangeIndex;
    this._exchangeCom.onShowexchange();
  }

  /**
   * 展示市场列表
   * @param data 
   */
  public initExchangeList() {
    this._exchangeCom.initExchangeList()
  }
  /**
   * 获取物品
   */
  public sendGood(data) {
    // this._exchangeCom.sendGood(data);
  }
  /**
   * 展示任务列表
   */
  public setLotteryList() {
    // this._exchangeCom.setLotteryList();
  }
  /**
   * 初始化某个任务
   * id:任务ID
   */
  public clickexchangeItem(id) {
    // this._exchangeCom.clickexchangeItem(id);
  }
 
  /**
   * 重新获取一下任务订单
   */
  public getLotteryInfo() {
    // this._exchangeCom.getLotteryInfo();
  }
  /**
   * 展示时间倒计时
   */
  public showexchangeTime() {
    // this._exchangeCom.showexchangeTime();
  }
  /**
   * 关闭订单弹窗
   */
  public closeexchange() {
    this._exchangeCom.closeexchange();
  }

   /**
   * 出售框
   */
  public showBuyTip(id: string) {
    this._tradeingHome = new tradeingHome;
    this._tradeingHome.showSellTip(id);
  }

   /**
   * 出售框
   */
  public showSellTip(id: string) {
    this._exchangeSellCom = new exchangeSellCom;
    this._exchangeSellCom.showSellTip(id);
  }

}