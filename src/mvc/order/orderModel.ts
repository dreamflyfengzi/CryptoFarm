/**
* name 
*/
import orderController from './orderController'
export default class orderModel {
  constructor() {
    this._order_id = '';
  }
  private _timer: Laya.Timer;
  public _order_id: string;//当前选中的订单
  public thisDay: number;//现在的时间倒计时
  /**设置当前选中的订单ID */
  public setOrderId(id) {
    this._order_id = id
  }
  //设置定时器
  public setOrderTimeout() {
    this.clearOrderTime();
    this._timer = new Laya.Timer();
    this.getTime();
    this._timer.loop(1000, this, this.timerFun);

  }
  private timerFun() {
    if (this.thisDay <= 0) {
      //重新获取一下订单信息
      orderController.getInstance().getLotteryInfo();
    }
    if (this.thisDay > 0) {
      this.thisDay--;
      //刷新一下定时器
      orderController.getInstance().showOrderTime();
    }

  }
  /**
   * 获取时间
   */
  public getTime() {
    var curDate = new Date(new Date().setHours(0, 0, 0, 0));
    var nextDate = curDate.getTime() + 24 * 60 * 60 * 1000; //后一天
    var thisTime = new Date().getTime();
    this.thisDay = Math.floor((nextDate - thisTime) / 1000) + 10;//再加上10秒，确保已经过了12点了
  }
  /**
   * 清除定时器
   */
  public clearOrderTime() {
    if (this._timer) {
      this._timer.clear(this, this.timerFun);//先清除定时器
    }
  }

}

