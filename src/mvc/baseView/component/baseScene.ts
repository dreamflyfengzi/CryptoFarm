import gameLayer from '../../gameLayer'
import CONST from '../../../const/CONST'
export class baseScene extends Laya.Sprite{
  private modal:Laya.Sprite;
  constructor(){
    super();
    this.modal = new Laya.Sprite;
    this.addChild(this.modal);
  }
  /** */
  public init(){
    
  }
  /** */
  public showModal(){
    this.modal.graphics.clear();
    this.modal.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,'#000000');
    this.modal.alpha = 0;
    this.modal.width = Laya.stage.width;
    this.modal.height = Laya.stage.height;
  }
  
  /** */
  public clearAll(){
    this.modal.visible = false;
    this.modal.graphics.clear();
  }
  /* 清除在上层的子节点 */
  public clearChild(type){
    var obj:any = gameLayer.scenelayer.getChildAt(1);
    if(type == 1){
      obj.visible = false;
    }else if(type == 2){
      gameLayer.scenelayer.removeChildAt(1);
    }
  }
  /* 切换场景(obj:场景对象，name:名字，type=1.隐藏2.移除) */
  public tweenAlphaAdd(obj:any,name:string,type:number){
    //查找是否有该对象
    var node:any = gameLayer.scenelayer.getChildByName(name);
    if(node){//有该对象的话就显示就行了
      obj = node;
      obj.visible = true;
      obj.zOrder = 0;
    }else{//没有改对象的话就添加
      obj.zOrder = 0;
      gameLayer.scenelayer.addChild(obj);
    }
    
    Laya.Tween.to(gameLayer.scenelayer,{alpha:0.1},300,Laya.Ease.elasticIn,Laya.Handler.create(this,function(){
      this.clearChild(type);
      obj.zOrder = 1;
      this.tweenAlphaAllShow(obj);
    }.bind(this)))
  }
  /**添加对象，并且渐显显示 */
  public tweenAlphaAllShow(obj:any){
    // gameLayer.scenelayer.addChild(obj);
    Laya.Tween.to(gameLayer.scenelayer,{alpha:1},300,Laya.Ease.elasticOut);
  }
  
  //设置缩放比例
  public setScale(obj:any){
    var str = 0;
    if(CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH > 1){
      str = CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH;
    }
    if(CONST.STAGEHEIGHT/CONST.DESIGNSTAGEHEIGHT > 1){
      str = CONST.STAGEHEIGHT/CONST.DESIGNSTAGEHEIGHT;
    }
    if(CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH > CONST.STAGEHEIGHT/CONST.DESIGNSTAGEHEIGHT){
      str = CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH;
    }else{
      str = CONST.STAGEHEIGHT/CONST.DESIGNSTAGEHEIGHT;
    }
    obj.scale(CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH,CONST.STAGEHEIGHT/CONST.DESIGNSTAGEHEIGHT);
  }

}