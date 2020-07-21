import { ui } from '../../ui/layaMaxUI'
import baseWindow from '../baseView/component/baseWindow'
import exchangeController from './exchangeController'
import tmp_http from '../../net/httpJson'
import dataJson from '../resconfig/dataJson'
import dataGlobal from '../resconfig/dataGlobal'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import globalFun from '../resconfig/globalFun'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
export default class screenScene extends baseWindow {
  private _screenIndex: Laya.Sprite;
  private _screen_list: Laya.List; //筛选类型

  constructor() {
    super();
  }

  /**显示筛选弹窗 */
  public onShow() {
    this._screenIndex = new ui.exchange.screenUI();
    this._screenIndex.name = 'exchangeIndex';
    this._screenIndex.pivot(this._screenIndex.width / 2, this._screenIndex.height / 2);//设置轴心
    this.addChild(this._screenIndex);

    this._screen_list = this._screenIndex.scene.screen_list;
    // 初始化列表
    this.initScreenList();

    this.tweenShow();
    this._screenIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeexchange);
    this._screenIndex.scene.cancel_btn.on(Laya.Event.CLICK, this, this.closeexchange);
    this._screenIndex.scene.confirm_btn.on(Laya.Event.CLICK, this, this.confirmScreen);
    // this._screenIndex.scene.screen_btn.on(Laya.Event.CLICK, this, this.goScreen);
  }

  /**
   * 关闭按钮
   */
  public closeexchange() {
    this.tweenHide();
  }

  /**
   * 确认筛选
   */
  public confirmScreen() {
    console.log('发送网络请求进行筛选')
    this.tweenHide();
  }

  /**
   * 初始化列表项
   * initScreenList
   */
  public initScreenList() {
    // var data = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[this._mf_id][this._id].good;//获取列表信息
    this._screen_list.dataSource = []
    console.log(this._screen_list)
    var data = [1, 2, 3, 4]
    for (var i in data) {
      var _data = {
        screen_title: {
          text: '今日',
        },
        screen_check: {
          visible: false
        }
      }
      this._screen_list.addItem(_data)
      this._screen_list.renderHandler = new Laya.Handler(this, this.itemFatSelectHandler, null, false)
    }
  }

  /**
   * 渲染成功添加事件
   */
  private itemFatSelectHandler(cell, index) {
    cell.off(Laya.Event.CLICK, this, this.onCellClick)
    cell.on(Laya.Event.CLICK, this, this.onCellClick, [cell, index])
  }

  private onCellClick(cell, index) {
    var _item = this._screen_list.getItem(index);
    _item.screen_check.visible = !_item.screen_check.visible;
    console.log(_item, _item.screen_check.visible)
    this._screen_list.setItem(index, _item)
  }

}