import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI'
import NETWORKEVENT from '../event/NETWORKEVENT'
import tmp_http from '../../net/httpJson'
import dataJson from '../resconfig/dataJson'
import dataGlobal from '../resconfig/dataGlobal'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
export default class mailIndex extends baseTips {
  private _type: string;
  private _mailScene: Laya.Sprite;//顶层对象
  private _mailList: Laya.List;
  constructor() {
    super();
  }
  public onShowMail() {
    this._mailScene = new ui.email.emailUI;
    this._mailScene.pivotX = 0.5 * this._mailScene.width;
    this._mailScene.pivotY = 0.5 * this._mailScene.height;
    this.addChild(this._mailScene);
    this.showLayer();
    this._mailScene.scene.close_btn.on(Laya.Event.CLICK, this, this.closeScene);
    this._mailList = this._mailScene.scene.mail_list;
    this.getMailInfo();
  }

  /**
   * 获取邮件信息
   */
  public getMailInfo() {
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "mail_info",
    //   'm': "init",
    //   'd': {},

    //   'code': 1
    // };
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    Laya.stage.event(NETWORKEVENT.MAILINFOBAK)
  }
  /**
 * 初始化邮箱list
 */
  public initMailList() {
    var data = dataGlobal.getInstance().mailInfo;//查询仓库的信息
    this._mailList.dataSource = [];
    for (var i in data) {
      var _item = {
        id:data[i].mail_id,
        gift: {
          skin: ''
        },
        from_text: {
          text: ""
        },
        describe_list: {
          dataSource: [

          ]
        },
        operate_btn: {
          gray: false
        }
      }

      if (data[i].type == 1) { //订单交易成功
        _item.gift.skin = 'base/common_icon_small_resident_bonus_box_04 (2).png'
      }
      _item.from_text.text = data[i].text;
      _item.describe_list.dataSource = data[i].return;

      if (data[i].return) {

        for (var f in _item.describe_list.dataSource) {
          if (_item.describe_list.dataSource[f].type == 'exp') {
            var _data = _item.describe_list.dataSource[f]
            _item.describe_list.dataSource[f] = {
              gift_icon: {
                skin: "base/Icon_Experience_03.png"
              },
              gift_num: {
                text: _data.num
              }
            }
          }
          if (_item.describe_list.dataSource[f].type == 'diamond') {
            var _data = _item.describe_list.dataSource[f]
            _item.describe_list.dataSource[f] = {
              gift_icon: {
                skin: "base/diamond.png"
              },
              gift_num: {
                text: _data.num
              }
            }
          }

        }
      }
      if (data[i].is_harvest == 0) {
        //还未进行收获
        _item.operate_btn.gray = false
      } else {
        _item.operate_btn.gray = true
      }
      this._mailList.addItem(_item)
      this._mailList.renderHandler = new Laya.Handler(this, this.itemSelectHandler, null, false)
    }
  }

   /**
   * 渲染成功添加事件
   */
  private itemSelectHandler(cell, index) {
    // cell.off(Laya.Event.CLICK, this, this.onCellClick)
    // cell.on(Laya.Event.CLICK, this, this.onCellClick, [cell, index])
    cell.getChildByName("operate_btn").on(Laya.Event.CLICK, this, this.onCellClick, [cell, index])
  }

  private onCellClick(cell,index) {
    console.log(cell.dataSource.id,index)
    var mailInfo = dataGlobal.getInstance().mailInfo[index];
    if (mailInfo.is_harvest == 1) {
      return
    }
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "mail_operate",
    //   'm': "",
    //   'd': {
    //     "id":mailInfo.mail_id
    //   },
    //   'code': 1
    // };
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    Laya.stage.event(NETWORKEVENT.MAILOPERATE)
  }
  /**
   * 关闭界面
   */
  public closeScene() {
    this.hideLayer();
  }
}