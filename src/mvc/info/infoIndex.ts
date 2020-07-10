/**
* name 
*/
import CONST from '../../const/CONST'
import baseWindow from '../baseView/component/baseWindow'
import farmController from '../farm/farmController'
import {ui} from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import infoController from './infoController'
import NETWORKEVENT from '../event/NETWORKEVENT'
import factoryController from '../factory/factoryController'
	export class infoIndex extends baseWindow{
		
		private _topSence:Laya.Sprite;//顶层对象
		// //用户的信息
		// private _top_div:fairygui.GGroup;
		// private _bottom_div:fairygui.GGroup;
		// private upic:fairygui.GLoader;//用户头像
		// private uname:fairygui.GTextField;//用户姓名
		// private level:fairygui.GTextField;//用户等级
		// private uexp:fairygui.GProgressBar;//用户经验进度条
		// private gold_val:fairygui.GTextField;//用户金币
		// private top_kuan:fairygui.GGroup;//用户框
		// private farm_bottom:fairygui.GGroup;//农场页面的组
		// private factory_bottom:fairygui.GGroup;//工厂页面的组
		// private farm_green_btn:fairygui.GLoader;//农场的绿色按钮（进入工厂页面）
		// private factory_green_btn:fairygui.GLoader;//工厂的按钮绿色按钮（进入农场页面）
		constructor(){
			super();
		}
		/** */
		public onShow(){
      this._topSence = new ui.base.scene.topSceneUI;
			
			// //赋值
			// this._top_div = this._topSence.getChild('top_div').asGroup;
			// this._bottom_div = this._topSence.getChild('bottom_div').asGroup;
			// this.top_kuan = this._topSence.getChild('top_kuan').asGroup;
			// this.upic = this._topSence.getChild('upic').asLoader;
			// this.uname = this._topSence.getChild('uname').asTextField;
			// this.level = this._topSence.getChild('level').asTextField;
			// this.uexp = this._topSence.getChild('uexp').asProgress;
			// this.gold_val = this._topSence.getChild('gold_val').asTextField;

			// this.farm_bottom = this._topSence.getChild('farm_bottom').asGroup;
			// this.factory_bottom = this._topSence.getChild('factory_bottom').asGroup;
			// this.farm_green_btn = this._topSence.getChild('farm_green_btn').asLoader;
			// this.factory_green_btn = this._topSence.getChild('factory_green_btn').asLoader;
			
			this._topSence.scene.top_kuan.on(Laya.Event.CLICK,this,this.userCountInfo);
			this._topSence.scene.farm_green_btn.on(Laya.Event.CLICK,this,this.showSecen,['factory']);
			this._topSence.scene.factory_fu_btn.on(Laya.Event.CLICK,this,this.showSecen,['farm']);
			this._topSence.scene.top_kuan.on(Laya.Event.CLICK,this,function(){
        Laya.stage.event(NETWORKEVENT.USERCOUNTINFO)
      });
      //暂时
      this._topSence.scene.gold_kuan.on(Laya.Event.CLICK,this,function(){
        Laya.stage.event(NETWORKEVENT.SENDUSERGRADEUP)
      });

			//显示，自适应要在缩放之前做
			//  this._topSence.pivot(this._topSence.width/2,this._topSence.height/2);//设置轴心
			//  this._topSence.pos(CONST.STAGEWIDTH/2,CONST.STAGEHEIGHT/2);//设置坐标位置
			this.adaption();
			// this.setScale(this._topSence);
      this.showChild(this._topSence);
      this._topSence.mouseThrough = true 
		}
		/**
		 * 自适应
		 */
		private adaption(){
			//轴心在左上角，需要计算一下y轴的位置
			// this._topSence.y = -CONST.STAGEADAPTION;
			// console.log('this._login_group.y',this._login_group.y,CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH,CONST.DESIGNSTAGEHEIGHT);
			// var sc = CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH;
      // var a = (sc*CONST.DESIGNSTAGEHEIGHT-CONST.STAGEHEIGHT)/sc;
     
			// this._topSence.scene._top_div.y = this._topSence.y + CONST.ADAPTION;
			// this._topSence.y = this._topSence.y - CONST.ADAPTION;
		}
		//点击下面按钮，切换场景
		private showSecen(data){
			if(data == 'factory'){
        //这里初始化工厂
				factoryController.getInstance().onShow(1);
			}else if(data == 'farm'){
				//这里初始化农场
				farmController.getInstance().onShow(1);
			}
		}

		//获取用户信息
		public getUserInfo(){
			// //试着进行websocke请求
			// let tmp_websocket = net.webSocketJson.getInstance();
			// let tmp_data = {
			// 	'a':"init_info",
			// 	'm':"init",
			// 	'd':{},
			// 	'code':1
			// };
			// tmp_websocket.sendMessage(tmp_data);
		}
		/**
		 * 展示用户的信息
		 */
		public onShowUserInfo(){
			//获取用户的信息
			var data = dataGlobal.getInstance().userInfo;
			this._topSence.scene.upic.skin = data.pic;
			this._topSence.scene.uname.text = data.nickname;
			this._topSence.scene.level.text = data.grade;
			this._topSence.scene.uexp.value = Math.floor(data.exp/data.upgrade_exp*100)>100?100:Math.floor(data.exp/data.upgrade_exp*100);
			this._topSence.scene.gold_val.text = Math.floor(data.have_gold)+'';
		}
		/**
		 * 控制底部的按钮是否显示
		 * data:farm(农场页面)、factory(工厂页面)
		 */
		public showBottonDiv(data){
			if(data == 'farm'){//这个是在农场页面的
				this._topSence.scene.farm_bottom.visible = true;
				this._topSence.scene.factory_bottom.visible = false;
			}else if(data == 'factory'){//这个是在工厂页面的
				this._topSence.scene.factory_bottom.visible = true;
				this._topSence.scene.farm_bottom.visible = false;
			}else if(data == 'all'){//全部隐藏
				this._topSence.scene.factory_bottom.visible = false;
				this._topSence.scene.farm_bottom.visible = false;
			}
		}
		/**
		 * 显示用户信息层
		 */
		public showInfoDiv(){
			this._topSence.visible = true;
		}
		/**
		 * 隐藏用户信息层
		 */
		public hideInfoDiv(){
			this._topSence.visible = false;
		}
		/**
	 * 展示用户信息框
	 */
		public showUserInfoTip(){
			infoController.getInstance().showUserInfoTip();
		}
		/**
		 * 获取用户信息
		 */
		public userCountInfo(){
			// let tmp_http = net.httpJson.getInstance();
			// let tmp_data = {
			// 	'a':"user_count_info",
			// 	'm':"init",
			// 	'd':{},
			// 	'code':1
			// };
			// // console.log("发送websocket数据",tmp_data);
			// tmp_http.httpPost(CONST.LOGIN_URL,tmp_data);
			Laya.stage.event(NETWORKEVENT.STOREINFOBAK);
    }
  }
