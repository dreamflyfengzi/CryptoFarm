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
            console.log("--------------------------------");
            this._isInit = false;
            this._isShowMask = isShowMask;
            this._ui = $class;
            this.initUIView();
        }
        get myParent() {
            return this._myParent;
        }
        tweenAlphaAdd(name, type) {
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
            Laya.Tween.to(gameLayer.bglayer, { alpha: 0.1 }, 300, Laya.Ease.elasticIn, Laya.Handler.create(this, function () {
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
            this.userInfo = {};
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
            return this._farmland;
        }
        initLand() {
            this.initLandDiv();
            this.initLandStatic();
        }
        initLandDiv() {
            console.log('先隐藏掉不显示的层');
            this.extend_btn.visible = false;
            this.extend_kuan.visible = false;
            this.upgrade_kuan.visible = false;
            this.xuanzhong.visible = false;
            this.grow_kuan.visible = false;
            this.fertilizer_kuan.visible = false;
            this.harvest_icon.visible = false;
            var landId = farmController.getInstance().model.landId;
            if (landId == this.land_id) {
                this.xuanzhong.visible = true;
            }
        }
        initLandStatic() {
            console.log('先获取这个花田的信息');
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            console.log('先获取这个花田的信息', data);
            console.log(data, '=========vip');
            if (data.ff_vip == 1) {
                this.land_static = 'unlock';
                if (data.is_lock == 2) {
                    return;
                }
                this.extend_kuan.visible = true;
                this.extend_btn.visible = true;
                this.extend_gold.text = data.ff_id_unlocknum;
                this.extend_gold.visible = true;
                return;
            }
            console.log(this, '如果是在升级');
            console.log(this.land_static, '如果是在升级');
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
                this.showInit();
                this.land_div = new Laya.Sprite();
                this.land_div.name = 'land_div';
                this.land_div.x = 12;
                this.land_div.y = 1079;
                this._farmIndex.addChild(this.land_div);
                this.addChild(this._farmIndex);
                this.getFarmLand();
            }
            this.tweenAlphaAdd('farm', type);
        }
        showInit() {
            this.landArr = {};
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
            console.log(landObj);
            console.log(data.ff_id);
            this.landArr[data.ff_id] = landObj;
            console.log(landObj.init(data));
            this.land_div.addChild(landObj.init(data));
            console.log(this.land_div);
            console.log(this._farmIndex);
        }
    }

    class farmView {
        constructor() {
        }
        onShow(type) {
            console.log('farmView.onshow');
            if (this._indexCom == null) {
                this._indexCom = new farmIndex;
            }
            this._indexCom.onShow(type);
        }
        onShowFarmInitField(data) {
            this._indexCom.onShowFarmInitField(data);
        }
        onFarmInitSeedList(data) {
        }
        showSeepList() {
        }
        setThisLandStatic(id, str) {
        }
        setThisLandTimer(id) {
        }
        initLand() {
        }
        setPlantFramLand() {
        }
    }

    class farmModel {
        constructor() {
            this.clickLandStatic = '';
            this.landId = 'ht08';
        }
        setFatData(data) {
            this.fatData = data;
        }
        setFarmSeed(data) {
            this.seedData = data;
        }
        setLandId(str) {
            this.landId = str;
        }
        setClickLandStatic(str) {
            this.clickLandStatic = str;
        }
    }

    class farmNetwork {
        constructor() {
        }
        FarmInitField(data) {
            data = { "ga": "init_field", "gd": [{ "ff_id": "ht01", "ff_vip": 1, "ff_exp": 0, "ff_id_unlocknum": 50, "next_ff_id_glod": 0, "next_exp": 0, "pic": "land_1", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 0, "grow_time_tol": 9000, "grow_static": 0, "id": 0, "name": "", "grade": "", "pic": "", "ain": "" } }, { "ff_id": "ht02", "ff_vip": 2, "ff_exp": 1001, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "", "water": 2 } }, { "ff_id": "ht03", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }, { "ff_id": "ht04", "ff_vip": 1, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }, { "ff_id": "ht05", "ff_vip": 1, "ff_exp": 1001, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }, { "ff_id": "ht06", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }, { "ff_id": "ht07", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time_tol": 0, "fat_time": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }, { "ff_id": "ht08", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 10, "grow_time_tol": 9000, "grow_static": 2, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }, { "ff_id": "ht09", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 20, "fat_time_tol": 50000, "seed_data": { "mature_time": 10, "grow_time_tol": 9000000, "grow_static": 2, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }], "code": 1 };
            dataGlobal.getInstance().setFarmInfo(data.gd);
            farmController.getInstance().onShowFarmInitField(data.gd);
        }
        FarmInitSeedList(data) {
            data = { "ga": "init_seed_list", "gd": [{ "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "100", "pic": "ui:\/\/farm\/hh01_1", "ain": "", "gold": 100 }, { "id": "hh02", "name": "\u9ed1\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "100", "pic": "ui:\/\/farm\/hh01_2", "ain": "", "gold": 100 }, { "id": "hh03", "name": "\u9ec4\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "500", "pic": "ui:\/\/farm\/hh01_3", "ain": "", "gold": 100 }, { "id": "hh04", "name": "\u9752\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "400", "pic": "ui:\/\/farm\/hh01_4", "ain": "", "gold": 150 }, { "id": "hh05", "name": "\u9752\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "300", "pic": "ui:\/\/farm\/hh02_1", "ain": "", "gold": 200 }, { "id": "hh06", "name": "\u9752\u73ab\u7470", "grade": "1", "grade2": "20", "grade3": "200", "pic": "ui:\/\/farm\/hh02_2", "ain": "", "gold": 300 }], "code": 1 };
            farmController.getInstance().model.setFarmSeed(data.gd.seed_data);
            farmController.getInstance().model.setFatData(data.gd.fat_data);
            farmController.getInstance().onFarmInitSeedList(data.gd);
        }
        FarmInitFlowerGrade(data) {
            data = { "ga": "init_flower_grade", "gd": { "type": 2, "ff_id": "ht01", "ff_vip": 3, "ff_exp": 10, "next_exp": 100, "ff_id_unlocknum": 0, "next_ff_id_glod": 110, "pic": "land_3", "ain": "", "msg": "\u5347\u7ea7\/\u89e3\u9501\u6210\u529f" }, "code": 1 };
            var myData = data.gd;
            var tmp_arr = {
                'ff_vip': myData.ff_vip,
                'ff_exp': myData.ff_exp,
                'next_exp': myData.next_exp,
                'ff_id_unlocknum': myData.ff_id_unlocknum,
                'next_ff_id_glod': myData.next_ff_id_glod,
                "seed": myData.seed,
                "next_seed": myData.next_seed,
                'pic': myData.pic,
            };
            if (myData.type == 1) {
            }
            else if (myData.type == 2) {
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
        }
        FarmInitPlantFlower(data) {
            data = { "ga": "init_plant_flower", "gd": { "ff_id": "ht01", "fat_time": 0, "fat_time_tol": 0, "ff_exp": 500, "seed_data": { "grow_time_tol": 5000, "mature_time": 500, "grow_static": 1, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": "1", "pic": "hh01_1", "ain": "" }, "msg": "\u79cd\u690d\u6210\u529f" }, "code": 1 };
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
            this.tweenAlphaAdd('login', 2);
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
            console.log(x);
            console.log(this.ui.loading_txt);
            this.ui.loading_txt.text = x + '%';
            var num = Math.floor(x / (100 / 9)) - 1;
            this.ui.loading_icon.url = "ui://login/0_0000" + num;
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
            console.log('确保只做一只跳入主场景的操作');
            this._loginview.showFarm();
        }
        onResProgress() {
        }
        onResComplete() {
            Laya.stage.off(GAMEEVENT.ONRESPROGRESSLOGIN, this, this.onResProgress);
            Laya.stage.off(GAMEEVENT.ONRESCOMPLETELOGIN, this, this.onResComplete);
            console.log(1, Laya.View.uiMap);
            Laya.Scene.setUIMap("ui.json");
            console.log(2, Laya.View.uiMap);
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
