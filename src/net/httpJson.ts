/**
* name 
*/
import dataGlobal from '../mvc/resconfig/dataGlobal'
export default class httpJson {
  private xhr: Laya.HttpRequest = new Laya.HttpRequest();
  private static _instance: httpJson;

  /** */
  public static getInstance(): httpJson {
    if (httpJson._instance == null) {
      httpJson._instance = new httpJson;
    }
    return httpJson._instance;
  }

  constructor() {
  }

  //提交进度
  private processHandler(data: any): void {
    console.log(data);
  }
  //提交出错时
  private errorHandler(data: any): void {

  }
  //提交完成时
  private completeHandler(data: any): void {
    console.log("返回的数据:", data);
    if (data != "PONG") {
      var o = JSON.parse(data);
      if (typeof (o.ga) != "undefined") {

        //执行消息中需要做的事件
        /**以包ID派发协议*/
        Laya.stage.event(o.ga, o);
      } else {
        console.log("不存在事件", o);
      }
    } else {
      console.log("PONG");
    }

  }
  /*
  以http POST的方式发送数据
	
  */
  public httpPost(url: string, data: any) {
    if (url == "") {
      console.log("没有输入提交地址");
      return;
    }
    if (typeof (data.a) == "undefined" || typeof (data.m) == "undefined") {
      console.log("请选择协议类型");
      return;
    }
    var tmp_data = this.ProtoPack(data);
    this.xhr.http.timeout = 10000;//设置超时时间；
    this.xhr.once(Laya.Event.ERROR, this, this.errorHandler);//提交出错时
    this.xhr.on(Laya.Event.PROGRESS, this, this.processHandler);//提交进度
    this.xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);//提交完成时

    this.xhr.send(url, tmp_data, "post", "text");
  }
  /*
  以http GET的方式发送数据
  */
  public httpGet(url: string, data: any) {
    if (url == "") {
      console.log("没有输入提交地址");
      return;
    }
    if (typeof (data.a) == "undefined" || typeof (data.m) == "undefined") {
      console.log("请选择协议类型");
      return;
    }
    var tmp_data = this.ProtoPack(data);

    this.xhr.http.timeout = 10000;//设置超时时间；
    this.xhr.once(Laya.Event.ERROR, this, this.errorHandler);//提交出错时
    this.xhr.on(Laya.Event.PROGRESS, this, this.processHandler);//提交进度
    this.xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);//提交完成时
    this.xhr.send(url, tmp_data, "get", "text");
  }


  /*
  data=>传送的数据,
  token=>用户的登陆key
  */
  private ProtoPack(data) {
    var token = dataGlobal.getInstance().userInfo;
    if (typeof (token) != "undefined" && token != "" && typeof (token.token) != "undefined" && token.token != "") {
      data.token = token.token;
    } else {
      data.token = "";
    }
    var s = "token=" + data.token;
    for (var k in data) {//遍历data
      if (k == 'token') {
        continue;
      }
      if (k == 'd') {
        s += "&" + k + "=" + encodeURIComponent(JSON.stringify(data[k]));
      } else {
        s += "&" + k + "=" + data[k];
      }
    }
    return s;
  };


}
