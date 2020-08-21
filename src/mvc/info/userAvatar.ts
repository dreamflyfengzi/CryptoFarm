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
  private _useAvatarTip: Laya.Sprite;//顶层对象
  private _avatarList: Laya.List;
  private avatarList:Array<any>;
  private _select:any;
  constructor() {
    super();
  }
  /** */
  public show() {
    this._useAvatarTip = new ui.base.tip.avatar_tipUI;
    // this.setScale(this._useAvatarTip.displayObject);
    this._useAvatarTip.pivotX = 0.5 * this._useAvatarTip.width;
    this._useAvatarTip.pivotY = 0.5 * this._useAvatarTip.height;
    this.addChild(this._useAvatarTip);
    this.showLayer();

    //获取用户的信息
    var data = dataGlobal.getInstance().userInfo;
    this._avatarList = this._useAvatarTip.scene.avatar_list;
    this.initAvatarList()
    this._useAvatarTip.scene.close_btn.on(Laya.Event.CLICK, this, this.close);
    this._useAvatarTip.scene.get_btn.on(Laya.Event.CLICK, this, this.submitAvatar);
  }
  public close() {
    this.hideLayer();
  }

  /**
   * 初始化头像
   */
  private initAvatarList() {
    this.avatarList = [
      {
        "id": "2",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      },
      {
        "id": "3",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      },
      {
        "id": "4",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      },
      {
        "id": "5",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      },
      {
        "id": "6",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      },
      {
        "id": "7",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      },
      {
        "id": "8",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      },
      {
        "id": "9",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      },
      {
        "id": "10",
        "able": 1,//0不行 1可以
        "select": 0//1已选择
      }
    ]
    this._avatarList.dataSource = []
    for (var i = 0; i < this.avatarList.length; i++) {
      var _item = {
        id:"",
        icon: {
          skin: ""
        },
        select: {
          skin: ""
        }
      }
      _item.id = this.avatarList[i].id
      if (this.avatarList[i].able) { //可以选择
        _item.icon.skin = "avatar/Avatar" + this.avatarList[i].id + "Enable.png";
      } else {
        _item.icon.skin = "avatar/Avatar" + this.avatarList[i].id + "Disable.png";
      }
      if (this.avatarList[i].select) { //当前选择
        _item.select.skin = "avatar/AvatarSelected.png";
      } else {
        _item.select.skin = "avatar/AvatarBorder.png";
      }

      this._avatarList.addItem(_item);
      this._avatarList.renderHandler = new Laya.Handler(this, this.bindClick)
    }
  }
  /**
   * 绑定点击事件
   */
  private bindClick(cell, index) {
    cell.on(Laya.Event.CLICK, this, this.selectAvatar, [cell, index])
  }

  private selectAvatar(cell, index) {
    var _item =  this._avatarList.getItem(index)
    _item.select.skin = "avatar/AvatarSelected.png";
    for (var i = 0; i < this.avatarList.length; i++) {
      if (i != index) {
        var otherItem = this._avatarList.getItem(i)
        otherItem.select.skin = "avatar/AvatarBorder.png";
        this._avatarList.setItem(i,otherItem)
      }
    }
    this._select = _item.id;
    this._avatarList.setItem(index, _item)
  }

  /**
   * 提交头像
   */
  private submitAvatar() {
    var _data  = {
      "avatar": this._select
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
    Laya.stage.event(NETWORKEVENT.USERAVATARCHANGE);
    
  }


}
