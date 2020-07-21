/**
* name 
*/
import NETWORKEVENT from '../mvc/event/NETWORKEVENT'
export class webSocketProto{
		private recvBufDV;//返回的消息
		public isConnect:Boolean = false;//已连接
		public isConnectting:boolean = false;//正在连接
		/** 
		 * webSocket对像
		*/
		public websocket:WebSocket;
		/**
		 * 单例对像
		 */
		private static _instance:webSocketProto;

		constructor(){
			this.connect("ws://192.168.0.144:9006");

			//监听连接相关的事件
			Laya.stage.off(NETWORKEVENT.CONNECTONCLOSE,this, webSocketProto.getInstance);
			Laya.stage.on(NETWORKEVENT.CONNECTONCLOSE,this, webSocketProto.getInstance);
			
			Laya.stage.off(NETWORKEVENT.CONNECTONOPEN,this, webSocketProto.openOk);
			Laya.stage.on(NETWORKEVENT.CONNECTONOPEN,this, webSocketProto.openOk);
		}
		/** */
		public static getInstance():webSocketProto{
			if(webSocketProto._instance == null){
				webSocketProto._instance = new webSocketProto;
			}
			return webSocketProto._instance;
		}
		/** */
		public connect(url){
			if(this.websocket == null){
				this.websocket = new WebSocket(url);
			}
			this.websocket.binaryType = 'arraybuffer';
			this.websocket.onopen = this.onOpen;
			this.websocket.onclose = this.onClose;
			this.websocket.onmessage = this.onMessage;
        	this.websocket.onerror = this.onError;
		}
		/** 
		 * 功能：发送数据，
		 * data = {
		 * 		type:pid_2,//协议类型
		 * 		data:{}//协议数据(data为不同的协议是不同的key,内容为具体协议的内容)
		 * }
		 * 例如：
		 * data = {
				type:pid_2,
				plant:{
					action:1,
					target:"2"
				}
			};
		*/
		public sendMessage(data){
			if(this.websocket == null) {
				return;
			}
			if(typeof(data.type)=="undefined" || data.type==""){
				console.log("请选择协议类型");
				return;
			}else{
				data.type = data.type.replace("pid_","");
			}
			let sendData = new protoMessage.Message();
			sendData=data;
			//打包数据
			let sendByte = protoMessage.Message.encode(sendData).finish();
			this.websocket.send(data);
			return true;
		}

		public static openOk(){
			console.log("网络连接成功！");
		}

		/** */
		private onClose(evt){
			this.isConnectting = false;
       		this.isConnect = false;
			this.websocket = null;
			Laya.stage.event(NETWORKEVENT.CONNECTONCLOSE);   
		}
		/** */
		private onOpen(evt){
			this.isConnectting = false;
       		this.isConnect = true;
			Laya.stage.event(NETWORKEVENT.CONNECTONOPEN);   
		}
		/**
		 * 处理接收到的数据
		*/
		private onMessage(evt){
			console.log("接收到的数据有",evt.data);
			//把返回的信息转为Uint8Array数组
			this.recvBufDV = new Uint8Array(evt.data);
			//解包数据
			var tmp_data = protoMessage.Message.decode(this.recvBufDV);
			//协议头
			var protoId = "pid_"+tmp_data.type;
			/**以包ID派发协议*/
			Laya.stage.event(protoId,tmp_data);
		}
		/** */
		private onError(evt){
			this.isConnectting = false;
       		this.isConnect = false;
			this.websocket = null;
			Laya.stage.event(NETWORKEVENT.CONNECTONCLOSE);
		}

		

}
