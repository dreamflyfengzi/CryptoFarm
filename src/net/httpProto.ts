// /**
// * http的方式发送请求数据

// 例子：
// var mypost = new net.httpProto();
// var mydata = {
// 		type:"pid_2",
// 		plant:{
// 			action:1,
// 			target:"2"
// 		}
// 	};
// mypost.httpPost("http://192.168.0.144/test.php",mydata);
// PS：
// 记得设置回调事件的监听！！！！
// */

// 	export default class httpProto{
// 		private xhr:Laya.HttpRequest = new Laya.HttpRequest();


// 		private static _instance:httpProto;

// 		/** */
// 		public static getInstance():httpProto{
// 			if(httpProto._instance == null){
// 				httpProto._instance = new httpProto;
// 			}
// 			return httpProto._instance;
// 		}

// 		constructor(){
// 		}
// 		//提交进度
// 		private processHandler(data:any): void {
// 			console.log(data);
// 		}
// 		//提交出错时
// 		private errorHandler(data:any): void {

// 		}
// 		//提交完成时
// 		private completeHandler(e:any): void {

// 			console.log("http返回数据了:",e);
// 			//把返回的信息转为Uint8Array数组
// 			let recvBufDV = new Uint8Array(e);//new DataView(evt.data);	
// 			//解包数据
// 			var tmp_data = protoMessage.Message.decode(recvBufDV);
// 			console.log("http返回数据了222:",tmp_data,tmp_data.type);
// 			//协议头
// 			var protoId = "pid_"+tmp_data.type;
// 			/**以包ID派发协议*/
// 			Laya.stage.event(protoId,tmp_data);
// 		}
// 		/*
// 		 * data = {
// 		 * 		type:pid_2,//协议类型
// 		 * 		data:{}//协议数据(data为不同的协议是不同的key,内容为具体协议的内容)
// 		 * }
// 		 * 例如：
// 		 * data = {
// 				type:pid_2,
// 				plant:{
// 					action:1,
// 					target:"2"
// 				}
// 			};
// 		*/
// 		public httpPost(url:string,data:any){
// 			if(url==""){
// 				console.log("没有输入提交地址");
// 				return;
// 			}
// 			if(typeof(data.type)=="undefined" || data.type==""){
// 				console.log("请选择协议类型");
// 				return;
// 			}else{
// 				data.type = data.type.replace("pid_","");
// 			}
// 			let sendData = new protoMessage.Message();
// 			sendData=data;
// 			//打包数据
// 			let sendByte = protoMessage.Message.encode(sendData).finish();

// 			this.xhr.http.timeout = 10000;//设置超时时间；
// 			this.xhr.once(Laya.Event.ERROR, this, this.errorHandler);//提交出错时
// 			this.xhr.on(Laya.Event.PROGRESS, this, this.processHandler);//提交进度
// 			this.xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);//提交完成时

// 			this.xhr.send(url,sendByte,"post","arraybuffer");
// 		}
// 		/*
// 		 * data = {
// 		 * 		type:pid_2,//协议类型
// 		 * 		data:{}//协议数据(data为不同的协议是不同的key,内容为具体协议的内容)
// 		 * }
// 		 * 例如：
// 		 * data = {
// 				type:pid_2,
// 				plant:{
// 					action:1,
// 					target:"2"
// 				}
// 			};
// 		*/
// 		public httpGet(url:string,data:any){
// 			if(url==""){
// 				console.log("没有输入提交地址");
// 				return;
// 			}
// 			if(typeof(data.type)=="undefined" || data.type==""){
// 				console.log("请选择协议类型");
// 				return;
// 			}else{
// 				data.type = data.type.replace("pid_","");
// 			}
// 			let sendData = new protoMessage.Message();
// 			sendData=data;
// 			//打包数据
// 			let sendByte = protoMessage.Message.encode(sendData).finish();

// 			this.xhr.http.timeout = 10000;//设置超时时间；
// 			this.xhr.once(Laya.Event.ERROR, this, this.errorHandler);//提交出错时
// 			this.xhr.on(Laya.Event.PROGRESS, this, this.processHandler);//提交进度
// 			this.xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);//提交完成时
// 			this.xhr.send(url,sendByte,"get","arraybuffer");
// 		}



// 	}

