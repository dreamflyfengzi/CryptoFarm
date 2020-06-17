/*
* name;
*/
export default class gameLayer {
  /**游戏层次 注：各层内容的特效，添加相对层就可以*/
 public static bglayer:Laya.Sprite;/**背景层（背景图片） */
 public static scenelayer:Laya.Sprite;/**场景层（如：花田、工厂等场景） */
 public static windowlayer:Laya.Sprite;/**窗口层（如：二级弹框UI） */
 public static tipslayer:Laya.Sprite;/**顶层（如：三级弹框、提示语，跑马灯提示等） */

 public static initModule(){
     if(gameLayer.bglayer == null){
         gameLayer.bglayer = new Laya.Sprite;
         gameLayer.scenelayer = new Laya.Sprite;
         gameLayer.windowlayer = new Laya.Sprite;
         gameLayer.tipslayer = new Laya.Sprite;
         //
         
         Laya.stage.addChild(gameLayer.bglayer);
         Laya.stage.addChild(gameLayer.scenelayer);
         Laya.stage.addChild(gameLayer.windowlayer);
         Laya.stage.addChild(gameLayer.tipslayer);
     }
 }
}