/**
* name 
*/
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import infoModel from './infoModel'
import infoview from './infoView'
import infoNetwork from './infoNetwork'
export default class infoController{
	private _infoview: infoview;
	private static _instance:infoController;
	public model: infoModel;
	private _network: infoNetwork;
	
	/** */
	public static getInstance():infoController{
		if(infoController._instance == null){
			infoController._instance = new infoController;
		}
		return infoController._instance;
	}

	constructor(){
		this.model = new infoModel;
		this._network = new infoNetwork;
		Laya.stage.on(GAMEEVENT.GETINITINFO,this,this.getUserInfo);//获取用户信息
		Laya.stage.on(NETWORKEVENT.INITINFO,this,this._network.InitInfo);//获取用户信息的回调
		Laya.stage.on(GAMEEVENT.BOTTOMBTN,this,this.showBottonDiv);//获取用户信息
		Laya.stage.on(GAMEEVENT.HIDEINFODIV,this,this.hideInfoDiv);//隐藏用户信息
		Laya.stage.on(GAMEEVENT.SHOWINFODIV,this,this.showInfoDiv);//显示用户信息
		Laya.stage.on(NETWORKEVENT.SENDUSERGRADEUP,this,this._network.SendUserGradeUp);//显示用户信息	
		Laya.stage.on(NETWORKEVENT.USERCOUNTINFO,this,this._network.UserCountInfo);//玩家信息框获取的协议
	}
	// /**添加用户信息的内容 */
	public onShow(){
		if(this._infoview == null){
			//初始化视图的类
			this._infoview = new infoview;
		}
    this._infoview.onShow();
    this.onShowUserInfo() //暂时
	}
	/**
	 * 设置页面用户信息
	 */
	public onShowUserInfo(){
		this._infoview.onShowUserInfo();
	}
	/**
	 * 获取用户信息
	 */
	public getUserInfo(){
		this._infoview.getUserInfo();
	}
	/**
	 * 控制底部的按钮是否显示
	 * data:farm(农场页面)、factory(工厂页面)
	 */
	public showBottonDiv(data){
		this._infoview.showBottonDiv(data);
	}
	/**
	 * 显示用户信息层
	 */
	public showInfoDiv(){
		this._infoview.showInfoDiv();
	}
	/**
	 * 隐藏用户信息层
	 */
	public hideInfoDiv(){
		this._infoview.hideInfoDiv();
	}
	/**
	 * 获取用户信息
	 */
	public userCountInfo(){
		this._infoview.userCountInfo();
	}
	/**
	 * 展示用户信息框
	 */
	public showUserInfoTip(){
		this._infoview.showUserInfoTip();
	}
	/**
	 * 用户升级弹窗
	 */
	public infoUserUpgradeTip(data){
		this._infoview.infoUserUpgradeTip(data);
	}
	
	
}