import resManger from '../resconfig/resManger'
import resConfig from '../resconfig/resConfig'
import GAMEEVENT from '../event/GAMEEVENT'
import dataGlobal from '../resconfig/dataGlobal'
import TimeLine = Laya.TimeLine;
export default class animalIndex {
  static _timer: Laya.Timer;//定时器对象
  private timeLine: TimeLine = new TimeLine();
  constructor() {
    resManger.getInstance().addGroupRes(resConfig.animalRes);
    resManger.getInstance().startLoad(GAMEEVENT.ONPROGRESSANIMAL, GAMEEVENT.ONLOADCOMPLETEANIMAL);
  }

  /**
   * 初始化动物
   * @param ani 
   */
  public initAnimalAni(type) {
    let PATH = '';
    let _x = 0;
    let _y = 0;
    if (type == 'chicken') {
      PATH = 'res/atlas/animal/muchang_jimc.atlas'
      _x = 503;
      _y = 662;
    } else if (type == 'cow') {
      PATH = 'res/atlas/animal/muchang_niumc.atlas'
      _x = 881;
      _y = 397;
    } else if (type = 'pig') {
      PATH = 'res/atlas/animal/muchang_yangmc.atlas'
      _x = 994;
      _y = 910;
    }
    let _Animation = new Laya.Animation();
    _Animation.loadAtlas(PATH);
    _Animation.interval = 60; // 设置播放间隔（单位：毫秒）
    _Animation.index = 2; // 当前播放索引
    _Animation.play(); // 播放图集动画
    _Animation.scaleX = 1.7;
    _Animation.scaleY = 1.7;
    _Animation.name = type;
    _Animation.pos(_x, _y)

    //设置定时器
    // this.setTimer(_Animation);
    // this.createTimerLine(_Animation);
    _Animation.on(Laya.Event.CLICK, this, this.binClickAni);
    return _Animation
  }

  /**
   * 设置定时器
   */
  public setTimer(ani) {
    if (ani._timer) {
      ani._timer.clear(this, this.timerFun);//先清除定时器
    }
    //设置定时器
    ani._timer = new Laya.Timer();
    ani._timer.loop(300, this, this.timerFun, [ani]);
  }


  /**
   * 定时器处理的内容
   */
  private timerFun(ani) {
    var rect = new Laya.Rectangle(ani.x, ani.y, 100, 100);
    ani.hitArea = rect;
    var data = dataGlobal.getInstance().animalInfo[ani.name]
    if (!data.is_lock) {
       ani.visible = false;
    } 
    if (data.feed_time <= 0) {
      
    }
  }


  /**
   * 行动的线
   */
  private createTimerLine(Ani): void {
    var timeLine = new TimeLine();
    if (Ani.name == 'chicken') {
      // 鸡行动的线
      timeLine.addLabel("turnRight", 0).to(Ani, { x: 503, y: 637, scaleX: 1.6, scaleY: 1.6, }, 1000, null, 0)
        .addLabel("turnRight", 0).to(Ani, { x: 656, y: 672, scaleX: 1.7, scaleY: 1.7 }, 1000, null, 0)
        .addLabel("turnRight", 0).to(Ani, { x: 936, y: 558, scaleX: 1.55, scaleY: 1.55 }, 1500, null, 0)
        .addLabel("turnRight", 0).to(Ani, { x: 1040, y: 558, skewY: 180 }, 0, null, 0)
        .addLabel("turnLeft", 0).to(Ani, { x: 783, y: 368, scaleX: 1.3, scaleY: 1.3, }, 3000, null, 0)
        .addLabel("turnUp", 0).to(Ani, { x: 503, y: 470, scaleX: 1.5, scaleY: 1.5 }, 3000, null, 0)
        .addLabel("turnUp", 0).to(Ani, { x: 503, y: 470, scaleX: 1.5, scaleY: 1.5, skewY: 0 }, 0, null, 0)
        .addLabel("turnRight", 0).to(Ani, { x: 503, y: 662, scaleX: 1.6, scaleY: 1.6 }, 1000, null, 0)
      // .addLabel("turnRight", 0).to(Ani, { x: 393, y: 760,  }, 1000, null, 0)
      // .addLabel("turnDown", 0).to(Ani, { x: 949, y: 515, scaleX: 1.7, scaleY: 1.7, alpha: 1 }, 5000, null, 0)
    }
    if (Ani.name == 'cow') {
      // 牛行动的线
    }
    if (Ani.name == 'pig') {
      // 猪行动的线
    }

    timeLine.play(0, true);
  }

  private binClickAni(Ani) {

    // pause()暂停时间轴动画
    //resume()恢复时间轴动画
  }

  /**
   * 设置动物的状态
   * 1.饥饿状态 
   * 2.产物成熟状态 头顶出现产物气泡框 点击可进行收获
   * 3.产物未成熟状态 -- 动物饥饿 产物生长暂停
   * 4.产物未成熟阶段 -- 动物正常 产物生长
   */
}