/**
* name 
*/
import { ui } from '../../ui/layaMaxUI'
import baseWindow from '../baseView/component/baseWindow'
import rankController from './rankController'
import tmp_http from '../../net/httpJson'
import dataJson from '../resconfig/dataJson'
import dataGlobal from '../resconfig/dataGlobal'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import globalFun from '../resconfig/globalFun'
// import net from '../event/NETWORKEVENT'
export default class rankIndex extends baseWindow {

  private _rankIndex: Laya.Sprite;//顶层对象
  private _rankItem: any;//任务列表子对象
  private _type: string;//当前选项的类型  1 2

  constructor() {
    super();
    this._rankItem = {}
  }
  /**显示订单弹窗 */
  public onShowRank() {
    this._rankIndex = new ui.rank.rankUI;
    this._rankIndex.name = 'rankIndex';
    this._rankIndex.pivot(this._rankIndex.width / 2, this._rankIndex.height / 2);//设置轴心
    this.addChild(this._rankIndex);
    this.tweenShow();
    this._rankIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeRank);

    // 点击事件的绑定
    this._rankIndex.scene.item_all.on(Laya.Event.CLICK, this, function () {
      if (this._type != '1') {
        this.switchItem('1');
        this.firstFrame();
      }
    }.bind(this));
    this._rankIndex.scene.item_flower.on(Laya.Event.CLICK, this, function () {
      if (this._type != '2') {
        this.switchItem('2');
        this.SecondFrame();
      }
    }.bind(this));
    //初始化选项
    this.switchItem('1');
  }

  /**
   * 切换tab
   */
  private switchItem(str){
    this._type = str;
    //先初始化各个选项
    this._rankIndex.scene.item_all.skin = 'warehouse/btn_biaoqian2.png';
    this._rankIndex.scene.item_flower.skin = 'warehouse/btn_biaoqian2.png';
    this._rankIndex.scene.item_all.labelColors = '#7D4815';
    this._rankIndex.scene.item_flower.labelColors = '#7D4815';
    this._rankIndex.scene.item_all_biao.visible = false;
    this._rankIndex.scene.item_flower_biao.visible = false;
    this._rankIndex.scene.n1box.visible = false;
    this._rankIndex.scene.n2box.visible = false;
    if (this._type == '1') {
      this._rankIndex.scene.item_all.skin = 'warehouse/btn_biaoqian1.png';
      this._rankIndex.scene.item_all.labelColors = '#fff';
      this._rankIndex.scene.item_all_biao.visible = true;
      this._rankIndex.scene.n1box.visible = true;
    } else if (this._type == '2') {//花卉
      this._rankIndex.scene.item_flower.skin = 'warehouse/btn_biaoqian1.png';
      this._rankIndex.scene.item_flower.labelColors = '#fff';
      this._rankIndex.scene.item_flower_biao.visible = true;
      this._rankIndex.scene.n2box.visible = true;
    } 
  }
  /**
   * 关闭窗口
   */
  public closeRank() {
    this.tweenHide()
  }

  /**
   * box1
   */
  public firstFrame(){
    //  1.任务倒计时
    //  2.任务列表
    //  3.奖励数额
    //  4.订单详情
    //  5.一二三等奖
    // 提交事件绑定
    // 排行榜
  }

  /**
   * box2
   */
  public SecondFrame(){

  }

}
