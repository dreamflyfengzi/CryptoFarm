/**
* name 
*/
import { ui } from '../../ui/layaMaxUI'
import farmView from './farmView'
import farmModel from './farmModel'
import farmNetwork from './farmNetwork'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import infoController from '../info/infoController'
import webSocketJson from '../../net/webSocketJson'
import animalIndex from './animalIndex'
export default class farmController {
  private _farmview: farmView;
  private static _instance: farmController;
  public model: farmModel;
  private _network: farmNetwork;
  /** */
  public static getInstance(): farmController {
    if (farmController._instance == null) {
      farmController._instance = new farmController;
    }
    return farmController._instance;
  }

  constructor() {
    this.model = new farmModel;
    this._network = new farmNetwork;

    Laya.stage.on(GAMEEVENT.FARM, this, this.onShow);
    Laya.stage.on(NETWORKEVENT.FARMINITFIELD, this, this._network.FarmInitField);//获取农田信息
    Laya.stage.on(NETWORKEVENT.FARMINITSEEDLIST, this, this._network.FarmInitSeedList);//获取种子信息
    Laya.stage.on(NETWORKEVENT.FARMINITFLOWERGRADE, this, this._network.FarmInitFlowerGrade);//获取农田升级扩建
    Laya.stage.on(NETWORKEVENT.FARMINITPLANTFLOWER, this, this._network.FarmInitPlantFlower);//请求种植操作
    Laya.stage.on(NETWORKEVENT.FARMINITFLOWERFERTILIZE, this, this._network.FarmInitFlowerFertilize);//请求施肥操作
    Laya.stage.on(NETWORKEVENT.FARMINITFLOWERWATER, this, this._network.FarmInitFlowerWater);//请求浇水操作
    Laya.stage.on(NETWORKEVENT.FARMINITCOLLECTFLOWER, this, this._network.FarmCollectFlower);//花田收获
    Laya.stage.on(NETWORKEVENT.FARMINITGROWFLOWER, this, this._network.FarmInitGrowFlower);//植物成长推送
    Laya.stage.on(NETWORKEVENT.FARMINITFLOWERFAT, this, this._network.FarmInitFlowerFat);//肥力失效

    Laya.stage.on(NETWORKEVENT.ANIMALPRODUCTMATURE, this, this._network.AnimalProductMature); //动物产品成熟

  }
  /**显示农场场景(type:1.当前页面隐藏切换，2.当前页面去除切换) */
  public onShow(type) {
    if (this._farmview == null) {
      //初始化视图的类
      this._farmview = new farmView;
    }
    this._farmview.onShow(type);
    //发送显示农场底部按钮的信息
    infoController.getInstance();
    Laya.stage.event(GAMEEVENT.GETINITINFO) //获取用户信息
    // Laya.stage.event(GAMEEVENT.BOTTOMBTN, ['farm']);

    //试着进行websocke请求
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "send_data",
      'm': "gzhq_game",
      'd': { 'bs': 100 },
      'code': 1
    };
    tmp_websocket.sendMessage(tmp_data);


  }

  

	/**
	 * 展示农田信息
	 */
  public onShowFarmInitField(data) {
    this._farmview.onShowFarmInitField(data);
  }
	/**
	 * 设置种子列表信息
	 */
  public onFarmInitSeedList(data) {
    this._farmview.onFarmInitSeedList(data);
  }
	/**
	 * 展示花种列表
	 */
  public showSeepList() {
    this._farmview.showSeepList();
  }
	/**
	 * 修改单个农田的状态
	//  */
  public setThisLandStatic(id, str) {
    this._farmview.setThisLandStatic(id, str);
  }
	/**
	 * 设置单个农田的定时器
	 * id：农田的ID
	 */
  public setThisLandTimer(id) {
    this._farmview.setThisLandTimer(id)
  }
	/**
	 * 重置农田信息
	 */
  public initLand() {
    this._farmview.initLand();
  }
	/**
	 * 自动选择下一个农田
	 */
  public setPlantFramLand() {
    this._farmview.setPlantFramLand();
  }

  

}