/**
* name 
*/
import dataGlobal from '../resconfig/dataGlobal'
import factoryController from './factoryController'
import NETWORKEVENT from '../event/NETWORKEVENT'
import webSocketJson from '../../net/webSocketJson'
import httpJson from '../../net/httpJson'
	export default class factoryModel{
		constructor(){
			this._mf_id = '';
			this._is_open = false;
		}
		private _timer:Laya.Timer;
		public _mf_id:string;//当前在的工厂页面
		public _is_open:boolean;
		//页面上的定时器
		public setTimeout(){
			
			//设置定时器
			this._timer = new Laya.Timer();
			this._timer.loop(1000,this,this.timerFun.bind(this));
            
		}
		//定时器的内容
		private timerFun(){
			//获取用户工厂的信息
			var data = dataGlobal.getInstance().factory;
			for(var i in data){
				//判断一下是否有在生产的东西
				if(data[i].being_goods && data[i].being_goods.id){
					// data[i].being_goods.t = Math.floor(data[i].being_goods.t);
					if(data[i].being_goods.t > 0){
						data[i].being_goods.t--;
						//判断一下当前是否在这个工厂里面
						if(this._mf_id == i){
							factoryController.getInstance().initFormatSeconds();
						}
						if(data[i].being_goods.t == 0){
							//生产完成了
							this.factoryGoodGet(data[i].mf_id);

						}
					}
				}

			}
		}
		private factoryGoodGet(id){
			let tmp_websocket = webSocketJson.getInstance();
			let tmp_data = {
				'a':"factory_good_get",
				'm':"gzhq_factory",
				'd':{
					'mf_id':id
				},
				'code':1
			};
			tmp_websocket.sendMessage(tmp_data);
			// Laya.stage.event(NETWORKEVENT.FACTORYGOODGETBAK);
    }
    // 当前工厂
    public getCurrentFactory(){
      return this._mf_id
    }
	}
	
