import GameConfig from "./GameConfig";
import gameLayer from './mvc/gameLayer'
import mainController from './mvc/main/mainController'
import loginController from './mvc/login/loginController'
import resManger from './mvc/resconfig/resManger'
import resConfig from './mvc/resconfig/resConfig'
import GAMEEVENT from './mvc/event/GAMEEVENT'
class Main {
  constructor() {
    //根据IDE设置初始化引擎		
    if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
    else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
    Laya["Physics"] && Laya["Physics"].enable();
    Laya["DebugPanel"] && Laya["DebugPanel"].enable();
    Laya.stage.scaleMode = GameConfig.scaleMode;
    Laya.stage.screenMode = GameConfig.screenMode;
    Laya.stage.alignV = GameConfig.alignV;
    Laya.stage.alignH = GameConfig.alignH;
    //兼容微信不支持加载scene后缀场景
    Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

    //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
    if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
    if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
    if (GameConfig.stat) Laya.Stat.show();
    Laya.alertGlobalError = true;

    //初始化
    this.initModule();

    resManger.getInstance().addGroupRes(resConfig.loadingRes);//设置加载loading页的资源
    resManger.getInstance().startLoad(GAMEEVENT.ONRESPROGRESSLOGIN, GAMEEVENT.ONRESCOMPLETELOGIN);//进行loading页的加载
  }

  // 初始化加载 
  initModule(): void {
    /**初始游戏层深度 */
    gameLayer.initModule();
    /** */
    mainController.getInstance();
    /** */
    loginController.getInstance();
  }
}
//激活启动类
new Main();
