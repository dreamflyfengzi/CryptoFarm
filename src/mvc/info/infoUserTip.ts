/**
* 个人信息界面
*/
import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI';
import dataGlobal from '../resconfig/dataGlobal'
import infoController from './infoController'

export default class infoUserTip extends baseTips {

  private _userInfoTip: Laya.Sprite;//顶层对象
  private _unlockList: Laya.List; 
  constructor() {
    super();

  }
  /** */
  public showUserInfoTip() {
    this._userInfoTip = new ui.base.tip.user_info_tipUI;
    // this.setScale(this._userInfoTip.displayObject);
    this._userInfoTip.pivotX = 0.5 * this._userInfoTip.width;
    this._userInfoTip.pivotY = 0.5 * this._userInfoTip.height;
    this.addChild(this._userInfoTip);
    this.showLayer();

    //获取用户的信息
    var data = dataGlobal.getInstance().userInfo;
    this._userInfoTip.scene.uname.text = data.nickname;
    this._userInfoTip.scene.id.text = data.uid;
    this._userInfoTip.scene.ugrade.text = data.grade;
    this._userInfoTip.scene.next_grade.text = Number(data.grade) + 1 + "级将解锁";
    this._userInfoTip.scene.user_header.skin = data.pic;
    
    this._userInfoTip.scene.close_btn.on(Laya.Event.CLICK, this, this.closeUserInfoKuan);
    this._userInfoTip.scene.change_name.on(Laya.Event.CLICK, this, this.changeNickName); //改变昵称
    this._userInfoTip.scene.change_userpic.on(Laya.Event.CLICK, this, this.changeUserPic); //改变头像
    this.renderUnlockingList() //渲染解锁物

  }
  private closeUserInfoKuan() {
    this.hideLayer();
  }

  /**
   * 改变昵称
   * changeNickName
   */
  private changeNickName() {
    infoController.getInstance().infoUserChangeNickName();
  }

  /**
  * 刷新用户信息
  */
  public refreshUserInfo() {
    var data = dataGlobal.getInstance().userInfo;
    this._userInfoTip.scene.uname.text = data.nickname;
    this._userInfoTip.scene.user_header.skin = data.pic;
  }

  /**
   * 改变用户头像
   */
  public changeUserPic() {
     infoController.getInstance().infoUserChangePic();
  }

  /**
   * 下级解锁列表
   */
  public renderUnlockingList(){
    var data = dataGlobal.getInstance().userInfo.lower_level_unlock;
    this._unlockList = this._userInfoTip.scene.crops_list;
    this._unlockList.dataSource = [];
    for (var i in data ) {
      var _item = {
        lock_crops:{
          skin:"product/product01.png"
        }
      }

      this._unlockList.addItem(_item)
    }
  }
}
