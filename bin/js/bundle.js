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
    GAMEEVENT.TXTTIP = 'TXTTIP';
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
    (function (ui) {
        var warehouse;
        (function (warehouse) {
            class good_itemUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("warehouse/good_item");
                }
            }
            warehouse.good_itemUI = good_itemUI;
            REG("ui.warehouse.good_itemUI", good_itemUI);
            class sell_tipUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("warehouse/sell_tip");
                }
            }
            warehouse.sell_tipUI = sell_tipUI;
            REG("ui.warehouse.sell_tipUI", sell_tipUI);
            class warehouseUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("warehouse/warehouse");
                }
            }
            warehouse.warehouseUI = warehouseUI;
            REG("ui.warehouse.warehouseUI", warehouseUI);
        })(warehouse = ui.warehouse || (ui.warehouse = {}));
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
            console.log('关闭');
            this.off(Laya.Event.CLICK, this, this.onClick);
            Laya.Tween.to(this, { scaleX: 0, scaleY: 0 }, 100, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onComplete));
            Laya.Tween.to(this, { alpha: 0 }, 100, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onAlphaComplete));
        }
        onClick() {
            console.log("onClick");
            console.log(this);
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
            this.graphics.clear();
            this.off(Laya.Event.CLICK, this, this.onClick);
            Laya.Tween.clearAll(this);
            this.visible = false;
            this.removeFromParent();
        }
        tweenShow() {
            this.visible = true;
            this.setCenter();
            this.scale(0, 0);
            this.alpha = 0;
            Laya.Tween.to(this, { alpha: 1 }, 1000, Laya.Ease.linearIn);
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 1000, Laya.Ease.elasticOut);
            this.showModal();
        }
        showModal() {
            this.visible = true;
            this.graphics.clear();
            this.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
            this.alpha = 0.25;
            console.log(this.alpha);
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            gameLayer.windowlayer.addChild(this);
            this.on(Laya.Event.CLICK, this, this.onClick);
            console.log('开启');
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
                "grade": 1,
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

    class dataJson {
        constructor() {
            this.init();
        }
        static getInstance() {
            if (dataJson._instance == null) {
                dataJson._instance = new dataJson();
            }
            return dataJson._instance;
        }
        GET_SYS_STORE_INFO() {
            return this.SYS_STORE_INFO;
        }
        GET_SYS_FACTORY_INFO() {
            return this.SYS_FACTORY_INFO;
        }
        GET_SYS_FLOWER_PLANTS() {
            return this.SYS_FLOWER_PLANTS;
        }
        GET_SYS_FLOWER_FIELD() {
            return this.SYS_FLOWER_FIELD;
        }
        GET_SYS_FLOWER_WATER() {
            return this.SYS_FLOWER_WATER;
        }
        GET_SYS_FLOWER_LOTTERY() {
            return this.SYS_FLOWER_LOTTERY;
        }
        GET_SYS_FACTORY_GOOD() {
            return this.SYS_FACTORY_GOOD;
        }
        GET_SYS_FLOWER_COMPOSTED() {
            return this.SYS_FLOWER_COMPOSTED;
        }
        GET_SYS_FLOWER_MEMBER() {
            return this.SYS_FLOWER_MEMBER;
        }
        GET_SYS_GOOD_INFO() {
            return this.SYS_GOOD_INFO;
        }
        init() {
            this.SYS_STORE_INFO = {
                "1": {
                    "grade": "1",
                    "grade2": "1",
                    "num": "50",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "250"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "2": {
                    "grade": "2",
                    "grade2": "1",
                    "num": "50",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "300"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "3": {
                    "grade": "3",
                    "grade2": "1",
                    "num": "60",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "350"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "4": {
                    "grade": "4",
                    "grade2": "1",
                    "num": "70",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "400"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "5": {
                    "grade": "5",
                    "grade2": "1",
                    "num": "80",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "450"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "6": {
                    "grade": "6",
                    "grade2": "1",
                    "num": "90",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "500"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "7": {
                    "grade": "7",
                    "grade2": "1",
                    "num": "100",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "550"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "8": {
                    "grade": "8",
                    "grade2": "1",
                    "num": "110",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "600"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "9": {
                    "grade": "9",
                    "grade2": "1",
                    "num": "120",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "650"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                },
                "10": {
                    "grade": "10",
                    "grade2": "1",
                    "num": "130",
                    "num2": "999",
                    "good": [
                        {
                            "id": "g001",
                            "num": "700"
                        }
                    ],
                    "pic": "",
                    "pic2": "",
                    "ain": ""
                }
            };
            this.SYS_FACTORY_INFO = {
                "gc001": {
                    "1": {
                        "id": "gc001",
                        "name": "工艺花坊",
                        "grade": "1",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "200",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "200",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "gc001",
                        "name": "工艺花坊",
                        "grade": "2",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "2",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "gc001",
                        "name": "工艺花坊",
                        "grade": "3",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "5",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "gc001",
                        "name": "工艺花坊",
                        "grade": "4",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "8",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "gc001",
                        "name": "工艺花坊",
                        "grade": "5",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "12",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "gc002": {
                    "1": {
                        "id": "gc002",
                        "name": "花样美食",
                        "grade": "1",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "200",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "200",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "gc002",
                        "name": "花样美食",
                        "grade": "2",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "2",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "gc002",
                        "name": "花样美食",
                        "grade": "3",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "5",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "gc002",
                        "name": "花样美食",
                        "grade": "4",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "8",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "gc002",
                        "name": "花样美食",
                        "grade": "5",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "12",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "gc003": {
                    "1": {
                        "id": "gc003",
                        "name": "精油工坊",
                        "grade": "1",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "200",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "200",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "gc003",
                        "name": "精油工坊",
                        "grade": "2",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "2",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "gc003",
                        "name": "精油工坊",
                        "grade": "3",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "5",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "gc003",
                        "name": "精油工坊",
                        "grade": "4",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "8",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "gc003",
                        "name": "精油工坊",
                        "grade": "5",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "12",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "gc004": {
                    "1": {
                        "id": "gc004",
                        "name": "清香花茶",
                        "grade": "1",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "200",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "200",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "gc004",
                        "name": "清香花茶",
                        "grade": "2",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "2",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "gc004",
                        "name": "清香花茶",
                        "grade": "3",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "5",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "gc004",
                        "name": "清香花茶",
                        "grade": "4",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "8",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "gc004",
                        "name": "清香花茶",
                        "grade": "5",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "12",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "gc005": {
                    "1": {
                        "id": "gc005",
                        "name": "清香阁",
                        "grade": "1",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "200",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "200",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "gc005",
                        "name": "清香阁",
                        "grade": "2",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "2",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "gc005",
                        "name": "清香阁",
                        "grade": "3",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "5",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "gc005",
                        "name": "清香阁",
                        "grade": "4",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "8",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "gc005",
                        "name": "清香阁",
                        "grade": "5",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "12",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "gc006": {
                    "1": {
                        "id": "gc006",
                        "name": "染料工坊",
                        "grade": "1",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "200",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "200",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "gc006",
                        "name": "染料工坊",
                        "grade": "2",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "2",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "gc006",
                        "name": "染料工坊",
                        "grade": "3",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "5",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "gc006",
                        "name": "染料工坊",
                        "grade": "4",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "8",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "gc006",
                        "name": "染料工坊",
                        "grade": "5",
                        "grade_up": "5",
                        "grade2": "3",
                        "exp": "0",
                        "exp2": "300",
                        "num": "0",
                        "speed": "12",
                        "num2": "300",
                        "unlocknum": "0",
                        "buy_num": "10",
                        "buy_num2": "20",
                        "act_num": "1",
                        "all_num": "3",
                        "pic": "ui://base/pic_factory2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "",
                        "pic3": "",
                        "ain3": "",
                        "pic4": "",
                        "ain4": ""
                    }
                }
            };
            this.SYS_FLOWER_PLANTS = {
                "hh6001": {
                    "1": {
                        "id": "hh6001",
                        "name": "红玫瑰",
                        "grade": "1",
                        "grade2": "1",
                        "grade3": "100",
                        "gold": "0",
                        "num": "1",
                        "num2": "10",
                        "t": "30000",
                        "speed": "100",
                        "exp": "50",
                        "exp2": "50",
                        "pic": "ui://base/pic_3_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_3_1",
                        "ain2": "",
                        "time2": "10000",
                        "pic3": "ui://base/pic_3_3",
                        "ain3": "",
                        "time3": "10000",
                        "pic4": "ui://base/pic_3_3",
                        "ain4": "",
                        "time4": "10000",
                        "pic5": "ui://base/pic_3_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_3_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_3_6",
                        "ain7": ""
                    }
                },
                "hh6002": {
                    "1": {
                        "id": "hh6002",
                        "name": "勿忘我",
                        "grade": "1",
                        "grade2": "1",
                        "grade3": "100",
                        "gold": "10",
                        "num": "1",
                        "num2": "15",
                        "t": "60000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_4_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_4_1",
                        "ain2": "",
                        "time2": "20000",
                        "pic3": "ui://base/pic_4_2",
                        "ain3": "",
                        "time3": "20000",
                        "pic4": "ui://base/pic_4_3",
                        "ain4": "",
                        "time4": "20000",
                        "pic5": "ui://base/pic_4_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_4_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_4_6",
                        "ain7": ""
                    }
                },
                "hh6003": {
                    "1": {
                        "id": "hh6003",
                        "name": "百合",
                        "grade": "1",
                        "grade2": "3",
                        "grade3": "100",
                        "gold": "20",
                        "num": "1",
                        "num2": "20",
                        "t": "72000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_2_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_2_1",
                        "ain2": "",
                        "time2": "24000",
                        "pic3": "ui://base/pic_2_2",
                        "ain3": "",
                        "time3": "24000",
                        "pic4": "ui://base/pic_2_3",
                        "ain4": "",
                        "time4": "24000",
                        "pic5": "ui://base/pic_2_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_2_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_2_6",
                        "ain7": ""
                    }
                },
                "hh6004": {
                    "1": {
                        "id": "hh6004",
                        "name": "紫罗兰",
                        "grade": "1",
                        "grade2": "3",
                        "grade3": "100",
                        "gold": "30",
                        "num": "1",
                        "num2": "20",
                        "t": "75000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_5_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_5_1",
                        "ain2": "",
                        "time2": "25000",
                        "pic3": "ui://base/pic_5_2",
                        "ain3": "",
                        "time3": "25000",
                        "pic4": "ui://base/pic_5_3",
                        "ain4": "",
                        "time4": "25000",
                        "pic5": "ui://base/pic_5_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_5_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_5_6",
                        "ain7": ""
                    }
                },
                "hh6005": {
                    "1": {
                        "id": "hh6005",
                        "name": "红花",
                        "grade": "1",
                        "grade2": "4",
                        "grade3": "100",
                        "gold": "40",
                        "num": "1",
                        "num2": "30",
                        "t": "90000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_6_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_6_1",
                        "ain2": "",
                        "time2": "30000",
                        "pic3": "ui://base/pic_6_2",
                        "ain3": "",
                        "time3": "30000",
                        "pic4": "ui://base/pic_6_3",
                        "ain4": "",
                        "time4": "30000",
                        "pic5": "ui://base/pic_6_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_6_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_6_6",
                        "ain7": ""
                    }
                },
                "hh6006": {
                    "1": {
                        "id": "hh6006",
                        "name": "澳洲腊梅",
                        "grade": "1",
                        "grade2": "4",
                        "grade3": "100",
                        "gold": "40",
                        "num": "1",
                        "num2": "30",
                        "t": "90000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_10_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_6_1",
                        "ain2": "",
                        "time2": "30000",
                        "pic3": "ui://base/pic_6_2",
                        "ain3": "",
                        "time3": "30000",
                        "pic4": "ui://base/pic_6_3",
                        "ain4": "",
                        "time4": "30000",
                        "pic5": "ui://base/pic_6_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_10_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_10_6",
                        "ain7": ""
                    }
                },
                "hh6007": {
                    "1": {
                        "id": "hh6007",
                        "name": "粉玫瑰",
                        "grade": "1",
                        "grade2": "4",
                        "grade3": "100",
                        "gold": "40",
                        "num": "1",
                        "num2": "30",
                        "t": "90000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_6_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_6_1",
                        "ain2": "",
                        "time2": "30000",
                        "pic3": "ui://base/pic_6_2",
                        "ain3": "",
                        "time3": "30000",
                        "pic4": "ui://base/pic_6_3",
                        "ain4": "",
                        "time4": "30000",
                        "pic5": "ui://base/pic_6_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_8_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_8_6",
                        "ain7": ""
                    }
                },
                "hh6008": {
                    "1": {
                        "id": "hh6008",
                        "name": "向日葵",
                        "grade": "1",
                        "grade2": "4",
                        "grade3": "100",
                        "gold": "40",
                        "num": "1",
                        "num2": "30",
                        "t": "90000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_1_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_1_1",
                        "ain2": "",
                        "time2": "30000",
                        "pic3": "ui://base/pic_1_2",
                        "ain3": "",
                        "time3": "30000",
                        "pic4": "ui://base/pic_1_3",
                        "ain4": "",
                        "time4": "30000",
                        "pic5": "ui://base/pic_1_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_1_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_1_6",
                        "ain7": ""
                    }
                },
                "hh6009": {
                    "1": {
                        "id": "hh6009",
                        "name": "雏菊",
                        "grade": "1",
                        "grade2": "4",
                        "grade3": "100",
                        "gold": "40",
                        "num": "1",
                        "num2": "30",
                        "t": "90000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_9_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_6_1",
                        "ain2": "",
                        "time2": "30000",
                        "pic3": "ui://base/pic_6_2",
                        "ain3": "",
                        "time3": "30000",
                        "pic4": "ui://base/pic_6_3",
                        "ain4": "",
                        "time4": "30000",
                        "pic5": "ui://base/pic_6_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_9_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_9_6",
                        "ain7": ""
                    }
                },
                "hh6010": {
                    "1": {
                        "id": "hh6010",
                        "name": "白桔梗",
                        "grade": "1",
                        "grade2": "4",
                        "grade3": "100",
                        "gold": "40",
                        "num": "1",
                        "num2": "30",
                        "t": "90000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_11_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_6_1",
                        "ain2": "",
                        "time2": "30000",
                        "pic3": "ui://base/pic_6_2",
                        "ain3": "",
                        "time3": "30000",
                        "pic4": "ui://base/pic_6_3",
                        "ain4": "",
                        "time4": "30000",
                        "pic5": "ui://base/pic_6_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_11_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_11_6",
                        "ain7": ""
                    }
                },
                "hh6011": {
                    "1": {
                        "id": "hh6011",
                        "name": "香槟玫瑰",
                        "grade": "1",
                        "grade2": "4",
                        "grade3": "100",
                        "gold": "40",
                        "num": "1",
                        "num2": "30",
                        "t": "90000",
                        "speed": "100",
                        "exp": "100",
                        "exp2": "100",
                        "pic": "ui://base/pic_7_5",
                        "ain": "",
                        "time": "0",
                        "pic2": "ui://base/pic_6_1",
                        "ain2": "",
                        "time2": "30000",
                        "pic3": "ui://base/pic_6_2",
                        "ain3": "",
                        "time3": "30000",
                        "pic4": "ui://base/pic_6_3",
                        "ain4": "",
                        "time4": "30000",
                        "pic5": "ui://base/pic_6_4",
                        "ain5": "",
                        "time5": "0",
                        "pic6": "ui://base/pic_7_6",
                        "ain6": "",
                        "pic7": "ui://base/pic_7_6",
                        "ain7": ""
                    }
                }
            };
            this.SYS_FLOWER_FIELD = {
                "ht01": {
                    "1": {
                        "id": "ht01",
                        "name": "花田1",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "0",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht01",
                        "name": "花田1",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht01",
                        "name": "花田1",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht01",
                        "name": "花田1",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht01",
                        "name": "花田1",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht01",
                        "name": "花田1",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "ht02": {
                    "1": {
                        "id": "ht02",
                        "name": "花田2",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "10",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "500",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht02",
                        "name": "花田2",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht02",
                        "name": "花田2",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht02",
                        "name": "花田2",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht02",
                        "name": "花田2",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht02",
                        "name": "花田2",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "ht03": {
                    "1": {
                        "id": "ht03",
                        "name": "花田3",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "10",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "1000",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht03",
                        "name": "花田3",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht03",
                        "name": "花田3",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht03",
                        "name": "花田3",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht03",
                        "name": "花田3",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht03",
                        "name": "花田3",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "ht04": {
                    "1": {
                        "id": "ht04",
                        "name": "花田4",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "10",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "2000",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht04",
                        "name": "花田4",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht04",
                        "name": "花田4",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht04",
                        "name": "花田4",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht04",
                        "name": "花田4",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht04",
                        "name": "花田4",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "ht05": {
                    "1": {
                        "id": "ht05",
                        "name": "花田5",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "10",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "3000",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht05",
                        "name": "花田5",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht05",
                        "name": "花田5",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht05",
                        "name": "花田5",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht05",
                        "name": "花田5",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht05",
                        "name": "花田5",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "ht06": {
                    "1": {
                        "id": "ht06",
                        "name": "花田6",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "10",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "4000",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht06",
                        "name": "花田6",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht06",
                        "name": "花田6",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht06",
                        "name": "花田6",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht06",
                        "name": "花田6",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht06",
                        "name": "花田6",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "ht07": {
                    "1": {
                        "id": "ht07",
                        "name": "花田7",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "10",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "5000",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht07",
                        "name": "花田7",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht07",
                        "name": "花田7",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht07",
                        "name": "花田7",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht07",
                        "name": "花田7",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht07",
                        "name": "花田7",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "ht08": {
                    "1": {
                        "id": "ht08",
                        "name": "花田8",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "10",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "6000",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht08",
                        "name": "花田8",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht08",
                        "name": "花田8",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht08",
                        "name": "花田8",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht08",
                        "name": "花田8",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht08",
                        "name": "花田8",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                },
                "ht09": {
                    "1": {
                        "id": "ht09",
                        "name": "花田9",
                        "grade": "1",
                        "exp": "0",
                        "exp2": "10",
                        "num": "0",
                        "speed": "0",
                        "num2": "0",
                        "unlocknum": "10000",
                        "pic": "ui://base/pic_lvdi",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "2": {
                        "id": "ht09",
                        "name": "花田9",
                        "grade": "2",
                        "exp": "300",
                        "exp2": "30",
                        "num": "0",
                        "speed": "2",
                        "num2": "1000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni1",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "3": {
                        "id": "ht09",
                        "name": "花田9",
                        "grade": "3",
                        "exp": "600",
                        "exp2": "60",
                        "num": "0",
                        "speed": "4",
                        "num2": "2000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni2",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "4": {
                        "id": "ht09",
                        "name": "花田9",
                        "grade": "4",
                        "exp": "1000",
                        "exp2": "100",
                        "num": "0",
                        "speed": "6",
                        "num2": "5000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni3",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "5": {
                        "id": "ht09",
                        "name": "花田9",
                        "grade": "5",
                        "exp": "2000",
                        "exp2": "200",
                        "num": "0",
                        "speed": "8",
                        "num2": "10000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni4",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    },
                    "6": {
                        "id": "ht09",
                        "name": "花田9",
                        "grade": "6",
                        "exp": "5000",
                        "exp2": "500",
                        "num": "0",
                        "speed": "10",
                        "num2": "20000",
                        "unlocknum": "0",
                        "pic": "ui://base/pic_ni5",
                        "ain": "",
                        "pic2": "",
                        "ain2": "jiaoshui",
                        "pic3": "",
                        "ain3": "shifei",
                        "pic4": "",
                        "ain4": ""
                    }
                }
            };
            this.SYS_FLOWER_WATER = {
                "js01": {
                    "1": {
                        "id": "js01",
                        "name": "普通浇水",
                        "pic": "",
                        "ain": "",
                        "num": "0",
                        "grade": "1",
                        "exp": "20",
                        "exp2": "2",
                        "t": "0"
                    }
                }
            };
            this.SYS_FLOWER_LOTTERY = {
                "rw101": {
                    "id": "rw101",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "1",
                    "grade2": "1",
                    "goods": [
                        {
                            "id": "hh6001",
                            "num": "1"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "200"
                        },
                        {
                            "id": "exp001",
                            "num": "100"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw201": {
                    "id": "rw201",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "2",
                    "grade2": "2",
                    "goods": [
                        {
                            "id": "hh6001",
                            "num": "1"
                        },
                        {
                            "id": "hh6002",
                            "num": "1"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "300"
                        },
                        {
                            "id": "exp001",
                            "num": "200"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw301": {
                    "id": "rw301",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "3",
                    "grade2": "3",
                    "goods": [
                        {
                            "id": "hh6001",
                            "num": "1"
                        },
                        {
                            "id": "hh6002",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "400"
                        },
                        {
                            "id": "exp001",
                            "num": "300"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw302": {
                    "id": "rw302",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "3",
                    "grade2": "3",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "500"
                        },
                        {
                            "id": "exp001",
                            "num": "400"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw401": {
                    "id": "rw401",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "4",
                    "grade2": "4",
                    "goods": [
                        {
                            "id": "hh6003",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "600"
                        },
                        {
                            "id": "exp001",
                            "num": "500"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw402": {
                    "id": "rw402",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "4",
                    "grade2": "4",
                    "goods": [
                        {
                            "id": "hh6001",
                            "num": "2"
                        },
                        {
                            "id": "hh6003",
                            "num": "1"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "700"
                        },
                        {
                            "id": "exp001",
                            "num": "600"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw403": {
                    "id": "rw403",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "4",
                    "grade2": "4",
                    "goods": [
                        {
                            "id": "hh6001",
                            "num": "2"
                        },
                        {
                            "id": "hh6003",
                            "num": "1"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "800"
                        },
                        {
                            "id": "exp001",
                            "num": "700"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw501": {
                    "id": "rw501",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "5",
                    "grade2": "5",
                    "goods": [
                        {
                            "id": "hh6003",
                            "num": "2"
                        },
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "hh6005",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "900"
                        },
                        {
                            "id": "exp001",
                            "num": "800"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw502": {
                    "id": "rw502",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "5",
                    "grade2": "5",
                    "goods": [
                        {
                            "id": "wp5011",
                            "num": "1"
                        },
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "hh6005",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw503": {
                    "id": "rw503",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "5",
                    "grade2": "5",
                    "goods": [
                        {
                            "id": "wp5011",
                            "num": "1"
                        },
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "hh6005",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw504": {
                    "id": "rw504",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "5",
                    "grade2": "5",
                    "goods": [
                        {
                            "id": "wp5011",
                            "num": "1"
                        },
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "hh6005",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw601": {
                    "id": "rw601",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "6",
                    "grade2": "6",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw602": {
                    "id": "rw602",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "6",
                    "grade2": "6",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw603": {
                    "id": "rw603",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "6",
                    "grade2": "6",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw604": {
                    "id": "rw604",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "6",
                    "grade2": "6",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw605": {
                    "id": "rw605",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "6",
                    "grade2": "6",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw701": {
                    "id": "rw701",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "7",
                    "grade2": "7",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw702": {
                    "id": "rw702",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "7",
                    "grade2": "7",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw703": {
                    "id": "rw703",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "7",
                    "grade2": "7",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw704": {
                    "id": "rw704",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "7",
                    "grade2": "7",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw705": {
                    "id": "rw705",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "7",
                    "grade2": "7",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw801": {
                    "id": "rw801",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "8",
                    "grade2": "8",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw802": {
                    "id": "rw802",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "8",
                    "grade2": "8",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw803": {
                    "id": "rw803",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "8",
                    "grade2": "8",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw804": {
                    "id": "rw804",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "8",
                    "grade2": "8",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw805": {
                    "id": "rw805",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "8",
                    "grade2": "8",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw901": {
                    "id": "rw901",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "9",
                    "grade2": "9",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw902": {
                    "id": "rw902",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "9",
                    "grade2": "9",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw903": {
                    "id": "rw903",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "9",
                    "grade2": "9",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw904": {
                    "id": "rw904",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "9",
                    "grade2": "9",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw905": {
                    "id": "rw905",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "9",
                    "grade2": "9",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1001": {
                    "id": "rw1001",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "10",
                    "grade2": "10",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1002": {
                    "id": "rw1002",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "10",
                    "grade2": "10",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1003": {
                    "id": "rw1003",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "10",
                    "grade2": "10",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1004": {
                    "id": "rw1004",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "10",
                    "grade2": "10",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1005": {
                    "id": "rw1005",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "10",
                    "grade2": "10",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1101": {
                    "id": "rw1101",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "11",
                    "grade2": "11",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1102": {
                    "id": "rw1102",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "11",
                    "grade2": "11",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1103": {
                    "id": "rw1103",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "11",
                    "grade2": "11",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1104": {
                    "id": "rw1104",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "11",
                    "grade2": "11",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1105": {
                    "id": "rw1105",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "11",
                    "grade2": "11",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1201": {
                    "id": "rw1201",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "12",
                    "grade2": "12",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1202": {
                    "id": "rw1202",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "12",
                    "grade2": "12",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1203": {
                    "id": "rw1203",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "12",
                    "grade2": "12",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1204": {
                    "id": "rw1204",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "12",
                    "grade2": "12",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1205": {
                    "id": "rw1205",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "12",
                    "grade2": "12",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1301": {
                    "id": "rw1301",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "13",
                    "grade2": "13",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1302": {
                    "id": "rw1302",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "13",
                    "grade2": "13",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1303": {
                    "id": "rw1303",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "13",
                    "grade2": "13",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1304": {
                    "id": "rw1304",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "13",
                    "grade2": "13",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1305": {
                    "id": "rw1305",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "13",
                    "grade2": "13",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1401": {
                    "id": "rw1401",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "14",
                    "grade2": "14",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1402": {
                    "id": "rw1402",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "14",
                    "grade2": "14",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1403": {
                    "id": "rw1403",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "14",
                    "grade2": "14",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1404": {
                    "id": "rw1404",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "14",
                    "grade2": "14",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1405": {
                    "id": "rw1405",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "14",
                    "grade2": "14",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1501": {
                    "id": "rw1501",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "15",
                    "grade2": "15",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1502": {
                    "id": "rw1502",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "15",
                    "grade2": "15",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1503": {
                    "id": "rw1503",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "15",
                    "grade2": "15",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1504": {
                    "id": "rw1504",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "15",
                    "grade2": "15",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1505": {
                    "id": "rw1505",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "15",
                    "grade2": "15",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1601": {
                    "id": "rw1601",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "16",
                    "grade2": "16",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1602": {
                    "id": "rw1602",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "16",
                    "grade2": "16",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1603": {
                    "id": "rw1603",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "16",
                    "grade2": "16",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1604": {
                    "id": "rw1604",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "16",
                    "grade2": "16",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1605": {
                    "id": "rw1605",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "16",
                    "grade2": "16",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1701": {
                    "id": "rw1701",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "17",
                    "grade2": "17",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1702": {
                    "id": "rw1702",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "17",
                    "grade2": "17",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1703": {
                    "id": "rw1703",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "17",
                    "grade2": "17",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1704": {
                    "id": "rw1704",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "17",
                    "grade2": "17",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1705": {
                    "id": "rw1705",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "17",
                    "grade2": "17",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1801": {
                    "id": "rw1801",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "18",
                    "grade2": "18",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1802": {
                    "id": "rw1802",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "18",
                    "grade2": "18",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1803": {
                    "id": "rw1803",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "18",
                    "grade2": "18",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1804": {
                    "id": "rw1804",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "18",
                    "grade2": "18",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1805": {
                    "id": "rw1805",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "18",
                    "grade2": "18",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1901": {
                    "id": "rw1901",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "19",
                    "grade2": "19",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1902": {
                    "id": "rw1902",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "19",
                    "grade2": "19",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1903": {
                    "id": "rw1903",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "19",
                    "grade2": "19",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1904": {
                    "id": "rw1904",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "19",
                    "grade2": "19",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw1905": {
                    "id": "rw1905",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "19",
                    "grade2": "19",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw2001": {
                    "id": "rw2001",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "20",
                    "grade2": "20",
                    "goods": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw2002": {
                    "id": "rw2002",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "20",
                    "grade2": "20",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw2003": {
                    "id": "rw2003",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "20",
                    "grade2": "20",
                    "goods": [
                        {
                            "id": "hh6002",
                            "num": "1"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw2004": {
                    "id": "rw2004",
                    "name": "酒店装饰",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "20",
                    "grade2": "20",
                    "goods": [
                        {
                            "id": "hh6004",
                            "num": "1"
                        },
                        {
                            "id": "wp5011",
                            "num": "2"
                        },
                        {
                            "id": "wp5015",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw2005": {
                    "id": "rw2005",
                    "name": "艺术摄影",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "20",
                    "grade2": "20",
                    "goods": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "2"
                        },
                        {
                            "id": "wp5012",
                            "num": "2"
                        }
                    ],
                    "goods2": [],
                    "goods3": [
                        {
                            "id": "g001",
                            "num": "1000"
                        },
                        {
                            "id": "exp001",
                            "num": "900"
                        }
                    ],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                }
            };
            this.SYS_FACTORY_GOOD = {
                "gc001": {
                    "wp5011": {
                        "id": "wp5011",
                        "name": "一心一意",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "10000",
                        "good": [
                            {
                                "id": "hh6001",
                                "num": "3"
                            },
                            {
                                "id": "hh6002",
                                "num": "1"
                            }
                        ]
                    },
                    "wp5012": {
                        "id": "wp5012",
                        "name": "青青子吟",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6003",
                                "num": "6"
                            },
                            {
                                "id": "hh6006",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5013": {
                        "id": "wp5013",
                        "name": "幸福约定",
                        "grade": "1",
                        "grade2": "4",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6007",
                                "num": "12"
                            },
                            {
                                "id": "hh6004",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5014": {
                        "id": "wp5014",
                        "name": "情意暖暖",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6008",
                                "num": "3"
                            },
                            {
                                "id": "hh6009",
                                "num": "2"
                            },
                            {
                                "id": "hh6010",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5015": {
                        "id": "wp5015",
                        "name": "连连深情",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    }
                },
                "gc002": {
                    "wp5041": {
                        "id": "wp5041",
                        "name": "鲜花饼",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "10000",
                        "good": [
                            {
                                "id": "hh6001",
                                "num": "5"
                            },
                            {
                                "id": "hh6002",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5042": {
                        "id": "wp5042",
                        "name": "槐花酱",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6003",
                                "num": "6"
                            },
                            {
                                "id": "hh6006",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5043": {
                        "id": "wp5043",
                        "name": "桂花酱",
                        "grade": "1",
                        "grade2": "4",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6007",
                                "num": "12"
                            },
                            {
                                "id": "hh6004",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5044": {
                        "id": "wp5044",
                        "name": "玫瑰酱",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6008",
                                "num": "3"
                            },
                            {
                                "id": "hh6009",
                                "num": "2"
                            },
                            {
                                "id": "hh6010",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5045": {
                        "id": "wp5045",
                        "name": "鲜花养颜羹",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    }
                },
                "gc003": {
                    "wp5051": {
                        "id": "wp5051",
                        "name": "香橙花精油",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "10000",
                        "good": [
                            {
                                "id": "hh6001",
                                "num": "2"
                            },
                            {
                                "id": "hh6002",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5052": {
                        "id": "wp5052",
                        "name": "合欢花精油",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6003",
                                "num": "4"
                            },
                            {
                                "id": "hh6006",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5053": {
                        "id": "wp5053",
                        "name": "玫瑰花精油",
                        "grade": "1",
                        "grade2": "4",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6007",
                                "num": "3"
                            },
                            {
                                "id": "hh6004",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5054": {
                        "id": "wp5054",
                        "name": "茉莉花精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6008",
                                "num": "3"
                            },
                            {
                                "id": "hh6009",
                                "num": "2"
                            },
                            {
                                "id": "hh6010",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5055": {
                        "id": "wp5055",
                        "name": "薰衣草精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    },
                    "wp5056": {
                        "id": "wp5056",
                        "name": "栀子花精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "2"
                            },
                            {
                                "id": "hh6003",
                                "num": "1"
                            }
                        ]
                    },
                    "wp5057": {
                        "id": "wp5057",
                        "name": "紫罗兰精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "2"
                            },
                            {
                                "id": "hh6003",
                                "num": "1"
                            }
                        ]
                    }
                },
                "gc004": {
                    "wp5051": {
                        "id": "wp5051",
                        "name": "香橙花精油",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "10000",
                        "good": [
                            {
                                "id": "hh6001",
                                "num": "5"
                            },
                            {
                                "id": "hh6002",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5052": {
                        "id": "wp5052",
                        "name": "合欢花精油",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6003",
                                "num": "6"
                            },
                            {
                                "id": "hh6006",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5053": {
                        "id": "wp5053",
                        "name": "玫瑰花精油",
                        "grade": "1",
                        "grade2": "4",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6007",
                                "num": "12"
                            },
                            {
                                "id": "hh6004",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5054": {
                        "id": "wp5054",
                        "name": "茉莉花精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6008",
                                "num": "3"
                            },
                            {
                                "id": "hh6009",
                                "num": "2"
                            },
                            {
                                "id": "hh6010",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5055": {
                        "id": "wp5055",
                        "name": "薰衣草精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    },
                    "wp5056": {
                        "id": "wp5056",
                        "name": "紫罗兰精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    }
                },
                "gc005": {
                    "wp5051": {
                        "id": "wp5051",
                        "name": "香橙花精油",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "10000",
                        "good": [
                            {
                                "id": "hh6001",
                                "num": "5"
                            },
                            {
                                "id": "hh6002",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5052": {
                        "id": "wp5052",
                        "name": "合欢花精油",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6003",
                                "num": "6"
                            },
                            {
                                "id": "hh6006",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5053": {
                        "id": "wp5053",
                        "name": "玫瑰花精油",
                        "grade": "1",
                        "grade2": "4",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6007",
                                "num": "12"
                            },
                            {
                                "id": "hh6004",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5054": {
                        "id": "wp5054",
                        "name": "茉莉花精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6008",
                                "num": "3"
                            },
                            {
                                "id": "hh6009",
                                "num": "2"
                            },
                            {
                                "id": "hh6010",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5055": {
                        "id": "wp5055",
                        "name": "薰衣草精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    },
                    "wp5056": {
                        "id": "wp5056",
                        "name": "紫罗兰精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    }
                },
                "gc006": {
                    "wp5051": {
                        "id": "wp5051",
                        "name": "香橙花精油",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "10000",
                        "good": [
                            {
                                "id": "hh6001",
                                "num": "5"
                            },
                            {
                                "id": "hh6002",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5052": {
                        "id": "wp5052",
                        "name": "合欢花精油",
                        "grade": "1",
                        "grade2": "3",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6003",
                                "num": "6"
                            },
                            {
                                "id": "hh6006",
                                "num": "2"
                            }
                        ]
                    },
                    "wp5053": {
                        "id": "wp5053",
                        "name": "玫瑰花精油",
                        "grade": "1",
                        "grade2": "4",
                        "speed": "100",
                        "t": "12000",
                        "good": [
                            {
                                "id": "hh6007",
                                "num": "12"
                            },
                            {
                                "id": "hh6004",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5054": {
                        "id": "wp5054",
                        "name": "茉莉花精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6008",
                                "num": "3"
                            },
                            {
                                "id": "hh6009",
                                "num": "2"
                            },
                            {
                                "id": "hh6010",
                                "num": "5"
                            }
                        ]
                    },
                    "wp5055": {
                        "id": "wp5055",
                        "name": "薰衣草精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    },
                    "wp5056": {
                        "id": "wp5056",
                        "name": "紫罗兰精油",
                        "grade": "1",
                        "grade2": "5",
                        "speed": "100",
                        "t": "14000",
                        "good": [
                            {
                                "id": "hh6011",
                                "num": "10"
                            },
                            {
                                "id": "hh6003",
                                "num": "3"
                            }
                        ]
                    }
                }
            };
            this.SYS_FLOWER_COMPOSTED = {
                "sf01": {
                    "1": {
                        "id": "sf01",
                        "name": "普通施肥",
                        "pic": "",
                        "ain": "",
                        "grade": "1",
                        "num": "0",
                        "num2": "5",
                        "num3": "10",
                        "exp": "100",
                        "exp2": "10",
                        "t": "7200"
                    }
                }
            };
            this.SYS_FLOWER_MEMBER = {
                "1": {
                    "grade": "1",
                    "num": "10000",
                    "field": "9",
                    "store": "10",
                    "lottery_num": "1",
                    "store_num": "1000",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6001",
                            "num": "1"
                        },
                        {
                            "id": "hh6002",
                            "num": "1"
                        }
                    ]
                },
                "2": {
                    "grade": "2",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "2",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5011",
                            "num": "1"
                        },
                        {
                            "id": "hh6003",
                            "num": "2"
                        }
                    ]
                },
                "3": {
                    "grade": "3",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "2",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5012",
                            "num": "1"
                        },
                        {
                            "id": "wp5013",
                            "num": "1"
                        }
                    ]
                },
                "4": {
                    "grade": "4",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "3",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5013",
                            "num": "1"
                        },
                        {
                            "id": "hh6004",
                            "num": "1"
                        }
                    ]
                },
                "5": {
                    "grade": "5",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "3",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6005",
                            "num": "2"
                        }
                    ]
                },
                "6": {
                    "grade": "6",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "4",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5014",
                            "num": "1"
                        }
                    ]
                },
                "7": {
                    "grade": "7",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "4",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5015",
                            "num": "1"
                        }
                    ]
                },
                "8": {
                    "grade": "8",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "4",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "hh6007",
                            "num": "1"
                        }
                    ]
                },
                "9": {
                    "grade": "9",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "4",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6006",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "1"
                        }
                    ]
                },
                "10": {
                    "grade": "10",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5013",
                            "num": "1"
                        },
                        {
                            "id": "hh6009",
                            "num": "1"
                        }
                    ]
                },
                "11": {
                    "grade": "11",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6010",
                            "num": "1"
                        },
                        {
                            "id": "wp5014",
                            "num": "1"
                        }
                    ]
                },
                "12": {
                    "grade": "12",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6012",
                            "num": "1"
                        },
                        {
                            "id": "wp5015",
                            "num": "1"
                        }
                    ]
                },
                "13": {
                    "grade": "13",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6013",
                            "num": "1"
                        },
                        {
                            "id": "hh6014",
                            "num": "1"
                        }
                    ]
                },
                "14": {
                    "grade": "14",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6015",
                            "num": "1"
                        },
                        {
                            "id": "hh6016",
                            "num": "1"
                        }
                    ]
                },
                "15": {
                    "grade": "15",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5041",
                            "num": "1"
                        },
                        {
                            "id": "wp5042",
                            "num": "1"
                        }
                    ]
                },
                "16": {
                    "grade": "16",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5045",
                            "num": "2"
                        },
                        {
                            "id": "wp5041",
                            "num": "1"
                        }
                    ]
                },
                "17": {
                    "grade": "17",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5042",
                            "num": "2"
                        },
                        {
                            "id": "wp5043",
                            "num": "1"
                        }
                    ]
                },
                "18": {
                    "grade": "18",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5044",
                            "num": "1"
                        },
                        {
                            "id": "wp5045",
                            "num": "1"
                        }
                    ]
                },
                "19": {
                    "grade": "19",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "wp5051",
                            "num": "2"
                        },
                        {
                            "id": "hh6007",
                            "num": "1"
                        }
                    ]
                },
                "20": {
                    "grade": "20",
                    "num": "0",
                    "field": "0",
                    "store": "0",
                    "lottery_num": "5",
                    "store_num": "0",
                    "next_exp": "100",
                    "up_data": [
                        {
                            "id": "hh6006",
                            "num": "2"
                        },
                        {
                            "id": "wp5052",
                            "num": "1"
                        }
                    ]
                }
            };
            this.SYS_GOOD_INFO = {
                "g001": {
                    "id": "g001",
                    "name": "金币",
                    "type": "1",
                    "grade": "0",
                    "grade2": "100",
                    "pic": "ui://base/pic_zuanshi",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "1",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "0",
                    "exp2": "0",
                    "t": "0",
                    "info": "这是金币"
                },
                "exp001": {
                    "id": "exp001",
                    "name": "玩家经验",
                    "type": "2",
                    "grade": "0",
                    "grade2": "100",
                    "pic": "ui://base/pic_jingyan",
                    "pic2": "",
                    "ain": "",
                    "num": "0",
                    "num2": "0",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "1",
                    "exp2": "0",
                    "t": "0",
                    "info": "玩家经验"
                },
                "htexp001": {
                    "id": "htexp001",
                    "name": "花田经验",
                    "type": "3",
                    "grade": "0",
                    "grade2": "100",
                    "pic": "ui://base/pic_exp",
                    "pic2": "",
                    "ain": "",
                    "num": "0",
                    "num2": "0",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "0",
                    "exp2": "1",
                    "t": "0",
                    "info": "花田经验"
                },
                "js01": {
                    "id": "js01",
                    "name": "浇水",
                    "type": "3",
                    "grade": "0",
                    "grade2": "100",
                    "pic": "ui://base/pic_jiaoshui",
                    "pic2": "",
                    "ain": "",
                    "num": "0",
                    "num2": "0",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "20",
                    "exp2": "2",
                    "t": "0",
                    "info": "浇水"
                },
                "sf01": {
                    "id": "sf01",
                    "name": "施肥",
                    "type": "4",
                    "grade": "0",
                    "grade2": "100",
                    "pic": "ui://base/pic_shifei",
                    "pic2": "",
                    "ain": "",
                    "num": "10",
                    "num2": "10",
                    "speed": "5",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "10",
                    "t": "7200",
                    "info": "施肥"
                },
                "wp5011": {
                    "id": "wp5011",
                    "name": "一心一意",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet1",
                    "pic2": "ui://base/pic_bouquet1",
                    "ain": "",
                    "num": "1",
                    "num2": "20",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "30",
                    "exp2": "0",
                    "t": "0",
                    "info": "漂亮的花束"
                },
                "wp5012": {
                    "id": "wp5012",
                    "name": "亲亲子吟",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet2",
                    "pic2": "ui://base/pic_bouquet2",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "漂亮的花束"
                },
                "wp5013": {
                    "id": "wp5013",
                    "name": "幸福约定",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet3",
                    "pic2": "ui://base/pic_bouquet3",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "漂亮的花束"
                },
                "wp5014": {
                    "id": "wp5014",
                    "name": "情谊暖暖",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet4",
                    "pic2": "ui://base/pic_bouquet4",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "漂亮的花束"
                },
                "wp5015": {
                    "id": "wp5015",
                    "name": "连连深情",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "漂亮的花束"
                },
                "wp5041": {
                    "id": "wp5041",
                    "name": "鲜花饼",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花一样的美食"
                },
                "wp5042": {
                    "id": "wp5042",
                    "name": "槐花酱",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花一样的美食"
                },
                "wp5043": {
                    "id": "wp5043",
                    "name": "桂花酱",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花一样的美食"
                },
                "wp5044": {
                    "id": "wp5044",
                    "name": "玫瑰酱",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花一样的美食"
                },
                "wp5045": {
                    "id": "wp5045",
                    "name": "鲜花养颜羹",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花一样的美食"
                },
                "wp5051": {
                    "id": "wp5051",
                    "name": "香橙花精油",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花卉的精华"
                },
                "wp5052": {
                    "id": "wp5052",
                    "name": "合欢花精油",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花卉的精华"
                },
                "wp5053": {
                    "id": "wp5053",
                    "name": "玫瑰花精油",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花卉的精华"
                },
                "wp5054": {
                    "id": "wp5054",
                    "name": "茉莉花精油",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花卉的精华"
                },
                "wp5055": {
                    "id": "wp5055",
                    "name": "薰衣草精油",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花卉的精华"
                },
                "wp5056": {
                    "id": "wp5056",
                    "name": "栀子花精油",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花卉的精华"
                },
                "wp5057": {
                    "id": "wp5057",
                    "name": "紫罗兰精油",
                    "type": "5",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_bouquet5",
                    "pic2": "ui://base/pic_bouquet5",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "40",
                    "exp2": "0",
                    "t": "0",
                    "info": "花卉的精华"
                },
                "hh6001": {
                    "id": "hh6001",
                    "name": "红玫瑰",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_3_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "50",
                    "exp2": "50",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6002": {
                    "id": "hh6002",
                    "name": "勿忘我",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_4_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6003": {
                    "id": "hh6003",
                    "name": "百合",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_2_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "漂花卉"
                },
                "hh6004": {
                    "id": "hh6004",
                    "name": "紫罗兰",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_5_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6005": {
                    "id": "hh6005",
                    "name": "红花",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_6_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6006": {
                    "id": "hh6006",
                    "name": "澳洲腊梅",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_10_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6007": {
                    "id": "hh6007",
                    "name": "粉玫瑰",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_8_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6008": {
                    "id": "hh6008",
                    "name": "向日葵",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_1_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6009": {
                    "id": "hh6009",
                    "name": "雏菊",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_9_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6010": {
                    "id": "hh6010",
                    "name": "白桔梗",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_11_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6011": {
                    "id": "hh6011",
                    "name": "香槟玫瑰",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6012": {
                    "id": "hh6012",
                    "name": "玉兰",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6013": {
                    "id": "hh6013",
                    "name": "槐花",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6014": {
                    "id": "hh6014",
                    "name": "桂花",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6015": {
                    "id": "hh6015",
                    "name": "康乃馨",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6016": {
                    "id": "hh6016",
                    "name": "香橙花",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6017": {
                    "id": "hh6017",
                    "name": "合欢花",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6018": {
                    "id": "hh6018",
                    "name": "茉莉花",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6019": {
                    "id": "hh6019",
                    "name": "薰衣草",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                },
                "hh6020": {
                    "id": "hh6020",
                    "name": "栀子花",
                    "type": "6",
                    "grade": "1",
                    "grade2": "100",
                    "pic": "ui://base/pic_7_6",
                    "pic2": "",
                    "ain": "",
                    "num": "1",
                    "num2": "30",
                    "speed": "0",
                    "speed2": "0",
                    "speed_num": "0",
                    "speed2_num": "0",
                    "exp": "100",
                    "exp2": "100",
                    "t": "0",
                    "info": "花卉"
                }
            };
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

    class baseWindow extends Laya.Sprite {
        constructor() {
            super();
            this.delay = 1000;
            this.modal = new Laya.Sprite;
        }
        init() {
        }
        showModal() {
            this.modal.visible = true;
            this.modal.graphics.clear();
            this.modal.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
            this.modal.alpha = .25;
            this.modal.width = Laya.stage.width;
            this.modal.height = Laya.stage.height;
            gameLayer.windowlayer.addChild(this.modal);
            this.modal.on(Laya.Event.CLICK, this, this.onClick);
        }
        tweenShow() {
            this.visible = true;
            this.setCenter();
            this.scale(0, 0);
            this.alpha = 0;
            Laya.Tween.to(this, { alpha: 1 }, this.delay, Laya.Ease.linearIn);
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.delay, Laya.Ease.elasticOut);
            this.showModal();
            gameLayer.windowlayer.addChild(this);
        }
        tweenHide() {
            this.modal.off(Laya.Event.CLICK, this, this.onClick);
            Laya.Tween.to(this, { scaleX: 0, scaleY: 0 }, this.delay, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onComplete));
            Laya.Tween.to(this, { alpha: 0 }, this.delay, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onAlphaComplete));
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
        setCenter() {
            this.pivotX = this.width * .5;
            this.pivotY = this.height * .5;
            this.x = Laya.stage.width * .5;
            this.y = Laya.stage.height * .5;
        }
        showChild(obj) {
            gameLayer.windowlayer.addChildAt(obj, 0);
        }
        onClick() {
            console.log("onClick");
        }
        clearAll() {
            this.modal.visible = false;
            this.modal.graphics.clear();
            this.modal.off(Laya.Event.CLICK, this, this.onClick);
            this.removeChildren();
            Laya.Tween.clearAll(this);
            this.visible = false;
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
            obj.scale(CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH, CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH);
        }
    }

    class tipIndex extends baseWindow {
        constructor() {
            super();
        }
        tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            var _tipKuan = new ui.base.tishi_tipUI();
            _tipKuan.content_txt.text = content_txt;
            _tipKuan.confirm_btn.label = confirm_txt;
            _tipKuan.cancel_btn.label = cancel_txt;
            _tipKuan.confirm_btn.on(Laya.Event.CLICK, this, confirm_fun);
            _tipKuan.cancel_btn.on(Laya.Event.CLICK, this, this.close);
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
            var txtNode = new Laya.Text();
            txtNode.text = txt;
            txtNode.pivotX = txtNode.width * .5;
            txtNode.pivotY = txtNode.height * .5;
            txtNode.x = CONST.STAGEWIDTH / 3;
            txtNode.y = CONST.STAGEHEIGHT / 2;
            txtNode.color = '#ffffff';
            txtNode.fontSize = 65;
            gameLayer.tipslayer.addChild(txtNode);
            Laya.Tween.to(txtNode, { y: txtNode.y - 100, alpha: 0.5 }, 1000, null, Laya.Handler.create(this, function () {
                txtNode.removeSelf();
                call_fun ? call_fun : function () { };
            }));
        }
        goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            var _tipKuan = new ui.base.tishi_tipUI();
            this.addChild(_tipKuan);
            _tipKuan.content_txt.text = content_txt;
            _tipKuan.confirm_btn.label = confirm_txt;
            _tipKuan.cancel_btn.label = cancel_txt;
            _tipKuan.confirm_btn.on(Laya.Event.CLICK, this, confirm_fun);
            _tipKuan.cancel_btn.on(Laya.Event.CLICK, this, cancel_fun);
            _tipKuan.close_btn.on(Laya.Event.CLICK, this, this.close);
            _tipKuan.pivotX = 0.5 * _tipKuan.width;
            _tipKuan.pivotY = 0.5 * _tipKuan.height;
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
            Laya.stage.on(GAMEEVENT.TXTTIP, this, this.gameTxtTip);
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
            this._mature_time = data.seed_data.t;
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
            this._mature_time = data.seed_data.t;
            if (this._mature_time > 0 || data.fat_time > 0) {
                if (farmLand._timer) {
                    farmLand._timer.clear(this, this.timerFun);
                }
                farmLand._timer = new Laya.Timer();
                farmLand._timer.loop(1000, this, this.timerFun);
            }
        }
        timerFun() {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            if (this._mature_time == 0 && data.fat_time == 0) {
                farmLand._timer.clear(this, this.timerFun);
            }
            if (this._mature_time && this._mature_time > 0) {
                this._mature_time--;
                data.seed_data.next_mature_time--;
                if (data.seed_data.water_time && data.seed_data.water_time > 0) {
                    data.seed_data.water_time--;
                    this.isOperation(data);
                }
                console.log(data.seed_data.water_time);
                console.log(data.seed_data.water_time);
                console.log(data.seed_data.water_time);
                console.log(data);
                console.log(data);
                console.log(data);
                console.log(this._mature_time);
                this.grow_time.text = globalFun.getInstance().formatSeconds(this._mature_time);
                this.grow_time_val.value = Math.floor((this._mature_time / this._grow_time_tol) * 100) >= 100 ? 100 : Math.floor((this._mature_time / this._grow_time_tol) * 100);
                if (this._mature_time <= 0) {
                    this.grow_kuan.visible = false;
                    console.log('下一阶段');
                    console.log(data.seed_data);
                }
                if (data.seed_data.next_mature_time <= 0) {
                    console.log("判断是否到时间了，如果到时见那么久应该发送成长请求");
                    Laya.stage.event(NETWORKEVENT.FARMINITGROWFLOWER, data);
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
                Laya.stage.event(NETWORKEVENT.FARMINITCOLLECTFLOWER);
            }
            else {
                Laya.stage.event(GAMEEVENT.TIPSKUAN, ['还不能收获', '确定', '取消', function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
            }
        }
        onLandUpGrade(type) {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            var landInfo = dataJson.getInstance().GET_SYS_FLOWER_FIELD()[this.land_id][data.ff_vip];
            var str = '';
            var gold_str = '';
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            if (Math.floor(have_gold) < Math.floor(landInfo.num2)) {
                str = '宝石不足，不能升级';
                gold_str = "<span style='color:#E92727'>" + have_gold + "</span><span style='color:#7D4815'>/" + data.next_ff_id_glod + "</span>";
            }
            else {
                gold_str = "<span style='color:#7D4815'>" + have_gold + "</span><span style='color:#7D4815'>/" + data.next_ff_id_glod + "</span>";
            }
            if (Math.floor(data.ff_exp) < Math.floor(landInfo.exp)) {
                str = '花田经验不足，请多多种植吧';
            }
            var confirm_fun = function () {
                tipController.getInstance().close();
                if (str) {
                    Laya.stage.event(GAMEEVENT.TIPSKUAN, [str]);
                }
                else {
                    this.onGradeExtendAct(type);
                }
            }.bind(this);
            var cancel_fun = function () {
                tipController.getInstance().close();
            };
            Laya.stage.event(GAMEEVENT.GOLDTIP, ['升级', gold_str, '确定', '取消', confirm_fun, cancel_fun]);
        }
        onGradeExtend(type) {
            tipController.getInstance();
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            var landInfo = dataJson.getInstance().GET_SYS_FLOWER_FIELD()[this.land_id][data.ff_vip];
            var str = '';
            var gold_str = '';
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var grade = dataGlobal.getInstance().userInfo.grade;
            if (Math.floor(have_gold) < Math.floor(data.ff_id_unlocknum)) {
                str = '钻石不足，不能扩建';
            }
            var member = dataJson.getInstance().GET_SYS_FLOWER_MEMBER();
            var member_info = dataJson.getInstance().GET_SYS_FLOWER_MEMBER()[grade];
            var userFarm = dataGlobal.getInstance().farmInfo;
            var num = 0;
            for (var i in userFarm) {
                if (userFarm[i].ff_vip != 1) {
                    num++;
                }
            }
            if (member_info.field <= num) {
                console.log('这里是不能开花田的，需要查询一下下一级可以开的花田');
                for (var q in member) {
                    if (member[q].field > member_info.field) {
                        str = '达到' + member[q].grade + '级可扩建该花田';
                        break;
                    }
                }
            }
            gold_str = '是否消耗' + data.ff_id_unlocknum + '钻石解锁花田';
            if (type == 1) {
                gold_str = '是否消耗' + data.ff_id_unlocknum + '钻石升级花田';
            }
            if (str) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [str]);
                return;
            }
            var confirm_fun = function () {
                this.onGradeExtendAct(type);
                tipController.getInstance().close();
            }.bind(this);
            var cancel_fun = function () {
                tipController.getInstance().close();
            };
            Laya.stage.event(GAMEEVENT.GOLDTIP, ['扩建', gold_str, '确定', '取消', confirm_fun, cancel_fun]);
        }
        onGradeExtendAct(type) {
            var msg = {
                id: this.land_id,
                type: type
            };
            Laya.stage.event(NETWORKEVENT.FARMINITFLOWERGRADE, msg);
        }
        initLandStatic() {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            this.land.skin = "farm/land_" + data.ff_vip + ".png";
            this.land.off(Laya.Event.CLICK, this, this.onClickLand);
            this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
            if (data.ff_vip == 1) {
                this.land_static = 'unlock';
                if (data.is_lock == 2) {
                    return;
                }
                this.extend_kuan.visible = true;
                this.extend_btn.visible = true;
                this.land.mouseEnabled = true;
                this.extend_gold.text = data.ff_id_unlocknum;
                this.extend_gold.visible = true;
                this.on(Laya.Event.CLICK, this, this.onClickLand);
                return;
            }
            if (this.land_static == 'upgrade') {
                this.upgrade_kuan.visible = true;
                if (data.ff_vip >= data.max_grade) {
                    this.upgrade_info.text = "<span style='color:#ffffff'>满级</span>";
                    this.upgrade_info.visible = true;
                    this.land.mouseEnabled = true;
                    this.land.on(Laya.Event.CLICK, this, function () {
                    });
                }
                else {
                    this.upgrade_info.text = "加速:" + data.seed + "%+" + data.next_seed + "%";
                    this.upgrade_info.visible = true;
                    this.upgrade_gold.text = data.next_ff_id_glod;
                    this.upgrade_gold.visible = true;
                    this.upgrade_level.text = 'lv:' + (data.ff_vip - 1);
                    this.upgrade_level.visible = true;
                    this.upgrade_progressbar.value = Math.floor((data.ff_exp / data.next_exp) * 100) >= 100 ? 100 : Math.floor((data.ff_exp / data.next_exp) * 100);
                    this.upgrade_progressbar.visible = true;
                    this.land.mouseEnabled = true;
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
                this.flower.skin = "farm/" + data.seed_data.id + "_" + data.seed_data.grade + ".png";
                this.flower.visible = true;
                if (this.isOperation(data)) {
                    return;
                }
                console.log(farmController.getInstance().model.landId);
                console.log(this.land_id);
                console.log(this._mature_time);
                console.log(data.seed_data);
                console.log('-----------------------------==================0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-');
                if (farmController.getInstance().model.landId == this.land_id && this._mature_time > 0) {
                    console.log('如果是当前的土地就显示植物的成长时间');
                    this.grow_time.text = globalFun.getInstance().formatSeconds(this._mature_time);
                    this.grow_time_val.value = Math.floor((this._mature_time / this._grow_time_tol) * 100) >= 100 ? 100 : Math.floor((this._mature_time / this._grow_time_tol) * 100);
                    this.grow_kuan.visible = true;
                }
                this.land.on(Laya.Event.CLICK, this, this.onClickLand);
                this.land.mouseEnabled = true;
                this.land_static = 'fertilizer';
            }
            else {
                this.land.on(Laya.Event.CLICK, this, this.onClickLand);
                this.land.mouseEnabled = true;
                this.land_static = 'plant';
            }
            this.land.visible = true;
        }
        isOperation(data) {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            var clickLandStatic = farmController.getInstance().model.clickLandStatic;
            if (clickLandStatic == '' || clickLandStatic == 'harvest' || clickLandStatic == 'water') {
                if (clickLandStatic == '') {
                    if (data.seed_data.id && data.seed_data.grow_static == 4 && this._mature_time <= 0) {
                        this.land_static = 'harvest';
                        this.land.off(Laya.Event.CLICK, this, this.onClickLand);
                        this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                        this.land.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                        this.harvest_icon.visible = true;
                        return true;
                    }
                    else if (typeof data.seed_data.water_time == 'number' && data.seed_data.water_time <= 0) {
                        this.land_static = 'water';
                        this.land.mouseEnabled = true;
                        this.land.off(Laya.Event.CLICK, this, this.onClickLand);
                        this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                        this.land.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                        this.water_icon.mouseEnabled = true;
                        this.water_icon.visible = true;
                        return true;
                    }
                }
            }
        }
    }

    class farmSeedList extends ui.farm.seedListUI {
        constructor() {
            super();
        }
        init() {
            this._seedListScene = this;
            this._seed_list = this.seed_list;
            this._seed_list.hScrollBarSkin = "";
            this._seedListScene.visible = false;
            return this._seedListScene;
        }
        addSeedListItem(data) {
        }
        setSeedListItem() {
            this.setSeedItem();
        }
        addSeedItem(data) {
            this._seedListArray = [];
            for (var i in data) {
                this._seedListArray.push(data[i]);
            }
            this._seed_list.array = this._seedListArray;
            console.log(this._seed_list.array, '------------------------');
        }
        setSeedItem() {
            var grade = dataGlobal.getInstance().userInfo.grade;
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var seed_arr = farmController.getInstance().model.seedData;
            let dataSource = [];
            for (var i in seed_arr) {
                let data = null;
                if (grade >= seed_arr[i].grade2 && grade <= seed_arr[i].grade3) {
                    if (have_gold >= seed_arr[i].gold) {
                        data = {
                            suo_div: { visible: false },
                            seep_pic: {
                                skin: "farm/" + seed_arr[i].id + "_seed.png"
                            },
                            gold_num: {
                                text: seed_arr[i].gold,
                                color: "#EDFF24"
                            },
                        };
                    }
                    else {
                        data = {
                            suo_div: { visible: false },
                            seep_pic: {
                                skin: "farm/" + seed_arr[i].id + "_seed.png"
                            },
                            gold_num: {
                                text: seed_arr[i].gold,
                                color: "#FF3E24"
                            },
                        };
                    }
                }
                else {
                    data = {
                        suo_div: { visible: true },
                        seep_pic: {
                            skin: "farm/" + seed_arr[i].id + "_seed.png"
                        },
                        gold_num: {
                            text: seed_arr[i].gold,
                            color: "#274200"
                        },
                    };
                }
                dataSource.push(data);
            }
            this._seed_list.dataSource = dataSource;
            this._seed_list.selectEnable = true;
            this._seed_list.selectHandler = new Laya.Handler(this, this.itemSelectHandler, null, false);
            console.log(this._seed_list.dataSource);
            this._seedListScene.visible = true;
        }
        itemSelectHandler(index) {
            var grade = dataGlobal.getInstance().userInfo.grade;
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var seed_arr = farmController.getInstance().model.seedData;
            console.log(index);
            if (grade >= seed_arr[index].grade2 && grade <= seed_arr[index].grade3) {
                if (have_gold >= seed_arr[index].gold) {
                    this.onClick('buy', { 'id': seed_arr[index].id });
                }
                else {
                    console.log('不够了');
                    this.onClick('noMoney', { 'id': seed_arr[index].id });
                }
            }
            else {
                console.log('取法解锁');
                this.onClick('lock', { 'id': seed_arr[index].id });
            }
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

    class warehouseIndex extends baseWindow {
        constructor() {
            super();
        }
        onShowWarehouse() {
            if (this._warehouse == null) {
                this._warehouse = new ui.warehouse.warehouseUI();
                this.setScale(this._warehouse);
                this._warehouse.name = 'warehouse';
                this._warehouse.pivotX = 0.5 * this._warehouse.width;
                this._warehouse.pivotY = 0.5 * this._warehouse.height;
                this.addChild(this._warehouse);
            }
            this.tweenShow();
        }
        initWarehouseInfo() {
            var data = dataGlobal.getInstance().warehouseInfo;
            var store_info = dataJson.getInstance().GET_SYS_STORE_INFO();
            if (store_info[Math.floor(data.grade) + 1]) {
                this.setUpdrageDiv();
            }
            else {
            }
        }
        setUpdrageDiv() {
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var data = dataGlobal.getInstance().warehouseInfo;
            console.log(have_gold, data, dataJson.getInstance().GET_SYS_STORE_INFO()[Math.floor(data.grade) + 1]);
            if (dataJson.getInstance().GET_SYS_STORE_INFO()[Math.floor(data.grade) + 1]) {
                var next_grade = dataJson.getInstance().GET_SYS_STORE_INFO()[Math.floor(data.grade) + 1];
                var good_list = next_grade.good;
                var confirm_fun;
                for (var i in good_list) {
                    if (good_list[i].id == 'g001') {
                        if (good_list[i].num > have_gold) {
                            var str = "" + have_gold + "/" + good_list[i].num + "";
                            confirm_fun = function () {
                                tipController.getInstance().close();
                            };
                            console.log('不够钱', confirm_fun);
                        }
                        else {
                            console.log('无法升级');
                            var str = "" + have_gold + "/" + good_list[i].num + "";
                            var self = this;
                            confirm_fun = function () {
                                this.warehouseUpgrade();
                                tipController.getInstance().close();
                            }.bind(this);
                        }
                    }
                }
                var cancel_fun = function () {
                    tipController.getInstance().close();
                };
            }
        }
        showGoldTip(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            Laya.stage.event(GAMEEVENT.GOLDTIP, [title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun]);
        }
        store_info() {
            Laya.stage.event(NETWORKEVENT.STOREINFOBAK);
        }
        initWarehouseGoodList() {
            var data = dataGlobal.getInstance().userGoodInfo;
            if (data) {
                var isAdd = false;
                for (var i in data) {
                    var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];
                    if (this._type == 'all') {
                        isAdd = true;
                    }
                    else if (this._type == 'flower' && good_info.type == 6) {
                        isAdd = true;
                    }
                    else if (this._type == 'goods' && good_info.type == 5) {
                        isAdd = true;
                    }
                    if (isAdd && Math.floor(data[i].num) > 0) {
                        this.creator_good_item(data[i].id, data[i].num);
                    }
                    isAdd = false;
                }
            }
        }
        creator_good_item(id, num) { }
        switchItem(str) {
            this._type = str;
        }
        warehouseUpgrade() {
        }
        showSellTip(id) {
            warehouseController.getInstance().showSellTip(id);
        }
    }

    class baseTips extends Laya.Sprite {
        constructor() {
            super();
            this.delay = 1000;
            this.modal = new Laya.Sprite;
        }
        init() {
        }
        showModal() {
            this.modal.visible = true;
            this.modal.graphics.clear();
            this.modal.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
            this.modal.alpha = .5;
            this.modal.width = Laya.stage.width;
            this.modal.height = Laya.stage.height;
            gameLayer.tipslayer.addChild(this.modal);
            this.modal.on(Laya.Event.CLICK, this, this.onClick);
        }
        tweenShow() {
            this.visible = true;
            this.setCenter();
            this.scale(0, 0);
            this.alpha = 0;
            Laya.Tween.to(this, { alpha: 1 }, this.delay, Laya.Ease.linearIn);
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.delay, Laya.Ease.elasticOut);
            this.showModal();
            gameLayer.tipslayer.addChild(this);
        }
        showLayer() {
            this.visible = true;
            this.setCenter();
            this.showModal();
            gameLayer.tipslayer.addChild(this);
        }
        hideLayer() {
            gameLayer.tipslayer.removeChild(this);
            this.clearAll();
        }
        tweenHide() {
            Laya.Tween.to(this, { scaleX: 0, scaleY: 0 }, this.delay, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onComplete));
            Laya.Tween.to(this, { alpha: 0 }, this.delay, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onAlphaComplete));
        }
        onComplete() {
            gameLayer.tipslayer.removeChild(this);
            this.scale(1, 1);
            this.clearAll();
        }
        onAlphaComplete() {
            gameLayer.tipslayer.removeChild(this);
            this.alpha = 1;
            this.clearAll();
        }
        setCenter() {
            this.pivotX = this.width * .5;
            this.pivotY = this.height * .5;
            this.x = Laya.stage.width * .5;
            this.y = Laya.stage.height * .5;
        }
        onClick() {
            console.log("onClick");
        }
        clearAll() {
            this.modal.visible = false;
            this.modal.graphics.clear();
            this.modal.off(Laya.Event.CLICK, this, this.onClick);
            this.modal.off(Laya.Event.CLICK, this, this.hideLayer);
            this.removeChildren();
            Laya.Tween.clearAll(this);
            this.visible = false;
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
            obj.scale(CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH, CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH);
        }
    }

    class warehouseSellTip extends baseTips {
        constructor() {
            super();
        }
        showSellTip(id) {
            this._id = id;
            this._sellTip = new ui.warehouse.sell_tipUI();
            this.setScale(this._sellTip);
            this._sellTip.pivotX = 0.5 * this._sellTip.width;
            this._sellTip.pivotY = 0.5 * this._sellTip.height;
            this.addChild(this._sellTip);
            this.tweenShow();
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            console.log(this._sellTip);
            this.initGoodInfo();
        }
        closeSellTip() {
            this.tweenHide();
        }
        initGoodInfo() {
        }
        setGoodNum(this_num) {
            var good_info = dataGlobal.getInstance().userGoodInfo[this._id];
            if (this_num > 0) {
                this._num++;
                this._num = (Math.floor(good_info.num) >= this._num) ? this._num : Math.floor(good_info.num);
            }
            else {
                this._num--;
                this._num = this._num < 1 ? 1 : this._num;
            }
        }
        storeGoodDel() {
            Laya.stage.event(NETWORKEVENT.STOREUPGRADEBAK);
            this.closeSellTip();
        }
    }

    class warehouseView {
        constructor() {
        }
        onShowWarehouse() {
            if (this._warehouseCom == null) {
                this._warehouseCom = new warehouseIndex;
            }
            this._warehouseCom.onShowWarehouse();
        }
        initWarehouseGoodList() {
            if (this._warehouseCom) {
                this._warehouseCom.initWarehouseGoodList();
            }
        }
        initWarehouseInfo() {
            if (this._warehouseCom) {
                this._warehouseCom.initWarehouseInfo();
            }
        }
        showSellTip(id) {
            this._warehouseSellCom = new warehouseSellTip;
            this._warehouseSellCom.showSellTip(id);
        }
    }

    class warehouseModel {
        constructor() {
        }
    }

    class warehouseNetwork {
        constructor() {
        }
        StoreInfoBak(data) {
            data = { "ga": "store_info_bak", "code": 1, "gd": { "store_id": "45", "grade": "1", "num": "10", "num2": "0", "num3": "99", "name": "1", "data_info": [{ "good_id": "hh6003", "pos": "1", "num": "105" }, { "good_id": "hh6006", "pos": "2", "num": "1" }] } };
            data = data.gd;
            dataGlobal.getInstance().setWarehouseInfo(data);
            var good_arr = [];
            for (var i in data.data_info) {
                var tmp_arr = { 'id': data.data_info[i].good_id, 'num': data.data_info[i].num };
                good_arr.push(tmp_arr);
            }
            dataGlobal.getInstance().setUserGoodInfo(good_arr);
            warehouseController.getInstance().initWarehouseInfo();
            warehouseController.getInstance().initWarehouseGoodList();
        }
        StoreUpGread(data) {
            data = data.gd;
            dataGlobal.getInstance().setWarehouseInfo(data);
            warehouseController.getInstance().initWarehouseInfo();
        }
        StoreGoodDel(data) {
            data = data.gd;
            var tmp_arr = [{ 'id': data.good_id, 'num': data.num }];
            dataGlobal.getInstance().setUserGoodInfo(tmp_arr);
            warehouseController.getInstance().initWarehouseInfo();
            warehouseController.getInstance().initWarehouseGoodList();
        }
    }

    class warehouseController {
        constructor() {
            this.model = new warehouseModel;
            this._network = new warehouseNetwork;
            Laya.stage.on(NETWORKEVENT.STOREINFOBAK, this, this._network.StoreInfoBak);
            Laya.stage.on(NETWORKEVENT.STOREUPGRADEBAK, this, this._network.StoreUpGread);
            Laya.stage.on(NETWORKEVENT.STOREGOODDEL, this, this._network.StoreGoodDel);
        }
        static getInstance() {
            if (warehouseController._instance == null) {
                warehouseController._instance = new warehouseController;
            }
            return warehouseController._instance;
        }
        onShowWarehouse() {
            this._warehouseview = new warehouseView;
            this._warehouseview.onShowWarehouse();
        }
        initWarehouseGoodList() {
            if (this._warehouseview) {
                this._warehouseview.initWarehouseGoodList();
            }
        }
        initWarehouseInfo() {
            if (this._warehouseview) {
                this._warehouseview.initWarehouseInfo();
            }
        }
        showSellTip(id) {
            if (this._warehouseview) {
                this._warehouseview.showSellTip(id);
            }
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
            this.ui.bg_kuan.visible = false;
            farmController.getInstance().model.setLandId('');
            farmController.getInstance().model.setClickLandStatic('');
            this.setLandStatic('');
            this.initLand();
            this._seedListClass.hide();
            this.recoveryBtn();
        }
        setThisLandStatic(id, str) {
            this.landArr[id].land_static = str;
        }
        setThisLandTimer(id) {
            this.landArr[id].setTimer();
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
                    this.onClickBuilding();
                    break;
                case 'upgrade':
                    this.onClickUpgrade();
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
            this.ui.building.skin = 'farm/btn_cangku1.png';
            this.ui.upgrade.skin = 'farm/btn_shengji1.png';
            this.ui.email.skin = 'farm/btn_youxiang1.png';
            this.ui.order.skin = 'farm/btn_dingdan1.png';
        }
        onClickUpgrade() {
            this.ui.upgrade.skin = "main/btn_shengji2.png";
            this.showBgKuan();
            farmController.getInstance().model.setClickLandStatic('upgrade');
            this.setLandStatic('upgrade');
            this.initLand();
        }
        setLandStatic(str) {
            var data = this.landArr;
            for (var i in data) {
                data[i].land_static = str;
            }
        }
        onClickBuilding() {
            warehouseController.getInstance().onShowWarehouse();
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
            this._indexCom.setThisLandStatic(id, str);
        }
        setThisLandTimer(id) {
            this._indexCom.setThisLandTimer(id);
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

    class FLOWER_PLANTS {
        static getPlants(id) {
            for (var i in this.plants) {
                if (this.plants[i].id == id) {
                    return this.plants[i];
                }
            }
        }
    }
    FLOWER_PLANTS.plants = [
        {
            'id': "hh01",
            'name': "红玫瑰",
            'grade': "1",
            'grade2': "1",
            'grade3': "100",
            'gold': "0",
            'num': "1",
            'num2': "10",
            't': "20",
            'speed': "100",
            'exp': "50",
            'exp2': "50",
            'pic': "ui://base/pic_3_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_3_1",
            'ain2': "",
            'time2': "10000",
            'pic3': "ui://base/pic_3_3",
            'ain3': "",
            'time3': "10000",
            'pic4': "ui://base/pic_3_3",
            'ain4': "",
            'time4': "10000",
            'pic5': "ui://base/pic_3_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_3_6",
            'ain6': "",
            'pic7': "ui://base/pic_3_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh02",
            'name': "勿忘我",
            'grade': "1",
            'grade2': "1",
            'grade3': "100",
            'gold': "10",
            'num': "1",
            'num2': "15",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_4_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_4_1",
            'ain2': "",
            'time2': "20000",
            'pic3': "ui://base/pic_4_2",
            'ain3': "",
            'time3': "20000",
            'pic4': "ui://base/pic_4_3",
            'ain4': "",
            'time4': "20000",
            'pic5': "ui://base/pic_4_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_4_6",
            'ain6': "",
            'pic7': "ui://base/pic_4_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh03",
            'name': "百合",
            'grade': "1",
            'grade2': "3",
            'grade3': "100",
            'gold': "20",
            'num': "1",
            'num2': "20",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_2_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_2_1",
            'ain2': "",
            'time2': "24000",
            'pic3': "ui://base/pic_2_2",
            'ain3': "",
            'time3': "24000",
            'pic4': "ui://base/pic_2_3",
            'ain4': "",
            'time4': "24000",
            'pic5': "ui://base/pic_2_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_2_6",
            'ain6': "",
            'pic7': "ui://base/pic_2_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh04",
            'name': "紫罗兰",
            'grade': "1",
            'grade2': "3",
            'grade3': "100",
            'gold': "30",
            'num': "1",
            'num2': "20",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_5_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_5_1",
            'ain2': "",
            'time2': "25000",
            'pic3': "ui://base/pic_5_2",
            'ain3': "",
            'time3': "25000",
            'pic4': "ui://base/pic_5_3",
            'ain4': "",
            'time4': "25000",
            'pic5': "ui://base/pic_5_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_5_6",
            'ain6': "",
            'pic7': "ui://base/pic_5_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh05",
            'name': "红花",
            'grade': "1",
            'grade2': "4",
            'grade3': "100",
            'gold': "40",
            'num': "1",
            'num2': "30",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_6_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_6_1",
            'ain2': "",
            'time2': "30000",
            'pic3': "ui://base/pic_6_2",
            'ain3': "",
            'time3': "30000",
            'pic4': "ui://base/pic_6_3",
            'ain4': "",
            'time4': "30000",
            'pic5': "ui://base/pic_6_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_6_6",
            'ain6': "",
            'pic7': "ui://base/pic_6_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh06",
            'name': "澳洲腊梅",
            'grade': "1",
            'grade2': "4",
            'grade3': "100",
            'gold': "40",
            'num': "1",
            'num2': "30",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_10_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_6_1",
            'ain2': "",
            'time2': "30000",
            'pic3': "ui://base/pic_6_2",
            'ain3': "",
            'time3': "30000",
            'pic4': "ui://base/pic_6_3",
            'ain4': "",
            'time4': "30000",
            'pic5': "ui://base/pic_6_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_10_6",
            'ain6': "",
            'pic7': "ui://base/pic_10_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh07",
            'name': "粉玫瑰",
            'grade': "1",
            'grade2': "4",
            'grade3': "100",
            'gold': "40",
            'num': "1",
            'num2': "30",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_6_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_6_1",
            'ain2': "",
            'time2': "30000",
            'pic3': "ui://base/pic_6_2",
            'ain3': "",
            'time3': "30000",
            'pic4': "ui://base/pic_6_3",
            'ain4': "",
            'time4': "30000",
            'pic5': "ui://base/pic_6_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_8_6",
            'ain6': "",
            'pic7': "ui://base/pic_8_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh08",
            'name': "向日葵",
            'grade': "1",
            'grade2': "4",
            'grade3': "100",
            'gold': "40",
            'num': "1",
            'num2': "30",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_1_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_1_1",
            'ain2': "",
            'time2': "30000",
            'pic3': "ui://base/pic_1_2",
            'ain3': "",
            'time3': "30000",
            'pic4': "ui://base/pic_1_3",
            'ain4': "",
            'time4': "30000",
            'pic5': "ui://base/pic_1_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_1_6",
            'ain6': "",
            'pic7': "ui://base/pic_1_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh09",
            'name': "雏菊",
            'grade': "1",
            'grade2': "4",
            'grade3': "100",
            'gold': "40",
            'num': "1",
            'num2': "30",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_9_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_6_1",
            'ain2': "",
            'time2': "30000",
            'pic3': "ui://base/pic_6_2",
            'ain3': "",
            'time3': "30000",
            'pic4': "ui://base/pic_6_3",
            'ain4': "",
            'time4': "30000",
            'pic5': "ui://base/pic_6_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_9_6",
            'ain6': "",
            'pic7': "ui://base/pic_9_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh10",
            'name': "白桔梗",
            'grade': "1",
            'grade2': "4",
            'grade3': "100",
            'gold': "40",
            'num': "1",
            'num2': "30",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_11_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_6_1",
            'ain2': "",
            'time2': "30000",
            'pic3': "ui://base/pic_6_2",
            'ain3': "",
            'time3': "30000",
            'pic4': "ui://base/pic_6_3",
            'ain4': "",
            'time4': "30000",
            'pic5': "ui://base/pic_6_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_11_6",
            'ain6': "",
            'pic7': "ui://base/pic_11_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        },
        {
            'id': "hh11",
            'name': "香槟玫瑰",
            'grade': "1",
            'grade2': "4",
            'grade3': "100",
            'gold': "40",
            'num': "1",
            'num2': "30",
            't': "20",
            'speed': "100",
            'exp': "100",
            'exp2': "100",
            'pic': "ui://base/pic_7_5",
            'ain': "",
            'time': "0",
            'pic2': "ui://base/pic_6_1",
            'ain2': "",
            'time2': "30000",
            'pic3': "ui://base/pic_6_2",
            'ain3': "",
            'time3': "30000",
            'pic4': "ui://base/pic_6_3",
            'ain4': "",
            'time4': "30000",
            'pic5': "ui://base/pic_6_4",
            'ain5': "",
            'time5': "0",
            'pic6': "ui://base/pic_7_6",
            'ain6': "",
            'pic7': "ui://base/pic_7_6",
            'ain7': "",
            'next_mature_time': "10",
            'grow_time_tol': '',
            'mature_time': 10,
            'grow_static': 1,
            'water_time': 100,
            'is_water': 1,
        }
    ];

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
        getFarmInitFlowerGrade(msg) {
            for (var i in staticData.INDEX_DATA) {
                if (staticData.INDEX_DATA[i].ff_id == msg.id) {
                    staticData.INDEX_DATA[i].ff_vip = staticData.INDEX_DATA[i].ff_vip + 1;
                    return {
                        "type": msg.type,
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
                    staticData.INDEX_DATA[i].seed_data = FLOWER_PLANTS.getPlants(hhid);
                    staticData.INDEX_DATA[i].msg = "\u79cd\u690d\u6210\u529f";
                    return {
                        "ga": "init_plant_flower",
                        "gd": staticData.INDEX_DATA[i],
                        "code": 1
                    };
                }
            }
        }
        farmInitGrowFlower(id, seed_data) {
            for (var i in staticData.INDEX_DATA) {
                if (staticData.INDEX_DATA[i].ff_id == id) {
                    staticData.INDEX_DATA[i].seed_data = FLOWER_PLANTS.getPlants(seed_data.id);
                    var _b = Number(staticData.INDEX_DATA[i].seed_data.grade) + 1;
                    staticData.INDEX_DATA[i].seed_data.grade = String(_b);
                    console.log(staticData.INDEX_DATA[i].seed_data.grade);
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
            "is_lock": 1,
            "next_ht_lock": "ht02",
            "ff_id_unlocknum": 50,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "msg": "",
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
            }
        },
        {
            "ff_id": "ht02",
            "ff_vip": 1,
            "ff_exp": 100,
            "is_lock": 1,
            "next_ht_lock": "ht03",
            "ff_id_unlocknum": 100,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
            }
        },
        {
            "ff_id": "ht03",
            "ff_vip": 1,
            "ff_exp": 200,
            "is_lock": 1,
            "next_ht_lock": "ht04",
            "ff_id_unlocknum": 200,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
            }
        },
        {
            "ff_id": "ht04",
            "ff_vip": 1,
            "ff_exp": 100,
            "is_lock": 1,
            "next_ht_lock": "ht05",
            "ff_id_unlocknum": 300,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
            }
        },
        {
            "ff_id": "ht05",
            "ff_vip": 1,
            "ff_exp": 100,
            "is_lock": 1,
            "next_ht_lock": "ht06",
            "ff_id_unlocknum": 400,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
            }
        },
        {
            "ff_id": "ht06",
            "ff_vip": 1,
            "ff_exp": 100,
            "is_lock": 1,
            "next_ht_lock": "ht07",
            "ff_id_unlocknum": 500,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
            }
        },
        {
            "ff_id": "ht07",
            "ff_vip": 1,
            "ff_exp": 100,
            "is_lock": 1,
            "next_ht_lock": "ht08",
            "ff_id_unlocknum": 600,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
            }
        },
        {
            "ff_id": "ht08",
            "ff_vip": 1,
            "ff_exp": 100,
            "is_lock": 1,
            "next_ht_lock": "ht09",
            "ff_id_unlocknum": 700,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
            }
        },
        {
            "ff_id": "ht09",
            "ff_vip": 1,
            "ff_exp": 100,
            "is_lock": 1,
            "next_ht_lock": "",
            "ff_id_unlocknum": 800,
            "next_ff_id_glod": 0,
            "next_exp": 0,
            "pic": "land_1",
            "ain": "",
            "msg": "",
            "fat_time": 0,
            "fat_time_tol": 0,
            "seed_data": {
                'id': "",
                'name': "",
                'grade': "",
                'grade2': "",
                'grade3': "",
                'gold': "",
                'num': "",
                'num2': "",
                't': "",
                'speed': "",
                'exp': "",
                'exp2': "",
                'pic': "",
                'ain': "",
                'time': "",
                'pic2': "",
                'ain2': "",
                'time2': "",
                'pic3': "",
                'ain3': "",
                'time3': "",
                'pic4': "",
                'ain4': "",
                'time4': "",
                'pic5': "",
                'ain5': "",
                'time5': "",
                'pic6': "",
                'ain6': "",
                'pic7': "",
                'ain7': "",
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
            farmController.getInstance().model.setFarmSeed(data.gd);
            farmController.getInstance().onFarmInitSeedList(data.gd);
        }
        FarmInitFlowerGrade(msg) {
            var data = staticData.getInstance().getFarmInitFlowerGrade(msg);
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
            console.log(data.type);
            if (data.type == 1) {
            }
            else if (data.type == 2) {
                tmp_arr['is_lock'] = myData.is_lock;
                var landStatic = farmController.getInstance().model.clickLandStatic;
                if (myData.next_ht_lock) {
                    var next_arr = {
                        'is_lock': 1
                    };
                    dataGlobal.getInstance().setFarmInfo(next_arr, myData.next_ht_lock);
                }
            }
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            farmController.getInstance().initLand();
            if (myData.msg) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [myData.msg]);
            }
        }
        FarmInitPlantFlower(list) {
            console.log('请求种植');
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
            Laya.stage.off(NETWORKEVENT.FARMINITGROWFLOWER, this, this.FarmCollectFlower);
            var _tmp_arr = staticData.getInstance().farmInitGrowFlower(data.ff_id, data.seed_data);
            console.log(data.ff_id, '的花长大了', _tmp_arr.gd);
            var tmp_arr = {
                'fat_time': _tmp_arr.gd.fat_time,
                'fat_time_tol': _tmp_arr.gd.fat_time_tol,
                'ff_exp': _tmp_arr.gd.ff_exp,
                'seed_data': _tmp_arr.gd.seed_data
            };
            dataGlobal.getInstance().setFarmInfo(tmp_arr, _tmp_arr.gd.ff_id);
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
        { url: resConfig._url + 'res/atlas/warehouse.atlas', type: Laya.Loader.ATLAS, sign: 'warehouse' },
        { url: resConfig._url + 'res/atlas/order.atlas', type: Laya.Loader.ATLAS, sign: 'order' },
        { url: resConfig._url + 'res/atlas/factory.atlas', type: Laya.Loader.ATLAS, sign: 'factory' },
        { url: resConfig._url + 'res/atlas/main.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/main1.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/main2.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/farm.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/farm1.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/warehouse.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/order.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/factory.png', type: Laya.Loader.IMAGE },
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
