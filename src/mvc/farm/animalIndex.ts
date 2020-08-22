import resManger from '../resconfig/resManger'
import resConfig from '../resconfig/resConfig'
import GAMEEVENT from '../event/GAMEEVENT'
import dataGlobal from '../resconfig/dataGlobal'
import TimeLine = Laya.TimeLine;
import Skeleton = Laya.Skeleton;
import Templet = Laya.Templet;
import Event = Laya.Event;
import Browser = Laya.Browser;
import Stat = Laya.Stat;
import WebGL = Laya.WebGL;
export default class animalIndex {
  static _timer: Laya.Timer;//定时器对象
  private mAniPath: string;
  private mStartX: number = 400;
  private mStartY: number = 500;
  private mFactory: Templet;
  private mActionIndex: number = 0;
  private mCurrIndex: number = 0;
  private mArmature: Skeleton;
  private mCurrSkinIndex: number = 0;

  constructor() {
    resManger.getInstance().addGroupRes(resConfig.animalRes);
    resManger.getInstance().startLoad(GAMEEVENT.ONPROGRESSANIMAL, GAMEEVENT.ONLOADCOMPLETEANIMAL);
  }

  /**
   * 初始化动物
   * @param ani 
   */
  public initAnimalAni(data) {
    for (var i in data) {
      console.log(data[i], i)
      if (data[i].is_lock) { //已解锁 显示动画
        this.mAniPath = "animal/niu.sk";
        this.mFactory = new Templet();
        this.mFactory.on(Event.COMPLETE, this, this.parseComplete);
        // this.mFactory.on(Event.ERROR, this, this.onError);
        this.mFactory.loadAni(this.mAniPath);
      } else {//未解锁 虚化

      }
    }
  }


  private parseComplete(): void {
    //创建模式为1，可以启用换装
    this.mArmature = this.mFactory.buildArmature(1);
    this.mArmature.x = this.mStartX;
    this.mArmature.y = this.mStartY;
    this.mArmature.scale(0.5, 0.5);
    Laya.stage.addChild(this.mArmature);
    this.mArmature.on(Event.STOPPED, this, this.completeHandler);
    this.play();
  }

  private completeHandler(): void {
    this.play();
  }
  private play(): void {
    this.mCurrIndex++;
    if (this.mCurrIndex >= this.mArmature.getAnimNum()) {
      this.mCurrIndex = 0;
    }
    this.mArmature.play(this.mCurrIndex, false);
  }

  /**
   * 设置动物的状态
   * 1.饥饿状态 
   * 2.产物成熟状态 头顶出现产物气泡框 点击可进行收获
   * 3.产物未成熟状态 -- 动物饥饿 产物生长暂停
   * 4.产物未成熟阶段 -- 动物正常 产物生长
   */
}