/**
* name 
*/
import { ui } from '../../ui/layaMaxUI'
import baseView from '../baseView/component/baseView'
	export default class farmIndex extends baseView{
		// private _farmIndex:fairygui.GComponent;
		// private building_btn:fairygui.GLoader;//建筑按钮
		// private upgrade_btn:fairygui.GLoader;//升级按钮
		// private email_btn:fairygui.GLoader;//邮件按钮
		// private order_btn:fairygui.GLoader;//订单按钮
		// private land_div:Laya.Sprite;//花田的层
		// private muneClickStr:string;//当前所在的菜单操作
		// private bg_kuan:fairygui.GGroup;//背景框
		// private landArr:any;//花田的数组
		
		// private _seedListClass:mvc.farm.farmSeedList;
		// private _seedList:Laya.Sprite;//种子列表
		
		constructor(){
			super(ui.farm.farmIndexsceneUI);
		}
		/** */
		public onShow(type){
			// if(this._farmIndex == null){
			// 	this._farmIndex = fairygui.UIPackage.createObject('farm','farmIndex').asCom;
			// 	this.width = this._farmIndex.width;
			// 	this.height = this._farmIndex.height;

			// 	this._farmIndex.displayObject.name = 'farmIndex';
			// 	this.loadSeedList();
			// 	this.setScale(this._farmIndex.displayObject);
			// 	//初始化页面的参数
			// 	this.showInit();
				
			// 	//先添加一下农田的层
			// 	this.land_div = new Laya.Sprite;
			// 	this.land_div.name = 'land_div';
			// 	this.land_div.x = 12;
			// 	this.land_div.y = 1079;
			// 	this._farmIndex.displayObject.addChild(this.land_div);
			// 	//获取所有农田的状态
			// 	this.getFarmLand();
			// 	//获取农田的种子信息
			// 	this.getFarmSeed();
			// }
      // this.tweenAlphaAdd(this._farmIndex.displayObject,'farmIndex',type);
      this.tweenAlphaAdd('farm', type);
		}
		
		// /**
		//  * 初始化页面的参数
		//  */
		// private showInit(){
		// 	this.landArr = {};
		// 	//赋值
		// 	this.bg_kuan = this._farmIndex.getChild('bg_kuan').asGroup;
		// 	this.building_btn = this._farmIndex.getChild('building').asLoader;
		// 	this.upgrade_btn = this._farmIndex.getChild('upgrade').asLoader;
		// 	this.email_btn = this._farmIndex.getChild('email').asLoader;
		// 	this.order_btn = this._farmIndex.getChild('order').asLoader;
			
		// 	//监听点击
		// 	this.bg_kuan.onClick(this,this.cleanAllStatu);
		// 	this.building_btn.onClick(this,this.onMenuClick,['building']);
		// 	this.upgrade_btn.onClick(this,this.onMenuClick,['upgrade']);
		// 	this.email_btn.onClick(this,this.onMenuClick,['email']);
		// 	this.order_btn.onClick(this,this.onMenuClick,['order']);
		// 	this.cleanAllStatu();//重置所有的按钮状态
		// }
		// /**
		//  * 加载列表
		//  */
		// private loadSeedList(){
		// 	this._seedListClass = new mvc.farm.farmSeedList();
    //         this._seedList = this._seedListClass.init();
		// 	this._seedList.x = 30;
		// 	this._seedList.y = 2200;
		// 	this._seedList.zOrder = 2;
		// 	this._farmIndex.displayObject.addChild(this._seedList);
		// }
		// /**
		//  * 获取农田种子信息
		//  */
		// private getFarmSeed(){
		// 	//试着进行websocke请求
		// 	let tmp_websocket = net.webSocketJson.getInstance();
		// 	let tmp_data = {
		// 		'a':"init_seed_list",
		// 		'm':"init",
		// 		'd':{},
		// 		'code':1
		// 	};
		// 	console.log("发送websocket数据",tmp_data);
		// 	tmp_websocket.sendMessage(tmp_data);
		// 	// Laya.stage.event(NETWORKEVENT.FARMINITSEEDLIST);
		// }
		// /**
		//  * 设置列表信息
		//  */
		// public onFarmInitSeedList(data){
		// 	this._seedListClass.addSeedListItem(data);
			
		// }
		// /**
		//  * 展示花种列表
		//  */
		// public showSeepList(){
		// 	//展示虚拟的背景
		// 	this.showBgKuan();
		// 	this._seedListClass.setSeedListItem();
		// }
		// /**
		//  * 获取所有农田的状态
		//  */
		// private getFarmLand(){
		// 	//试着进行websocke请求
		// 	let tmp_websocket = net.webSocketJson.getInstance();
		// 	let tmp_data = {
		// 		'a':"init_field",
		// 		'm':"init",
		// 		'd':{},
		// 		'code':1
		// 	};
		// 	console.log("发送websocket数据",tmp_data);
		// 	tmp_websocket.sendMessage(tmp_data);
		// 	// Laya.stage.event(NETWORKEVENT.FARMINITFIELD);
		// }
		// /**
		//  * 展示农田信息
		//  */
		// public onShowFarmInitField(data){
		// 	//获取农田
		// 	var land_config = GAMECONFIG.farmLand;
		// 	for(var i in data){
		// 		var land_data = land_config[data[i].ff_id];
		// 		data[i].zOrder = land_data.zOrder;
		// 		data[i].x = land_data.x;
		// 		data[i].y = land_data.y;
		// 		this.forFarmLand(data[i]);
		// 	}
		// }
		// /**
		//  * 
		//  * @param data ：农田的参数，包括位置，状态等信息
		//  */
		// private forFarmLand(data){
		// 	var landObj = new mvc.farm.farmLand;
		// 	this.landArr[data.ff_id] = landObj;
			
		// 	this.land_div.addChild(landObj.init(data)); 
		// }
		// /**
		//  * 清除所有状态
		//  */
		// private cleanAllStatu(){
		// 	this.bg_kuan.visible = false;
		// 	this.bg_kuan.enabled = false;
		// 	//重置一下农田
		// 	farmController.getInstance().model.setLandId('');
		// 	farmController.getInstance().model.setClickLandStatic('');
		// 	this.setLandStatic('');
		// 	this.initLand();
		// 	//种子的框
		// 	this._seedListClass.hide();
		// 	this.recoveryBtn();
		// }
		// /**
		//  * 修改单个农田的状态
		//  */
		// public setThisLandStatic(id,str){
		// 	this.landArr[id].land_static = str;
		// }
		// /**
		//  * 设置单个农田的定时器
		//  * id：农田的ID
		//  */
		// public setThisLandTimer(id){
		// 	this.landArr[id].setTimer();
		// }
		// /**
		//  * 自动选择下一个农田
		//  */
		// public setPlantFramLand(){
		// 	//获取当前农田
		// 	var landId = farmController.getInstance().model.landId;
		// 	var arr = this.landArr;
		// 	for(var i in arr ){
		// 		if(arr[i].land_static == 'plant'){
		// 			arr[i].onClickLand();
		// 			return;
		// 		}
		// 	}
		// 	this.cleanAllStatu();//没有农田可以种植就直接关闭操作
		// }
		// /**
		//  * 重置农田
		//  */
		// public initLand(){
		// 	for(var i in this.landArr){
		// 		this.landArr[i].initLand();
		// 	}
		// }
		// /**
		//  * 显示虚拟背景
		//  */
		// private showBgKuan(){
		// 	//显示模糊背景
		// 	this.bg_kuan.visible = true;
		// 	this.bg_kuan.enabled = true;
		// }
		// /**
		//  * 建筑物点击:type:点击的按钮
		//  */
		// private onMenuClick(type){
		// 	//判断一下当前是否在这个菜单里面了
		// 	// if(this.muneClickStr == type){
		// 	// 	return;
		// 	// }
		// 	//恢复所有的按钮状态
		// 	this.recoveryBtn(type);
		// 	switch(type){
		// 		case 'building':
		// 			console.log('点击建筑物');
		// 			this.onClickBuilding();
		// 		break;
		// 		case 'upgrade':
		// 			console.log('点击升级');
		// 			this.onClickUpgrade();
		// 		break;
		// 		case 'email':
		// 			console.log('点击邮箱');
		// 			this.email_btn.url = 'ui://farm/btn_youxiang2';
		// 		break;
		// 		case 'order':
		// 			console.log('点击订单');
		// 			this.onClickOrder();
		// 			// this.order_btn.url = 'ui://farm/btn_dingdan2';
		// 		break;
		// 	}
		// }
		// /**
		//  * 恢复所点击按钮的状态
		//  * type:类型
		//  */
		// private recoveryBtn(type?:string){
		// 	this.muneClickStr = type;
		// 	this.building_btn.url = 'ui://farm/btn_cangku1';
		// 	this.upgrade_btn.url = 'ui://farm/btn_shengji1';
		// 	this.email_btn.url = 'ui://farm/btn_youxiang1';
		// 	this.order_btn.url = 'ui://farm/btn_dingdan1';
			
		// }
		// /**
		//  * 点击升级按钮
		//  */
		// private onClickUpgrade(){
		// 	this.upgrade_btn.url = 'ui://farm/btn_shengji2';
		// 	this.showBgKuan();
		// 	farmController.getInstance().model.setClickLandStatic('upgrade');
		// 	this.setLandStatic('upgrade');//设置花田状态为升级
		// 	this.initLand();//重置下花田
		// }
		// /**
		//  * 设置所有花田的状态
		//  */
		// private setLandStatic(str:string){
		// 	var data = this.landArr;
		// 	for(var i in data){
		// 		data[i].land_static = str;
		// 	}
		// }
		// /**
		//  * 点击建筑按钮
		//  */
		// private onClickBuilding(){
		// 	warehouseController.getInstance().onShowWarehouse();
			
		// }
		// /**
		//  * 点击订单
		//  */
		// private onClickOrder(){
		// 	orderController.getInstance().onShowOrder();
		// }


	}
