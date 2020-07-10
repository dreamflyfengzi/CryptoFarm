/**
* name 
*/
import rankIndex from './rankIndex'
// import rankBuyCom from './rankBuyTip'
// import rankSellCom from './rankSellTip'
export default class rankView {
  private _rankCom: rankIndex;
  // private _rankBuyCom: rankBuyCom;
  // private _rankSellCom: rankSellCom;
  constructor() {
    //先添加包
    // fairygui.UIConfig.packageFileExtension = 'json';
    // var Rank = resConfig.getResUrl('Rank').split(".");
    // fairygui.UIPackage.addPackage(Rank[0]);
  }
  /**显示订单弹窗 */
  public onShowRank() {
    this._rankCom = new rankIndex;
    this._rankCom.onShowRank();
  }

  /**
   * 展示市场列表
   * @param data 
   */
  public initMarketGoodList() {
    // this._rankCom.initMarketGoodList()
  }
  /**
   * 获取物品
   */
  public sendGood(data) {
    // this._rankCom.sendGood(data);
  }
  /**
   * 展示任务列表
   */
  public setLotteryList() {
    // this._rankCom.setLotteryList();
  }
  /**
   * 初始化某个任务
   * id:任务ID
   */
  public clickrankItem(id) {
    // this._rankCom.clickrankItem(id);
  }
 
  /**
   * 重新获取一下任务订单
   */
  public getLotteryInfo() {
    // this._rankCom.getLotteryInfo();
  }
  /**
   * 展示时间倒计时
   */
  public showrankTime() {
    // this._rankCom.showrankTime();
  }
  /**
   * 关闭订单弹窗
   */
  public closerank() {
    // this._rankCom.closeRank();
  }


}