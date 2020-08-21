/**
* name 
*/
import CONST from '../../const/CONST'
import baseWindow from '../baseView/component/baseWindow'
import farmController from '../farm/farmController'
import { ui } from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import infoController from './infoController'
import NETWORKEVENT from '../event/NETWORKEVENT'
import factoryController from '../factory/factoryController'
import webSocketJson from '../../net/webSocketJson'
import httpJson from '../../net/httpJson'
import bankController from '../bank/bankController'
import mailController from '../mail/mailController'
import settingController from '../setting/settingController'
export class infoIndex extends baseWindow {

  private _topSence: Laya.Sprite;//顶层对象
  private _diamond_box: Laya.Box; //钻石框
  private _gold_box: Laya.Box; //金币框
  private _mail_btn:Laya.Sprite;//邮箱按钮
  private _help_btn:Laya.Sprite;//帮助按钮
  private _setting_btn:Laya.Sprite;//设置按钮
  constructor() {
    super();
  }
  /** */
  public onShow() {
    this._topSence = new ui.base.scene.topSceneUI;
    this._topSence.scene.level.visible = false;
    this._topSence.scene.top_kuan.on(Laya.Event.CLICK, this, this.userCountInfo);
    // this._topSence.scene.farm_green_btn.on(Laya.Event.CLICK, this, this.showSecen, ['factory']);
    // this._topSence.scene.factory_fu_btn.on(Laya.Event.CLICK, this, this.showSecen, ['farm']);
    this._topSence.scene.top_kuan.on(Laya.Event.CLICK, this, function () {
      Laya.stage.event(NETWORKEVENT.USERCOUNTINFO)
    });
    this._diamond_box = this._topSence.scene.diamond_kuan; //钻石
    this._gold_box = this._topSence.scene.gold_kuan; //金币
    this._mail_btn = this._topSence.scene.mail_btn; //邮箱
    this._help_btn = this._topSence.scene.help_btn; //帮助
    this._setting_btn = this._topSence.scene.setting_btn; //设置
    this._diamond_box.on(Laya.Event.CLICK,this,this.showBank,['diamond']);
    this._gold_box.on(Laya.Event.CLICK,this,this.showBank,['gold']);
    this._mail_btn.on(Laya.Event.CLICK,this,this.showMail);
    // this._help_btn.on(Laya.Event.CLICK,this,this.showHelp);
    this._setting_btn.on(Laya.Event.CLICK,this,this.showSetting);
    //暂时
    // this._topSence.scene.gold_kuan.on(Laya.Event.CLICK, this, function () {
    //   Laya.stage.event(NETWORKEVENT.SENDUSERGRADEUP)
    // });

    //显示，自适应要在缩放之前做
    //  this._topSence.pivot(this._topSence.width/2,this._topSence.height/2);//设置轴心
    //  this._topSence.pos(CONST.STAGEWIDTH/2,CONST.STAGEHEIGHT/2);//设置坐标位置
    this.adaption();
    // this.setScale(this._topSence);
    this.showChild(this._topSence);
    this._topSence.mouseThrough = true;
  }
  /**
   * 自适应
   */
  private adaption() {
  }
  //点击下面按钮，切换场景
  private showSecen(data) {
    if (data == 'factory') {
      //这里初始化工厂
      factoryController.getInstance().onShow(1);
    } else if (data == 'farm') {
      //这里初始化农场
      farmController.getInstance().onShow(1);
    }
  }

  //获取用户信息 从服务端拉取
  public getUserInfo() {
    //试着进行websocke请求
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "init_info",
      'm': "init",
      'd': {},
      'code': 1
    };
    tmp_websocket.sendMessage(tmp_data);
  }
  /**
   * 展示用户的信息
   * 更新用户信息
   */
  public onShowUserInfo() {
    //获取用户的信息
    var data = dataGlobal.getInstance().userInfo;
    this._topSence.scene.level.text = data.grade;
    this._topSence.scene.level.visible = true;
    this._topSence.scene.uexp.value = Math.floor(data.exp / data.upgrade_exp * 100) > 100 ? 100 : data.exp / data.upgrade_exp;
    this._topSence.scene.gold_val.text = Math.floor(data.have_gold) + '';
  }

  /**
   * 控制底部的按钮是否显示
   * data:farm(农场页面)、factory(工厂页面)
   */
  public showBottonDiv(data) {
    if (data == 'farm') {//这个是在农场页面的
      this._topSence.scene.current_btn.getChildByName("main_icon").skin = 'main/pic_gongchnag1.png';
      this._topSence.scene.current_btn.on(Laya.Event.CLICK, this, this.showSecen, ['factory'])
    } else if (data == 'factory') {//这个是在工厂页面的
      this._topSence.scene.current_btn.getChildByName("main_icon").skin = 'main/pic_huatian1.png';
      this._topSence.scene.current_btn.on(Laya.Event.CLICK, this, this.showSecen, ['farm'])
    } else if (data == 'all') {//全部隐藏
      this._topSence.scene.getChildByName('main_btn').visible = false;
    }
  }
  /**
   * 显示用户信息层
   */
  public showInfoDiv() {
    this._topSence.visible = true;
  }
  /**
   * 隐藏用户信息层
   */
  public hideInfoDiv() {
    this._topSence.visible = false;
  }
  /**
 * 展示用户信息框
 */
  public showUserInfoTip() {
    infoController.getInstance().showUserInfoTip();
  }
  /**
   * 获取用户信息
   */
  public userCountInfo() {
    let tmp_http = httpJson.getInstance();
    let tmp_data = {
      'a': "user_count_info",
      'm': "init",
      'd': {},
      'code': 1
    };
    // console.log("发送websocket数据",tmp_data);
    tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    // Laya.stage.event(NETWORKEVENT.STOREINFOBAK);
  }

  /**
   * 银行初始化
   */
  private showBank(type){
    // if (type =='gold') {
    //   // this._gold_box.getChildByName('bank_btn')
    //   // Laya.Tween.to(this._gold_box.getChildByName('bank_btn'),{scaleX:1.2,scaleY:1.2},1200) //todo放大效果
    // }
    bankController.getInstance().onShowBank(type);
  }

  /**
   * 邮箱
   */
  private showMail(){
    // if (type =='gold') {
    //   // this._gold_box.getChildByName('bank_btn')
    //   // Laya.Tween.to(this._gold_box.getChildByName('bank_btn'),{scaleX:1.2,scaleY:1.2},1200) //todo放大效果
    // }
    mailController.getInstance().onShowMail();
  }

   /**
   * 设置
   */
  private showSetting(){
    // if (type =='gold') {
    //   // this._gold_box.getChildByName('bank_btn')
    //   // Laya.Tween.to(this._gold_box.getChildByName('bank_btn'),{scaleX:1.2,scaleY:1.2},1200) //todo放大效果
    // }
    settingController.getInstance().onShowSetting();
  }
}
