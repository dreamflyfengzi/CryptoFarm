/**
* name 
*/
import materialIndex from './materialIndex'
import materialTip from './materialTip'
export default class materialView {
  private _materialCom: materialIndex;
  private _materialTip: materialTip;
  constructor() {
  }
  /**显示订单弹窗 */
  public onShowOrder() {
    this._materialCom = new materialIndex;
    this._materialCom.onShowOrder();
  }
  /**
   * 获取物品
   */
  public sendGood(data) {
    this._materialCom.sendGood(data);
  }
  /**
   * 展示任务列表
   */
  public setMaterialList() {
    this._materialCom.setMaterialList();
  }
  /**
   * 初始化某个任务
   * id:任务ID
   */
  public clickOrderItem(id) {
    // this._materialCom.clickOrderItem(id);
  }
  
  /**
   * 重新获取一下任务订单
   */
  public getLotteryInfo() {
    // this._materialCom.getLotteryInfo();
  }
  /**
   * 展示时间倒计时
   */
  public showOrderTime(id) {
    this._materialCom.showOrderTime(id);
  }

  /**
   * 展示提示
   */
  public showOrderTip(x:number, y:number,info:any,index:number){
    var _materialTip = new materialTip();
    _materialTip.showOrderTip(x, y,info,index);
  }
  /**
   * 关闭订单弹窗
   */
  public closeOrder() {
    this._materialCom.closeOrder();
  }

}