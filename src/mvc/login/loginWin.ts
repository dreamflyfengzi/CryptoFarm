/**
* name 
*/
import { ui } from '../../ui/layaMaxUI'
// import loginController from './loginController'
import { baseScene } from '../baseView/component/baseScene'
import baseView from '../baseView/component/baseView'
import httpJson from '../../net/httpJson'
import GAMEEVENT from '../event/GAMEEVENT'
import farmController from '../farm/farmController'
import resManger from '../resconfig/resManger'
import resConfig from '../resconfig/resConfig'
import CONST from '../../const/CONST'
import dataGlobal from '../resconfig/dataGlobal'

import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Text = Laya.Text;
import Event = Laya.Event;
import Browser = Laya.Browser;
import WebGL = Laya.WebGL;


export default class loginWin extends baseScene {
  private _login_sence: Laya.Sprite;//显示列表
  private _pivotX: number;
  private _pivotY: number;
  private sp: Laya.Sprite;
  //上次记录的两个触模点之间距离
  private lastDistance: number = 0;
  private dragRegion: Laya.Rectangle;

  constructor() {
    super();
  }

  public addEvents() {
    this._login_sence.scene.login_btn.clickHandler = new Laya.Handler(this, this.loginBtn);
    this._login_sence.on(Laya.Event.CLICK, this, this.loginBtn);
  }

  public onShow() {
    if (this._login_sence == null) {
      this._login_sence = new ui.login.loginUI();
      this._login_sence.name = 'loading';

    }
    //显示
    // this._login_sence.pivot(this._login_sence.width/2,this._login_sence.height/2);//设置轴心
    // this._login_sence.pos(CONST.STAGEWIDTH/2,CONST.STAGEHEIGHT/2);//设置坐标位置
    this.setScale(this._login_sence);
    this.adaption();

    this._login_sence.name = 'login';

    this.addEvents();
    //这里显示登录
    this.tweenAlphaAdd(this._login_sence, 'login', 2);
  }
  /**
   * 自适应
   */
  private adaption() {
    //轴心在左上角，需要计算一下y轴的位置
    // this._login_sence.y = -CONST.STAGEADAPTION;
    // console.log('this._login_group.y',this._login_group.y,CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH,CONST.DESIGNSTAGEHEIGHT);
    var sc = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    var a = (sc * CONST.DESIGNSTAGEHEIGHT - CONST.STAGEHEIGHT) / sc;
    this._login_sence.scene.login_group.y = this._login_sence.scene.login_group.y - CONST.ADAPTION;
    this._login_sence.scene.loading_group.y = this._login_sence.scene.loading_group.y - CONST.ADAPTION;
  }
  /**
		 * 展示登录按钮
		 */
  public onShowLogin() {
    //这里显示登录
    this._login_sence.scene.loading_group.visible = false;
    this._login_sence.scene.login_group.visible = true;
    this._login_sence.scene.login_btn.on(Laya.Event.CLICK, this, this.loginBtn);
  }
  /**
   * 点击登录按钮
   */

  public loginBtn() {
    Laya.stage.event(GAMEEVENT.TEST_LOGIN_FARM);
    // if (this._login_check.selected) {
    //获取一下公共的数据
    var tmp_dataGlobal = dataGlobal.getInstance();

    var userid = Laya.LocalStorage.getItem("WYD:GAME:USER");
    if (!userid || userid.length < 8) {
      var myDate = new Date();
      var year = myDate.getFullYear();
      var month = myDate.getMonth() + 1;
      var date = myDate.getDate();
      var hour = myDate.getHours();
      var minute = myDate.getMinutes();
      var second = myDate.getSeconds();
      userid = "WYD" + year + month + date + hour + minute + second + dataGlobal.getRound(10000, 99999);
      Laya.LocalStorage.setItem("WYD:GAME:USER", userid);
      console.log("用户保存的ID", userid);
    }
    //这里发送用户的code给服务端
    let mydata = {
      "a": "login",
      "m": "init",
      "d": {
        "code": userid,
        "reid": '',
        "sid": '',
        "sid2": '',
        "sys": '',
        "tid": CONST.IS_TB //非淘宝注册
      }
    };

    //看看有没有推广参数
    // if (typeof (tmp_dataGlobal.query) != "undefined" && tmp_dataGlobal.query.uid != "") {
    //   mydata.d.reid = tmp_dataGlobal.query.uid;
    // } else {
    //   console.log("参数2：", typeof (tmp_dataGlobal.query.uid));
    // }
    // if (typeof (tmp_dataGlobal.query.sid) != "undefined" && tmp_dataGlobal.query.sid != "") {
    //   mydata.d.sid = tmp_dataGlobal.query.sid;
    // }
    // if (typeof (tmp_dataGlobal.query.sid2) != "undefined" && tmp_dataGlobal.query.sid2 != "") {
    //   mydata.d.sid2 = tmp_dataGlobal.query.sid2;
    // }

    // //操作系统
    // if (typeof (tmp_dataGlobal.query.system) != "undefined" && tmp_dataGlobal.query.system != "") {
    //   mydata.d.sys = tmp_dataGlobal.query.system;
    // }
    let tmp_http = httpJson.getInstance();
    tmp_http.httpPost(CONST.LOGIN_URL, mydata);

    // } else {
    //   console.log('请阅读手册');
    // }


  }
  /**
   * 加载农场
   */
  public onupdateFarm(x) {
    this._login_sence.scene.loading_txt.text = x + '%';
    var num = Math.floor(x / (100 / 9)) - 1;
    this._login_sence.scene.loginProgressBar.value = x / 100;
    this._login_sence.scene.loading_icon.url = "ui://login/0_0000" + num;
  }
  /** */
  public onClick() {
    // this.tweenHide();
  }

  // //登陆成功之后显示首页
  public onShowFarm() {
    farmController.getInstance();
    resManger.getInstance().addGroupRes(resConfig.farm);//加载农场资源
    resManger.getInstance().startLoad('', GAMEEVENT.FARM, '', [2]);
    //这里加载首页（之前预加载过的了,这里检查加载一次）登录接上后放到登录完成代码
    //如果已经登陆成功
    // if (dataGlobal.getInstance().userInfo && dataGlobal.getInstance().userInfo.uid) {
    //   farmController.getInstance();
    //   resManger.getInstance().addGroupRes(resConfig.farm);
    //   resManger.getInstance().startLoad('', GAMEEVENT.FARM, '', [2]);
    // } else {//还没有登陆
    //   console.log("你还没有登陆！");
    // }
  }
}
