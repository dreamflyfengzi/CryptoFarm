/**
* name 
*/
import GAMEEVENT from "../event/GAMEEVENT"
import { loginModel } from "./loginModel"
import loginView from "./loginView"
import { loginNetwork } from "./loginNetwork"
import resManger from '../resconfig/resManger'
import resConfig from '../resconfig/resConfig'

export default class loginController {

  private static _instance: loginController;
  private _loginview: loginView;
  public model: loginModel;
  private _network: loginNetwork;


  /** */
  public static getInstance(): loginController {
 
    if (loginController._instance == null) {
      loginController._instance = new loginController;
    }
    return loginController._instance;
  }
  /** */
  constructor() {
    this.model = new loginModel;
    this._network = new loginNetwork;

    // this.initView();
    // //监听login页面
    Laya.stage.on(GAMEEVENT.ONRESPROGRESSLOGIN,this,this.onResProgress);
    Laya.stage.on(GAMEEVENT.ONRESCOMPLETELOGIN,this,this.onResComplete);
    // //监听农场首页的预加载
    Laya.stage.on(GAMEEVENT.ONPROGRESSFARM,this,this.onResProgressFarm);
    Laya.stage.on(GAMEEVENT.ONLOADCOMPLETEFARM,this,this.onResCompleteFarm);
   this.onResComplete()
    // //设置网络监听
    // //设置登陆请求成功回调监听
    // Laya.stage.on(NETWORKEVENT.HTTP_LOGIN_OK,this,this._network.onLoginOK);
    // //设置登陆请求失败回调监听
    // Laya.stage.on(NETWORKEVENT.HTTP_ERROR_BAK,this,this._network.onLoginErr);
    
    // //设置游戏显示主场景的请求监听（在建议完长连接之后会发送跳入主场景的事件）
    // Laya.stage.on(GAMEEVENT.LOGIN_FARM,this,this.showFarmView);
    
    //websocket测试
    //Laya.stage.on("send_data_bak",this,this.send_data_bak);
    Laya.stage.on(GAMEEVENT.TEST_LOGIN_FARM,this,this.showFarmView); //测试打开农场
  }

  //websocket测试
  // public send_data_bak(data){
  // 	console.log("websocket测试返回的数据：",data);
  // }

  //显示主场景
  public showFarmView(){
    //确保只做一只跳入主场景的操作
  	Laya.stage.off(GAMEEVENT.LOGIN_FARM,this,this.showFarmView);
      
  	// //初始化websocket网络(一定要在登陆成功之后初始化网络连接，否则无法用websocket)
  	// net.webSocketJson.getInstance();
  	this._loginview.showFarm();
  	// //初始化用户信息的层
  	// infoController.getInstance().onShow();
  }

	/**
	 * 加载login过程
	 */
  private onResProgress(){
    console.log('加载login---')
  }
	/**
	 * 加载login完成
	 */
  private onResComplete(){
  	//清除掉监听
  	Laya.stage.off(GAMEEVENT.ONRESPROGRESSLOGIN,this,this.onResProgress);
    Laya.stage.off(GAMEEVENT.ONRESCOMPLETELOGIN,this,this.onResComplete);
    console.log('加载login--ok-')
    
    // console.log("xxxxxxx",Laya.loader.getRes("ui.json")) 
  	//这里预加载农田的
  	resManger.getInstance().addGroupRes(resConfig.farm);
    resManger.getInstance().startLoad(GAMEEVENT.ONPROGRESSFARM,GAMEEVENT.ONLOADCOMPLETEFARM);
  	//显示loading页面
  	this.initView();
    // //初始化弹窗

  	// tipController.getInstance();
  }
  /**
   * 加载农场过程
   * x:加载进度
   */
  private onResProgressFarm(x){
    this._loginview.updateFarm(x);
  }
  /**
   * 加载农场完成
   */
  private onResCompleteFarm(){ 

  	//清除掉监听
  	Laya.stage.off(GAMEEVENT.ONPROGRESSFARM,this,this.onResProgressFarm);
  	Laya.stage.off(GAMEEVENT.ONLOADCOMPLETEFARM,this,this.onResCompleteFarm);
  	//调用显示页面

    this._loginview.showLogin();
    
  }
  /** */
  private initView(){
  	if(this._loginview == null){
  		this._loginview = new loginView;
  	}
    this._loginview.init();
    // console.log('加载农场')
    // this._loginview.showLogin();
  }
}