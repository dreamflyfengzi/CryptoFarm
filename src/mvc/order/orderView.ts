/**
* name 
*/
import orderIndex from './orderIndex'
import orderGoodGoTip from './orderGoodGoTip'
export default class orderView {
  private _orderCom: orderIndex;
  constructor() {
    //先添加包
    // fairygui.UIConfig.packageFileExtension = 'json';
    // var order = resConfig.getResUrl('order').split(".");
    // fairygui.UIPackage.addPackage(order[0]);
  }
  /**显示订单弹窗 */
  public onShowOrder() {
    this._orderCom = new orderIndex;
    this._orderCom.onShowOrder();
  }
  /**
   * 获取物品
   */
  public sendGood(data) {
    this._orderCom.sendGood(data);
  }
  /**
   * 展示任务列表
   */
  public setLotteryList() {
    this._orderCom.setLotteryList();
  }
  /**
   * 初始化某个任务
   * id:任务ID
   */
  public clickOrderItem(id) {
    this._orderCom.clickOrderItem(id);
  }
  /**
   *前往的框
   *x:框的x
   *y:框的y
   *id:物品id
   */
  public showOrderGoodGoTip(x: number, y: number, id: any) {
    var _orderGoodGoTip = new orderGoodGoTip();
    _orderGoodGoTip.showOrderGoodGoTip(x, y, id);
  }
  /**
   * 重新获取一下任务订单
   */
  public getLotteryInfo() {
    this._orderCom.getLotteryInfo();
  }
  /**
   * 展示时间倒计时
   */
  public showOrderTime() {
    this._orderCom.showOrderTime();
  }
  /**
   * 关闭订单弹窗
   */
  public closeOrder() {
    this._orderCom.closeOrder();
  }

}