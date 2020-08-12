/**
* name 
*/
import NETWORKEVENT from '../event/NETWORKEVENT'
import materialView from './materialView'
import materialNetwork from './materialNetwork'
import materialModel from './materialModel'
export default class materialController{
	private _materialview: materialView;
	private static _instance:materialController;
	private _network: materialNetwork;
	public model: materialModel;
	/** */
	public static getInstance():materialController{
		if(materialController._instance == null){
			materialController._instance = new materialController;
		}
		return materialController._instance;
	}

	constructor(){
		this.model = new materialModel;
		this._network = new materialNetwork;
		Laya.stage.on(NETWORKEVENT.MATERIALINFOBAK,this,this._network.MaterialInfoBak);//获取当天订单列表的协议
		Laya.stage.on(NETWORKEVENT.SENDGOODMATERIALBAK,this,this._network.SendGoodBak);//获取当天订单列表的协议
		// Laya.stage.on(NETWORKEVENT.LOTTERYACTBAK,this,this._network.MaterialActBak);//提交订单协议
	}
	/**显示订单弹窗 */
	public onShow(){
		if(this._materialview == null){
			//初始化视图的类
			this._materialview = new materialView;
		}
		this._materialview.onShowOrder();
	}
	/**
	 * 获取材料信息
	 */
	public sendGood(data){
		if(this._materialview == null){
			//初始化视图的类
			this._materialview = new  materialView;
    }
		this._materialview.sendGood(data);
	} 
	/**
	 * 展示任务列表
	 */
	public setMaterialList(){
		this._materialview.setMaterialList();
	}
	// /**
	//  * 初始化某个任务
	//  * id:任务ID
	//  */
	// public clickOrderItem(id){
	// 	this._materialview.clickOrderItem(id);
	// }
	/**
	 *前往的框
	 *x:框的x
	 *y:框的y
	 *id:物品id
	 */
	public showOrderTip(x:number, y:number,info:any,index:number){
		this._materialview.showOrderTip(x,y,info,index);
	}
	/**
	 * 展示时间倒计时
	 */
	public showOrderTime(id){
		this._materialview.showOrderTime(id);
	}
	// /**
	//  * 重新获取一下任务订单
	//  */
	// public getLotteryInfo(){
	// 	this._materialview.getLotteryInfo();
	// }
	// /**
	//  * 关闭订单弹窗
	//  */
	// public closeOrder(){
	// 	this._materialview.closeOrder();
	// }
}