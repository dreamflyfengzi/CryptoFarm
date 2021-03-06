/**
* name 
*/
import farmIndex from './farmIndex'
export default class farmView {
  private _indexCom: farmIndex;//场景的对象

  constructor() {
  }
  /**显示农场场景(type:1.当前页面隐藏切换，2.当前页面去除切换) */
  public onShow(type) {
    if (this._indexCom == null) {
      this._indexCom = new farmIndex;
    }
    this._indexCom.onShow(type);
  }


  /**
   * 展示农田信息
   */
  public onShowFarmInitField(data) {
    this._indexCom.onShowFarmInitField(data);
  }
  /**
   * 设置种子列表信息
   */
  public onFarmInitSeedList(data) {
    this._indexCom.onFarmInitSeedList(data);
  }
  /**
   * 展示花种列表
   */
  public showSeepList() {
    this._indexCom.showSeepList();
  }
  /**
   * 修改单个农田的状态
   */
  public setThisLandStatic(id, str) {
    this._indexCom.setThisLandStatic(id, str);
  }
  /**
   * 设置单个农田的定时器
   * id：农田的ID
   */
  public setThisLandTimer(id) {
    this._indexCom.setThisLandTimer(id)
  }
  /**
   * 重置农田信息
   */
  public initLand() {
    this._indexCom.initLand();
  }
  /**
   * 自动选择下一个农田
   */
  public setPlantFramLand() {
    this._indexCom.setPlantFramLand();
  }

  



}
