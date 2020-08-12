// /**
// * name 
// */
import loginWin from './loginWin'
export default class loginView {
  private _loginwin: loginWin;
  
	constructor() {
    // console.log('初始化登录页面')
   
    
	}

	/**
	 * 初始化登录页面
	 */
	public init() {
		if (this._loginwin == null) {
			this._loginwin = new loginWin;
		}
		this._loginwin.onShow();
	}

	// /**
	//  * 展示登录按钮
	//  */
	public showLogin() {
		this._loginwin.onShowLogin();
	}
	/**
	 * 加载农场
	 */
	public updateFarm(x) {
		this._loginwin.onupdateFarm(x);
	}

	/*
	跳转展示主场景
	*/
	public showFarm() {
		this._loginwin.onShowFarm();
	}

}