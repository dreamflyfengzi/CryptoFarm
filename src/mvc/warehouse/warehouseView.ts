/**
* name 
*/
import warehouseIndex from './warehouseIndex'
import warehouseSellTip from './warehouseSellTip'
import warehouseUpgradeTip from './upgradeWarehouse'
export default class warehouseView {
  private _warehouseCom: warehouseIndex;
  private _warehouseSellCom: warehouseSellTip;
  private _warehouseUpgradeCom: warehouseUpgradeTip;
  constructor() {
    //先添加包
    // fairygui.UIConfig.packageFileExtension = 'json';
    // var warehouse = resConfig.getResUrl('warehouse').split(".");
    // fairygui.UIPackage.addPackage(warehouse[0]);
  }
  /**显示仓库弹窗 */
  public onShowWarehouse() {
    if (this._warehouseCom == null) {
      this._warehouseCom = new warehouseIndex;
    }
    this._warehouseCom.onShowWarehouse();
  }
  /**
   * 展示仓库的列表信息
   */
  public initWarehouseGoodList() {
    if (this._warehouseCom) {
      //初始化视图的类
      this._warehouseCom.initWarehouseGoodList();
    }
  }
  /**
   * 设置仓库的基本信息
   */
  public initWarehouseInfo() {
    if (this._warehouseCom) {
      //初始化视图的类
      this._warehouseCom.initWarehouseInfo();
    }
  }
  /**
   * 出售框
   */
  public showSellTip(id: string) {
    this._warehouseSellCom = new warehouseSellTip;
    this._warehouseSellCom.showSellTip(id);
  }
  /**
  * 展示仓库扩建
  */
  public showUpgradeTip(tools_list) {
    this._warehouseUpgradeCom = new warehouseUpgradeTip;
    this._warehouseUpgradeCom.showUpgradeTip(tools_list);
  }
}
