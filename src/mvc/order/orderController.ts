/**
* name 
*/
import NETWORKEVENT from '../event/NETWORKEVENT'
import orderView from './orderView'
import orderNetwork from './orderNetwork'
import orderModel from './orderModel'
export default class orderController{
	private _orderview: orderView;
	private static _instance:orderController;
	public model: orderModel;
	private _network: orderNetwork;
	/** */
	public static getInstance():orderController{
		if(orderController._instance == null){
			orderController._instance = new orderController;
		}
		return orderController._instance;
	}

	constructor(){
		this.model = new orderModel;
		this._network = new orderNetwork;
		Laya.stage.on(NETWORKEVENT.LOTTERYINFOBAK,this,this._network.LotteryInfoBak);//获取当天订单列表的协议
		Laya.stage.on(NETWORKEVENT.SENDGOODBAK,this,this._network.SendGoodBak);//获取当天订单列表的协议
		Laya.stage.on(NETWORKEVENT.LOTTERYACTBAK,this,this._network.LotteryActBak);//提交订单协议
	}
	/**显示订单弹窗 */
	public onShowOrder(){
		if(this._orderview == null){
			//初始化视图的类
			this._orderview = new orderView;
		}
		this._orderview.onShowOrder();
	}
	/**
	 * 获取物品
	 */
	public sendGood(data){
		if(this._orderview == null){
			//初始化视图的类
			this._orderview = new  orderView;
    }
		this._orderview.sendGood(data);
	}
	/**
	 * 展示任务列表
	 */
	public setLotteryList(){
		this._orderview.setLotteryList();
	}
	/**
	 * 初始化某个任务
	 * id:任务ID
	 */
	public clickOrderItem(id){
		this._orderview.clickOrderItem(id);
	}
	/**
	 *前往的框
	 *x:框的x
	 *y:框的y
	 *id:物品id
	 */
	public showOrderGoodGoTip(x:number,y:number,id:any){
		this._orderview.showOrderGoodGoTip(x,y,id);
	}
	/**
	 * 展示时间倒计时
	 */
	public showOrderTime(){
		this._orderview.showOrderTime();
	}
	/**
	 * 重新获取一下任务订单
	 */
	public getLotteryInfo(){
		this._orderview.getLotteryInfo();
	}
	/**
	 * 关闭订单弹窗
	 */
	public closeOrder(){
		this._orderview.closeOrder();
	}
}