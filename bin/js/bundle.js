(function () {
    'use strict';

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "login/login.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class gameLayer {
        static initModule() {
            if (gameLayer.bglayer == null) {
                gameLayer.bglayer = new Laya.Sprite;
                gameLayer.scenelayer = new Laya.Sprite;
                gameLayer.windowlayer = new Laya.Sprite;
                gameLayer.tipslayer = new Laya.Sprite;
                Laya.stage.addChild(gameLayer.bglayer);
                Laya.stage.addChild(gameLayer.scenelayer);
                Laya.stage.addChild(gameLayer.windowlayer);
                Laya.stage.addChild(gameLayer.tipslayer);
            }
        }
    }

    class GAMEEVENT$1 {
    }
    GAMEEVENT$1.ONPROGRESSLOADING = 'ONPROGRESSLOADING';
    GAMEEVENT$1.ONLOADCOMPLETE = 'onloadcomplete';
    GAMEEVENT$1.ONRESPROGRESSLOGIN = 'ONPROGRESSLOGIN';
    GAMEEVENT$1.ONRESCOMPLETELOGIN = 'ONRESCOMPLETELOGIN';
    GAMEEVENT$1.ONRESIZE = 'ONRESIZE';
    GAMEEVENT$1.GAMESTART = 'GAMESTART';
    GAMEEVENT$1.TIPSKUAN = 'TIPSKUAN';
    GAMEEVENT$1.GOLDTIP = 'GOLDTIP';
    GAMEEVENT$1.FARM = 'FARM';
    GAMEEVENT$1.ONPROGRESSFARM = 'ONPROGRESSFARM';
    GAMEEVENT$1.ONLOADCOMPLETEFARM = 'ONLOADCOMPLETEFARM';
    GAMEEVENT$1.LOGIN_FARM = 'LOGIN_FARM';
    GAMEEVENT$1.GETINITINFO = 'GETINITINFO';
    GAMEEVENT$1.BOTTOMBTN = 'BOTTOMBTN';
    GAMEEVENT$1.HIDEINFODIV = 'HIDEINFODIV';
    GAMEEVENT$1.SHOWINFODIV = 'SHOWINFODIV';
    GAMEEVENT$1.TEST_LOGIN_FARM = 'LOGIN_FARM';

    class loginModel {
        constructor() {
        }
    }

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var login;
        (function (login) {
            class loginUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("login/login");
                }
            }
            login.loginUI = loginUI;
            REG("ui.login.loginUI", loginUI);
        })(login = ui.login || (ui.login = {}));
    })(ui || (ui = {}));

    class loginWin extends ui.login.loginUI {
        constructor() {
            super();
            this.resArr = [];
            this.initUI();
        }
        initUI() {
            console.log(this);
        }
        onShowLogin() {
            // this.tweenAlphaAdd('login', 2);
            // this.ui.loading_group.visible = false;
            // this.ui.login_group.visible = true;
            // this.ui.login_btn.on(Event.CLICK, this, this.loginBtn);
        }
        loginBtn() {
            Laya.stage.event(GAMEEVENT.TEST_LOGIN_FARM);
        }
        onupdateFarm(x) {
            console.log(x);
            // console.log(this.ui.loading_txt);
        }
        onShowFarm() {
            console.log('跳转首页');
            farmController.getInstance();
            resManger.getInstance().addGroupRes(resConfig.farm);
            resManger.getInstance().startLoad('', GAMEEVENT.FARM, '', [2]);
        }
    }

    class loginView {
        constructor() {
        }
        init() {
            if (this._loginwin == null) {
                this._loginwin = new loginWin;
            }
        }
        showLogin() {
            this._loginwin.onShowLogin();
        }
        updateFarm(x) {
            this._loginwin.onupdateFarm(x);
        }
        showFarm() {
            this._loginwin.onShowFarm();
        }
    }

    class resConfig$1 {
        static getDynamicResUrl(signname, type = 0) {
            for (var key in resConfig$1.dynamicRes) {
                if (resConfig$1.dynamicRes[key] && resConfig$1.dynamicRes[key]['sign'] == signname) {
                    if (type == 1) {
                        return resConfig$1.dynamicRes[key];
                    }
                    else {
                        return resConfig$1.dynamicRes[key]['url'];
                    }
                }
            }
            return 'null';
        }
        static getResUrl(signname) {
            for (var key in resConfig$1.farm) {
                if (resConfig$1.farm[key] && resConfig$1.farm[key]['sign'] == signname) {
                    return resConfig$1.farm[key]['url'];
                }
            }
            for (var key in resConfig$1.loadingRes) {
                if (resConfig$1.loadingRes[key] && resConfig$1.loadingRes[key]['sign'] == signname) {
                    return resConfig$1.loadingRes[key]['url'];
                }
            }
            return 'null';
        }
    }
    resConfig$1._url = '';
    resConfig$1.loadingRes = [
        { url: resConfig$1._url + 'login/login.json', type: Laya.Loader.JSON },
    ];
    resConfig$1.farm = [
        { url: resConfig$1._url + 'farm/farmIndexscene.scene', type: Laya.Loader.JSON, sign: 'farmIndex' },
        { url: resConfig$1._url + 'farm/farmLand.scene', type: Laya.Loader.JSON, sign: 'farmland' },
    ];
    resConfig$1.dynamicRes = [
        { url: resConfig$1._url + 'res/login/login.json', type: Laya.Loader.BUFFER, sign: "login" },
        { url: resConfig$1._url + 'res/login/login_atlas0.png', type: Laya.Loader.IMAGE, sign: "loginimg" },
    ];

    class resManger$1 {
        constructor() {
            this.resaddrlist = [];
            this.resaddrlist = resConfig$1.farm;
        }
        static getInstance() {
            if (resManger$1._instance == null) {
                resManger$1._instance = new resManger$1();
            }
            return resManger$1._instance;
        }
        addRes(signname) {
            var tmpurl = resConfig$1.getDynamicResUrl(signname, 1);
            if (tmpurl) {
                this.resaddrlist.push(tmpurl);
            }
        }
        addGroupRes(GroupRes) {
            this.resaddrlist = GroupRes;
        }
        startLoad(progress_event, complete_event, progress_data, complete_data) {
            if (this.loader == null) {
                this.loader = new Laya.LoaderManager();
            }
            var tmparr = this.resaddrlist;
            progress_data = progress_data ? progress_data : '';
            complete_data = complete_data ? complete_data : '';
            this.loader.load(tmparr, Laya.Handler.create(this, this.onComplete, [complete_event, complete_data]), Laya.Handler.create(this, this.onProgress, [progress_event, progress_data], false));
        }
        onProgress(progress_event, progress_data, param) {
            var percent = Math.floor(param * 100);
            if (progress_event) {
                Laya.stage.event(progress_event, [percent, progress_data]);
            }
        }
        onComplete(complete_event, complete_data) {
            if (complete_event) {
                Laya.stage.event(complete_event, complete_data);
            }
            this.resaddrlist = [];
        }
        getRes(name) {
            var url = resConfig$1.getResUrl(name);
            if (url != 'null') {
                var texture = this.loader.getRes(url);
                if (this.scaledic[url] == null && texture && (texture.sourceWidth || texture.sourceHeight)) {
                    this.scaledic[url] = { 'w': texture.sourceWidth, 'h': texture.sourceHeight };
                }
                if (texture && this.scaledic[url]) {
                    texture.width = this.scaledic[url].w;
                    texture.height = this.scaledic[url].h;
                }
                return texture;
            }
            return null;
        }
    }

    class loginController {
        static getInstance() {
            if (loginController._instance == null) {
                loginController._instance = new loginController;
            }
            return loginController._instance;
        }
        constructor() {
            this.model = new loginModel;
            Laya.stage.on(GAMEEVENT$1.ONRESPROGRESSLOGIN, this, this.onResProgress);
            Laya.stage.on(GAMEEVENT$1.ONRESCOMPLETELOGIN, this, this.onResComplete);
            Laya.stage.on(GAMEEVENT$1.ONPROGRESSFARM, this, this.onResProgressFarm);
            Laya.stage.on(GAMEEVENT$1.ONLOADCOMPLETEFARM, this, this.onResCompleteFarm);
            Laya.stage.on(GAMEEVENT$1.TEST_LOGIN_FARM, this, this.showFarmView);
        }
        showFarmView() {
            Laya.stage.off(GAMEEVENT$1.LOGIN_FARM, this, this.showFarmView);
            this._loginview.showFarm();
        }
        onResProgress() {
        }
        onResComplete() {
            Laya.stage.off(GAMEEVENT$1.ONRESPROGRESSLOGIN, this, this.onResProgress);
            Laya.stage.off(GAMEEVENT$1.ONRESCOMPLETELOGIN, this, this.onResComplete);
            resManger$1.getInstance().addGroupRes(resConfig$1.farm);
            resManger$1.getInstance().startLoad(GAMEEVENT$1.ONPROGRESSFARM, GAMEEVENT$1.ONLOADCOMPLETEFARM);
            this.initView();
        }
        onResProgressFarm(x) {
            this._loginview.updateFarm(x);
        }
        onResCompleteFarm() {
            Laya.stage.off(GAMEEVENT$1.ONPROGRESSFARM, this, this.onResProgressFarm);
            Laya.stage.off(GAMEEVENT$1.ONLOADCOMPLETEFARM, this, this.onResCompleteFarm);
            this._loginview.showLogin();
        }
        initView() {
            if (this._loginview == null) {
                this._loginview = new loginView;
            }
            this._loginview.init();
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            this.initModule();
            loginController.getInstance();
            resManger$1.getInstance().addGroupRes(resConfig$1.loadingRes);
            resManger$1.getInstance().startLoad(GAMEEVENT$1.ONRESPROGRESSLOGIN, GAMEEVENT$1.ONRESCOMPLETELOGIN);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
        initModule() {
            gameLayer.initModule();
            loginController.getInstance();
        }
    }
    new Main();

}());
