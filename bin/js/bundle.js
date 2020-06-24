(function () {
    'use strict';

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 1242;
    GameConfig.height = 2688;
    GameConfig.scaleMode = "showall";
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

    class mainView {
        constructor() {
        }
        onInit() {
        }
    }

    class mainNetwork {
        constructor() {
        }
    }

    class mainModel {
        constructor() {
            this.isInit = false;
        }
    }

    class mainController {
        constructor() {
            this.initModule();
        }
        static getInstance() {
            if (mainController._instance == null) {
                mainController._instance = new mainController;
            }
            return mainController._instance;
        }
        onInit() {
            if (this._mainview == null) {
                this._mainview = new mainView;
            }
            this._mainview.onInit();
        }
        initModule() {
            if (this._network == null) {
                this._network = new mainNetwork;
                this.maininfo = new mainModel;
            }
        }
    }

    class GAMEEVENT {
    }
    GAMEEVENT.ONPROGRESSLOADING = 'ONPROGRESSLOADING';
    GAMEEVENT.ONLOADCOMPLETE = 'onloadcomplete';
    GAMEEVENT.ONRESPROGRESSLOGIN = 'ONPROGRESSLOGIN';
    GAMEEVENT.ONRESCOMPLETELOGIN = 'ONRESCOMPLETELOGIN';
    GAMEEVENT.ONRESIZE = 'ONRESIZE';
    GAMEEVENT.GAMESTART = 'GAMESTART';
    GAMEEVENT.TIPSKUAN = 'TIPSKUAN';
    GAMEEVENT.GOLDTIP = 'GOLDTIP';
    GAMEEVENT.FARM = 'FARM';
    GAMEEVENT.ONPROGRESSFARM = 'ONPROGRESSFARM';
    GAMEEVENT.ONLOADCOMPLETEFARM = 'ONLOADCOMPLETEFARM';
    GAMEEVENT.LOGIN_FARM = 'LOGIN_FARM';
    GAMEEVENT.GETINITINFO = 'GETINITINFO';
    GAMEEVENT.BOTTOMBTN = 'BOTTOMBTN';
    GAMEEVENT.HIDEINFODIV = 'HIDEINFODIV';
    GAMEEVENT.SHOWINFODIV = 'SHOWINFODIV';
    GAMEEVENT.TEST_LOGIN_FARM = 'FARM';

    class loginModel {
        constructor() {
        }
    }

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var base;
        (function (base) {
            class tishi_tipUI extends Laya.Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("base/tishi_tip");
                }
            }
            base.tishi_tipUI = tishi_tipUI;
            REG("ui.base.tishi_tipUI", tishi_tipUI);
        })(base = ui.base || (ui.base = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var farm;
        (function (farm) {
            class farmIndexsceneUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("farm/farmIndexscene");
                }
            }
            farm.farmIndexsceneUI = farmIndexsceneUI;
            REG("ui.farm.farmIndexsceneUI", farmIndexsceneUI);
            class farmLandUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("farm/farmLand");
                }
            }
            farm.farmLandUI = farmLandUI;
            REG("ui.farm.farmLandUI", farmLandUI);
            class itemUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("farm/item");
                }
            }
            farm.itemUI = itemUI;
            REG("ui.farm.itemUI", itemUI);
            class seedListUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("farm/seedList");
                }
            }
            farm.seedListUI = seedListUI;
            REG("ui.farm.seedListUI", seedListUI);
        })(farm = ui.farm || (ui.farm = {}));
    })(ui || (ui = {}));
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

    class CONST {
    }
    CONST.STAGEHEIGHT = Laya.Browser.clientHeight;
    CONST.STAGEWIDTH = Laya.Browser.clientWidth;
    CONST.DESIGNSTAGEHEIGHT = 2688;
    CONST.DESIGNSTAGEWIDTH = 1242;
    CONST.DEBUGMODE = 1;
    CONST.IS_TB = 2;
    CONST.LOGIN_URL = "http://192.168.0.226/index.php";
    CONST.SRC_URL = "http://192.168.0.226/pic/";

    class BaseView extends Laya.View {
        constructor($class, isShowMask = true) {
            super();
            this.isRemoveBanner = true;
            this._resources = null;
            this._isInit = false;
            this._isShowMask = isShowMask;
            this._ui = $class;
            this.initUIView();
        }
        get myParent() {
            return this._myParent;
        }
        tweenAlphaAdd(name, type, index) {
            var obj = this;
            var node = gameLayer.bglayer.getChildByName(name);
            console.log("xxxx", node);
            if (node) {
                obj = node;
                obj.visible = true;
                obj.zOrder = 0;
            }
            else {
                obj.zOrder = 0;
                gameLayer.bglayer.addChild(obj);
                console.log(obj);
            }
            console.log(index, '第几层啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊');
            if (index == 1) {
                var _index = gameLayer.bglayer;
            }
            else if (index == 3) {
                var _index = gameLayer.windowlayer;
            }
            Laya.Tween.to(_index, { alpha: 0.1 }, 300, Laya.Ease.elasticIn, Laya.Handler.create(this, function () {
                this.clearChild(type);
                obj.zOrder = 1;
                this.tweenAlphaAllShow(obj);
            }.bind(this)));
        }
        tweenAlphaAllShow(obj) {
            Laya.Tween.to(gameLayer.bglayer, { alpha: 1 }, 300, Laya.Ease.elasticOut);
            console.log(Laya.stage);
        }
        clearChild(type) {
            var obj = gameLayer.bglayer.getChildAt(1);
            if (type == 1) {
                obj.visible = false;
            }
            else if (type == 2) {
                gameLayer.bglayer.removeChildAt(1);
            }
        }
        addToParent() {
            if (this._isShowMask) {
                this._myParent.addChildWithMaskCall(this, () => {
                    this.removeFromParent();
                    this.close();
                });
            }
            else {
                this._myParent.addChild(this);
            }
        }
        initUIView() {
            try {
                this._ui = new this._ui();
            }
            catch (error) {
            }
            finally {
                this.addChild(this._ui);
            }
        }
        removeFromParent() {
            this.removeSelf();
        }
        initUI() {
            this._isInit = true;
        }
        initData() {
            this._isInit = true;
        }
        addEvents() { }
        removeEvents() { }
        isInit() {
            return this._isInit;
        }
        isShow() {
            return this.stage != null && this.visible && this._myParent.contains(this);
        }
        open(...param) {
            this._datas = param;
        }
        setVisible(value) {
            this.visible = value;
        }
        setResources(resources) {
            this._resources = resources;
        }
        loadResource(loadComplete, initComplete) {
            if (this._resources && this._resources.length > 0) {
            }
            else {
                loadComplete && loadComplete();
                initComplete && initComplete();
            }
        }
        close(...param) {
            this.removeEvents();
            if (this.isRemoveBanner) {
            }
        }
        destroy() {
            this.removeEvents();
            this._myParent = null;
            this._ui.removeSelf();
            this._ui = null;
        }
        tweenHide() {
            this.off(Laya.Event.CLICK, this, this.onClick);
            Laya.Tween.to(this, { scaleX: 0, scaleY: 0 }, 1000, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onComplete));
            Laya.Tween.to(this, { alpha: 0 }, 1000, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onAlphaComplete));
        }
        onClick() {
            console.log("onClick");
        }
        onComplete() {
            gameLayer.windowlayer.removeChild(this);
            this.scale(1, 1);
            this.clearAll();
        }
        onAlphaComplete() {
            gameLayer.windowlayer.removeChild(this);
            this.alpha = 1;
            this.clearAll();
        }
        clearAll() {
            this.visible = false;
            this.graphics.clear();
            this.off(Laya.Event.CLICK, this, this.onClick);
            this.removeChildren();
            Laya.Tween.clearAll(this);
            this.visible = false;
        }
        tweenShow() {
            console.log(this);
            this.visible = true;
            this.setCenter();
            this.scale(0, 0);
            this.alpha = 0;
            Laya.Tween.to(this, { alpha: 1 }, 1000, Laya.Ease.linearIn);
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 1000, Laya.Ease.elasticOut);
            this.showModal();
            gameLayer.windowlayer.addChild(this);
        }
        showModal() {
            this.visible = true;
            this.graphics.clear();
            this.alpha = .25;
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            gameLayer.windowlayer.addChild(this);
            this.on(Laya.Event.CLICK, this, this.onClick);
        }
        setCenter() {
            this.pivotX = this.width * .5;
            this.pivotY = this.height * .5;
            this.x = Laya.stage.width * .5;
            this.y = Laya.stage.height * .5;
        }
        setScale(obj) {
            var str = 0;
            if (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH > 1) {
                str = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
            }
            if (CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT > 1) {
                str = CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
            }
            if (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH > CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT) {
                str = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
            }
            else {
                str = CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
            }
            obj.scale(CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH, CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT);
        }
        get ui() { return this._ui; }
        set ui(value) { this._ui = value; }
        get datas() { return this._datas; }
        set datas(value) { this._datas = value; }
    }

    class NETWORKEVENT {
    }
    NETWORKEVENT.CONNECTONOPEN = "pid_1000";
    NETWORKEVENT.CONNECTONCLOSE = "pid_1001";
    NETWORKEVENT.HTTP_LOGIN_OK = "HTTP_LOGIN_OK";
    NETWORKEVENT.HTTP_ERROR_BAK = "HTTP_ERROR_BAK";
    NETWORKEVENT.GAMEFAILTIP = 'game_fail_tip';
    NETWORKEVENT.INITINFO = "init_info";
    NETWORKEVENT.USERCOUNTINFO = 'user_count_info_bak';
    NETWORKEVENT.FARMINITFIELD = "init_field";
    NETWORKEVENT.FARMINITSEEDLIST = "init_seed_list";
    NETWORKEVENT.FARMINITFLOWERGRADE = 'init_flower_grade';
    NETWORKEVENT.FARMINITPLANTFLOWER = 'init_plant_flower';
    NETWORKEVENT.FARMINITFLOWERFERTILIZE = 'init_flower_fertilize';
    NETWORKEVENT.FARMINITFLOWERFAT = 'init_flower_fat';
    NETWORKEVENT.FARMINITFLOWERWATER = 'init_flower_water';
    NETWORKEVENT.FARMINITGROWFLOWER = 'init_grow_flower';
    NETWORKEVENT.FARMINITCOLLECTFLOWER = 'init_collect_flower';
    NETWORKEVENT.FARMSENDFLOWERFATBAK = 'send_flower_fat_bak';
    NETWORKEVENT.SENDFACTORYBAK = 'send_factory_bak';
    NETWORKEVENT.FACTORYCREATEBAK = 'factory_create_bak';
    NETWORKEVENT.FACTORYGOODSAVEBAK = 'factory_good_save_bak';
    NETWORKEVENT.FACTORYOPENSEATNUMBAK = 'factory_open_seat_num_bak';
    NETWORKEVENT.SENDGOODBAK = 'send_good_bak';
    NETWORKEVENT.FACTORYACTBAK = 'factory_act_bak';
    NETWORKEVENT.FACTORYUPGRADEBAK = 'factory_up_grade_bak';
    NETWORKEVENT.FACTORYGOODGETBAK = 'factory_good_get_bak';
    NETWORKEVENT.SENDUSERGRADEUP = 'send_user_grade_up';
    NETWORKEVENT.STOREINFOBAK = 'store_info_bak';
    NETWORKEVENT.STOREUPGRADEBAK = 'store_up_gread_bak';
    NETWORKEVENT.STOREGOODDEL = 'store_good_del_bak';
    NETWORKEVENT.LOTTERYINFOBAK = 'lottery_info_bak';
    NETWORKEVENT.LOTTERYACTBAK = 'lottery_act_bak';

    class GAMECONFIG {
    }
    GAMECONFIG.farmLand = {
        "ht01": { "x": 425, "y": 576, "zOrder": 9 },
        "ht02": { "x": 632, "y": 430, "zOrder": 8 },
        "ht03": { "x": 841, "y": 280, "zOrder": 7 },
        "ht04": { "x": 212, "y": 434, "zOrder": 6 },
        "ht05": { "x": 425, "y": 289, "zOrder": 5 },
        "ht06": { "x": 631, "y": 138, "zOrder": 4 },
        "ht07": { "x": 0, "y": 296, "zOrder": 3 },
        "ht08": { "x": 212, "y": 149, "zOrder": 2 },
        "ht09": { "x": 422, "y": 0, "zOrder": 1 },
    };

    class dataGlobal {
        constructor() {
            this.query = {
                "uid": '',
                "sid": '',
                "sid2": '',
                "system": ''
            };
            this.query.system = this.get_sys();
            this.farmInfo = {};
            this.userInfo = {
                "grade": 22,
                "have_gold": 1000000
            };
            this.factory = {};
            this.userGoodInfo = {};
            this.warehouseInfo = {};
            this.lotteryInfo = {};
        }
        static getInstance() {
            if (dataGlobal._instance == null) {
                dataGlobal._instance = new dataGlobal();
            }
            return dataGlobal._instance;
        }
        setUserInfo(data) {
            if (typeof data.sid != 'undefined') {
                this.userInfo.sid = data.sid;
            }
            if (typeof data.sid2 != 'undefined') {
                this.userInfo.sid2 = data.sid2;
            }
            if (typeof data.uid != 'undefined') {
                this.userInfo.uid = data.uid;
            }
            if (typeof data.name != 'undefined') {
                this.userInfo.name = data.name;
            }
            if (typeof data.nickname != 'undefined') {
                this.userInfo.nickname = data.nickname;
            }
            if (typeof data.pic != 'undefined') {
                this.userInfo.pic = data.pic;
            }
            if (typeof data.sex != 'undefined') {
                this.userInfo.sex = data.sex;
            }
            if (typeof data.token != 'undefined') {
                this.userInfo.token = data.token;
            }
            if (typeof data.have_gold != 'undefined') {
                this.userInfo.have_gold = data.have_gold;
            }
            if (typeof data.grade != 'undefined') {
                this.userInfo.grade = data.grade;
            }
            if (typeof data.exp != 'undefined') {
                this.userInfo.exp = data.exp;
            }
            if (typeof data.flower_num != 'undefined') {
                this.userInfo.flower_num = data.flower_num;
            }
            if (typeof data.order_num != 'undefined') {
                this.userInfo.order_num = data.order_num;
            }
            if (typeof data.goods_num != 'undefined') {
                this.userInfo.goods_num = data.goods_num;
            }
            if (typeof data.upgrade_exp != 'undefined') {
                this.userInfo.upgrade_exp = data.upgrade_exp;
            }
            if (typeof data.sid != 'undefined') {
                this.query.sid = data.sid;
            }
            if (typeof data.sid2 != 'undefined') {
                this.query.sid2 = data.sid2;
            }
            if (typeof data.sid2 != 'undefined') {
                this.query.uid = data.uid;
            }
        }
        setUserProp(data) {
            this.userProp = data;
        }
        setGameWS(ws) {
            this.gameWS = ws;
        }
        static getRound(lowValue, highValue) {
            var choice = highValue - lowValue;
            return Math.floor(Math.random() * choice + lowValue);
        }
        get_sys() {
            let tmp_sys = Laya.Browser.userAgent;
            if (Laya.Browser.onAndroid) {
                tmp_sys += ",Android";
            }
            if (Laya.Browser.onIOS) {
                tmp_sys += ",ios";
            }
            if (Laya.Browser.onIPad) {
                tmp_sys += ",ipad";
            }
            if (Laya.Browser.onIPhone) {
                tmp_sys += ",iphone";
            }
            return tmp_sys;
        }
        setFarmInfo(data, id) {
            if (id) {
                this.farmInfo[id] = this.farmInfo[id] ? this.farmInfo[id] : {};
                for (var i in data) {
                    this.farmInfo[id][i] = (this.farmInfo[id][i] || this.farmInfo[id][i] == 0) ? this.farmInfo[id][i] : (typeof data[i] == 'object' ? {} : '');
                    if (typeof data[i] == 'object') {
                        for (var y in data[i]) {
                            this.farmInfo[id][i][y] = (this.farmInfo[id][i][y] || this.farmInfo[id][i][y] == 0) ? this.farmInfo[id][i][y] : '';
                            this.farmInfo[id][i][y] = data[i][y];
                        }
                    }
                    else {
                        this.farmInfo[id][i] = data[i];
                    }
                }
            }
            else {
                for (var i in data) {
                    this.farmInfo[data[i].ff_id] = this.farmInfo[data[i].ff_id] ? this.farmInfo[data[i].ff_id] : {};
                    for (var y in data[i]) {
                        this.farmInfo[data[i].ff_id][y] = this.farmInfo[data[i].ff_id][y] ? this.farmInfo[data[i].ff_id][y] : (typeof data[i][y] == 'object' ? {} : '');
                        if (typeof data[i][y] == 'object') {
                            for (var q in data[i][y]) {
                                this.farmInfo[data[i].ff_id][y][q] = data[i][y][q];
                            }
                        }
                        else {
                            this.farmInfo[data[i].ff_id][y] = data[i][y];
                        }
                    }
                }
            }
        }
        setFlowerInfo(id) {
            this.farmInfo[id].seed_data = {};
        }
        setFactory(data, id) {
            if (id) {
                this.factory[id] = data;
            }
            else {
                this.factory = data ? data : {};
            }
        }
        buySetFactory(data) {
            if (data.mf_id) {
                this.factory[data.mf_id].grade = data.grade;
                this.factory[data.mf_id].open_seat_num = data.open_seat_num;
            }
        }
        setUserGoodInfo(data) {
            for (var i in data) {
                this.userGoodInfo[data[i].id] = data[i];
            }
        }
        setWarehouseInfo(data) {
            if (typeof data.store_id != 'undefined') {
                this.warehouseInfo.store_id = data.store_id;
            }
            if (typeof data.grade != 'undefined') {
                this.warehouseInfo.grade = data.grade;
            }
            if (typeof data.num != 'undefined') {
                this.warehouseInfo.num = data.num;
            }
            if (typeof data.num2 != 'undefined') {
                this.warehouseInfo.num2 = data.num2;
            }
            if (typeof data.num3 != 'undefined') {
                this.warehouseInfo.num3 = data.num3;
            }
            if (typeof data.name != 'undefined') {
                this.warehouseInfo.name = data.name;
            }
            if (typeof data.data_info != 'undefined') {
                this.warehouseInfo.data_info = data.data_info;
            }
        }
        setlotteryInfo(data, type) {
            if (type) {
                this.lotteryInfo = {};
            }
            for (var i in data) {
                this.lotteryInfo[data[i].lottery_id] = data[i];
            }
        }
    }

    class globalFun {
        constructor() {
        }
        static getInstance() {
            if (globalFun._instance == null) {
                globalFun._instance = new globalFun;
            }
            return globalFun._instance;
        }
        formatSeconds(value) {
            var secondTime = Math.floor(value);
            var minuteTime = 0;
            var hourTime = 0;
            if (secondTime > 60) {
                minuteTime = Math.floor(secondTime / 60);
                secondTime = Math.floor(secondTime % 60);
                if (minuteTime > 60) {
                    hourTime = Math.floor(minuteTime / 60);
                    minuteTime = Math.floor(minuteTime % 60);
                }
            }
            if (hourTime > 0) {
                var result = "";
                result = "" + (Math.floor(minuteTime) < 10 ? '0' + Math.floor(minuteTime) : Math.floor(minuteTime)) + "分" + result;
                result = "" + (Math.floor(hourTime) < 10 ? '0' + Math.floor(hourTime) : Math.floor(hourTime)) + "小时" + result;
            }
            else {
                var result = "" + (Math.floor(secondTime) < 10 ? '0' + Math.floor(secondTime) : Math.floor(secondTime)) + "秒";
                result = "" + (Math.floor(minuteTime) < 10 ? '0' + Math.floor(minuteTime) : Math.floor(minuteTime)) + "分" + result;
            }
            return result;
        }
        getCountDown(value) {
            var secondTime = Math.floor(value);
            var hour = secondTime % 86400 / 3600 < 10 ? '0' + Math.floor(secondTime % 86400 / 3600) : Math.floor(secondTime % 86400 / 3600);
            var minute = secondTime % 86400 % 3600 / 60 < 10 ? '0' + Math.floor(secondTime % 86400 % 3600 / 60) : Math.floor(secondTime % 86400 % 3600 / 60);
            var second = secondTime % 86400 % 3600 % 60 < 10 ? '0' + Math.floor(secondTime % 86400 % 3600 % 60) : Math.floor(secondTime % 86400 % 3600 % 60);
            return hour + ':' + minute + ':' + second;
        }
        goBtn(type) {
        }
    }

    class tipIndex extends BaseView {
        constructor() {
            super(ui.base.tishi_tipUI);
        }
        tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            console.log(this.ui.scene);
            var _tipKuan = this.ui.scene;
            _tipKuan.content_txt.text = content_txt;
            _tipKuan.confirm_btn.label = confirm_txt;
            _tipKuan.cancel_btn.label = cancel_txt;
            _tipKuan.confirm_btn.on(Laya.Event.CLICK, this, confirm_fun);
            _tipKuan.cancel_btn.on(Laya.Event.CLICK, this, this.close);
            console.log('窗口');
            this.tweenShow();
        }
        close() {
            this.tweenHide();
        }
        gameFailTip(data) {
            var myData = data.gd;
            this.tipShow(myData.msg, '确定', '取消', function () {
                this.close();
            }.bind(this), function () {
                this.close();
            }.bind(this));
        }
        gameTxtTip(txt, call_fun) {
        }
        goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            this.tweenShow();
        }
    }

    class tipView {
        constructor() {
        }
        tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            if (this._tipCom == null) {
                this._tipCom = new tipIndex;
            }
            this._tipCom.tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
        }
        goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            if (this._tipCom == null) {
                this._tipCom = new tipIndex;
            }
            this._tipCom.goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
        }
        gameTxtTip(txt, call_fun) {
            if (this._tipCom == null) {
                this._tipCom = new tipIndex;
            }
            this._tipCom.gameTxtTip(txt, call_fun);
        }
        gameFailTip(data) {
            if (this._tipCom == null) {
                this._tipCom = new tipIndex;
            }
            this._tipCom.gameFailTip(data);
        }
        close() {
            if (this._tipCom == null) {
                this._tipCom = new tipIndex;
            }
            this._tipCom.close();
        }
    }

    class tipController {
        constructor() {
            Laya.stage.on(GAMEEVENT.TIPSKUAN, this, this.tipShow);
            Laya.stage.on(GAMEEVENT.GOLDTIP, this, this.goldTipShow);
            Laya.stage.on(NETWORKEVENT.GAMEFAILTIP, this, this.gameFailTip);
        }
        static getInstance() {
            if (tipController._instance == null) {
                tipController._instance = new tipController;
            }
            return tipController._instance;
        }
        tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            if (this._tipview == null) {
                this._tipview = new tipView();
            }
            this._tipview.tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
        }
        goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            if (this._tipview == null) {
                this._tipview = new tipView;
            }
            this._tipview.goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
        }
        gameTxtTip(txt, call_fun) {
            if (this._tipview == null) {
                this._tipview = new tipView;
            }
            this._tipview.gameTxtTip(txt, call_fun);
        }
        gameFailTip(data) {
            if (this._tipview == null) {
                this._tipview = new tipView;
            }
            this._tipview.gameFailTip(data);
        }
        close() {
            if (this._tipview == null) {
                this._tipview = new tipView;
            }
            this._tipview.close();
        }
    }

    class farmLand extends ui.farm.farmLandUI {
        constructor() {
            super();
        }
        init(data) {
            this.land_id = data.ff_id;
            this.initLand();
            this._farmland = this;
            this._farmland.x = data.x;
            this._farmland.y = data.y;
            this._farmland.zOrder = data.zOrder;
            this._farmland.name = data.ff_id;
            this.setTimer();
            this.water_icon.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
            this.harvest_icon.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
            return this._farmland;
        }
        initLand() {
            this.initLandDiv();
            this.initLandStatic();
        }
        initLandDiv() {
            this.flower.visible = false;
            this.extend_btn.visible = false;
            this.extend_kuan.visible = false;
            this.upgrade_kuan.visible = false;
            this.xuanzhong.visible = false;
            this.grow_kuan.visible = false;
            this.fertilizer_kuan.visible = false;
            this.harvest_icon.visible = false;
            this.water_icon.visible = false;
            var landId = farmController.getInstance().model.landId;
            if (landId == this.land_id) {
                this.xuanzhong.visible = true;
            }
            this.land.mouseEnabled = false;
            this.flower.mouseEnabled = false;
            this.extend_btn.mouseEnabled = false;
            this.extend_gold.mouseEnabled = false;
            this.upgrade_gold.mouseEnabled = false;
            this.upgrade_level.mouseEnabled = false;
            this.upgrade_info.mouseEnabled = false;
            this.upgrade_progressbar.mouseEnabled = false;
            this.xuanzhong.mouseEnabled = false;
            this.extend_kuan.mouseEnabled = false;
            this.upgrade_kuan.mouseEnabled = false;
            this.grow_kuan.mouseEnabled = false;
            this.fertilizer_kuan.mouseEnabled = false;
            this.harvest_icon.mouseEnabled = false;
            this.water_icon.mouseEnabled = false;
        }
        setTimer() {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            if (data.seed_data.mature_time > 0 || data.fat_time > 0) {
                if (farmLand._timer) {
                    farmLand._timer.clear(this, this.timerFun);
                }
                farmLand._timer = new Laya.Timer();
                farmLand._timer.loop(1000, this, this.timerFun);
            }
        }
        timerFun() {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            if (data.seed_data.mature_time == 0 && data.fat_time == 0) {
                farmLand._timer.clear(this, this.timerFun);
            }
            if (data.seed_data.mature_time && data.seed_data.mature_time > 0) {
                data.seed_data.mature_time--;
                data.seed_data.next_mature_time--;
                if (data.seed_data.water_time && data.seed_data.water_time > 0) {
                    data.seed_data.water_time--;
                    this.isOperation(data);
                }
                this.grow_time.text = globalFun.getInstance().formatSeconds(data.seed_data.mature_time);
                this.grow_time_val.value = Math.floor((data.seed_data.mature_time / data.seed_data.grow_time_tol) * 100) >= 100 ? 100 : Math.floor((data.seed_data.mature_time / data.seed_data.grow_time_tol) * 100);
                if (data.seed_data.mature_time <= 0) {
                    this.grow_kuan.visible = false;
                }
                console.log(data.seed_data.next_mature_time, '----', data.seed_data.mature_time);
                if (data.seed_data.next_mature_time <= 0) {
                    Laya.stage.event(NETWORKEVENT.FARMINITGROWFLOWER);
                }
            }
            if (data.fat_time > 0) {
                data.fat_time--;
                this.fertilizer_time.text = globalFun.getInstance().formatSeconds(data.fat_time);
                this.fertilizer_time_val.value = Math.floor((data.fat_time / data.fat_time_tol) * 100);
                this.fertilizer_kuan.visible = true;
                if (data.fat_time <= 0) {
                    this.fertilizer_kuan.visible = false;
                    Laya.stage.event(NETWORKEVENT.FARMINITFLOWERFAT);
                }
            }
        }
        onClickLand() {
            if (farmController.getInstance().model.clickLandStatic == 'harvest' || farmController.getInstance().model.clickLandStatic == 'water') {
                farmController.getInstance().model.setClickLandStatic('');
                return;
            }
            console.log('点击', '--', this.land_id, '--', this.land_static);
            farmController.getInstance().model.setLandId(this.land_id);
            farmController.getInstance().initLand();
            switch (this.land_static) {
                case 'unlock':
                    this.onGradeExtend(2);
                    break;
                case 'plant':
                case 'fertilizer':
                    farmController.getInstance().model.setClickLandStatic(this.land_static);
                    farmController.getInstance().model.setLandId(this.land_id);
                    farmController.getInstance().initLand();
                    farmController.getInstance().showSeepList();
                    this.xuanzhong.visible = true;
                    break;
                case 'upgrade':
                    farmController.getInstance().initLand();
                    this.xuanzhong.visible = true;
                    this.onGradeExtend(1);
                    break;
                case 'harvest':
                    farmController.getInstance().model.setClickLandStatic('harvest');
                    farmController.getInstance().model.setLandId('');
                    this.onHarvest();
                    break;
                case 'water':
                    farmController.getInstance().model.setClickLandStatic('water');
                    farmController.getInstance().model.setLandId('');
                    this.onWater();
                    break;
            }
        }
        onWater() {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            if (data.seed_data.id && typeof data.seed_data.water_time == 'number' && data.seed_data.water_time <= 0) {
                console.log('浇水');
            }
        }
        onHarvest() {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            if (data.seed_data.id && data.seed_data.grow_static == 4) {
                console.log('可以收获');
            }
            else {
                Laya.stage.event(GAMEEVENT.TIPSKUAN, ['还不能收获', '确定', '取消', function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
            }
        }
        onGradeExtend(type) {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            var str = '';
            var have_gold = 30000000;
            if (type == 1) {
                if (Math.floor(data.ff_exp) < Math.floor(data.next_exp)) {
                    str = '经验不够，不能升级';
                    console.log(str);
                }
                if (have_gold < data.next_ff_id_glod) {
                    str = '金币不够，不能升级';
                    console.log(str);
                }
            }
            else if (type == 2) {
                if (have_gold < data.ff_id_unlocknum) {
                    str = '金币不够，不能升级';
                    console.log(str);
                }
            }
            if (str) {
                Laya.stage.event(GAMEEVENT.TIPSKUAN, [str, '确定', '取消', function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
                return;
            }
            Laya.stage.event(NETWORKEVENT.FARMINITFLOWERGRADE, this.land_id);
        }
        initLandStatic() {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            this.land.graphics.drawTexture(Laya.loader.getRes("farm/" + data.pic + ".png"));
            this.land.visible = true;
            this.land.off(Laya.Event.CLICK, this, this.onClickLand);
            this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
            if (data.ff_vip == 1) {
                this.land_static = 'unlock';
                if (data.is_lock == 2) {
                    return;
                }
                this.extend_kuan.visible = true;
                this.extend_btn.visible = true;
                this.on(Laya.Event.CLICK, this, this.onClickLand);
                this.extend_gold.text = data.ff_id_unlocknum;
                this.extend_gold.visible = true;
                return;
            }
            if (this.land_static == 'upgrade') {
                this.upgrade_kuan.visible = true;
                if (data.ff_vip >= data.max_grade) {
                    this.upgrade_info.text = "<span style='color:#ffffff'>满级</span>";
                    this.upgrade_info.visible = true;
                    this.land.on(Laya.Event.CLICK, this, function () {
                    });
                }
                else {
                    this.upgrade_info.text = "加成:" + data.seed + "%+" + data.next_seed + "%";
                    this.upgrade_info.visible = true;
                    this.upgrade_gold.text = data.next_ff_id_glod;
                    this.upgrade_gold.visible = true;
                    this.upgrade_level.text = 'lv:' + (data.ff_vip - 1);
                    this.upgrade_level.visible = true;
                    this.upgrade_progressbar.value = Math.floor((data.ff_exp / data.next_exp) * 100) >= 100 ? 100 : Math.floor((data.ff_exp / data.next_exp) * 100);
                    this.upgrade_progressbar.visible = true;
                    this.land.on(Laya.Event.CLICK, this, this.onClickLand);
                }
                return;
            }
            if (this.land_static == 'fertilizer' || this.land_static == 'plant') {
                if (data.fat_time > 0 && farmController.getInstance().model.landId == this.land_id) {
                    this.fertilizer_time.text = globalFun.getInstance().formatSeconds(data.fat_time);
                    this.fertilizer_time_val.value = Math.floor((data.fat_time / data.fat_time_tol) * 100) >= 100 ? 100 : Math.floor((data.fat_time / data.fat_time_tol) * 100);
                    this.fertilizer_kuan.visible = true;
                }
            }
            if (data.seed_data.id) {
                this.flower.graphics.drawTexture(Laya.loader.getRes("farm/" + data.seed_data.id + "_" + data.seed_data.grade + ".png"));
                this.flower.visible = true;
                if (this.isOperation(data)) {
                    return;
                }
                if (farmController.getInstance().model.landId == this.land_id && data.seed_data.mature_time > 0) {
                    this.grow_time.text = globalFun.getInstance().formatSeconds(data.seed_data.mature_time);
                    this.grow_time_val.value = Math.floor((data.seed_data.mature_time / data.seed_data.grow_time_tol) * 100) >= 100 ? 100 : Math.floor((data.seed_data.mature_time / data.seed_data.grow_time_tol) * 100);
                    this.grow_kuan.visible = true;
                }
                this.land.on(Laya.Event.CLICK, this, this.onClickLand);
                this.land_static = 'fertilizer';
            }
            else {
                this.land.on(Laya.Event.CLICK, this, this.onClickLand);
                this.land_static = 'plant';
            }
        }
        isOperation(data) {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            var clickLandStatic = farmController.getInstance().model.clickLandStatic;
            if (clickLandStatic == '' || clickLandStatic == 'harvest' || clickLandStatic == 'water') {
                if (clickLandStatic == '') {
                    if (data.seed_data.id && data.seed_data.grow_static == 4 && data.seed_data.mature_time <= 0) {
                        this.land_static = 'harvest';
                        this.land.off(Laya.Event.CLICK, this, this.onClickLand);
                        this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                        this.land.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                        this.harvest_icon.visible = true;
                        return true;
                    }
                    else if (typeof data.seed_data.water_time == 'number' && data.seed_data.water_time <= 0) {
                        this.land_static = 'water';
                        this.land.off(Laya.Event.CLICK, this, this.onClickLand);
                        this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                        this.land.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                        this.water_icon.visible = true;
                        return true;
                    }
                }
            }
        }
    }

    class seedItem extends ui.farm.itemUI {
        constructor() {
            super();
        }
        init() {
            return this;
        }
    }

    class farmSeedList extends ui.farm.seedListUI {
        constructor() {
            super();
        }
        init() {
            this._seedListScene = this;
            this._seed_list = this.seed_list;
            this._seed_list.repeatX = 5;
            this._seed_list.repeatX = 1;
            this._seed_list.hScrollBarSkin = "";
            this._seedListScene.visible = false;
            return this._seedListScene;
        }
        addSeedListItem(data) {
            var seed_data = data;
            this.addSeedItem(seed_data);
        }
        setSeedListItem() {
            this.setSeedItem();
        }
        addSeedItem(data) {
            for (var i in data) {
                console.log(data[i]);
                var _seedItem = new seedItem();
                _seedItem.name = 'seed_' + data[i].id;
                console.log(data[i]);
                console.log(data[i]);
                console.log(data[i]);
                var ntn = parseInt(data[i].id.replace(/[^0-9]/ig, ""));
                _seedItem.x = (this._seed_list.width / 6) * (ntn - 2);
                _seedItem.y = (this._seed_list.height - _seedItem.height) / 2;
                _seedItem.gold.text = data[i].gold;
                _seedItem.seep_pic.graphics.drawTexture(Laya.loader.getRes("farm/" + data[i].id + "_seed.png"));
                this.initSeedItem(_seedItem);
                this._seed_list.addChild(_seedItem);
            }
        }
        setSeedItem() {
            var grade = dataGlobal.getInstance().userInfo.grade;
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var seed_arr = farmController.getInstance().model.seedData;
            for (var i in seed_arr) {
                console.log('seed_' + seed_arr[i].id);
                console.log('这是列表', this._seed_list.getChildByName('seed_' + seed_arr[i].id));
                var _seedItem = this._seed_list.getChildByName('seed_' + seed_arr[i].id);
                this.initSeedItem(_seedItem);
                _seedItem.off(Laya.Event.CLICK, this, this.onClick);
                if (grade >= seed_arr[i].grade2 && grade <= seed_arr[i].grade3) {
                    if (have_gold >= seed_arr[i].gold) {
                        _seedItem.scene.gold.color = '#EDFF24';
                        _seedItem.on(Laya.Event.CLICK, this, this.onClick, ['buy', { 'id': seed_arr[i].id }]);
                    }
                    else {
                        _seedItem.scene.gold.color = '#FF3E24';
                        _seedItem.on(Laya.Event.CLICK, this, this.onClick, ['noMoney', { 'gold': seed_arr[i].gold }]);
                    }
                }
                else {
                    _seedItem.scene.suo_div.visible = true;
                    _seedItem.scene.gold.color = '#274200';
                    _seedItem.on(Laya.Event.CLICK, this, this.onClick, ['lock', { 'grade': seed_arr[i].grade2 }]);
                }
                console.log(_seedItem.scene.suo_div);
            }
            this._seedListScene.visible = true;
        }
        initSeedItem(itemObj) {
            itemObj.suo_div.visible = false;
            itemObj.gold.color = '#EDFF24';
        }
        addFertilizerItem(data) {
            for (var i in data) {
            }
        }
        setFatItem() {
            var grade = dataGlobal.getInstance().userInfo.grade;
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var fat_arr = farmController.getInstance().model.fatData;
            for (var i in fat_arr) {
            }
            this._seedListScene.visible = true;
        }
        hide() {
            this._seedListScene.visible = false;
        }
        onClick(itemStatic, arr) {
            tipController.getInstance();
            if (itemStatic == 'buy') {
                console.log("等级够了，钱也够");
                var landId = farmController.getInstance().model.landId;
                this.onPlant(landId, arr.id);
            }
            else if (itemStatic == 'noMoney') {
                console.log("等级够了，钱不够");
                Laya.stage.event(GAMEEVENT.TIPSKUAN, ['种植该种子需要' + arr.gold + '金币', '确定', '取消', function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
            }
            else if (itemStatic == 'lock') {
                console.log("等级不够");
                Laya.stage.event(GAMEEVENT.TIPSKUAN, ['种植该种子需要' + arr.grade + '级', '确定', '取消', function () {
                        console.log('tanchuang');
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
            }
        }
        onPlant(landId, id) {
            var landData = dataGlobal.getInstance().farmInfo[landId];
            if (landData.seed_data.id) {
                Laya.stage.event(GAMEEVENT.TIPSKUAN, ['该田已经种植了', '确定', '取消', function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
                return;
            }
            var list = {
                "htid": landId,
                "hhid": id
            };
            Laya.stage.event(NETWORKEVENT.FARMINITPLANTFLOWER, list);
        }
        onFertilizer(data) {
            var landId = farmController.getInstance().model.landId;
            var landData = dataGlobal.getInstance().farmInfo[landId];
            if (landData.fat_time > 0) {
                Laya.stage.event(GAMEEVENT.TIPSKUAN, ['该田已经施过肥了', '确定', '取消', function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
            }
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            if (have_gold < data.num) {
                Laya.stage.event(GAMEEVENT.TIPSKUAN, ['施肥种子需要' + data.num + '金币', '确定', '取消', function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
                return;
            }
            Laya.stage.event(NETWORKEVENT.FARMINITFLOWERFERTILIZE);
        }
    }

    class farmIndex extends BaseView {
        constructor() {
            super(ui.farm.farmIndexsceneUI);
        }
        onShow(type) {
            if (this._farmIndex == null) {
                this._farmIndex = new Laya.Sprite();
                this.width = this._farmIndex.width;
                this.height = this._farmIndex.height;
                this._farmIndex.name = 'farmIndex';
                this.loadSeedList();
                this.showInit();
                this.land_div = new Laya.Sprite();
                this.land_div.name = 'land_div';
                this.land_div.x = 12;
                this.land_div.y = 1079;
                this._farmIndex.addChild(this.land_div);
                this.addChild(this._farmIndex);
                this.getFarmLand();
                this.getFarmSeed();
            }
            this.tweenAlphaAdd('farm', type, 1);
        }
        showInit() {
            this.landArr = {};
            this.ui.bg_kuan.on(Laya.Event.CLICK, this, this.cleanAllStatu);
            this.ui.building.on(Laya.Event.CLICK, this, this.onMenuClick, ['building']);
            this.ui.order.on(Laya.Event.CLICK, this, this.onMenuClick, ['order']);
            this.ui.email.on(Laya.Event.CLICK, this, this.onMenuClick, ['email']);
            this.ui.upgrade.on(Laya.Event.CLICK, this, this.onMenuClick, ['upgrade']);
            this.cleanAllStatu();
        }
        loadSeedList() {
            this._seedListClass = new farmSeedList();
            this._seedList = this._seedListClass.init();
            this._seedList.x = 30;
            this._seedList.y = 2200;
            this._seedList.zOrder = 2;
            this._farmIndex.addChild(this._seedList);
        }
        getFarmSeed() {
            Laya.stage.event(NETWORKEVENT.FARMINITSEEDLIST);
        }
        onFarmInitSeedList(data) {
            this._seedListClass.addSeedListItem(data);
        }
        showSeepList() {
            this.showBgKuan();
            this._seedListClass.setSeedListItem();
        }
        getFarmLand() {
            let tmp_data = {
                'a': "init_field",
                'm': "init",
                'd': {},
                'code': 1
            };
            Laya.stage.event(NETWORKEVENT.FARMINITFIELD);
        }
        onShowFarmInitField(data) {
            var land_config = GAMECONFIG.farmLand;
            for (var i in data) {
                var land_data = land_config[data[i].ff_id];
                data[i].zOrder = land_data.zOrder;
                data[i].x = land_data.x;
                data[i].y = land_data.y;
                this.forFarmLand(data[i]);
            }
        }
        forFarmLand(data) {
            var landObj = new farmLand;
            this.landArr[data.ff_id] = landObj;
            this.land_div.addChild(landObj.init(data));
        }
        cleanAllStatu() {
            console.log(this.ui);
            this.ui.bg_kuan.visible = false;
            farmController.getInstance().model.setLandId('');
            farmController.getInstance().model.setClickLandStatic('');
            this.setLandStatic('');
            this.initLand();
            this._seedListClass.hide();
        }
        setPlantFramLand() {
            var landId = farmController.getInstance().model.landId;
            var arr = this.landArr;
            for (var i in arr) {
                if (arr[i].land_static == 'plant') {
                    arr[i].onClickLand();
                    return;
                }
            }
            this.cleanAllStatu();
        }
        initLand() {
            for (var i in this.landArr) {
                this.landArr[i].initLand();
            }
        }
        showBgKuan() {
            this.ui.bg_kuan.visible = true;
        }
        onMenuClick(type) {
            if (this.muneClickStr == type) {
                return;
            }
            this.recoveryBtn(type);
            switch (type) {
                case 'building':
                    console.log('点击建筑物');
                    this.onClickBuilding();
                    break;
                case 'upgrade':
                    console.log('点击升级');
                    break;
                case 'email':
                    console.log('点击邮箱');
                    break;
                case 'order':
                    console.log('点击订单');
                    break;
            }
        }
        recoveryBtn(type) {
            this.muneClickStr = type;
        }
        setLandStatic(str) {
            var data = this.landArr;
            for (var i in data) {
                data[i].land_static = str;
            }
        }
        onClickBuilding() {
        }
        onClickOrder() {
        }
    }

    class farmView {
        constructor() {
        }
        onShow(type) {
            if (this._indexCom == null) {
                this._indexCom = new farmIndex;
            }
            this._indexCom.onShow(type);
        }
        onShowFarmInitField(data) {
            this._indexCom.onShowFarmInitField(data);
        }
        onFarmInitSeedList(data) {
            this._indexCom.onFarmInitSeedList(data);
        }
        showSeepList() {
            this._indexCom.showSeepList();
        }
        setThisLandStatic(id, str) {
        }
        setThisLandTimer(id) {
        }
        initLand() {
            this._indexCom.initLand();
        }
        setPlantFramLand() {
            this._indexCom.setPlantFramLand();
        }
    }

    class farmModel {
        constructor() {
            this.clickLandStatic = '';
            this.landId = '';
        }
        setFatData(data) {
            this.fatData = data;
        }
        setFarmSeed(data) {
            this.seedData = data;
            console.log(this.seedData);
        }
        setLandId(str) {
            this.landId = str;
        }
        setClickLandStatic(str) {
            this.clickLandStatic = str;
        }
    }

    class staticData {
        constructor() {
        }
        static getInstance() {
            if (staticData._instance == null) {
                staticData._instance = new staticData();
            }
            return staticData._instance;
        }
        getFarmInitField() {
            return {
                "ga": "init_field",
                "gd": staticData.INDEX_DATA,
                "code": 1
            };
        }
        getFarmInitFlowerGrade(id) {
            for (var i in staticData.INDEX_DATA) {
                if (staticData.INDEX_DATA[i].ff_id == id) {
                    staticData.INDEX_DATA[i].ff_vip = 2;
                    return {
                        "ga": "init_flower_grade",
                        "gd": staticData.INDEX_DATA[i],
                        "code": 1
                    };
                }
            }
        }
        getFarmInitSeedList() {
            return {
                "ga": "init_seed_list",
                "gd": staticData.SEED_LIST,
                "code": 1
            };
        }
        farmInitPlantFlower(id, hhid) {
            for (var i in staticData.INDEX_DATA) {
                if (staticData.INDEX_DATA[i].ff_id == id) {
                    console.log(staticData.INDEX_DATA[i]);
                    staticData.INDEX_DATA[i].seed_data = {
                        "grow_time_tol": 5000,
                        "next_mature_time": 1000,
                        "mature_time": 500,
                        "grow_static": 1,
                        "id": hhid,
                        "name": "\u7ea2\u73ab\u7470",
                        "grade": "3",
                        "pic": "hh01_1",
                        "ain": ""
                    };
                    staticData.INDEX_DATA[i].msg = "\u79cd\u690d\u6210\u529f";
                    return {
                        "ga": "init_plant_flower",
                        "gd": staticData.INDEX_DATA[i],
                        "code": 1
                    };
                }
            }
        }
    }
    staticData.userInfo = {
        'sid': "渠道ID",
        'sid2': "渠道ID2",
        'uid': "uuu",
        "name": "JIN",
        "nickname": "赤脚大仙",
        "pic": "用户头像",
        "sex": "用户性别",
        "token": "用户的登陆key(这个是登陆时添加的!)"
    };
    staticData.userProp = {};
    staticData.INDEX_DATA = [
        {
            "ff_id": "ht01",
            "ff_vip": 1,
            "ff_exp": 0,
            "ff_id_unlocknum": 50,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "msg": "",
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
        {
            "ff_id": "ht02",
            "ff_vip": 1,
            "ff_exp": 100,
            "ff_id_unlocknum": 100,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
        {
            "ff_id": "ht03",
            "ff_vip": 1,
            "ff_exp": 200,
            "ff_id_unlocknum": 200,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
        {
            "ff_id": "ht04",
            "ff_vip": 1,
            "ff_exp": 100,
            "ff_id_unlocknum": 300,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
        {
            "ff_id": "ht05",
            "ff_vip": 1,
            "ff_exp": 100,
            "ff_id_unlocknum": 400,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
        {
            "ff_id": "ht06",
            "ff_vip": 1,
            "ff_exp": 100,
            "ff_id_unlocknum": 500,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
        {
            "ff_id": "ht07",
            "ff_vip": 1,
            "ff_exp": 100,
            "ff_id_unlocknum": 600,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
        {
            "ff_id": "ht08",
            "ff_vip": 1,
            "ff_exp": 100,
            "ff_id_unlocknum": 700,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
        {
            "ff_id": "ht09",
            "ff_vip": 1,
            "ff_exp": 100,
            "ff_id_unlocknum": 800,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                "mature_time": 100,
                "next_mature_time": 499,
                "grow_time_tol": 9000,
                "grow_static": 2,
                "id": "",
                "name": "",
                "grade": "",
                "pic": "",
                "ain": ""
            }
        },
    ];
    staticData.SEED_LIST = [
        {
            "id": "hh02",
            "name": "\u7ea2\u73ab\u7470",
            "grade": "1",
            "grade2": "1",
            "grade3": "100",
            "pic": "ui:\/\/farm\/hh02_1",
            "ain": "",
            "gold": 100
        },
        {
            "id": "hh02",
            "name": "\u9ed1\u73ab\u7470",
            "grade": "1",
            "grade2": "1",
            "grade3": "100",
            "pic": "ui:\/\/farm\/hh01_2",
            "ain": "",
            "gold": 100
        },
        {
            "id": "hh03",
            "name": "\u9ec4\u73ab\u7470",
            "grade": "1",
            "grade2": "1",
            "grade3": "500",
            "pic": "ui:\/\/farm\/hh01_3",
            "ain": "",
            "gold": 100
        },
        {
            "id": "hh04",
            "name": "\u9752\u73ab\u7470",
            "grade": "1",
            "grade2": "1",
            "grade3": "400",
            "pic": "ui:\/\/farm\/hh01_4",
            "ain": "",
            "gold": 150
        },
        {
            "id": "hh05",
            "name": "\u9752\u73ab\u7470",
            "grade": "1",
            "grade2": "1",
            "grade3": "300",
            "pic": "ui:\/\/farm\/hh02_1",
            "ain": "",
            "gold": 200
        },
        {
            "id": "hh06",
            "name": "\u9752\u73ab\u7470",
            "grade": "1",
            "grade2": "20",
            "grade3": "200",
            "pic": "ui:\/\/farm\/hh02_2",
            "ain": "",
            "gold": 300
        }
    ];

    class farmNetwork {
        constructor() {
        }
        FarmInitField(data) {
            data = staticData.getInstance().getFarmInitField();
            dataGlobal.getInstance().setFarmInfo(data.gd);
            farmController.getInstance().onShowFarmInitField(data.gd);
        }
        FarmInitSeedList(data) {
            data = staticData.getInstance().getFarmInitSeedList();
            console.log(data.gd.seed_data, '/////////////////////');
            farmController.getInstance().model.setFarmSeed(data.gd);
            farmController.getInstance().onFarmInitSeedList(data.gd);
        }
        FarmInitFlowerGrade(id) {
            var data = staticData.getInstance().getFarmInitFlowerGrade(id);
            var myData = data.gd;
            var tmp_arr = {
                'ff_id': myData.ff_id,
                'ff_vip': myData.ff_vip,
                'ff_exp': myData.ff_exp,
                'next_exp': myData.next_exp,
                'ff_id_unlocknum': myData.ff_id_unlocknum,
                'next_ff_id_glod': myData.next_ff_id_glod,
                'pic': myData.pic,
            };
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            farmController.getInstance().initLand();
        }
        FarmInitPlantFlower(list) {
            var data = staticData.getInstance().farmInitPlantFlower(list.htid, list.hhid);
            var myData = data.gd;
            var tmp_arr = {
                'fat_time': myData.fat_time,
                'fat_time_tol': myData.fat_time_tol,
                'ff_exp': myData.ff_exp,
                'seed_data': myData.seed_data
            };
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            farmController.getInstance().setThisLandTimer(myData.ff_id);
            farmController.getInstance().initLand();
            farmController.getInstance().setPlantFramLand();
        }
        FarmInitFlowerFertilize(data) {
            data = { "ga": "init_flower_fertilize", "gd": { "ff_id": "ht01", "fat_time": 500, "fat_time_tol": 5000, "ff_exp": 50, "seed_data": { "grow_time_tol": 5000, "mature_time": 300, "grow_static": 4, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": "1", "pic": "hh01_1", "ain": "" }, "exp_data": { "exp": "20", "exp2": "2", "t": "7200" }, "msg": "\u65bd\u80a5\u6210\u529f" }, "code": 1 };
            var myData = data.gd;
            var tmp_arr = {
                'fat_time': myData.fat_time,
                'fat_time_tol': myData.fat_time_tol,
                'ff_exp': myData.ff_exp,
                'seed_data': myData.seed_data
            };
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            farmController.getInstance().setThisLandTimer(myData.ff_id);
            farmController.getInstance().model.setClickLandStatic('fertilizer');
            farmController.getInstance().initLand();
        }
        FarmInitFlowerWater(data) {
            data = { "ga": "init_flower_water", "gd": { "ff_id": "ht02", "fat_time": 0, "fat_time_tol": 0, "ff_exp": 500, "seed_data": { "grow_time_tol": 5000, "mature_time": 900, "grow_static": 2, "id": "hh02", "name": "\u7ea2\u73ab\u7470", "grade": "1", "pic": "hh02_2", "ain": "" }, "exp_data": { "exp": "20", "exp2": "2", "t": "7200" }, "msg": "\u6d47\u6c34\u6210\u529f" }, "code": 1 };
            var myData = data.gd;
            var tmp_arr = {
                'fat_time': myData.fat_time,
                'fat_time_tol': myData.fat_time_tol,
                'ff_exp': myData.ff_exp,
                'seed_data': myData.seed_data
            };
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            farmController.getInstance().initLand();
        }
        FarmInitGrowFlower(data) {
            var myData = data.gd;
            var tmp_arr = {
                'fat_time': myData.fat_time,
                'fat_time_tol': myData.fat_time_tol,
                'ff_exp': myData.ff_exp,
                'seed_data': myData.seed_data
            };
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            console.log('成长了');
            farmController.getInstance().initLand();
        }
        FarmCollectFlower(data) {
            data = { "ga": "init_collect_flower", "gd": { "ff_id": "ht01", "fat_time": 500, "fat_time_tol": 5000, "ff_exp": 1000, "seed_data": { "grow_time_tol": 0, "mature_time": 0, "grow_static": 0, "id": "", "name": "", "grade": 0, "pic": "", "ain": "" }, "exp_data": { "exp": null, "exp2": null, "t": 0 }, "msg": "\u6536\u83b7\u6210\u529f" }, "code": 1 };
            var myData = data.gd;
            var tmp_arr = {
                'fat_time': myData.fat_time,
                'fat_time_tol': myData.fat_time_tol,
                'ff_exp': myData.ff_exp
            };
            dataGlobal.getInstance().setFlowerInfo(myData.ff_id);
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            farmController.getInstance().initLand();
        }
        FarmInitFlowerFat(data) {
            var myData = data.gd;
            var tmp_arr = {
                'fat_time': myData.fat_time,
                'fat_time_tol': myData.fat_time_tol,
                'ff_exp': myData.ff_exp,
                'seed_data': myData.seed_data
            };
            farmController.getInstance().initLand();
        }
    }

    class farmController {
        constructor() {
            this.model = new farmModel;
            this._network = new farmNetwork;
            Laya.stage.on(GAMEEVENT.FARM, this, this.onShow);
            Laya.stage.on(NETWORKEVENT.FARMINITFIELD, this, this._network.FarmInitField);
            Laya.stage.on(NETWORKEVENT.FARMINITSEEDLIST, this, this._network.FarmInitSeedList);
            Laya.stage.on(NETWORKEVENT.FARMINITFLOWERGRADE, this, this._network.FarmInitFlowerGrade);
            Laya.stage.on(NETWORKEVENT.FARMINITPLANTFLOWER, this, this._network.FarmInitPlantFlower);
            Laya.stage.on(NETWORKEVENT.FARMINITFLOWERFERTILIZE, this, this._network.FarmInitFlowerFertilize);
            Laya.stage.on(NETWORKEVENT.FARMINITFLOWERWATER, this, this._network.FarmInitFlowerWater);
            Laya.stage.on(NETWORKEVENT.FARMINITCOLLECTFLOWER, this, this._network.FarmCollectFlower);
            Laya.stage.on(NETWORKEVENT.FARMINITGROWFLOWER, this, this._network.FarmInitGrowFlower);
            Laya.stage.on(NETWORKEVENT.FARMINITFLOWERFAT, this, this._network.FarmInitFlowerFat);
        }
        static getInstance() {
            if (farmController._instance == null) {
                farmController._instance = new farmController;
            }
            return farmController._instance;
        }
        onShow(type) {
            if (this._farmview == null) {
                this._farmview = new farmView;
            }
            this._farmview.onShow(type);
            Laya.stage.event(GAMEEVENT.BOTTOMBTN, ['farm']);
        }
        onShowFarmInitField(data) {
            this._farmview.onShowFarmInitField(data);
        }
        onFarmInitSeedList(data) {
            this._farmview.onFarmInitSeedList(data);
        }
        showSeepList() {
            this._farmview.showSeepList();
        }
        setThisLandStatic(id, str) {
            this._farmview.setThisLandStatic(id, str);
        }
        setThisLandTimer(id) {
            this._farmview.setThisLandTimer(id);
        }
        initLand() {
            this._farmview.initLand();
        }
        setPlantFramLand() {
            this._farmview.setPlantFramLand();
        }
    }

    class resConfig {
        static getDynamicResUrl(signname, type = 0) {
            for (var key in resConfig.dynamicRes) {
                if (resConfig.dynamicRes[key] && resConfig.dynamicRes[key]['sign'] == signname) {
                    if (type == 1) {
                        return resConfig.dynamicRes[key];
                    }
                    else {
                        return resConfig.dynamicRes[key]['url'];
                    }
                }
            }
            return 'null';
        }
        static getResUrl(signname) {
            for (var key in resConfig.farm) {
                if (resConfig.farm[key] && resConfig.farm[key]['sign'] == signname) {
                    return resConfig.farm[key]['url'];
                }
            }
            for (var key in resConfig.loadingRes) {
                if (resConfig.loadingRes[key] && resConfig.loadingRes[key]['sign'] == signname) {
                    return resConfig.loadingRes[key]['url'];
                }
            }
            return 'null';
        }
    }
    resConfig._url = '';
    resConfig.loadingRes = [
        { url: resConfig._url + 'ui.json', type: Laya.Loader.JSON },
        { url: resConfig._url + 'res/atlas/loading.atlas', type: Laya.Loader.ATLAS, sign: 'login' },
        { url: resConfig._url + 'res/atlas/loading.png', type: Laya.Loader.IMAGE },
    ];
    resConfig.farm = [
        { url: resConfig._url + 'res/atlas/main.atlas', type: Laya.Loader.ATLAS, sign: 'main' },
        { url: resConfig._url + 'res/atlas/farm.atlas', type: Laya.Loader.ATLAS, sign: 'farm' },
        { url: resConfig._url + 'res/atlas/main.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/main1.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/main2.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/farm.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/farm1.png', type: Laya.Loader.IMAGE },
    ];
    resConfig.dynamicRes = [];

    class resManger {
        constructor() {
            this.resaddrlist = [];
            this.resaddrlist = resConfig.farm;
        }
        static getInstance() {
            if (resManger._instance == null) {
                resManger._instance = new resManger();
            }
            return resManger._instance;
        }
        addRes(signname) {
            var tmpurl = resConfig.getDynamicResUrl(signname, 1);
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
            return null;
        }
    }

    class loginWin extends BaseView {
        constructor() {
            super(ui.login.loginUI);
        }
        addEvents() {
            console.log(this.ui);
            console.log(this.ui.login_btn);
            console.log("addEvents", this.ui.login_btn);
            this.ui.on(Laya.Event.CLICK, this, this.loginBtn);
        }
        onShow() {
            this.tweenAlphaAdd('login', 2, 1);
        }
        onShowLogin() {
            this.ui.loading_group.visible = false;
            this.ui.login_group.visible = true;
            this.ui.login_btn.on(Laya.Event.CLICK, this, this.loginBtn);
        }
        loginBtn() {
            Laya.stage.event(GAMEEVENT.TEST_LOGIN_FARM);
        }
        onupdateFarm(x) {
            this.ui.loading_txt.text = x + '%';
            var num = Math.floor(x / (100 / 9)) - 1;
            this.ui.loading_icon.url = "ui://login/0_0000" + num;
        }
        onShowFarm() {
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
            this._loginwin.onShow();
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

    class loginNetwork {
        constructor() {
        }
    }

    class loginController {
        constructor() {
            this.model = new loginModel;
            this._network = new loginNetwork;
            Laya.stage.on(GAMEEVENT.ONRESPROGRESSLOGIN, this, this.onResProgress);
            Laya.stage.on(GAMEEVENT.ONRESCOMPLETELOGIN, this, this.onResComplete);
            Laya.stage.on(GAMEEVENT.ONPROGRESSFARM, this, this.onResProgressFarm);
            Laya.stage.on(GAMEEVENT.ONLOADCOMPLETEFARM, this, this.onResCompleteFarm);
            Laya.stage.on(GAMEEVENT.TEST_LOGIN_FARM, this, this.showFarmView);
        }
        static getInstance() {
            if (loginController._instance == null) {
                loginController._instance = new loginController;
            }
            return loginController._instance;
        }
        showFarmView() {
            Laya.stage.off(GAMEEVENT.TEST_LOGIN_FARM, this, this.showFarmView);
            this._loginview.showFarm();
        }
        onResProgress() {
        }
        onResComplete() {
            Laya.stage.off(GAMEEVENT.ONRESPROGRESSLOGIN, this, this.onResProgress);
            Laya.stage.off(GAMEEVENT.ONRESCOMPLETELOGIN, this, this.onResComplete);
            Laya.Scene.setUIMap("ui.json");
            resManger.getInstance().addGroupRes(resConfig.farm);
            resManger.getInstance().startLoad(GAMEEVENT.ONPROGRESSFARM, GAMEEVENT.ONLOADCOMPLETEFARM);
            this.initView();
        }
        show() {
            this.initView();
        }
        onResProgressFarm(x) {
            this._loginview.updateFarm(x);
            console.log(x);
        }
        onResCompleteFarm() {
            Laya.stage.off(GAMEEVENT.ONPROGRESSFARM, this, this.onResProgressFarm);
            Laya.stage.off(GAMEEVENT.ONLOADCOMPLETEFARM, this, this.onResCompleteFarm);
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
            this.initModule();
            resManger.getInstance().addGroupRes(resConfig.loadingRes);
            resManger.getInstance().startLoad(GAMEEVENT.ONRESPROGRESSLOGIN, GAMEEVENT.ONRESCOMPLETELOGIN);
        }
        initModule() {
            gameLayer.initModule();
            mainController.getInstance();
            loginController.getInstance();
        }
    }
    new Main();

}());
