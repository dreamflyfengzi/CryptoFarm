import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import NETWORKEVENT from '../event/NETWORKEVENT'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
import tipController from '../baseView/public/tip/tipController'
import GAMEEVENT from '../event/GAMEEVENT'
export default class animalIndex extends baseTips {
  private _type: string;
  private _animalScene: Laya.Sprite;//顶层对象
  private _animalList: Laya.List;
  private _currentType: String;
  private _feedNormal: Laya.Sprite;//普通饲料
  private _feedTop: Laya.Sprite;//顶级饲料
  private _feedNormalX: number;
  private _feedNormalY: number;
  private _feedTopX: number;
  private _feedTopY: number;
  /**刚体对象引用 */
  private _rig: Laya.RigidBody
  constructor() {
    super();
  }
  public onShowAnimal(type) {
    this._currentType = type;
    this._animalScene = new ui.animal.animalProductionUI;
    this._animalScene.pivotX = 0.5 * this._animalScene.width;
    this._animalScene.pivotY = 0.5 * this._animalScene.height;

    this.addChild(this._animalScene);
    this.showLayer();
    this._animalScene.scene.close_btn.on(Laya.Event.CLICK, this, this.closeScene);
    this._animalList = this._animalScene.scene.product_list;
    this.initScene()
  }

  /**
   * 关闭界面
   */
  public closeScene() {
    this.hideLayer();
  }

  /**
   * 初始化页面所有
   * 1.标题
   * 2.列表资料获取
   * 3.饲料内容获取
   */
  private initScene() {
    if (this._currentType == 'chicken') { this._animalScene.scene.gname.text = "鸡窝" }
    if (this._currentType == 'cow') { this._animalScene.scene.gname.text = "牛棚" }
    if (this._currentType == 'pig') { this._animalScene.scene.gname.text = "猪窝" }
    if (this._currentType == 'sheep') { this._animalScene.scene.gname.text = "羊棚" }
    // 拉取动物数据
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    // 	'a':"animal_product_info",
    // 	'm':"animal",
    // 	'd':{
    // 		'type':this._currentType
    // 	},
    // 	'code':1
    // };
    // tmp_http.httpPost(CONST.LOGIN_URL,tmp_data);
    Laya.stage.event(NETWORKEVENT.ANIMALPRODUCTINFO);
    // 拉取饲料数据（仓库）
    var feednormal = dataGlobal.getInstance().userGoodInfo[this._currentType + "feed"];
    var feedtop = dataGlobal.getInstance().userGoodInfo[this._currentType + "feedtop"];

    this._animalScene.scene.feed_type.skin = "product/" + this._currentType + "Feed1.png"
    this._animalScene.scene.top_feed_icon.skin = "product/" + this._currentType + "Feed1.png"
    this._animalScene.scene.feed_num.text = feednormal.num
    this._animalScene.scene.top_feed_num.text = feedtop.num
    this._feedNormal = this._animalScene.scene.feed_type;
    this._feedNormalX = this._feedNormal.x;
    this._feedNormalY = this._feedNormal.y;
    this._feedTop = this._animalScene.scene.top_feed_icon;
    this._feedTopX = this._feedTop.x;
    this._feedTopY = this._feedTop.y;
    this._feedNormal.on(Laya.Event.MOUSE_DOWN, this, this.onStartDragFeed)
    this._feedNormal.on(Laya.Event.MOUSE_UP, this, this.onEndDragFeed)

  }


