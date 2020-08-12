/**
* name 
*/
import baseWindow from '../baseView/component/baseWindow'
import materialController from './materialController'
import tmp_http from '../../net/httpJson'
import dataJson from '../resconfig/dataJson'
import dataGlobal from '../resconfig/dataGlobal'
import { ui } from '../../ui/layaMaxUI'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import globalFun from '../resconfig/globalFun'
import webSocketJson from '../../net/webSocketJson'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
// import net from '../event/NETWORKEVENT'
export default class orderIndex extends baseWindow {

  private _orderIndex: Laya.Sprite;//顶层对象
  private _orderItem: any;//任务列表子对象
  private _materialList: Laya.List;
  private _good_list: Laya.List;//物品列表
  private _timer: Laya.Timer;
  private _time: number;
  private _currentOrder: any;

  constructor() {
    super();
    this._orderItem = {}
  }
  /**显示订单弹窗 */
  public onShowOrder() {
    this._orderIndex = new ui.materialorder.materialOrderUI();
    this._orderIndex.name = 'orderIndex';
    this._orderIndex.pivot(this._orderIndex.width / 2, this._orderIndex.height / 2);//设置轴心
    this.addChild(this._orderIndex);
    this.tweenShow();
    this._orderIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeOrder);

    //初始化
    this._materialList = this._orderIndex.scene.material_list;
    this._materialList.visible = false;
    //获取订单列表
    this.getMaterialInfo();
  }
  /**
   * 获取订单列表的信息
   */
  public getMaterialInfo() {
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "material_info",
    //   'm': "init",
    //   'd': {},
    //   'code': 1
    // };
    // console.log("发送数据", tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    Laya.stage.event(NETWORKEVENT.MATERIALINFOBAK)
  }
  /**
   * 获取物品
   */
  public sendGood(data) {
    // var tmp_arr = [];
    // for (var i in data) {
    //   //查找任务的ID
    //   var material_info = dataJson.getInstance().GET_SYS_FLOWER_MATERIAL()[data[i].aterial_id];
    //   var good_list = material_info.goods;
    //   for (var i in good_list) {
    //     tmp_arr.push(good_list[i].id);
    //   }
    // }
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "send_good_material",
    //   'm': "init",
    //   'd': {
    //     'good_id': tmp_arr
    //   },
    //   'code': 1
    // };
    // console.log("发送数据", tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);

    Laya.stage.event(NETWORKEVENT.SENDGOODMATERIALBAK)
  }
  /**
   * 展示订单信息
   */
  public setMaterialList() {
    var material_info = dataJson.getInstance().GET_SYS_MATERIAL_INFO();
    // var grade = dataGlobal.getInstance().userInfo.grade;
    var grade = 6
    this._materialList.dataSource = [];
    for (var i in material_info) {
      var _materialItem = {
        id: i,
        status: '',
        order_list: {
          visible: false
        },
        locked_text: {
          text: "",
          visible: false
        },
        locked_bg: {
          visible: false
        },
        lock_btn: {
          visible: false,
        },
        lock_num: {
          visible: false,
          text: ""
        },
        timer: {
          visible: false
        },
        tips_text: {
          text: "",
          visible: false
        },
        getnow_btn: {
          visible: false
        },
        getnow_num: {
          text: '',
          visible: false
        },
      }
      if (grade < Number(material_info[i].grade)) { //未达到解锁等级0
        _materialItem.status = "0";
        _materialItem.locked_bg.visible = true;
        _materialItem.locked_text.text = "到达" + material_info[i].grade + "级可解锁";
        _materialItem.locked_text.visible = true;
        _materialItem.locked_text.visible = true;
      } else {
        if (material_info[i].is_lock == 1) { //已经解锁 正常1
          _materialItem.status = "1";
          if (material_info[i].t > 0) {
            _materialItem.status = "3"//在路上显示倒计时
            _materialItem.getnow_btn.visible = true;
            _materialItem.timer.visible = true;
            _materialItem.tips_text.visible = true;
            _materialItem.tips_text.text = material_info[i].t;
            _materialItem.getnow_num.visible = true;
            _materialItem.getnow_num.text = material_info[i].get_num;
            //设置定时器
            materialController.getInstance().model.setOrderTime(material_info[i].t, i);//設置時間
          }
        } else {//达到解锁等级 还没有解锁 2
          _materialItem.status = "2";
          _materialItem.lock_btn.visible = true
          _materialItem.lock_num.visible = true
          _materialItem.lock_num.text = material_info[i].lock_num;
        }
      }
      this._materialList.addItem(_materialItem)
      this._materialList.visible = true;
      this._materialList.renderHandler = new Laya.Handler(this, this.setGoodsList, [i])
    }
    materialController.getInstance().model.setOrderTimeout();
  }
  /**
   * 渲染火车的订单
   */
  private setGoodsList(id) {
    var material_info = dataJson.getInstance().GET_SYS_MATERIAL_INFO();
    for (var i in this._materialList.cells) {
      var _index = Number(i)
      var _cell = this._materialList.getCell(_index);
      var _dataSource = this._materialList.getItem(_index);
      var _info = material_info[_dataSource.id];
      if (_dataSource.status === "1") {
        this.renderMaterialOrder(_cell, _dataSource)
      }

    }
    // 获取到火车列表
    // 获取到列表商品信息
    // 根据仓库库存判断是否足够
  }

  /**
   * 渲染订单内容
   */
  public renderMaterialOrder(_cell, _dataSource) {
    //获取订单的数据 判断订单现在的状态是等待还是展示列表
    var materialOrderInfo = dataJson.getInstance().GET_SYS_MATERIAL_ORDERLIST()[_dataSource.id];
    // 列表渲染原始数据 然后绑定点击装载事件
    var _orderList = _cell.getChildByName("order_list");
   
    _orderList.dataSource = [];
    if (materialOrderInfo.status == 0) {//装货
      for (var i in materialOrderInfo.goods) {
        var _item = {
          lid: {
            visible: false
          },
          good_icon: {
            skin: "",
            visible: false
          },
          good_num: {
            text: "",
            visible: false
          },
          already: {
            visible: false
          }
        }
        if (materialOrderInfo.goods[i].status == 1) {
          _item.already.visible = true;
          _item.lid.visible = true;
        } else {
          _item.good_icon.skin = 'product/' + materialOrderInfo.goods[i].id + '.png'
          _item.good_icon.visible = true;
          _item.good_num.text = '×' + materialOrderInfo.goods[i].num;
          _item.good_num.visible = true;
        }
        //#fb1a35红色
        _orderList.addItem(_item)
      }
      _orderList.visible = true;
      _orderList.renderHandler = new Laya.Handler(this, this.bindOrderEvent,[materialOrderInfo])
    } else {//返回的
      // this._materialList.
    }

    
    // console.log(_orderList)
    // var _order = _cell
  }
  /**
   * 绑定
   * clickOrderItem
   */
  private bindOrderEvent(info,cell, index) {
    cell.on(Laya.Event.CLICK, this, this.onCellClick, [cell, index,info])
  }

  /**
   * 鼠标点击
   */
  private onCellClick(cell, index,info) {
    var x = cell.x+cell.parent.parent.x;
    var y = cell.y+cell.parent.parent.y;
    materialController.getInstance().showOrderTip(x, y,info,index)
  }
  /**
   * 关闭按钮
   */
  public closeOrder() {
    // materialController.getInstance().model.clearOrderTime();//清除掉定时器
    this.tweenHide();
  }
  /**
   * 展示时间倒计时
   */
  public showOrderTime(id) {
    //获取时间
    var timeStr = materialController.getInstance().model.thisTime[id];
    for (var i in this._materialList.cells) {
      var _index = Number(i)
      if (this._materialList.getItem(_index).id == id) {
        var _item = this._materialList.getItem(_index);
        _item.tips_text.text = globalFun.getInstance().getCountDown(timeStr);
        this._materialList.setItem(_index, _item);
      }
    }
  }

}
