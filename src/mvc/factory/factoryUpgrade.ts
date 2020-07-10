/**
* name 
*/
import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import dataJson from '../resconfig/dataJson'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
export default class factoryUpgrade extends baseTips {

  private _factoryUpgrade: Laya.Sprite;//顶层对象
  private _id: string;//当前工厂ID
  private _isGrade: number;//即将要升级的级数
  private _gold: number;//升级需要的金币
  // private _close:Laya.GLoader;//关闭按钮
  constructor() {
    super();

  }
  public showFactoryUpgrade(id: string) {
    this._factoryUpgrade = new ui.factory.factoryUpgradeUI;
    this._factoryUpgrade.name = 'factoryUpgrade';
    // this.setScale(this._factoryUpgrade);

    // console.log(this._tipKuan.displayObject.x,this._tipKuan.displayObject.y);
    this._factoryUpgrade.pivot(this._factoryUpgrade.width / 2, this._factoryUpgrade.height / 2);//设置轴心
    this.addChild(this._factoryUpgrade);
    this.tweenShow();
    this._id = id;
    // this._close = this._factoryUpgrade.getChild('close').asLoader;
    this._factoryUpgrade.scene.close_btn.on(Laya.Event.CLICK, this, this.onCliskClose);
    //初始化列表信息
    this.initFactoryGradeList();
  }
  private onCliskClose() {
    this._factoryUpgrade.scene.close_btn.off(Laya.Event.CLICK, this, this.onCliskClose);
    this.tweenHide();
  }
  /**
   * 初始化列表信息
   */
  public initFactoryGradeList() {

    this._isGrade = 0;
    this._gold = 0;
    //获取配置表工厂的信息
    var data = dataJson.getInstance().GET_SYS_FACTORY_INFO()[this._id];

    //获取自己工厂信息
    var myData = dataGlobal.getInstance().factory[this._id];
    //获取自己的等级
    var level = dataGlobal.getInstance().userInfo.grade;
    var upgrad_list = this._factoryUpgrade.scene.getChildByName('upgrad_list');
    var upgrade_icon = this._factoryUpgrade.scene.getChildByName('icon');
    var upgrade_grade = this._factoryUpgrade.scene.getChildByName('grade');
    var upgrad_div = this._factoryUpgrade.scene.getChildByName('upgrad_btn');
    var upgrad_gold = upgrad_div.getChildByName('upgrade_gold');
    upgrad_div.off(Laya.Event.CLICK, this, this.factoryUpGrade);
    var is_grade = true;
    upgrad_list.dataSource= [];
    for (var i in data) {
      //如果是当前等级的，那么需要给弹窗上面设置工厂信息
      if (Math.floor(myData.grade) == Math.floor(data[i].grade)) {
        upgrade_icon.url = data[i].pic;
        upgrade_grade.text = '' + myData.grade;
      }
      if (data[i].grade == 1) {
        continue;
      }
      var factoryUpgradeItem = {
        this_grade:{
          text:(Math.floor(data[i].grade) - 1) + ''
        },
        next_grade:{
          text : Math.floor(data[i].grade) + ''
        },
        list_icon:{
          skin:data[i].pic+'.png'
        },
        upgrade_time:{
          text : '-' + data[i].speed + '%'
        },
        upgrade_info:{
          text:'11',
          color:"",
          visible:true
        },
        kuan_xuan:{
          visible : false
        },
        bg:{
          skin:''
        }
      }
      if (Math.floor(myData.grade) >= Math.floor(data[i].grade)) {
        factoryUpgradeItem.upgrade_info.text = '已解锁';
        factoryUpgradeItem.upgrade_info.color = '#EADEC6';
        factoryUpgradeItem.upgrade_info.visible = true;
        factoryUpgradeItem.bg.skin = 'factory/pic_kuang4.png';
      } else {
        factoryUpgradeItem.bg.skin= 'factory/pic_kuang5.png';
        factoryUpgradeItem.upgrade_info.visible = false;
        if (Math.floor(level) >= Math.floor(data[i].grade2)) {
          if (is_grade) {
            factoryUpgradeItem.kuan_xuan.visible = true;
            is_grade = false;
            this._isGrade = Math.floor(data[i].grade2);
            this._gold = Math.floor(data[i].num2);
            upgrad_gold.text = data[i].num2;
          }
        } else {
          factoryUpgradeItem.upgrade_info.text = data[i].grade2 + '级解锁';
          factoryUpgradeItem.upgrade_info.color = '#7d4815';
          factoryUpgradeItem.upgrade_info.visible = true;
        }
      }
      upgrad_list.addItem(factoryUpgradeItem);
      console.log(upgrad_list.cells)
    }
    //判断一下是否还有级数可以升
    this.isUpgrade();
  }
  private isUpgrade() {
    var upgrad_div = this._factoryUpgrade.scene.getChildByName("upgrad_btn");
    if (this._isGrade > 0) {
      upgrad_div.visible = true;
      //监听
      upgrad_div.off(Laya.Event.CLICK, this, this.factoryUpGrade);
      upgrad_div.on(Laya.Event.CLICK, this, this.factoryUpGrade);
    } else {
      upgrad_div.visible = false;
    }
  }
  private factoryUpGrade() {
    //用户的金币
    var gold = dataGlobal.getInstance().userInfo.have_gold;
    if (Math.floor(gold) < Math.floor(this._gold)) {
      this.onCliskClose();
      //金币不足
      Laya.stage.event(GAMEEVENT.TXTTIP, ['宝石不足']);
      return;
    }
    // let tmp_websocket = net.webSocketJson.getInstance();
    // let tmp_data = {
    //   'a': "factory_up_grade",
    //   'm': "gzhq_factory",
    //   'd': {
    //     'mf_id': this._id
    //   },
    //   'code': 1
    // };
    // console.log("发送websocket数据", tmp_data);
    // tmp_websocket.sendMessage(tmp_data);
    Laya.stage.event(NETWORKEVENT.FACTORYUPGRADEBAK);
    // this.onCliskClose();
  }
}
