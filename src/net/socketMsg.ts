/**
* name 
*/
import NETWORKEVENT from '../mvc/event/NETWORKEVENT'
	export default class socketMsg{
		private sendBufLen = 0;
		private sendBuf = new ArrayBuffer(512);
		private sendBufDV = new DataView(this.sendBuf, 0);
		private recvBufOffset = 0;
		private recvBufDV;
		public isConnect:Boolean = false;
		public isConnectting:boolean = false;
		/** */
		public websocket:WebSocket;

		private static _instance:socketMsg;

		/** */
		public static getInstance():socketMsg{
			if(socketMsg._instance == null){
				socketMsg._instance = new socketMsg;
			}
			return socketMsg._instance;
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
		/** */
		public sendMessage(data){
			if(!this.isConnect || this.websocket == null) return;
			this.websocket.send(data);
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
		/** */
		private onMessage(evt){
			this.recvBufOffset = 0;
			this.recvBufDV = new DataView(evt.data);
			//
			var packetLen = this.readShort();	
			var packetId = this.readShort();
			/**以包ID派发协议*/
			Laya.stage.event(packetId,[this.recvBufDV]);
		}
		/** */
		private onError(evt){
			this.isConnectting = false;
       		this.isConnect = false;
			this.websocket = null;
			Laya.stage.event(NETWORKEVENT.CONNECTONCLOSE);   
		}
		/** */
		private readShort(){
			 var n = this.recvBufDV.getInt16(this.recvBufOffset);
			this.recvBufOffset = this.recvBufOffset + 2;
			return n;
		}
	}
