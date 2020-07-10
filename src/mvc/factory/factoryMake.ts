/**
* name 
*/
import baseTips from '../baseView/component/baseTips'
import dataJson from '../resconfig/dataJson'
import dataGlobal from '../resconfig/dataGlobal'
import factoryController from './factoryController'
import infoController from '../info/infoController'
import farmController from '../farm/farmController'
import { ui } from '../../ui/layaMaxUI'
export default class factoryMake extends baseTips {

  private _factoryMake: Laya.Sprite;//顶层对象
  private _mf_id: string;//当前工厂ID
  private _id: string;//当前物品ID
  private _close: Laya.Sprite
  private _index: number
  constructor() {
    super();
  }
  public showFactoryMake(mf_id: string, id: string) {
    this._factoryMake = new ui.factory.factoryMakeUI;
    this._factoryMake.name = 'factoryMake';
    // this.setScale(this._factoryMake.displayObject);

    // console.log(this._tipKuan.displayObject.x,this._tipKuan.displayObject.y);
    this._factoryMake.pivot(this._factoryMake.width / 2, this._factoryMake.height / 2);//设置轴心
    this.addChild(this._factoryMake);
    this.tweenShow();
    this._mf_id = mf_id;
    this._id = id;
    this._close = this._factoryMake.scene.getChildByName('close_btn');
    this._close.on(Laya.Event.CLICK, this, this.onCliskClose);
    this._index = -1
    //初始化列表信息
    this.initGoodList();
    this.initGoodInfo();//初始化生产物品的信息
  }
  private onCliskClose() {
    this._close.off(Laya.Event.CLICK, this, this.onCliskClose);
    this.tweenHide();
  }
  /**
   * 初始化列表信息
   */
  private initGoodList() {
    var data = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[this._mf_id][this._id].good;//获取生产该物品需要的材料
    var user_good_info = dataGlobal.getInstance().userGoodInfo;//用户的物品信息
    //
    var num = 1;
    var make_list = this._factoryMake.scene.getChildByName('make_list');
    make_list.dataSource = []
    //
    var makeItem = {
      id:'',
      good_icon: {
        skin: ''
      },
      gou: {
        visible: false
      },
      num_txt: {
        text: ""
      },
      go_div: {
        visible: false
      },
      bg: {
        skin: ""
      },
    };
    //
    for (var i in data) {
      this._index++
      makeItem.id = this._index + ''
      //获取物品配置表的信息
      var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];//配置表物品信息
      //获取icon
      let index = good_info.pic.lastIndexOf("/")
      var _skin = good_info.pic.substring(index + 1, good_info.pic.length)
      makeItem.good_icon.skin = 'main/' + _skin + '.png';
      //判断是否够材料
      // var user_num = user_good_info[data[i].id].num; 
      var user_num = 1;
      //获取对的图标
      if (num % 2 == 0) {
        makeItem.bg.skin = 'factory/pic_kuang4.png';
      } else {
        makeItem.bg.skin = 'factory/pic_kuang5.png';
      }
      if (Math.floor(user_num) >= Math.floor(data[i].num)) {//够材料
        makeItem.gou.visible = true;
        makeItem.num_txt.text = "" + user_num + "/" + data[i].num + "";
        makeItem.go_div.visible = false;
      } else {
        makeItem.gou.visible = false;
        makeItem.num_txt.text = "" + user_num + "/" + data[i].num + "";
        makeItem.go_div.visible = true;
        console.log(make_list.getCell(this._index).getChildByName("go_btn"))
        make_list.getCell(this._index).getChildByName("go_btn").on(Laya.Event.CLICK, this, this.goClick, [good_info.type]);
      }
      num++;
      make_list.addItem(makeItem);
      console.log(make_list)
    }

  }
  /**
   * 初始化上面的信息
   */
  private initGoodInfo() {
    var pic = dataJson.getInstance().GET_SYS_GOOD_INFO()[this._id].pic2;//获取生产该物品需要的材料
    var user_good_info = dataGlobal.getInstance().userGoodInfo;//用户的物品信息
    var user_num = user_good_info[this._id].num;
    var icon = this._factoryMake.scene.getChildByName('icon');
    let index =  pic.lastIndexOf("/")
    var _skin =  pic.substring(index + 1, pic.length)
    icon.skin = 'factory/' + _skin + '.png';
    var num = this._factoryMake.scene.getChildByName('num');
    num.text = user_num;
  }
  /**
   * 前往
   */
  private goClick(type) {

    this.onCliskClose();
    factoryController.getInstance().closeFactoryInfo();
    if (type == 5) {
      infoController.getInstance().showBottonDiv('factory');
    } else if (type == 6) {
      infoController.getInstance().showBottonDiv('farm');
      farmController.getInstance().onShow(1);
    }


  }


}
