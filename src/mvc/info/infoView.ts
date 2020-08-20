/**
* name 
*/
import { infoIndex } from './infoIndex'
import infoUserTip from './infoUserTip'
import infoNickNameTip from './nickNameTip'
import infoAvatarTip from './userAvatar'
import { infoUserUpgradeTip } from './infoUserUpgradeTip'
export default class infoView {

  private _topSence: Laya.Sprite;//顶层对象
  private _infoCom: infoIndex;
  private _userInfoTip: infoUserTip;//用户信息弹窗
  private _infoNickNameTip: infoNickNameTip;//修改昵称
  private _infoAvatarTip: infoAvatarTip;//更换头像
  private _userUgradeTip: infoUserUpgradeTip;//用户升级弹窗
  constructor() {
  }
  /** */
  public onShow() {
    if (this._infoCom == null) {
      this._infoCom = new infoIndex;
    }
    this._infoCom.onShow();
    // this._infoCom.blendMode = true;
  }
  /**
   * 设置页面用户信息
   */
  public onShowUserInfo() {
    this._infoCom.onShowUserInfo();
  }
  /**
   * 获取用户信息
   */
  public getUserInfo() {
    this._infoCom.getUserInfo();
  }
  /**
   * 控制底部的按钮是否显示
   * data:farm(农场页面)、factory(工厂页面)
   */
  public showBottonDiv(data) {
    this._infoCom.showBottonDiv(data);
  }
  /**
   * 显示用户信息层
   */
  public showInfoDiv() {
    this._infoCom.showInfoDiv();
  }
  /**
   * 获取用户信息
   */
  public userCountInfo() {
    this._infoCom.userCountInfo();
  }
  /**
   * 隐藏用户信息层
   */
  public hideInfoDiv() {
    this._infoCom.hideInfoDiv();
  }
  /**
   * 展示用户信息框
   */
  public showUserInfoTip() {
    this._userInfoTip = new infoUserTip;
    this._userInfoTip.showUserInfoTip();
  }
  /**
   * 用户升级弹窗
   */
  public infoUserUpgradeTip(data) {
    this._userUgradeTip = new infoUserUpgradeTip;
    this._userUgradeTip.infoUserUpgradeTip(data);
  }

  /**
   * 修改昵称弹窗
   */
  public infoUserChangeNickName() {
    this._infoNickNameTip = new infoNickNameTip;
    this._infoNickNameTip.show();
  }

  /**
* 刷新用户信息
*/
  public refreshUserInfo(type) {
    console.log(type)
    console.log(type)
    console.log(type)
    
    if (type == 'changeNickName') {
      this._infoNickNameTip.close();
    }
    if (type == "changeAvatar") {
      this._infoAvatarTip.close();
    }
    this._userInfoTip.refreshUserInfo();
  }

  /***
   * 改头像
   * infoUserChangePic
   */
  public infoUserChangePic() {
    this._infoAvatarTip = new infoAvatarTip;
    this._infoAvatarTip.show();
  }
}
