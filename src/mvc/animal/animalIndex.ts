import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI'
export default class animalIndex extends baseTips {
  private _type: string;
  private _animalScene: Laya.Sprite;//顶层对象
  private _animalList: Laya.List;
  constructor() {
    super();
  }
  public onShowAnimal(type) {
    this._animalScene = new ui.animal.animalProductionUI;
    this._animalScene.pivotX = 0.5 * this._animalScene.width;
    this._animalScene.pivotY = 0.5 * this._animalScene.height;
    this.addChild(this._animalScene);
    this.showLayer();
    this._animalScene.scene.close_btn.on(Laya.Event.CLICK, this, this.closeScene);
    this._animalList = this._animalScene.scene.product_list;
    this.initAnimalList()
  }

  /**
   * 关闭界面
   */
  public closeScene() {
    this.hideLayer();
  }

  /**
   * 初始化列表
   */
  private initAnimalList() {
    this._animalList.dataSource = []
    var data = [
      {
        "id": "cow010",
        "open": "1",//开启
        "state": "eat"
      },
      {
        "id": "cow011",
        "open": "1",//开启
        "state": "full"
      },
      {
        "id": "cow012",
        "open": "1",//开启
        "state": "eat"
      },
      {
        "id": "cow013",
        "open": "1",//开启
        "state": "eat"
      },
      {
        "id": "cow014",
        "open": "0",
        "state": "stand"
      },
      {
        "id": "cow015",
        "open": "0",
        "state": "full"
      }
    ]

    for (var i in data) {
      var _item = {
        innerBox: {
          skin: "",
          visible: true
        },
        ani:{
          visible:true
        },
        state:""
      }
      if (data[i].open == "0") {//未开启
        _item.innerBox.visible = false;
        _item.ani.visible = false;
      } else {
        _item.innerBox.skin = 'product/2_Food.png';
        _item.innerBox.visible = true;
        _item.state = data[i].state;
       
      }
      if (data[i].state == 'full') {
        _item.innerBox.skin = 'product/Milk.png';
      }

      this._animalList.addItem(_item)
    }
    this._animalList.renderHandler = new Laya.Handler(this, this.creatAni)
    
    //1.区分四种动物生产界面（点击哪种动物对应进入生产界面）
    //2.单个动物的计时效果 
    //3.点击饲料投喂 
    //4.点击生产的物品收获
    //5.未开卡槽点击解锁（钻石 ）
    //6.区分饲料（精品饲料 普通饲料）
  }

  /**
   * 添加ani
   */
  private addAniEvent(cell, index) {
    // // setTimeout(function () {
    // //    this.creatAni(cell)

    // // }.bind(this), Math.ceil(Math.random()*10));
    // Laya.timer.once(Math.ceil(Math.random()*10), this, this.creatAni,[cell]);
  }


  private creatAni(cell) {
    console.log(cell)
    var data = cell.dataSource;
    if (!cell.dataSource.state) {
      return
    }
    var _path = "res/animalBones/niu.sk";
    // if (data.id == "chicken") {
    //   _x = 0
    //   _path = "res/animalBones/niu.sk";
    // }
    // if (data.id == "cow") {
    //   _x = 100
    //   _path = "res/animalBones/niu.sk";
    // }
    // if (data.id == "sheep") {
    //   _x = 200
    //   _path = "res/animalBones/niu.sk";
    // }
    // if (data.id == "pig") {
    //   _x = 300
    //   _path = "res/animalBones/niu.sk";
    // }
    let templetStone: Laya.Templet = new Laya.Templet();
    templetStone.on(Laya.Event.COMPLETE, this, () => {
      //创建第一个动画
      var skeleton: Laya.Skeleton;
      //从动画模板创建动画播放对象
      skeleton = templetStone.buildArmature(1);
      skeleton.pos(100, 205);
      skeleton.scaleX = 0.4;
      skeleton.scaleY = 0.4;
      //切换动画皮肤 使用标号为0的皮肤
      skeleton.showSkinByIndex(0);
      //播放
      skeleton.play(cell.dataSource.state, true);
      cell.getChildByName('ani').addChild(skeleton);
      // this.bindClick(skeleton, data)
    });
    templetStone.loadAni(_path);
  }

}