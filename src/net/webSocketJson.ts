/**
* name 
*/
import dataGlobal from '../mvc/resconfig/dataGlobal'
import NETWORKEVENT from '../mvc/event/NETWORKEVENT'
import CONST from '../const/CONST'
import GAMEEVENT from '../mvc/event/GAMEEVENT'
export default class webSocketJson {
  private recvBufDV;//返回的消息
  public isConnect: Boolean = false;//已连接
  public static isConnectting: boolean = false;//正在连接
  public send_pack_time: any = 0;//上一次发送信息的时间间隔
  public static send_pack_time_count = 0;//心跳设定的次数

  /** 
   * webSocket对像
  */
  public websocket: WebSocket;
  /**
   * 单例对像
   */
  public static _instance: webSocketJson = null;

  constructor() {

    console.log("开始进行网络长连接", "wss://" + dataGlobal.getInstance().gameWS + "?token=" + dataGlobal.getInstance().userInfo.token);

    this.connect("wss://" + dataGlobal.getInstance().gameWS + "?token=" + dataGlobal.getInstance().userInfo.token);
    //监听连接相关的事件
    //连接关闭
    Laya.stage.off(NETWORKEVENT.CONNECTONCLOSE, this, this.re_connect);
    Laya.stage.on(NETWORKEVENT.CONNECTONCLOSE, this, this.re_connect);
  }
            
  public static getInstance(): webSocketJson {
    if (webSocketJson._instance == null) {
      webSocketJson._instance = new webSocketJson;
    }
    return webSocketJson._instance;
  }
  /** */
  public connect(url) {
    if (this.websocket == null) {
      this.websocket = new WebSocket(url);
    }
    //this.websocket.binaryType = 'arraybuffer';

    this.websocket.onopen = this.onOpen;
    this.websocket.onclose = this.onClose;
    this.websocket.onmessage = this.onMessage;
    this.websocket.onerror = this.onError;
  }
  /** 
   * 功能：发送数据，
   * data = {
   * 		a:"执行的动作",
   * 		m:"执行的模块",
   * 		d:{},//
   * 		code:1//执行的状态
   * }
  */
  public sendMessage(data) {
    if (this.websocket == null) {
      return;
    }
    if (typeof (data.a) == "undefined" || data.a == "" || typeof (data.m) == "undefined" || data.m == "") {
      console.log("请选择协议类型");
      return;
    }

    //获取当前的发送时间
    var d = new Date();
    webSocketJson.getInstance().send_pack_time = d.getTime();

    console.log('发送的数据', data);
    var tmp_data = JSON.stringify(data);
    try {
      this.websocket.send(tmp_data);
    } catch (e) {
      console.log("网络没有连上", e);
    }
    return true;
  }

  /**
   * 定时器，定时发送心跳包
   */
  public timeSendPack() {
    //获取当前的发送时间
    var d = new Date();
    let t = d.getTime() - webSocketJson.getInstance().send_pack_time;
    if (t > CONST.HEART_TIME) {//如果已经到了要发送心跳的时间，则进行心跳发送
      //心跳数据
      var data = {
        a: "heartbeat",
        m: "gzhq_game",
        d: { t:  webSocketJson.getInstance().send_pack_time },
        code: 1//执行的状态
      };
       webSocketJson.getInstance().sendMessage(data);
    } else {
      console.log("不用发心跳", t);
    }
    if ( webSocketJson.isConnectting == true ||  webSocketJson._instance == null) {
      console.log("正在连接中。。。。");
      return;
    }
    if ( webSocketJson.send_pack_time_count > 1) {
       webSocketJson.send_pack_time_count--;
      console.log("正在连接中2。。。。");
      return;
    }

     webSocketJson.send_pack_time_count++;
    //定时执行一次心跳包
    Laya.timer.once(CONST.HEART_TIME, this, webSocketJson.getInstance().timeSendPack);
     webSocketJson.send_pack_time_count--;
  }

  /** */
  private onClose(evt) {
    this.isConnect = false;
    this.websocket = null;
     webSocketJson._instance = null;

    if ( webSocketJson.isConnectting == true) {
      console.log("正在连接中。。。。");
      return;
    } else {
       webSocketJson.isConnectting = true;
    }
    Laya.stage.event(NETWORKEVENT.CONNECTONCLOSE);
  }
  /** */
  private onOpen(evt) {
    console.log('onopen')
     webSocketJson.isConnectting = false;
    this.isConnect = true;
    //Laya.stage.event(NETWORKEVENT.CONNECTONOPEN);  
    console.log("网络连接成功！");
    
    //定时执行一次心跳包
    Laya.timer.once(CONST.HEART_TIME, this,  webSocketJson.getInstance().timeSendPack);

    //发送跳入主场景的事件
   
    Laya.stage.event(GAMEEVENT.LOGIN_FARM);
  }
  /**
   * 处理接收到的数据
  */
  private onMessage(evt) {
    console.log("onMessage", evt.data);
    if (evt.data != "PONG" && evt.data != "pong") {
      var tmp_data = JSON.parse(evt.data);
      if (typeof (tmp_data.ga) != "undefined") {
        //执行消息中需要做的事件
        /**以包ID派发协议*/
        console.log('进来了', tmp_data.ga);
        Laya.stage.event(tmp_data.ga, tmp_data);
      } else {
        console.log("不存在事件", tmp_data.ga);
      }
    } else {
      console.log("PONG");
    }
  }
  /** */
  private onError(evt) {
    console.log("网络连接出错！");
    this.isConnect = false;
    this.websocket = null;
     webSocketJson._instance = null;

    if ( webSocketJson.isConnectting == true) {
      console.log("正在连接中。。。。");
      return;
    } else {
       webSocketJson.isConnectting = true;
    }
    Laya.stage.event(NETWORKEVENT.CONNECTONCLOSE);
  }

  /**
   * 断线重连
   */
  public re_connect() {
    console.log('断线重连')
     webSocketJson.getInstance();
  }

}
