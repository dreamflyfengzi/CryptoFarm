/**
* name 
*/
 import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI';
import dataGlobal from '../resconfig/dataGlobal'
	export default class infoUserTip extends baseTips{
		
		private _userInfoTip:Laya.Sprite;//顶层对象
		// //用户的信息
		// private uname:fairygui.GTextField;//用户姓名
		// private grade:fairygui.GTextField;//用户等级
		// private id:fairygui.GTextField;//用户ID
		// private exp_progress:fairygui.GProgressBar;//用户经验进度条
		// private exp:fairygui.GTextField;//用户经验
		// private flower_num:fairygui.GTextField;//花卉数量
		// private order_num:fairygui.GTextField;//订单数量
		// private good_num:fairygui.GTextField;//商品数量
		// private close:fairygui.GLoader;//商品数量
		constructor(){
			super();
			
		}
		/** */
		public showUserInfoTip(){
			this._userInfoTip = new ui.base.tip.user_info_tipUI;
			// this.setScale(this._userInfoTip.displayObject);
			this._userInfoTip.pivotX = 0.5*this._userInfoTip.width;
			this._userInfoTip.pivotY = 0.5*this._userInfoTip.height;
			this.addChild(this._userInfoTip);
			this.tweenShow();
			
			//获取用户的信息
      var data = dataGlobal.getInstance().userInfo;
			this._userInfoTip.scene.uname.text = data.nickname;
			this._userInfoTip.scene.id.text = data.uid;
			this._userInfoTip.scene.grade.text = data.grade;
			this._userInfoTip.scene.exp.text = Math.floor(data.exp)+'/'+Math.floor(data.upgrade_exp);
			this._userInfoTip.scene.exp_progress.value = Math.floor(data.exp)/Math.floor(data.upgrade_exp);

			this._userInfoTip.scene.flower_num.text = data.flower_num;
			this._userInfoTip.scene.order_num.text = data.order_num;
			this._userInfoTip.scene.good_num.text = data.goods_num;
			
			this._userInfoTip.scene.close_btn.on(Laya.Event.CLICK,this,this.closeUserInfoKuan);
		}
		private closeUserInfoKuan(){
			this.tweenHide();
		}
		
		
	}