  /**
   * 初始化列表
   */
  public showAnimalFactory(_type?: string) {
    if (_type == 'animal_product_feed') {
      this.feedBack()
      this.resetFeedNum()
    }
    var data = dataGlobal.getInstance().animalProductList[String(this._currentType)];
    var _poroductSkin = ''
    if (this._currentType == "chicken") {
      _poroductSkin = "product/Egg.png";
    }
    if (this._currentType == "cow") {
      _poroductSkin = "product/Milk.png";
    }
    if (this._currentType == "sheep") {
      _poroductSkin = "product/Wool.png";
    }
    if (this._currentType == "pig") {
      _poroductSkin = "product/Milk.png"
    }
    this._animalList.dataSource = []
    for (var i in data) {
      var _item = {
        id: i,
        innerBox: {
          skin: "",
          visible: true
        },
        ani: {
          visible: true
        },
        unlock: {
          visible: false
        },
        outbox_1: {
          visible: true
        },
        outbox_2: {
          visible: true
        },
        unlock_num: {
          text: "",
          visible: false
        },
        speedUp_box: {
          visible: false
        },
        state: ""
      }

      if (data[i].unlock == "1") {//开启
        if (data[i].state == '0') { //饥饿
          _item.innerBox.visible = false;

        }
        if (data[i].state == '1') { //生产中
          _item.innerBox.visible = true;
          _item.innerBox.skin = "product/2_Food.png";

        }
        if (data[i].state == '2') { //有产物
          _item.innerBox.visible = true;
          _item.innerBox.skin = _poroductSkin;

        }

      } else {//未开启
        _item.innerBox.visible = false;
        _item.ani.visible = false;
        _item.outbox_2.visible = false;
        _item.outbox_1.visible = false;
        _item.unlock.visible = true;
        _item.unlock_num.visible = true;
        _item.unlock_num.text = data[i].locknum;


      }
      _item.state = data[i].state
      this._animalList.addItem(_item)
    }
    this._animalList.renderHandler = new Laya.Handler(this, this.initListItem)


  }

  /**
   * 重置饲料数量
   */
  private resetFeedNum() {
    // 拉取饲料数据（仓库）
    var feednormal = dataGlobal.getInstance().userGoodInfo[this._currentType + "feed"];
    var feedtop = dataGlobal.getInstance().userGoodInfo[this._currentType + "feedtop"];
    this._animalScene.scene.feed_num.text = feednormal.num
    this._animalScene.scene.top_feed_num.text = feedtop.num
  }

  /**
   * 拖动饲料
   */
  private onStartDragFeed() {
    this._feedNormal.startDrag(null, false, 100);
    this._feedNormal.mouseThrough = true

    Laya.timer.frameLoop(2, this, this.trailLoop);//隔几帧，看效果来决定
    // this._feedNormal.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter)
  }
  private  trailLoop(): void {
    var trail: Laya.Image = Laya.Pool.getItemByClass("FLY_TRAIL", Image); //拖尾必须用对象池，你懂的
    // parent.addChild(trail);
    // trail.pos(target.x, target.y);//帧跟随宿主
    // Tween.to(trail, { scaleX: 0, scaleY: 0, alpha: 0 }, 500, null, Handler.create(this, recoverTrail, [trail]));//recover时进行事件清理和属性初始化，注意要Pool.recover
  }
  /**
  * 拖动饲料
  */
  private onEndDragFeed() {
    this._feedNormal.stopDrag();
    var _topY = this._animalList.y;
    var _bottomY = this._animalList.y + this._animalList.height;

    if (this._feedNormal.y < _bottomY && this._feedNormal.y > _topY) {
      var _baseX = this._animalList.x;
      for (var i in this._animalList.cells) {
        var _cellLeft = this._animalList.cells[i].x + _baseX;
        var _cellRight = _cellLeft + this._animalList.cells[i].width;
        if (this._feedNormal.x < _cellRight && this._feedNormal.x > _cellLeft) {
          this.feedingDiet(i)
          return
        }
      }
    }
    this.feedBack()
  }

  /**
   * 投喂操作
   */
  private feedingDiet(index) {
    console.log(index)
    var _index = Number(index) + 1;
    var id = 'slot_' + _index;
    var data = dataGlobal.getInstance().animalProductList[String(this._currentType)][id];
    if (data.unlock == '0' || data.state != '0') {
      console.log('back')
      this.feedBack()
      return
    }
    Laya.Tween.to(this._feedNormal, { scaleX: 1.3, scaleY: 1.3 }, 150, null, null, null, false);
    Laya.Tween.to(this._feedNormal, { scaleX: 0.9, scaleY: 0.9 }, 150, null, null, 150, false);
    Laya.Tween.to(this._feedNormal, { scaleX: 1.4, scaleY: 1.4 }, 150, null, null, 300, false);
    Laya.Tween.to(this._feedNormal, { scaleX: 1, scaleY: 1 }, 150, null, Laya.Handler.create(this, function () {
      this.feeding(id)
    }), 450, false);

  }
  /**
   * 这次真的投喂
   */
  private feeding(id) {
    console.log(id)
    // 发送喂食动物的请求
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    //   'a': "animal_product_feed",
    //   'm': "animal",
    //   'd': {
    //     'type':this._currentType,
    //     'id': id
    //   },
    //   'code': 1
    // };
    // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    Laya.stage.event(NETWORKEVENT.ANIMALPRODUCTFEED);
  }

