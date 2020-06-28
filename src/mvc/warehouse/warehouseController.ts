/**
* name 
*/
import warehouseView from './warehouseView'
import warehouseModel from './warehouseModel'
import warehouseNetwork from './warehouseNetwork'
import NETWORKEVENT from '../event/NETWORKEVENT'
export default class warehouseController{
	private _warehouseview:warehouseView;
	private static _instance:warehouseController;
	public model:warehouseModel;
	private _network:warehouseNetwork;
	/** */
	public static getInstance():warehouseController{
		if(warehouseController._instance == null){
			warehouseController._instance = new warehouseController;
		}
		return warehouseController._instance;
	}

	constructor(){
		this.model = new warehouseModel;
		this._network = new warehouseNetwork;
		Laya.stage.on(NETWORKEVENT.STOREINFOBAK,this,this._network.StoreInfoBak);//获取仓库信息
		Laya.stage.on(NETWORKEVENT.STOREUPGRADEBAK,this,this._network.StoreUpGread);//仓库出升级的协议
		Laya.stage.on(NETWORKEVENT.STOREGOODDEL,this,this._network.StoreGoodDel);//从仓库出售物品的协议
	}
	/**显示仓库弹窗 */
	public onShowWarehouse(){
    //初始化视图的类
		this._warehouseview = new warehouseView;
		this._warehouseview.onShowWarehouse();
	}
	/**
	 * 展示仓库的列表信息
	 */
	public initWarehouseGoodList(){
		if(this._warehouseview){
			//初始化视图的类
			this._warehouseview.initWarehouseGoodList();
		}
	}
	/**
	 * 设置仓库的基本信息
	 */
	public initWarehouseInfo(){
		if(this._warehouseview){
			this._warehouseview.initWarehouseInfo();
		}
	}
	/**
	 * 出售框
	 */
	public showSellTip(id:string){
		if(this._warehouseview){
			this._warehouseview.showSellTip(id);
		}
	}
	
}