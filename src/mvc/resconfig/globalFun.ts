/*
* name;
*/
export default class globalFun {
  constructor() {

  }
  /** */
  private static _instance: globalFun;
  public static getInstance(): globalFun {
    if (globalFun._instance == null) {
      globalFun._instance = new globalFun;
    }
    return globalFun._instance;
  }
  /**
   * 数字转化为时分秒
   */
  public formatSeconds(value) {
    var secondTime = Math.floor(value);// 秒
    var minuteTime = 0;// 分
    var hourTime = 0;// 小时
    if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
      //获取分钟，除以60取整数，得到整数分钟
      minuteTime = Math.floor(secondTime / 60);
      //获取秒数，秒数取佘，得到整数秒数
      secondTime = Math.floor(secondTime % 60);
      //如果分钟大于60，将分钟转换成小时
      if (minuteTime > 60) {
        //获取小时，获取分钟除以60，得到整数小时
        hourTime = Math.floor(minuteTime / 60);
        //获取小时后取佘的分，获取分钟除以60取佘的分
        minuteTime = Math.floor(minuteTime % 60);
      }
    }
    if (hourTime > 0) {
      var result = "";
      result = "" + (Math.floor(minuteTime) < 10 ? '0' + Math.floor(minuteTime) : Math.floor(minuteTime)) + "分" + result;
      result = "" + (Math.floor(hourTime) < 10 ? '0' + Math.floor(hourTime) : Math.floor(hourTime)) + "小时" + result;

    } else {
      var result = "" + (Math.floor(secondTime) < 10 ? '0' + Math.floor(secondTime) : Math.floor(secondTime)) + "秒";
      result = "" + (Math.floor(minuteTime) < 10 ? '0' + Math.floor(minuteTime) : Math.floor(minuteTime)) + "分" + result;
    }
    return result;
  }
  /**
   * 时间戳转成倒计时
   */
  public getCountDown(value) {
    var secondTime = Math.floor(value);// 秒
    var hour = secondTime % 86400 / 3600 < 10 ? '0' + Math.floor(secondTime % 86400 / 3600) : Math.floor(secondTime % 86400 / 3600);
    var minute = secondTime % 86400 % 3600 / 60 < 10 ? '0' + Math.floor(secondTime % 86400 % 3600 / 60) : Math.floor(secondTime % 86400 % 3600 / 60);
    var second = secondTime % 86400 % 3600 % 60 < 10 ? '0' + Math.floor(secondTime % 86400 % 3600 % 60) : Math.floor(secondTime % 86400 % 3600 % 60);
    return hour + ':' + minute + ':' + second;
  }
  /**
   * 订单跳转
   */
  public goBtn(type) {

  }
}