  /**
   * 饲料回到原位
   */
  private feedBack() {
    this._feedNormal.x = this._feedNormalX;
    this._feedNormal.y = this._feedNormalY;
    this._feedTop.x = this._feedTopX;
    this._feedTop.y = this._feedTopY;
  }

  private initListItem(cell, index) {
    var data = dataGlobal.getInstance().animalProductList[String(this._currentType)][cell.dataSource.id];
    var _state = ''
    var _scale = 0;
    var _path = "res/animalBones/niu.sk";
    var _staticAnimal = ""
    if (this._currentType == "chicken") {
      _path = "res/animalBones/niu.sk";
      _staticAnimal = 'base/2_Hide.png'
      _scale = 0.38
    }
    if (this._currentType == "cow") {
      _path = "res/animalBones/niu.sk";
      _staticAnimal = 'base/1_Hide.png'
      _scale = 0.38
    }
    if (this._currentType == "sheep") {
      _path = "res/animalBones/yang.sk";
      _staticAnimal = 'base/3_Hide.png'
      _scale = 0.64
    }
    if (this._currentType == "pig") {
      _scale = 0.5
      _path = "res/animalBones/niu.sk";
      _staticAnimal = 'base/3_Hide.png'
    }
    if (data.unlock == "0") {
      cell.getChildByName('unlock').getChildByName('unlock_icon').skin = _staticAnimal;
      cell.on(Laya.Event.CLICK, this, this.lockSlot, [data, _staticAnimal]) //绑定购买事件
    }


    // 动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2（有产物）
    if (data.state == '0') { _state = 'stand' }
    if (data.state == '1') { _state = 'eat' }
    if (data.state == '2') { _state = 'full' }


    if (cell.getChildByName('ani').getChildByName("skeleton")) {
      cell.getChildByName('ani').getChildByName("skeleton").play(_state, true);
      return
    }
    let templetStone: Laya.Templet = new Laya.Templet();
    templetStone.on(Laya.Event.COMPLETE, this, () => {
      //创建第一个动画
      var skeleton: Laya.Skeleton;
      //从动画模板创建动画播放对象
      skeleton = templetStone.buildArmature(1);
      skeleton.pos(100, 205);
      skeleton.scaleX = _scale;
      skeleton.scaleY = _scale;
      //切换动画皮肤 使用标号为0的皮肤
      skeleton.showSkinByIndex(0);
      //播放
      skeleton.play(_state, true);
      skeleton.name = 'skeleton'
      // if (cell.getChildByName('ani').getChildByName("skeleton")) {
      //   console.log(cell,index)
      //   this.destroyAni(skeleton,templetStone)
      // }
      cell.getChildByName('ani').addChild(skeleton);
      // this.bindClick(skeleton, data)

    });
    templetStone.loadAni(_path);

    cell.getChildByName("innerBox").on(Laya.Event.CLICK, this, this.clickInnerBox, [cell, index])
  }

  /**
   * 解锁槽位
   */
  private lockSlot(data, _staticAnimal) {
    tipController.getInstance()
    var _info = {
      "skin": _staticAnimal,
      // "num_txt": '1',
      "price": data.locknum
    }
    var confirm_fun = function () {
      //发送收获动物产物的请求
      // let tmp_http = httpJson.getInstance();
      // let tmp_data = {
      //   'a': "animal_slot_lock",
      //   'm': "animal",
      //   'd': {
      //     'id': data.id
      //   },
      //   'code': 1
      // };
      // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
      this.close()
      Laya.stage.event(NETWORKEVENT.ANIMALSlOTLOCK);
    }
    Laya.stage.event(GAMEEVENT.BASETIPS, ["开启卡槽", '确认花费' + data.locknum + '钻石开启位置', _info, confirm_fun]);
  }

  /**
   * 点击中间
   */
  public clickInnerBox(cell, index) {
    var data = cell.dataSource;
    if (data.state == '2') { //收获
      console.log('收获', index, data.id)
      // var _ani =  this._animalList.getItem(index)
      //发送收获动物产物的请求
      // let tmp_http = httpJson.getInstance();
      // let tmp_data = {
      //   'a': "animal_product_harvest",
      //   'm': "animal",
      //   'd': {
      //     'id': data.id
      //   },
      //   'code': 1
      // };
      // tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
      Laya.stage.event(NETWORKEVENT.ANIMALPRODUCTHARVEST);
    }
  }

}