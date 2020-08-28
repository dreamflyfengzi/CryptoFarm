/**
* name 
*/
import NETWORKEVENT from '../event/NETWORKEVENT'
import GAMEEVENT from '../event/GAMEEVENT'
import factoryModel from './factoryModel'
import factoryView from './factoryView'
import factoryNetwork from './factoryNetwork'
export default class factoryController{
	private _factoryview:factoryView;
	private static _instance:factoryController;
	public model: factoryModel;
	private _network: factoryNetwork;
	/** */
	public static getInstance():factoryController{
		if(factoryController._instance == null){
			factoryController._instance = new factoryController;
		}
		return factoryController._instance;
	}

	constructor(){
		this.model = new factoryModel;
		this._network = new factoryNetwork;
		Laya.stage.on(NETWORKEVENT.SENDFACTORYBAK,this,this._network.SendFactoryBak);//获取工厂信息
		Laya.stage.on(NETWORKEVENT.FACTORYCREATEBAK,this,this._network.FactoryCreateBak);//工厂建造的协议
		Laya.stage.on(NETWORKEVENT.FACTORYOPENSEATNUMBAK,this,this._network.FactoryOpenSeatNumBak);//工厂生产产品完成后用户点击收获
		Laya.stage.on(NETWORKEVENT.SENDGOODBAK,this,this._network.SendGoodBak);//获取玩家某些物品数量的协议   2222
		Laya.stage.on(NETWORKEVENT.FACTORYACTBAK,this,this._network.FactoryAct);//工厂生产产品协议
		Laya.stage.on(NETWORKEVENT.FACTORYUPGRADEBAK,this,this._network.FactoryUpGrade);//工厂升级的协议
    Laya.stage.on(NETWORKEVENT.FACTORYGOODGETBAK,this,this._network.FactoryGoodGet);//工厂生产产品完成的协议
    
    //新增加的
    Laya.stage.on(NETWORKEVENT.FACTORYADDWAITING,this,this._network.FactoryAddWaiting) //加入待生产队列
		Laya.stage.on(NETWORKEVENT.FACTORYGOODSAVEBAK,this,this._network.FactoryGoodSave);//工厂生产产品完成后用户点击收获
		Laya.stage.on(NETWORKEVENT.FACTORYPRODUCTSPEEDUP,this,this._network.FactoryProductSpeedUP);//工厂生产立即生产完成
		
	}
	/**显示工厂场景(type:1.当前页面隐藏切换，2.当前页面去除切换) */
	public onShow(type?:any){
		if(this._factoryview == null){
			//初始化视图的类
			this._factoryview = new factoryView;
		}
		this._factoryview.onShow(type);
		//发送显示农场底部按钮的信息
		// Laya.stage.event(GAMEEVENT.BOTTOMBTN,['factory']);
	}
	/**
	 * 展示工厂的信息
	 */
	public showFactory(){
		this._factoryview.showFactory();
	}
	/**
	 * 显示工厂加工页面
	 */
	public onShowFactoryInfo(id:string){
		this._factoryview.onShowFactoryInfo(id);

	}
	/**
	 * 工厂详细页面生产位的处理
	 */
	public initProduction(id:string){
		if(this._factoryview){
			this._factoryview.initProduction(id);
		}
	}
	/**
	 * 添加工厂可生产物品信息
	 */
	public initProductionGoodList(){
		if(this._factoryview){
			this._factoryview.initProductionGoodList();
		}
	}
	/**
	 * 初始化工厂详情页面
	 */
	public initFactoryInfo(id:string){
		if(this._factoryview){
			this._factoryview.initFactoryInfo(id);
		}
	}	
	/**
	 * 展示制造弹窗
	 */
	public showFactoryMake(mf_id:string,id:string){
		if(this._factoryview){
			this._factoryview.showFactoryMake(mf_id,id);
		}
	}
	/**
	 * 展示工厂升级弹窗
	 */
	public showFactoryUpgrade(id:string){
		if(this._factoryview){
			this._factoryview.showFactoryUpgrade(id);
		}
	}
	/**
	 * 刷新升级框的信息
	 */
	public initFactoryGradeList(){
		if(this._factoryview){
			this._factoryview.initFactoryGradeList();
		}
	}
	/**
	 * 工厂生产位的倒计时
	 */
	public initFormatSeconds(){
		if(this._factoryview){
			this._factoryview.initFormatSeconds();
		}
	}
	/**
	 * 关闭工厂详情页面
	 */
	public closeFactoryInfo(){
		if(this._factoryview){
			this._factoryview.closeFactoryInfo();
		}
	}
}