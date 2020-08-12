/**
* name 
*/
import materialController from './materialController'
export default class materialModel {
  constructor() {
    this._material_id = '';
    this.thisTime = {}
  }
  private _timer: Laya.Timer;
  public _material_id: string;//当前选中的订单
  public thisTime: object;//现在的时间倒计时組

  /**设置当前选中的订单ID */
  public setOrderTime(time, id) {
    this.thisTime[id] = time;
  }
  //设置定时器
  public setOrderTimeout() {
    if (this._timer) {
      return
    }
    this._timer = new Laya.Timer();

    // this.clearOrderTime();
    this._timer.loop(1000, this, this.timerFun);
  }
  private timerFun() {


    for (var id in this.thisTime) {
      if (this.thisTime[id] <= 0) {
        //重新設置一下订单信息
        // materialController.getInstance().setMaterialList();
        return
      }
      this.thisTime[id]--;
      //刷新一下定时器
      materialController.getInstance().showOrderTime(id);
    }
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

