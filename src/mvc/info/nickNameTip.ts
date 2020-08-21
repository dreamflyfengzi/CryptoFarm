/**
* 个人信息界面
*/
import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI';
import dataGlobal from '../resconfig/dataGlobal'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
import NETWORKEVENT from '../event/NETWORKEVENT'

export default class infoUserTip extends baseTips {
  private _useNickNameTip: Laya.Sprite;//顶层对象
  constructor() {
    super();
  }
  /** */
  public show() {
    this._useNickNameTip = new ui.base.tip.nickname_tipUI;
    // this.setScale(this._useNickNameTip.displayObject);
    this._useNickNameTip.pivotX = 0.5 * this._useNickNameTip.width;
    this._useNickNameTip.pivotY = 0.5 * this._useNickNameTip.height;
    this.addChild(this._useNickNameTip);
    this.showLayer();

    //获取用户的信息
    var data = dataGlobal.getInstance().userInfo;

    this._useNickNameTip.scene.tips_text.text = data.nickname;
    // this._useNickNameTip.scene.id.text = data.uid;
    // this._useNickNameTip.scene.ugrade.text = data.grade;
    // this._useNickNameTip.scene.next_grade.text = Number(data.grade)+1+"级将解锁";
    // this._useNickNameTip.scene.user_header.skin = data.pic;

    this._useNickNameTip.scene.close_btn.on(Laya.Event.CLICK, this, this.close);
    this._useNickNameTip.scene.confirm_btn.on(Laya.Event.CLICK, this, this.submitNickName);
  }
  public close() {
    this.hideLayer();
  }

  /**
   * 提交昵称
   */
  private submitNickName() {
    var nickname = this._useNickNameTip.scene.tips_text.text;
    var _data  = {
      "nickname": nickname
    }
    dataGlobal.getInstance().setUserInfo(_data)
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "change_user_nickname",
    //   'm': "userinfo",
    //   'd': {s
    //     'nickname': nickname
    //   },
    //   'code': 1
    // };
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    Laya.stage.event(NETWORKEVENT.USERNICKNAMECHANGE);

  }


}
