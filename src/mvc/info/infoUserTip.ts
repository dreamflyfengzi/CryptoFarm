/**
* name 
*/
 import baseTips from '../baseView/component/baseTips'
	export default class infoUserTip extends baseTips{
		
		// private _userInfoTip:fairygui.GComponent;//顶层对象
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
		// /** */
		// public showUserInfoTip(){
		// 	this._userInfoTip = fairygui.UIPackage.createObject('base','user_info_tip').asCom;
		// 	this.setScale(this._userInfoTip.displayObject);
		// 	this._userInfoTip.displayObject.pivotX = 0.5*this._userInfoTip.displayObject.width;
		// 	this._userInfoTip.displayObject.pivotY = 0.5*this._userInfoTip.displayObject.height;
		// 	this.addChild(this._userInfoTip.displayObject);
		// 	this.tweenShow();
		// 	//赋值
		// 	this.close = this._userInfoTip.getChild('close').asLoader;
		// 	this.uname = this._userInfoTip.getChild('uname').asTextField;
		// 	this.grade = this._userInfoTip.getChild('grade').asTextField;
		// 	this.id = this._userInfoTip.getChild('id').asTextField;
		// 	this.exp_progress = this._userInfoTip.getChild('exp_progress').asProgress;
		// 	this.exp = this._userInfoTip.getChild('exp').asTextField;
		// 	this.flower_num = this._userInfoTip.getChild('flower_num').asTextField;
		// 	this.order_num = this._userInfoTip.getChild('order_num').asTextField;
		// 	this.good_num = this._userInfoTip.getChild('good_num').asTextField;
			
		// 	//获取用户的信息
		// 	var data = dataGlobal.getInstance().userInfo;
		// 	this.uname.text = data.nickname;
		// 	this.id.text = data.uid;
		// 	this.grade.text = data.grade;
		// 	this.exp.text = Math.floor(data.exp)+'/'+Math.floor(data.upgrade_exp);
		// 	this.exp_progress.value = Math.floor(data.exp)/Math.floor(data.upgrade_exp)*100;

		// 	this.flower_num.text = data.flower_num;
		// 	this.order_num.text = data.order_num;
		// 	this.good_num.text = data.goods_num;
			
		// 	this.close.displayObject.on(Laya.Event.CLICK,this,this.closeUserInfoKuan);
		// }
		// private closeUserInfoKuan(){
		// 	this.tweenHide();
		// }
		
		
	}
