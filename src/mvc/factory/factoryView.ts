/**
* name 
*/
import factoryController from './factoryController'
import factoryInfo from './factoryInfo'
import factoryIndex from './factoryIndex'
import factoryUpgrade from './factoryUpgrade'
import factoryMake from './factoryMake'
import factoryModel from './factoryModel';

export default class factoryView {
  private _factoryCom: factoryIndex;
  private _factoryInfoCom: factoryInfo;
  private _factoryUpgradeCom: factoryUpgrade;
  constructor() {
  }
  /**显示工厂场景(type:1.当前页面隐藏切换，2.当前页面去除切换 */
  public onShow(type) {
    if (this._factoryCom == null) {
      this._factoryCom = new factoryIndex;
    }
    this._factoryCom.onShow(type);
  }
  /**
   * 展示工厂的信息
   */
  public showFactory() {
    this._factoryCom.showFactory();
  }
  /**
   * 显示工厂加工页面
   */
  public onShowFactoryInfo(id: string) {
    this._factoryInfoCom = new factoryInfo;
    this._factoryInfoCom.onShowFactoryInfo(id);
  }
  /**
   * 初始化工厂详情的页面
   */
  public initProduction(id: string) {
    if (this._factoryInfoCom) {
      this._factoryInfoCom.initProduction(id);
    }
  }
  /**
  * 添加工厂可生产物品信息
  */
  public initProductionGoodList() {
    if (this._factoryInfoCom) {
      if (factoryController.getInstance().model._mf_id) {
        this._factoryInfoCom.initProductionGoodList();
      }
    }
  }
  /**
   * 初始化工厂详情页面
   */
  public initFactoryInfo(id: string) {
    if (this._factoryInfoCom) {
      this._factoryInfoCom.initFactoryInfo(id);
    }
  }
  /**
   * 展示生产物品详情弹窗
   */
  public showFactoryMake(mf_id: string, id: string) {
    var _factoryMake = new factoryMake;
    _factoryMake.showFactoryMake(mf_id, id);
  }
  /**
   * 展示工厂升级弹窗
   */
  public showFactoryUpgrade(id: string) {
    this._factoryUpgradeCom = new factoryUpgrade;
    this._factoryUpgradeCom.showFactoryUpgrade(id);
  }
  /**
   * 刷新升级框的信息
   */
  public initFactoryGradeList() {
    if (this._factoryUpgradeCom) {
      this._factoryUpgradeCom.initFactoryGradeList();
    }
  }
  /**
   * 工厂生产位的倒计时
   */
  public initFormatSeconds() {
    if (this._factoryInfoCom) {
      this._factoryInfoCom.initFormatSeconds();
    }
  }
  /**
   * 关闭工厂详情页面
   */
  public closeFactoryInfo() {
    if (this._factoryInfoCom) {
      this._factoryInfoCom.closeFactoryInfo();
    }
  }
}
