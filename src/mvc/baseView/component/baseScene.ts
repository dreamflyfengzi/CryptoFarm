/**
* baseScene
*/
import gameLayer from '../../gameLayer'
import CONST from '../../../const/CONST'
export class baseScene extends Laya.Sprite {
  private modal: Laya.Sprite;
  constructor() {
    super();
    this.modal = new Laya.Sprite;
    this.addChild(this.modal);
  }
  /** */
  public init() {

  }
  /** */
  public showModal() {
    this.modal.graphics.clear();
    this.modal.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
    this.modal.alpha = 0;
    this.modal.width = Laya.stage.width;
    this.modal.height = Laya.stage.height;
  }

  /** */
  public clearAll() {
    this.modal.visible = false;
    this.modal.graphics.clear();
  }
  /* 清除在上层的子节点 */
  public clearChild(type) {
    var obj: any = gameLayer.scenelayer.getChildAt(1);
    if (type == 1) {
      obj.visible = false;
    } else if (type == 2) {
      gameLayer.scenelayer.removeChildAt(1);
    }
  }
  /* 切换场景(obj:场景对象，name:名字，type=1.隐藏2.移除) */
  public tweenAlphaAdd(obj: any, name: string, type: number) {
    // 先循环里面的场景，隐藏掉先
    var num = gameLayer.scenelayer.numChildren;

    if (num > 0) {//页面上有节点
      for (var i = 0; i < num; i++) {
        var sceneChild: any = gameLayer.scenelayer.getChildAt(i);
        if (sceneChild.name == name) {//如果是自己，就不需要了；
          continue;
        }
        sceneChild.visible = true;
        // sceneChild.x = 0;
  
        var isShow = true;
        Laya.Tween.to(sceneChild, { alpha: 0 }, 300, null, Laya.Handler.create(this, function () {
          if (type == 1) {
            sceneChild.visible = false;
          } else {
            // gameLayer.scenelayer.removeChildAt(i);//删除子节点
            sceneChild.removeSelf();
          }
          if (isShow) {
            isShow = false;
            //查找是否有该对象
            var node: any = gameLayer.scenelayer.getChildByName(name);
            if (node) {//有该对象的话就显示就行了
              obj = node;
              obj.alpha = 0;
              obj.visible = true;
            } else {//没有改对象的话就添加
              obj.alpha = 0;
              gameLayer.scenelayer.addChild(obj);
            }
            this.tweenAlphaAllShow(obj);
          }
        }.bind(this)))

      }
    } else {//没有节点
      obj.alpha = 0;
      gameLayer.scenelayer.addChild(obj);
      this.tweenAlphaAllShow(obj);
    }
  }
  /* 切换场景左右滑动的(obj:场景对象，name:名字，type=1.隐藏2.移除,tran:移动的方向) */
  public tweenTranAdd(obj: any, name: string, type: number, tran: string) {
    // 先循环里面的场景，隐藏掉先
    var num = gameLayer.scenelayer.numChildren;

    if (num > 0) {//页面上有节点
      for (var i = 0; i < num; i++) {
        var sceneChild: any = gameLayer.scenelayer.getChildAt(i);
        if (sceneChild.name == name) {//如果是自己，就不需要了；
          continue;
        }
        if (tran == 'left') {
          var tranX = -CONST.STAGEWIDTH;
        } else {
          var tranX = CONST.STAGEWIDTH;
        }
        sceneChild.visible = true;
        Laya.Tween.to(sceneChild, { x: tranX }, 200, null, Laya.Handler.create(sceneChild, function () {
          if (type == 1) {//如果是左右切换，那么就不需要隐藏了
            this.visible = false;
          } else {
            this.removeSelf();
          }
        }))

      }
      //查找是否有该对象
      var node: any = gameLayer.scenelayer.getChildByName(name);
      if (node) {//有该对象的话就显示就行了
        obj = node;
        obj.alpha = 1;
        obj.visible = true;
      } else {//没有改对象的话就添加
        obj.alpha = 1;
        if (tran == 'left') {
          obj.x = CONST.STAGEWIDTH;
        } else {
          obj.x = -CONST.STAGEWIDTH;
        }
        gameLayer.scenelayer.addChild(obj);
      }
    } else {//没有节点
      if (tran == 'left') {
        obj.x = CONST.STAGEWIDTH;
      } else {
        obj.x = -CONST.STAGEWIDTH;
      }
      obj.alpha = 1;
      gameLayer.scenelayer.addChild(obj);
    }
    Laya.Tween.to(obj, { x: 0 }, 200, null, Laya.Handler.create(this, function () {
    }.bind(this)));

  }
  /**添加对象，并且渐显显示 */
  public tweenAlphaAllShow(obj: any) {
    // gameLayer.scenelayer.addChild(obj);
    Laya.Tween.to(obj, { alpha: 1 }, 300, null);
  }

  //设置缩放比例
  public setScale(obj: any) {
    var str = 0;
    if (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH > 1) {
      str = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    }
    if (CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT > 1) {
      str = CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
    }
    if (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH > CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT) {
      str = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    } else {
      str = CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
    }
    // obj.scale(CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH, CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH);
    obj.scale(1, 1);
  }

}
