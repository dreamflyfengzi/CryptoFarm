/**
* name 
*/
import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import NETWORKEVENT from '../event/NETWORKEVENT'
import dataJson from '../resconfig/dataJson'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
import net from '../../net/httpJson'
export default class upgradeWarehouse extends baseTips {

  private _upgradeTip: Laya.Sprite;//顶层对象
  private _id: string;//商品的ID
  // private _close:fairygui.GLoader;//关闭按钮
  private _num: number;//当前选择的数量
  private _tools_list: any;//物品的信息
  private _item_1: any;//物品1
  private _item_2: any;//物品1
  private _item_3: any;//物品1
  constructor() {
    super();
  }
  /** */
  public showUpgradeTip(tools_list) {
    //请求种植操作
    this._tools_list = tools_list;
    this._upgradeTip = new ui.warehouse.warehouseUpgradeUI();
    this._upgradeTip.pivotX = 0.5 * this._upgradeTip.width;
    this._upgradeTip.pivotY = 0.5 * this._upgradeTip.height;
    this.addChild(this._upgradeTip);
    this._upgradeTip.scene.close_btn.on(Laya.Event.CLICK, this, this.closeTip);
    this.showLayer();
    // 初始信息
    this.initInfo();
  }
  private closeTip() {
    this.hideLayer();
  }
  /**
   * 初始化物品信息
   */
  private initInfo() {
    var grade = dataGlobal.getInstance()
    var _info = dataGlobal.getInstance().warehouseInfo;
    // 'store_id'=>'仓库系统ID',
    // 'grade'=>'仓库等级',
    // 'num'=>'仓库总大小',
    // 'num2'=>'仓库已使用数量',
    // 'num3'=>'每格的大小',
    // 'name'=>'仓库名称',
    // 'data_info'=>array(//要获取的物品信息
    //     array(
    //         'good_id'=>'物品ID',
    //         'pos'=>'仓库位置',
    //         'num'=>'物品数量',
    //     ),
    // )
    this._upgradeTip.scene.outsider.getChildByName('upgrade_num').text = '仓库容量 +23';
    this._item_1 = this._upgradeTip.scene.outsider.getChildByName("buildings_item_1");
    this._item_2 = this._upgradeTip.scene.outsider.getChildByName("buildings_item_2");
    this._item_3 = this._upgradeTip.scene.outsider.getChildByName("buildings_item_3");
    this._item_1.getChildByName("item_checked").visible = false;
    this._item_2.getChildByName("item_checked").visible = false;
    this._item_3.getChildByName("item_checked").visible = false;
    for (var i in this._tools_list) {
      this.initItem(i, this._tools_list[i])
    }
  }

  /**
   * 绑定每一项
   */
  private initItem(index, itemObj) {
    if (index == 0) {
      this._item_1.getChildByName('item_num').text = '0/' + itemObj.num
      this._item_1.getChildByName('item_icon').skin = "warehouse/" + itemObj.id + '.png'
      this._item_1.getChildByName('item_btn').on(Laya.Event.CLICK, this, this.buyBuildings)
    }
    if (index == 1) {
      this._item_2.getChildByName('item_num').text = '0/' + itemObj.num
      this._item_2.getChildByName('item_icon').skin = "warehouse/" + itemObj.id + '.png'

    }
    if (index == 2) {
      this._item_3.getChildByName('item_num').text = '0/' + itemObj.num
      this._item_3.getChildByName('item_icon').skin = "warehouse/" + itemObj.id + '.png'
    }
  }

  /**
   * 购买建筑材料
   */
  private buyBuildings(){
    //todo
  }
  
  /**
   * 仓库升级
   */
  private warehouseUpgrade() {
    console.log("仓库升级")
    // var data = dataGlobal.getInstance().warehouseInfo;//查询仓库的信息
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "store_up_gread",
    //   'm': "store",
    //   'd': {
    //     'store_id': data.store_id
    //   },
    //   'code': 1
    // };
    // // console.log("发送websocket数据",tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    // // Laya.stage.event(NETWORKEVENT.STOREUPGRADEBAK);
  }

}
