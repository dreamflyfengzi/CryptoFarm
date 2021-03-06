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
    GameConfig.alignH = "center";
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
                gameLayer.tipslayer = new Laya.Sprite;
                gameLayer.windowlayer = new Laya.Sprite;
                Laya.stage.addChild(gameLayer.bglayer);
                Laya.stage.addChild(gameLayer.scenelayer);
                Laya.stage.addChild(gameLayer.tipslayer);
                Laya.stage.addChild(gameLayer.windowlayer);
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
    GAMEEVENT.ONPROGRESSFONT = 'ONPROGRESSFONT';
    GAMEEVENT.ONLOADFONTCOMPLETE = 'onloadfontcomplete';
    GAMEEVENT.ONRESPROGRESSLOGIN = 'ONPROGRESSLOGIN';
    GAMEEVENT.ONRESCOMPLETELOGIN = 'ONRESCOMPLETELOGIN';
    GAMEEVENT.ONRESIZE = 'ONRESIZE';
    GAMEEVENT.GAMESTART = 'GAMESTART';
    GAMEEVENT.TIPSKUAN = 'TIPSKUAN';
    GAMEEVENT.TXTTIP = 'TXTTIP';
    GAMEEVENT.GOLDTIP = 'GOLDTIP';
    GAMEEVENT.BASETIPS = 'BASETIPS';
    GAMEEVENT.FARM = 'FARM';
    GAMEEVENT.ONPROGRESSFARM = 'ONPROGRESSFARM';
    GAMEEVENT.ONLOADCOMPLETEFARM = 'ONLOADCOMPLETEFARM';
    GAMEEVENT.LOGIN_FARM = 'LOGIN_FARM';
    GAMEEVENT.GETINITINFO = 'GETINITINFO';
    GAMEEVENT.BOTTOMBTN = 'BOTTOMBTN';
    GAMEEVENT.HIDEINFODIV = 'HIDEINFODIV';
    GAMEEVENT.SHOWINFODIV = 'SHOWINFODIV';
    GAMEEVENT.TEST_LOGIN_FARM = 'FARM';
    GAMEEVENT.ONPROGRESSANIMAL = 'ONPROGRESSANIMAL';
    GAMEEVENT.ONLOADCOMPLETEANIMAL = 'ONLOADCOMPLETEANIMAL';

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
            this.userInfo = {
                "nickname": '魔动闪霸',
                "uid": '7754555',
                "exp": '700',
                "upgrade_exp": '775',
                "flower_num": '111',
                "order_num": '11111',
                "goods_num": '11',
                "grade": 12,
                "have_gold": 10000,
                "lower_level_unlock": [
                    {
                        "type": "crops",
                        "id": "crops_1"
                    }
                ],
            };
            this.factory = {
                "gc001": {
                    "mf_id": "gc001",
                    "grade": "1",
                    "queue_goods": {
                        "seat_1": {
                            'lock': "1",
                            'product': {
                                "id": "wp5011"
                            },
                            'price': "100"
                        },
                        "seat_2": {
                            'lock': "1",
                            'product': null,
                            'price': "100"
                        },
                        "seat_3": {
                            'lock': "1",
                            'product': null,
                            'price': "100"
                        },
                        "seat_4": {
                            'lock': "0",
                            'product': null,
                            'price': "100"
                        },
                    },
                    "being_goods": {
                        "id": "wp5011",
                        "t": "1000"
                    },
                    "succ_goods": [
                        {
                            "id": "wp5011"
                        },
                        {
                            "id": "wp5012"
                        },
                        {
                            "id": "wp5013"
                        },
                        {
                            "id": "wp5014"
                        },
                        {
                            "id": "wp5015"
                        }
                    ],
                },
                "gc002": {
                    "mf_id": "gc002",
                    "grade": "2",
                    "open_seat_num": "3",
                    "being_goods": [],
                    "queue_goods": [],
                    "succ_goods": [],
                }
            };
            this.userGoodInfo = {
                "wheat": { id: "wheat", num: "10" },
                "cowfeed": { id: "cowfeed", num: "10" },
                "chickenfeed": { id: "chickenfeed", type: 'normal', num: "10" },
                "chickenfeedtop": { id: "chickenfeed", type: 'toplevel', num: "1" },
                "pigfeed": { id: "pigfeed", type: 'normal', num: "10" },
                "pigfeedtop": { id: "pigfeed", type: 'toplevel', num: "2" },
                "sheepfeed": { id: "sheepfeed", type: 'normal', num: "10" },
                "sheepfeedtop": { id: "sheepfeed", type: 'toplevel', num: "3" },
                "hh6001": { id: "hh6001", num: "10" },
                "hh6002": { id: "hh6002", num: "10" },
            };
            this.warehouseInfo = {};
            this.lotteryInfo = {};
            this.materialInfo = {};
            this.marketInfo = {};
            this.mailInfo = {};
            this.animalInfo = {
                "chicken": {
                    "id": "chicken",
                    "is_lock": 0,
                    "locklevel": 5,
                    "status": 1,
                    "unlocknum": 1000,
                    "feed_time": 0,
                    'feed_time_tol': 10000,
                    "product": ''
                },
                "cow": {
                    "id": "cow",
                    "is_lock": 1,
                    "locklevel": 5,
                    "unlocknum": 1000,
                    "feed_time": 0,
                    'feed_time_tol': 10000,
                    "product": ''
                },
                "pig": {
                    "id": "pig",
                    "is_lock": 1,
                    "locklevel": 5,
                    "unlocknum": 1000,
                    "feed_time": 7777,
                    'feed_time_tol': 10000,
                    "product": {
                        'grow_time_tol': 1000,
                        "mature_time": 990,
                    }
                },
                "sheep": {
                    "id": "sheep",
                    "is_lock": 0,
                    "locklevel": 5,
                    "unlocknum": 1000,
                    "feed_time": 7777,
                    'feed_time_tol': 10000,
                    "product": {
                        'grow_time_tol': 1000,
                        "mature_time": 990,
                    }
                },
            };
            this.animalProductList = {
                "cow": {},
                "chicken": {},
                "sheep": {},
                "pig": {},
            };
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
            if (typeof data.avatar != 'undefined') {
                this.userInfo.avatar = data.avatar;
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
            data.lower_level_unlock = [
                {
                    "type": "crops",
                    "id": "crops_1"
                },
                {
                    "type": "crops",
                    "id": "crops_1"
                },
                {
                    "type": "crops",
                    "id": "crops_1"
                },
                {
                    "type": "crops",
                    "id": "crops_1"
                },
                {
                    "type": "crops",
                    "id": "crops_1"
                },
                {
                    "type": "crops",
                    "id": "crops_1"
                },
                {
                    "type": "crops",
                    "id": "crops_1"
                }
            ];
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
        setMarketInfo(data) {
            if (typeof data.store_id != 'undefined') {
                this.marketInfo.store_id = data.store_id;
            }
            if (typeof data.num != 'undefined') {
                this.marketInfo.num = data.num;
            }
            if (typeof data.data_info != 'undefined') {
                this.marketInfo.data_info = data.data_info;
            }
        }
        setExchangeInfo(data) {
        }
        setlotteryInfo(data, type) {
            if (type) {
                this.lotteryInfo = {};
            }
            for (var i in data) {
                this.lotteryInfo[data[i].lottery_id] = data[i];
            }
        }
        setMaterialInfo(data, type) {
            if (type) {
                this.materialInfo = {};
            }
            for (var i in data) {
                this.materialInfo[data[i].lottery_id] = data[i];
            }
        }
        setAnimalInfo(data) {
        }
        setAnimalProductInfo(data) {
            if (typeof data.slots != 'undefined') {
                this.animalProductList[data.type] = data.slots;
            }
            if (typeof data.info != 'undefined') {
                this.animalProductList[data.type][data.info.id] = data.info;
            }
        }
        setMailInfo(data) {
            this.mailInfo = data;
        }
    }

    class loginModel {
        constructor() {
        }
        setUserInfo(data) {
            dataGlobal.getInstance().setUserInfo(data);
        }
        setUserProp(data) {
            dataGlobal.getInstance().setUserProp(data);
        }
        setGameWS(data) {
            dataGlobal.getInstance().setGameWS(data);
        }
    }

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var animal;
        (function (animal) {
            class animalProductionUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("animal/animalProduction");
                }
            }
            animal.animalProductionUI = animalProductionUI;
            REG("ui.animal.animalProductionUI", animalProductionUI);
        })(animal = ui.animal || (ui.animal = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var bank;
        (function (bank) {
            class bankSceneUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("bank/bankScene");
                }
            }
            bank.bankSceneUI = bankSceneUI;
            REG("ui.bank.bankSceneUI", bankSceneUI);
        })(bank = ui.bank || (ui.bank = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var base;
        (function (base) {
            var scene;
            (function (scene) {
                class topSceneUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/scene/topScene");
                    }
                }
                scene.topSceneUI = topSceneUI;
                REG("ui.base.scene.topSceneUI", topSceneUI);
            })(scene = base.scene || (base.scene = {}));
        })(base = ui.base || (ui.base = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var base;
        (function (base) {
            var tip;
            (function (tip) {
                class avatar_tipUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/tip/avatar_tip");
                    }
                }
                tip.avatar_tipUI = avatar_tipUI;
                REG("ui.base.tip.avatar_tipUI", avatar_tipUI);
                class baseTipsUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/tip/baseTips");
                    }
                }
                tip.baseTipsUI = baseTipsUI;
                REG("ui.base.tip.baseTipsUI", baseTipsUI);
                class gold_tipUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/tip/gold_tip");
                    }
                }
                tip.gold_tipUI = gold_tipUI;
                REG("ui.base.tip.gold_tipUI", gold_tipUI);
                class holeTipUI extends Laya.Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/tip/holeTip");
                    }
                }
                tip.holeTipUI = holeTipUI;
                REG("ui.base.tip.holeTipUI", holeTipUI);
                class nickname_tipUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/tip/nickname_tip");
                    }
                }
                tip.nickname_tipUI = nickname_tipUI;
                REG("ui.base.tip.nickname_tipUI", nickname_tipUI);
                class popupUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/tip/popup");
                    }
                }
                tip.popupUI = popupUI;
                REG("ui.base.tip.popupUI", popupUI);
                class upgrade_tipUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/tip/upgrade_tip");
                    }
                }
                tip.upgrade_tipUI = upgrade_tipUI;
                REG("ui.base.tip.upgrade_tipUI", upgrade_tipUI);
                class user_info_tipUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("base/tip/user_info_tip");
                    }
                }
                tip.user_info_tipUI = user_info_tipUI;
                REG("ui.base.tip.user_info_tipUI", user_info_tipUI);
            })(tip = base.tip || (base.tip = {}));
        })(base = ui.base || (ui.base = {}));
    })(ui || (ui = {}));
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
        var email;
        (function (email) {
            class emailUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("email/email");
                }
            }
            email.emailUI = emailUI;
            REG("ui.email.emailUI", emailUI);
        })(email = ui.email || (ui.email = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var exchange;
        (function (exchange) {
            class exchangeUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("exchange/exchange");
                }
            }
            exchange.exchangeUI = exchangeUI;
            REG("ui.exchange.exchangeUI", exchangeUI);
            class screenUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("exchange/screen");
                }
            }
            exchange.screenUI = screenUI;
            REG("ui.exchange.screenUI", screenUI);
            class selltipUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("exchange/selltip");
                }
            }
            exchange.selltipUI = selltipUI;
            REG("ui.exchange.selltipUI", selltipUI);
            class tradeingHomeUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("exchange/tradeingHome");
                }
            }
            exchange.tradeingHomeUI = tradeingHomeUI;
            REG("ui.exchange.tradeingHomeUI", tradeingHomeUI);
        })(exchange = ui.exchange || (ui.exchange = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var factory;
        (function (factory) {
            class baseFactoryUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("factory/baseFactory");
                }
            }
            factory.baseFactoryUI = baseFactoryUI;
            REG("ui.factory.baseFactoryUI", baseFactoryUI);
            class factoryUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("factory/factory");
                }
            }
            factory.factoryUI = factoryUI;
            REG("ui.factory.factoryUI", factoryUI);
            class factoryInfoUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("factory/factoryInfo");
                }
            }
            factory.factoryInfoUI = factoryInfoUI;
            REG("ui.factory.factoryInfoUI", factoryInfoUI);
            class factoryMakeUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("factory/factoryMake");
                }
            }
            factory.factoryMakeUI = factoryMakeUI;
            REG("ui.factory.factoryMakeUI", factoryMakeUI);
            class factoryUpgradeUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("factory/factoryUpgrade");
                }
            }
            factory.factoryUpgradeUI = factoryUpgradeUI;
            REG("ui.factory.factoryUpgradeUI", factoryUpgradeUI);
        })(factory = ui.factory || (ui.factory = {}));
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
        var materialorder;
        (function (materialorder) {
            class materialOrderUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("materialorder/materialOrder");
                }
            }
            materialorder.materialOrderUI = materialOrderUI;
            REG("ui.materialorder.materialOrderUI", materialOrderUI);
            class orderIndex1UI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("materialorder/orderIndex1");
                }
            }
            materialorder.orderIndex1UI = orderIndex1UI;
            REG("ui.materialorder.orderIndex1UI", orderIndex1UI);
            class orderTipsUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("materialorder/orderTips");
                }
            }
            materialorder.orderTipsUI = orderTipsUI;
            REG("ui.materialorder.orderTipsUI", orderTipsUI);
        })(materialorder = ui.materialorder || (ui.materialorder = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var order;
        (function (order) {
            class goodGoTipUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("order/goodGoTip");
                }
            }
            order.goodGoTipUI = goodGoTipUI;
            REG("ui.order.goodGoTipUI", goodGoTipUI);
            class gradeOrderUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("order/gradeOrder");
                }
            }
            order.gradeOrderUI = gradeOrderUI;
            REG("ui.order.gradeOrderUI", gradeOrderUI);
            class orderIndexUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("order/orderIndex");
                }
            }
            order.orderIndexUI = orderIndexUI;
            REG("ui.order.orderIndexUI", orderIndexUI);
        })(order = ui.order || (ui.order = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var rank;
        (function (rank) {
            class rankUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("rank/rank");
                }
            }
            rank.rankUI = rankUI;
            REG("ui.rank.rankUI", rankUI);
        })(rank = ui.rank || (ui.rank = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var setting;
        (function (setting) {
            class settingUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("setting/setting");
                }
            }
            setting.settingUI = settingUI;
            REG("ui.setting.settingUI", settingUI);
        })(setting = ui.setting || (ui.setting = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var warehouse;
        (function (warehouse) {
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
            class warehouseUpgradeUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("warehouse/warehouseUpgrade");
                }
            }
            warehouse.warehouseUpgradeUI = warehouseUpgradeUI;
            REG("ui.warehouse.warehouseUpgradeUI", warehouseUpgradeUI);
        })(warehouse = ui.warehouse || (ui.warehouse = {}));
    })(ui || (ui = {}));

    class CONST {
    }
    CONST.STAGEHEIGHT = Laya.Browser.clientHeight;
    CONST.STAGEWIDTH = Laya.Browser.clientWidth;
    CONST.DESIGNSTAGEHEIGHT = 2688;
    CONST.DESIGNSTAGEWIDTH = 1242;
    CONST.DEBUGMODE = 1;
    CONST.HEART_TIME = 20000;
    CONST.IS_TB = 2;
    CONST.LOGIN_URL = "https://farmapi.ones.games/index.php";
    CONST.SRC_URL = "http://192.168.0.226/pic/";
    CONST.ADAPTION = (CONST.DESIGNSTAGEHEIGHT - CONST.STAGEHEIGHT / (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH)) / 2;
    CONST.STAGEADAPTION = (CONST.DESIGNSTAGEHEIGHT * CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH - CONST.STAGEHEIGHT) / 2;

    class baseScene extends Laya.Sprite {
        constructor() {
            super();
            this.modal = new Laya.Sprite;
            this.addChild(this.modal);
        }
        init() {
        }
        showModal() {
            this.modal.graphics.clear();
            this.modal.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
            this.modal.alpha = 0;
            this.modal.width = Laya.stage.width;
            this.modal.height = Laya.stage.height;
        }
        clearAll() {
            this.modal.visible = false;
            this.modal.graphics.clear();
        }
        clearChild(type) {
            var obj = gameLayer.scenelayer.getChildAt(1);
            if (type == 1) {
                obj.visible = false;
            }
            else if (type == 2) {
                gameLayer.scenelayer.removeChildAt(1);
            }
        }
        tweenAlphaAdd(obj, name, type) {
            var num = gameLayer.scenelayer.numChildren;
            if (num > 0) {
                for (var i = 0; i < num; i++) {
                    var sceneChild = gameLayer.scenelayer.getChildAt(i);
                    if (sceneChild.name == name) {
                        continue;
                    }
                    sceneChild.visible = true;
                    var isShow = true;
                    Laya.Tween.to(sceneChild, { alpha: 0 }, 300, null, Laya.Handler.create(this, function () {
                        if (type == 1) {
                            sceneChild.visible = false;
                        }
                        else {
                            sceneChild.removeSelf();
                        }
                        if (isShow) {
                            isShow = false;
                            var node = gameLayer.scenelayer.getChildByName(name);
                            if (node) {
                                obj = node;
                                obj.alpha = 0;
                                obj.visible = true;
                            }
                            else {
                                obj.alpha = 0;
                                gameLayer.scenelayer.addChild(obj);
                            }
                            this.tweenAlphaAllShow(obj);
                        }
                    }.bind(this)));
                }
            }
            else {
                obj.alpha = 0;
                gameLayer.scenelayer.addChild(obj);
                this.tweenAlphaAllShow(obj);
            }
        }
        tweenTranAdd(obj, name, type, tran) {
            var num = gameLayer.scenelayer.numChildren;
            if (num > 0) {
                for (var i = 0; i < num; i++) {
                    var sceneChild = gameLayer.scenelayer.getChildAt(i);
                    if (sceneChild.name == name) {
                        continue;
                    }
                    if (tran == 'left') {
                        var tranX = -CONST.STAGEWIDTH;
                    }
                    else {
                        var tranX = CONST.STAGEWIDTH;
                    }
                    sceneChild.visible = true;
                    Laya.Tween.to(sceneChild, { x: tranX }, 200, null, Laya.Handler.create(sceneChild, function () {
                        if (type == 1) {
                            this.visible = false;
                        }
                        else {
                            this.removeSelf();
                        }
                    }));
                }
                var node = gameLayer.scenelayer.getChildByName(name);
                if (node) {
                    obj = node;
                    obj.alpha = 1;
                    obj.visible = true;
                }
                else {
                    obj.alpha = 1;
                    if (tran == 'left') {
                        obj.x = CONST.STAGEWIDTH;
                    }
                    else {
                        obj.x = -CONST.STAGEWIDTH;
                    }
                    gameLayer.scenelayer.addChild(obj);
                }
            }
            else {
                if (tran == 'left') {
                    obj.x = CONST.STAGEWIDTH;
                }
                else {
                    obj.x = -CONST.STAGEWIDTH;
                }
                obj.alpha = 1;
                gameLayer.scenelayer.addChild(obj);
            }
            Laya.Tween.to(obj, { x: 0 }, 200, null, Laya.Handler.create(this, function () {
            }.bind(this)));
        }
        tweenAlphaAllShow(obj) {
            Laya.Tween.to(obj, { alpha: 1 }, 300, null);
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
            obj.scale(1, 1);
        }
    }

    class httpJson {
        constructor() {
            this.xhr = new Laya.HttpRequest();
        }
        static getInstance() {
            if (httpJson._instance == null) {
                httpJson._instance = new httpJson;
            }
            return httpJson._instance;
        }
        processHandler(data) {
        }
        errorHandler(data) {
        }
        completeHandler(data) {
            console.log("返回的数据:", data);
            if (data != "PONG") {
                var o = JSON.parse(data);
                if (typeof (o.ga) != "undefined") {
                    Laya.stage.event(o.ga, o);
                }
                else {
                    console.log("不存在事件", o);
                }
            }
            else {
                console.log("PONG");
            }
        }
        httpPost(url, data) {
            if (url == "") {
                console.log("没有输入提交地址");
                return;
            }
            if (typeof (data.a) == "undefined" || typeof (data.m) == "undefined") {
                console.log("请选择协议类型");
                return;
            }
            var tmp_data = this.ProtoPack(data);
            this.xhr.http.timeout = 10000;
            this.xhr.once(Laya.Event.ERROR, this, this.errorHandler);
            this.xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
            this.xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
            this.xhr.send(url, tmp_data, "post", "text");
        }
        httpGet(url, data) {
            if (url == "") {
                console.log("没有输入提交地址");
                return;
            }
            if (typeof (data.a) == "undefined" || typeof (data.m) == "undefined") {
                console.log("请选择协议类型");
                return;
            }
            var tmp_data = this.ProtoPack(data);
            this.xhr.http.timeout = 10000;
            this.xhr.once(Laya.Event.ERROR, this, this.errorHandler);
            this.xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
            this.xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
            this.xhr.send(url, tmp_data, "get", "text");
        }
        ProtoPack(data) {
            var token = dataGlobal.getInstance().userInfo;
            if (typeof (token) != "undefined" && token != "" && typeof (token.token) != "undefined" && token.token != "") {
                data.token = token.token;
            }
            else {
                data.token = "";
            }
            var s = "token=" + data.token;
            for (var k in data) {
                if (k == 'token') {
                    continue;
                }
                if (k == 'd') {
                    s += "&" + k + "=" + encodeURIComponent(JSON.stringify(data[k]));
                }
                else {
                    s += "&" + k + "=" + data[k];
                }
            }
            return s;
        }
        ;
    }

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
        GET_FARM_SEED_CONFIG() {
            return this.FARM_SEED_CONFIG;
        }
        GET_SYS_STORE_INFO() {
            return this.SYS_STORE_INFO;
        }
        GET_SYS_MATERIAL_INFO() {
            return this.SYS_MATERIAL_INFO;
        }
        GET_SYS_MATERIAL_ORDERLIST() {
            return this.SYS_MATERIAL_ORDER;
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
        GET_SYS_FLOWER_MATERIAL() {
            return this.SYS_MATERIAL_INFO;
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                            "tools": [
                                {
                                    "id": "tool001",
                                    "num": "10"
                                },
                                {
                                    "id": "tool002",
                                    "num": "3"
                                },
                                {
                                    "id": "tool004",
                                    "num": "6"
                                }
                            ],
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
                        "goods": {},
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
                        "pic": "factory/pic_factory1",
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
                        "pic": "factory/pic_factory1",
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
                        "pic": "factory/pic_factory1",
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
                        "pic": "factory/pic_factory1",
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
                        "pic": "factory/pic_factory1",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory3",
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
                        "pic": "factory/pic_factory3",
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
                        "pic": "factory/pic_factory3",
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
                        "pic": "factory/pic_factory3",
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
                        "pic": "factory/pic_factory3",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                        "pic": "factory/pic_factory2",
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
                    "status": "2",
                    "await": "1000",
                    "type": "1",
                    "pic": "",
                    "pic2": "",
                    "ain": "",
                    "ain2": "",
                    "ain3": "",
                    "grade": "1",
                    "grade2": "1",
                    "goods": [],
                    "goods2": [],
                    "goods3": [],
                    "num": "1",
                    "t": "28800",
                    "weight": "100"
                },
                "rw201": {
                    "id": "rw201",
                    "name": "艺术摄影",
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
                    "status": "1",
                    "await": "1000",
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
            this.SYS_MATERIAL_INFO = {
                "MATERIAL301": {
                    "grade": "3",
                    "gold": '100',
                    "is_lock": "1",
                    "lock_num": "200",
                    "get_num": '20',
                    "t": 0
                },
                "MATERIAL302": {
                    "grade": "3",
                    "gold": '100',
                    "is_lock": "1",
                    "lock_num": "200",
                    "get_num": '20',
                    "t": 2999
                },
                "MATERIAL303": {
                    "grade": "8",
                    "gold": '500',
                    "is_lock": "2",
                    "lock_num": "200",
                    "get_num": '20',
                    "t": 0
                },
            };
            this.SYS_MATERIAL_ORDER = {
                "MATERIAL301": {
                    "id": "od1301",
                    "status": "0",
                    "t": "1000",
                    "goods": [
                        {
                            "id": "product01",
                            "num": "10",
                            "status": "1"
                        },
                        {
                            "id": "product02",
                            "num": "1",
                            "status": "0"
                        },
                        {
                            "id": "product01",
                            "num": "1",
                            "status": "0"
                        },
                        {
                            "id": "product02",
                            "num": "3",
                            "status": "0"
                        },
                        {
                            "id": "product01",
                            "num": "8",
                            "status": "0"
                        }
                    ],
                    "reback": [
                        {
                            "id": "tool001",
                            "num": "1"
                        },
                        {
                            "id": "tool001",
                            "num": "1"
                        }
                    ],
                },
                "MATERIAL302": {
                    "id": "od1301",
                    "status": "1",
                    "t": "1000",
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
                    "reback": [
                        {
                            "id": "tool001",
                            "num": "1"
                        },
                        {
                            "id": "tool001",
                            "num": "1"
                        }
                    ],
                },
                "MATERIAL303": {}
            };
            this.SYS_FACTORY_GOOD = {
                "gc001": {
                    "wp5011": {
                        "id": "wp5011",
                        "name": "一心一意",
                        "grade": "1",
                        "grade2": "1",
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
                        "grade2": "2",
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
                    "field": "2",
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
                    "field": "3",
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
                    "field": "4",
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
                    "field": "5",
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
                    "field": "6",
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
                    "field": "7",
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
                    "field": "8",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "field": "9",
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
                    "num": "5",
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
            this.FARM_SEED_CONFIG = {
                "wheat": {
                    "id": "Wheat",
                    "name": "小麦",
                    "lowestgrade": "1",
                    "t": "120",
                    "speed": "0",
                    "exp": "3",
                    "pic": "",
                    "price": "20",
                    "instage": "0"
                },
                "corn": {},
                "sugarcane": {},
                "soybean": {},
                "rice": {},
                "carrot": {},
                "potato": {},
                "tomato": {},
                "vegetables": {},
                "pepper": {},
                "strawberry": {},
                "cotton": {},
                "coffee": {},
                "cocoa": {},
                "lily": {},
                "peony": {}
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
            this.delay = 100;
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
        }
        clearAll() {
            this.modal.visible = false;
            this.modal.graphics.clear();
            this.modal.off(Laya.Event.CLICK, this, this.onClick);
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
            console.log(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
            console.log(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
            console.log(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
            var _tipKuan = new ui.base.tip.holeTipUI();
            _tipKuan.content_txt.text = content_txt;
            _tipKuan.confirm_btn.on(Laya.Event.CLICK, this, confirm_fun);
            _tipKuan.cancel_btn.on(Laya.Event.CLICK, this, cancel_fun);
            _tipKuan.confirm_btn.label = confirm_txt;
            _tipKuan.cancel_btn.label = cancel_txt;
            _tipKuan.close_btn.on(Laya.Event.CLICK, this, this.close);
            _tipKuan.pivot(_tipKuan.width / 2, _tipKuan.height / 2);
            this.addChild(_tipKuan);
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
            var _tipKuan = new ui.base.tip.holeTipUI();
            this.addChild(_tipKuan);
            _tipKuan.content_txt.text = content_txt;
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

    class tipIndex$1 extends baseWindow {
        constructor() {
            super();
        }
        tipShow(title_txt, tips, info, confirm_fun) {
            var _tipKuan = new ui.base.tip.baseTipsUI();
            _tipKuan.title.text = title_txt;
            _tipKuan.tips_text.text = tips;
            for (var i in info) {
                if (i == 'skin') {
                    _tipKuan.tools_icon.skin = info[i];
                }
                if (i == 'num_txt') {
                    _tipKuan.tools_num.text = '×' + info[i];
                    _tipKuan.tools_num.visible = true;
                }
                if (i == 'price') {
                    _tipKuan.btn_num.text = info[i];
                }
                _tipKuan.type_pay.skin = 'main/pic_zuanshi.png';
                if (i == 'type') {
                    if (info[i] == 'coin') {
                        _tipKuan.type_pay.skin = 'base/Icon_Coin.png';
                    }
                }
            }
            _tipKuan.close_btn.on(Laya.Event.CLICK, this, this.close);
            _tipKuan.get_btn.on(Laya.Event.CLICK, this, confirm_fun);
            _tipKuan.pivot(_tipKuan.width / 2, _tipKuan.height / 2);
            this.addChild(_tipKuan);
            this.tweenShow();
        }
        close() {
            this.tweenHide();
        }
        gameFailTip(data) {
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
            var _tipKuan = new ui.base.tip.holeTipUI();
            this.addChild(_tipKuan);
            _tipKuan.content_txt.text = content_txt;
            _tipKuan.confirm_btn.on(Laya.Event.CLICK, this, confirm_fun);
            _tipKuan.cancel_btn.on(Laya.Event.CLICK, this, cancel_fun);
            _tipKuan.close_btn.on(Laya.Event.CLICK, this, this.close);
            _tipKuan.pivotX = 0.5 * _tipKuan.width;
            _tipKuan.pivotY = 0.5 * _tipKuan.height;
            this.tweenShow();
        }
    }

    class baseTipView {
        constructor() {
        }
        tipShow(title_txt, tips, info, confirm_fun) {
            if (this._baseTipIndex == null) {
                this._baseTipIndex = new tipIndex$1;
            }
            this._baseTipIndex.tipShow(title_txt, tips, info, confirm_fun);
        }
        goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            if (this._baseTipIndex == null) {
                this._baseTipIndex = new tipIndex$1;
            }
            this._baseTipIndex.goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
        }
        gameTxtTip(txt, call_fun) {
            if (this._baseTipIndex == null) {
                this._baseTipIndex = new tipIndex$1;
            }
            this._baseTipIndex.gameTxtTip(txt, call_fun);
        }
        gameFailTip(data) {
            if (this._baseTipIndex == null) {
                this._baseTipIndex = new tipIndex$1;
            }
            this._baseTipIndex.gameFailTip(data);
        }
        close() {
            if (this._baseTipIndex == null) {
                this._baseTipIndex = new tipIndex$1;
            }
            this._baseTipIndex.close();
        }
    }

    class NETWORKEVENT {
    }
    NETWORKEVENT.CONNECTONOPEN = "pid_1000";
    NETWORKEVENT.CONNECTONCLOSE = "pid_1001";
    NETWORKEVENT.HTTP_LOGIN_OK = "HTTP_LOGIN_OK";
    NETWORKEVENT.HTTP_ERROR_BAK = "HTTP_ERROR_BAK";
    NETWORKEVENT.GAMEFAILTIP = "game_fail_tip";
    NETWORKEVENT.USERNICKNAMECHANGE = "user_nickname_change";
    NETWORKEVENT.USERAVATARCHANGE = "user_avatar_change";
    NETWORKEVENT.INITINFO = "init_info";
    NETWORKEVENT.USERCOUNTINFO = 'user_count_info_bak';
    NETWORKEVENT.FARMINITFIELD = "init_field";
    NETWORKEVENT.FARMINITSEEDLIST = "init_seed_list";
    NETWORKEVENT.FARMINITFLOWERGRADE = 'init_flower_grade';
    NETWORKEVENT.FARMINITPLANTFLOWER = 'init_plant_flower';
    NETWORKEVENT.FARMINITFLOWERWATER = 'init_flower_water';
    NETWORKEVENT.FARMINITGROWFLOWER = 'init_grow_flower';
    NETWORKEVENT.FARMINITCOLLECTFLOWER = 'init_collect_flower';
    NETWORKEVENT.FARMINITFLOWERFERTILIZE = 'init_flower_fertilize';
    NETWORKEVENT.FARMSENDFLOWERFATBAK = 'send_flower_fat_bak';
    NETWORKEVENT.FARMINITFLOWERFAT = 'init_flower_fat';
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
    NETWORKEVENT.SHOWSELLTIP = 'show_sell_tip';
    NETWORKEVENT.MATERIALINFOBAK = 'material_info';
    NETWORKEVENT.SENDGOODMATERIALBAK = 'send_good_material_bak';
    NETWORKEVENT.ANIMALPRODUCTMATURE = "animal_product_mature";
    NETWORKEVENT.EXCHANGEINFOBAK = 'exchange_info_bak';
    NETWORKEVENT.EXCHANGEMYMATERIAL = 'exchange_my_material';
    NETWORKEVENT.MAILINFOBAK = 'mail_info_bak';
    NETWORKEVENT.MAILOPERATE = 'mail_operate';
    NETWORKEVENT.ANIMALPRODUCTINFO = 'animal_product_info';
    NETWORKEVENT.ANIMALPRODUCTHARVEST = 'animal_product_harvest';
    NETWORKEVENT.ANIMALPRODUCTFEED = 'animal_product_feed';
    NETWORKEVENT.ANIMALSlOTLOCK = 'animal_slot_lock';
    NETWORKEVENT.FACTORYADDWAITING = 'factory_add_waiting';
    NETWORKEVENT.FACTORYPRODUCTSPEEDUP = 'factory_product_speedup';

    class tipController {
        constructor() {
            Laya.stage.on(GAMEEVENT.TIPSKUAN, this, this.tipShow);
            Laya.stage.on(GAMEEVENT.BASETIPS, this, this.baseTipsShow);
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
        baseTipsShow(title_txt, tips, info, confirm_fun) {
            console.log("提示1");
            if (this._basetipview == null) {
                this._basetipview = new baseTipView();
            }
            this._basetipview.tipShow(title_txt, tips, info, confirm_fun);
        }
        tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            console.log("提示2");
            if (this._tipview == null) {
                this._tipview = new tipView();
            }
            this._tipview.tipShow(content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun);
        }
        goldTipShow(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            console.log("提示2");
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

    class webSocketJson {
        constructor() {
            this.isConnect = false;
            this.send_pack_time = 0;
            console.log("开始进行网络长连接", "wss://" + dataGlobal.getInstance().gameWS + "?token=" + dataGlobal.getInstance().userInfo.token);
            this.connect("wss://" + dataGlobal.getInstance().gameWS + "?token=" + dataGlobal.getInstance().userInfo.token);
            Laya.stage.off(NETWORKEVENT.CONNECTONCLOSE, this, this.re_connect);
            Laya.stage.on(NETWORKEVENT.CONNECTONCLOSE, this, this.re_connect);
        }
        static getInstance() {
            if (webSocketJson._instance == null) {
                webSocketJson._instance = new webSocketJson;
            }
            return webSocketJson._instance;
        }
        connect(url) {
            if (this.websocket == null) {
                this.websocket = new WebSocket(url);
            }
            this.websocket.onopen = this.onOpen;
            this.websocket.onclose = this.onClose;
            this.websocket.onmessage = this.onMessage;
            this.websocket.onerror = this.onError;
        }
        sendMessage(data) {
            if (this.websocket == null) {
                return;
            }
            if (typeof (data.a) == "undefined" || data.a == "" || typeof (data.m) == "undefined" || data.m == "") {
                console.log("请选择协议类型");
                return;
            }
            var d = new Date();
            webSocketJson.getInstance().send_pack_time = d.getTime();
            console.log('发送的数据', data);
            var tmp_data = JSON.stringify(data);
            try {
                this.websocket.send(tmp_data);
            }
            catch (e) {
                console.log("网络没有连上", e);
            }
            return true;
        }
        timeSendPack() {
            var d = new Date();
            let t = d.getTime() - webSocketJson.getInstance().send_pack_time;
            if (t > CONST.HEART_TIME) {
                var data = {
                    a: "heartbeat",
                    m: "gzhq_game",
                    d: { t: webSocketJson.getInstance().send_pack_time },
                    code: 1
                };
                webSocketJson.getInstance().sendMessage(data);
            }
            else {
                console.log("不用发心跳", t);
            }
            if (webSocketJson.isConnectting == true || webSocketJson._instance == null) {
                console.log("正在连接中。。。。");
                return;
            }
            if (webSocketJson.send_pack_time_count > 1) {
                webSocketJson.send_pack_time_count--;
                console.log("正在连接中2。。。。");
                return;
            }
            webSocketJson.send_pack_time_count++;
            Laya.timer.once(CONST.HEART_TIME, this, webSocketJson.getInstance().timeSendPack);
            webSocketJson.send_pack_time_count--;
        }
        onClose(evt) {
            this.isConnect = false;
            this.websocket = null;
            webSocketJson._instance = null;
            if (webSocketJson.isConnectting == true) {
                console.log("正在连接中。。。。");
                return;
            }
            else {
                webSocketJson.isConnectting = true;
            }
            Laya.stage.event(NETWORKEVENT.CONNECTONCLOSE);
        }
        onOpen(evt) {
            console.log('onopen');
            webSocketJson.isConnectting = false;
            this.isConnect = true;
            console.log("网络连接成功！");
            Laya.timer.once(CONST.HEART_TIME, this, webSocketJson.getInstance().timeSendPack);
            Laya.stage.event(GAMEEVENT.LOGIN_FARM);
        }
        onMessage(evt) {
            if (evt.data != "PONG" && evt.data != "pong") {
                var tmp_data = JSON.parse(evt.data);
                if (typeof (tmp_data.ga) != "undefined") {
                    console.log('进来了', tmp_data.ga);
                    Laya.stage.event(tmp_data.ga, tmp_data);
                }
                else {
                    console.log("不存在事件", tmp_data.ga);
                }
            }
            else {
                console.log("PONG");
            }
        }
        onError(evt) {
            console.log("网络连接出错！");
            this.isConnect = false;
            this.websocket = null;
            webSocketJson._instance = null;
            if (webSocketJson.isConnectting == true) {
                console.log("正在连接中");
                return;
            }
            else {
                webSocketJson.isConnectting = true;
            }
            Laya.stage.event(NETWORKEVENT.CONNECTONCLOSE);
        }
        re_connect() {
            console.log('断线重连');
            webSocketJson.getInstance();
        }
    }
    webSocketJson.isConnectting = false;
    webSocketJson.send_pack_time_count = 0;
    webSocketJson._instance = null;

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
            this.water_icon.on(Laya.Event.CLICK, this, this.onClickLand);
            this.harvest_icon.on(Laya.Event.CLICK, this, this.onClickLand);
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
                if (data.seed_data.next_mature_time <= 0) {
                    let tmp_websocket = webSocketJson.getInstance();
                    let tmp_data = {
                        'a': "init_grow_flower",
                        'm': "init",
                        'd': {
                            'ff_id': this.land_id,
                        },
                        'code': 1
                    };
                    tmp_websocket.sendMessage(tmp_data);
                }
            }
            if (data.fat_time > 0) {
                data.fat_time--;
                this.fertilizer_time.text = globalFun.getInstance().formatSeconds(data.fat_time);
                this.fertilizer_time_val.value = Math.floor((data.fat_time / data.fat_time_tol) * 100);
                if (data.fat_time <= 0) {
                    this.fertilizer_kuan.visible = false;
                    let tmp_websocket = webSocketJson.getInstance();
                    let tmp_data = {
                        'a': "init_flower_fat",
                        'm': "init",
                        'd': {
                            'ff_id': this.land_id,
                        },
                        'code': 1
                    };
                    tmp_websocket.sendMessage(tmp_data);
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
                let tmp_websocket = webSocketJson.getInstance();
                let tmp_data = {
                    'a': "init_flower_water",
                    'm': "init",
                    'd': {
                        'ff_id': this.land_id,
                    },
                    'code': 1
                };
                tmp_websocket.sendMessage(tmp_data);
            }
        }
        onHarvest() {
            var data = dataGlobal.getInstance().farmInfo[this.land_id];
            if (data.seed_data.id && data.seed_data.grow_static == 4) {
                let tmp_websocket = webSocketJson.getInstance();
                let tmp_data = {
                    'a': "init_collect_flower",
                    'm': "init",
                    'd': {
                        'ff_id': this.land_id,
                    },
                    'code': 1
                };
                tmp_websocket.sendMessage(tmp_data);
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
                gold_str = "" + have_gold + "/" + data.next_ff_id_glod + "";
            }
            else {
                gold_str = "" + have_gold + "/" + data.next_ff_id_glod + "";
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
                for (var q in member) {
                    if (member[q].field > member_info.field) {
                        str = '达到' + member[q].grade + '级可扩建该花田';
                        break;
                    }
                }
            }
            gold_str = '是否消耗' + data.ff_id_unlocknum + '钻石解锁花田';
            if (type == 1) {
                gold_str = '是否消耗' + data.next_ff_id_glod + '钻石升级花田';
            }
            if (str) {
                Laya.stage.event(GAMEEVENT.TIPSKUAN, [str, '确定', '取消', function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
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
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "init_flower_grade",
                'm': "init",
                'd': {
                    'ff_id': this.land_id,
                    'type': type
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
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
                this.upgrade_kuan.mouseThrough = true;
                if (data.ff_vip >= data.max_grade) {
                    this.upgrade_info.text = "满级";
                    this.upgrade_info.visible = true;
                    this.n17.visible = false;
                    this.n18.visible = false;
                    this.upgrade_gold.visible = false;
                    this.upgrade_level.visible = false;
                    this.upgrade_progressbar.visible = false;
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
                    this.upgrade_progressbar.value = data.ff_exp / data.next_exp;
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
                let index = data.seed_data.pic.lastIndexOf("/");
                var _skin = data.seed_data.pic.substring(index + 1, data.seed_data.pic.length);
                this.flower.skin = "main/" + _skin + ".png";
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
            if (clickLandStatic == '' || clickLandStatic == 'fertilizer') {
                if (data.seed_data.id && data.seed_data.grow_static == 4 && data.seed_data.mature_time <= 0) {
                    this.land_static = 'harvest';
                    this.land.mouseEnabled = true;
                    this.land.off(Laya.Event.CLICK, this, this.onClickLand);
                    this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                    this.land.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
                    this.land.on(Laya.Event.CLICK, this, this.onClickLand);
                    this.harvest_icon.mouseEnabled = true;
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
            return false;
        }
    }

    class farmSeedList extends ui.farm.seedListUI {
        constructor() {
            super();
        }
        init() {
            this._seedListScene = this;
            this._seed_list = this.seed_list;
            this._seed_list.repeatY = 1;
            this._seed_list.hScrollBarSkin = "";
            this._seed_list.visible = false;
            this._seedListScene.visible = false;
            var _nowScene = this._seedListScene;
            return _nowScene;
        }
        addSeedListItem(data) {
            this.addSeedItem(data.seed_data);
            this.addFertilizerItem(data.fat_data);
        }
        addSeedItem(data) {
            this._dataSeedList = [];
            for (var i in data) {
                var _seedItem = {
                    id: 'seed_' + data[i].id,
                    name: data[i].id,
                    index: 0,
                    seep_pic: {
                        skin: data[i].pic
                    },
                    gold_num: {
                        text: data[i].gold,
                        color: ""
                    },
                    suo_div: {
                        visible: true
                    },
                    visible: false
                };
                this.initSeedItem(_seedItem);
                this._dataSeedList.push(_seedItem);
            }
        }
        addFertilizerItem(data) {
            this._dataFertilizer = [];
            for (var i in data) {
                let index = data[i].pic.lastIndexOf("/");
                var _skin = data[i].pic.substring(index + 1, data[i].pic.length);
                var _seedItem = {
                    id: 'fat_' + data[i].id,
                    name: data[i].id,
                    index: 0,
                    seep_pic: {
                        skin: 'farm/' + _skin + '.png'
                    },
                    gold_num: {
                        text: data[i].num,
                        color: ""
                    },
                    suo_div: {
                        visible: false
                    },
                    visible: false
                };
                var have_gold = dataGlobal.getInstance().userInfo.have_gold;
                if (have_gold >= data[i].num) {
                    _seedItem.gold_num.color = '#EDFF24';
                }
                else {
                    _seedItem.gold_num.color = '#FF3E24';
                }
                this._dataFertilizer.push(_seedItem);
            }
        }
        initSeedItem(itemObj) {
            itemObj.suo_div.visible = false;
            itemObj.gold_num.color = '#EDFF24';
        }
        setSeedListItem() {
            if (this._seed_list.renderHandler) {
                this._seed_list.renderHandler = null;
            }
            if (farmController.getInstance().model.clickLandStatic == 'plant') {
                this.setSeedItem();
            }
        }
        setSeedItem() {
            this._seed_list.dataSource = [];
            var grade = dataGlobal.getInstance().userInfo.grade;
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var seed_arr = farmController.getInstance().model.seedData;
            var isshow = true;
            for (var i in seed_arr) {
                var seed_info = dataJson.getInstance().GET_FARM_SEED_CONFIG()[seed_arr[i].id];
                var warehouse_num = dataGlobal.getInstance().userGoodInfo[seed_arr[i].id].num;
                console.log('种子配置信息', seed_info, warehouse_num);
                var _seedItem = {
                    id: seed_info.id,
                    name: seed_info.name,
                    index: 0,
                    seep_pic: {
                        skin: "resource/crops/" + seed_info.id + "Enable.png"
                    },
                    gold_num: {
                        text: warehouse_num,
                    },
                    suo_div: {
                        visible: false
                    },
                    visible: true
                };
                if (warehouse_num < 1) {
                    _seedItem.suo_div.visible = true;
                }
                this._seed_list.addItem(_seedItem);
            }
            this._seed_list.renderHandler = null;
            this._seed_list.renderHandler = new Laya.Handler(this, this.itemSelectHandler, [], false);
            this._seed_list.visible = true;
            this._seedListScene.visible = true;
        }
        itemSelectHandler(cell, index) {
            cell.off(Laya.Event.CLICK, this, this.onClick);
            var seed_arr = farmController.getInstance().model.seedData;
            var grade = dataGlobal.getInstance().userInfo.grade;
            var _id = seed_arr[index];
            console.log(seed_arr, _id);
            var warehouse_num = dataGlobal.getInstance().userGoodInfo[_id.id].num;
            if (Number(warehouse_num) > 0) {
                cell.on(Laya.Event.CLICK, this, this.onClick, ['plant', { 'id': seed_arr[index].id }]);
            }
            else {
                cell.on(Laya.Event.CLICK, this, this.onClick, ['lock', { 'grade': seed_arr[index].grade2, 'name': seed_arr[index].name }]);
            }
        }
        itemFatSelectHandler(arr, cell, index) {
            cell.off(Laya.Event.CLICK, this, this.onClick);
            cell.off(Laya.Event.CLICK, this, this.onFertilizer);
            cell.on(Laya.Event.CLICK, this, this.onFertilizer, [{ 'id': arr[index].id, 'num': arr[index].num }]);
        }
        hide() {
            this._seedListScene.visible = false;
        }
        onClick(itemStatic, arr) {
            tipController.getInstance();
            if (itemStatic == 'plant') {
                var landId = farmController.getInstance().model.landId;
                this.onPlant(landId, arr.id);
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
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "init_plant_flower",
                'm': "init",
                'd': {
                    'ff_id': landId,
                    'seed_num': id
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
        }
        onFertilizer(data) {
            var landId = farmController.getInstance().model.landId;
            var landData = dataGlobal.getInstance().farmInfo[landId];
            if (landData.fat_time > 0) {
                Laya.stage.event(GAMEEVENT.TXTTIP, ['该花田已施肥']);
                return;
            }
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            if (have_gold < data.num) {
                Laya.stage.event(GAMEEVENT.TXTTIP, ['施肥种子需要' + data.num + '宝石']);
                return;
            }
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "init_flower_fertilize",
                'm': "init",
                'd': {
                    'ff_id': landId,
                    'fat_id': data.id
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
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
        showTip() {
            this.visible = true;
            this.setCenter();
            this.modal.visible = true;
            this.modal.graphics.clear();
            this.modal.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
            this.modal.alpha = 0.35;
            this.modal.width = Laya.stage.width;
            this.modal.height = Laya.stage.height;
            gameLayer.tipslayer.addChild(this.modal);
            this.modal.on(Laya.Event.CLICK, this, this.onClick);
            gameLayer.tipslayer.addChild(this);
        }
        hideTip() {
            gameLayer.tipslayer.removeChild(this);
            this.clearAll();
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

    class warehouseIndex extends baseTips {
        constructor() {
            super();
        }
        onShowWarehouse() {
            if (this._warehouse == null) {
                this._warehouse = new ui.warehouse.warehouseUI();
                this._warehouse.name = 'warehouse';
                this._warehouse.pivotX = 0.5 * this._warehouse.width;
                this._warehouse.pivotY = 0.5 * this._warehouse.height;
                this.addChild(this._warehouse);
            }
            this.showLayer();
            this._warehouse.scene.close_btn.on(Laya.Event.CLICK, this, this.hideLayer);
            this._warehouse.scene.item_all.on(Laya.Event.CLICK, this, function () {
                if (this._type != 'all') {
                    this.switchItem('all');
                    this.initWarehouseGoodList();
                }
            }.bind(this));
            this._warehouse.scene.item_crops.on(Laya.Event.CLICK, this, function () {
                if (this._type != 'crops') {
                    this.switchItem('crops');
                    this.initWarehouseGoodList();
                }
            }.bind(this));
            this._warehouse.scene.item_goods.on(Laya.Event.CLICK, this, function () {
                if (this._type != 'goods') {
                    this.switchItem('goods');
                    this.initWarehouseGoodList();
                }
            }.bind(this));
            this._warehouse.scene.item_building.on(Laya.Event.CLICK, this, function () {
                if (this._type != 'building') {
                    this.switchItem('building');
                    this.initWarehouseGoodList();
                }
            }.bind(this));
            this.switchItem('all');
            this.store_info();
        }
        initWarehouseInfo() {
            var data = dataGlobal.getInstance().warehouseInfo;
            console.log("设置仓库的基本信息", data);
            return;
            this._warehouse.scene.good_num.text = '容量：' + data.num2 + '/' + data.num;
            var store_info = dataJson.getInstance().GET_SYS_STORE_INFO();
            if (store_info[Math.floor(data.grade) + 1]) {
                this._warehouse.scene.upgrade_btn.visible = true;
                this.setUpdrageDiv();
            }
            else {
                this._warehouse.scene.upgrade_btn.visible = false;
            }
        }
        setUpdrageDiv() {
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var data = dataGlobal.getInstance().warehouseInfo;
            this._warehouse.scene.upgrade_btn.off(Laya.Event.CLICK, this, this.showGoldTip);
            if (dataJson.getInstance().GET_SYS_STORE_INFO()[Math.floor(data.grade) + 1]) {
                var next_grade = dataJson.getInstance().GET_SYS_STORE_INFO()[Math.floor(data.grade) + 1];
                var tools_list = next_grade.good[0].tools;
                var confirm_fun;
                this._warehouse.scene.upgrade_btn.on(Laya.Event.CLICK, this, this.showUpgradeWarehouse, [tools_list]);
            }
        }
        showUpgradeWarehouse(tools_list) {
            warehouseController.getInstance().showUpgradeWarehouse(tools_list);
        }
        showGoldTip(title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun) {
            tipController.getInstance();
            Laya.stage.event(GAMEEVENT.GOLDTIP, [title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun]);
        }
        store_info() {
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "store_info",
                'm': "store",
                'd': {},
                'code': 1
            };
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
        }
        initWarehouseGoodList() {
            var data = dataGlobal.getInstance().userGoodInfo;
            this._good_list = this._warehouse.scene.good_list;
            this._good_list.dataSource = [];
            var _dataSource = [];
            if (data) {
                var isAdd = false;
                for (var i in data) {
                    var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];
                    if (this._type == 'all') {
                        isAdd = true;
                    }
                    else if (this._type == 'crops' && good_info.type == 6) {
                        isAdd = true;
                    }
                    else if (this._type == 'goods' && good_info.type == 5) {
                        isAdd = true;
                    }
                    else if (this._type == 'building' && good_info.type == 4) {
                        isAdd = true;
                    }
                    if (isAdd && Math.floor(data[i].num) > 0) {
                        this.creator_good_item(data[i].id, data[i].num);
                    }
                    isAdd = false;
                }
            }
            this._good_list.selectEnable = true;
            this._good_list.renderHandler = new Laya.Handler(this, this.itemSelectHandler, [data[i].id], false);
        }
        itemSelectHandler(id, cell, index) {
            cell.on(Laya.Event.CLICK, this, this.clickItem, [cell, index]);
        }
        clickItem(cell) {
            this.showSellTip(cell.dataSource.id);
        }
        creator_good_item(id, num) {
            var data = dataGlobal.getInstance().warehouseInfo;
            var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[id];
            let index = good_info.pic.lastIndexOf("/");
            var _skin = good_info.pic.substring(index + 1, good_info.pic.length);
            var isNum = num - Math.floor(data.num3);
            if (isNum > 0) {
                var good_item = {
                    gnum: {
                        text: data.num3
                    },
                    gicon: {
                        skin: "main/" + _skin + ".png",
                        width: 145,
                        height: 145
                    },
                    id: id
                };
                this._good_list.addItem(good_item);
                console.log(this._good_list.cells.length);
                console.log(good_item.gicon);
                if (this._good_list.cells.length >= 16) {
                    this._good_list.vScrollBarSkin = '';
                }
                this._good_list.visible = true;
                this.creator_good_item(id, isNum);
            }
            else {
                var good_item = {
                    gnum: {
                        text: num,
                    },
                    gicon: {
                        skin: "main/" + _skin + ".png",
                        width: 145,
                        height: 145
                    },
                    id: id
                };
                this._good_list.addItem(good_item);
                console.log(this._good_list.cells.length);
                console.log(good_item.gicon);
                if (this._good_list.cells.length >= 16) {
                    this._good_list.vScrollBarSkin = '';
                }
                this._good_list.visible = true;
            }
        }
        switchItem(str) {
            this._type = str;
            this._warehouse.scene.item_all.skin = "warehouse/Tab 1.png";
            this._warehouse.scene.item_crops.skin = "warehouse/Tab 1.png";
            this._warehouse.scene.item_goods.skin = "warehouse/Tab 1.png";
            this._warehouse.scene.item_building.skin = "warehouse/Tab 1.png";
            this._warehouse.scene.item_all.labelColors = '#fff';
            if (this._type == 'all') {
                this._warehouse.scene.item_all.skin = 'warehouse/Tab 2.png';
                this._warehouse.scene.item_all.labelColors = '#7D4815';
            }
            else if (this._type == 'crops') {
                this._warehouse.scene.item_crops.skin = 'warehouse/Tab 2.png';
            }
            else if (this._type == 'goods') {
                this._warehouse.scene.item_goods.skin = 'warehouse/Tab 2.png';
            }
            else if (this._type == 'building') {
                this._warehouse.scene.item_building.skin = 'warehouse/Tab 2.png';
            }
        }
        warehouseUpgrade() {
            var data = dataGlobal.getInstance().warehouseInfo;
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "store_up_gread",
                'm': "store",
                'd': {
                    'store_id': data.store_id
                },
                'code': 1
            };
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
        }
        showSellTip(id) {
            warehouseController.getInstance().showSellTip(id);
        }
    }

    class warehouseSellTip extends baseTips {
        constructor() {
            super();
        }
        showSellTip(id) {
            this._id = id;
            this._sellTip = new ui.warehouse.sell_tipUI();
            this._sellTip.pivotX = 0.5 * this._sellTip.width;
            this._sellTip.pivotY = 0.5 * this._sellTip.height;
            this.addChild(this._sellTip);
            this.showLayer();
            this._sellTip.scene.jian_btn.on(Laya.Event.CLICK, this, this.setGoodNum, [-1]);
            this._sellTip.scene.jia_btn.on(Laya.Event.CLICK, this, this.setGoodNum, [1]);
            this._sellTip.scene.close_btn.on(Laya.Event.CLICK, this, this.closeSellTip);
            this._sellTip.scene.sell_btn.on(Laya.Event.CLICK, this, this.storeGoodDel);
            this.initGoodInfo();
        }
        closeSellTip() {
            this.hideLayer();
        }
        initGoodInfo() {
            var good_info = dataGlobal.getInstance().userGoodInfo[this._id];
            console.log(good_info);
            this._num = Math.floor((Math.floor(good_info.num) / 2)) < 1 ? 1 : Math.floor((Math.floor(good_info.num) / 2));
            this._sellTip.scene.tot_num.text = 'X' + this._num;
            this._good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[this._id];
            let index = this._good_info.pic.lastIndexOf("/");
            var _skin = this._good_info.pic.substring(index + 1, this._good_info.pic.length);
            this._sellTip.scene.gicon.skin = "main/" + _skin + ".png";
            this._sellTip.scene.gdescribe.text = this._good_info.info;
            this._sellTip.scene.tot_price.text = Math.floor(this._good_info.num) * Math.floor(this._num) + '';
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
            this._sellTip.scene.tot_num.text = 'X' + this._num;
            this._sellTip.scene.tot_price.text = Math.floor(this._good_info.num) * Math.floor(this._num) + '';
        }
        storeGoodDel() {
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "store_good_del",
                'm': "store",
                'd': {
                    'good_id': this._id,
                    'num': this._num
                },
                'code': 1
            };
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
            this.closeSellTip();
        }
    }

    class upgradeWarehouse extends baseTips {
        constructor() {
            super();
        }
        showUpgradeTip(tools_list) {
            this._tools_list = tools_list;
            this._upgradeTip = new ui.warehouse.warehouseUpgradeUI();
            this._upgradeTip.pivotX = 0.5 * this._upgradeTip.width;
            this._upgradeTip.pivotY = 0.5 * this._upgradeTip.height;
            this.addChild(this._upgradeTip);
            this._upgradeTip.scene.close_btn.on(Laya.Event.CLICK, this, this.closeTip);
            this.showLayer();
            this.initInfo();
        }
        closeTip() {
            this.hideLayer();
        }
        initInfo() {
            var grade = dataGlobal.getInstance();
            var _info = dataGlobal.getInstance().warehouseInfo;
            this._upgradeTip.scene.outsider.getChildByName('upgrade_num').text = '仓库容量 +23';
            this._item_1 = this._upgradeTip.scene.outsider.getChildByName("buildings_item_1");
            this._item_2 = this._upgradeTip.scene.outsider.getChildByName("buildings_item_2");
            this._item_3 = this._upgradeTip.scene.outsider.getChildByName("buildings_item_3");
            this._item_1.getChildByName("item_checked").visible = false;
            this._item_2.getChildByName("item_checked").visible = false;
            this._item_3.getChildByName("item_checked").visible = false;
            for (var i in this._tools_list) {
                this.initItem(i, this._tools_list[i]);
            }
        }
        initItem(index, itemObj) {
            if (index == 0) {
                this._item_1.getChildByName('item_num').text = '0/' + itemObj.num;
                this._item_1.getChildByName('item_icon').skin = "warehouse/" + itemObj.id + '.png';
                this._item_1.getChildByName('item_btn').on(Laya.Event.CLICK, this, this.buyBuildings);
            }
            if (index == 1) {
                this._item_2.getChildByName('item_num').text = '0/' + itemObj.num;
                this._item_2.getChildByName('item_icon').skin = "warehouse/" + itemObj.id + '.png';
            }
            if (index == 2) {
                this._item_3.getChildByName('item_num').text = '0/' + itemObj.num;
                this._item_3.getChildByName('item_icon').skin = "warehouse/" + itemObj.id + '.png';
            }
        }
        buyBuildings() {
        }
        warehouseUpgrade() {
            console.log("仓库升级");
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
        showUpgradeTip(tools_list) {
            this._warehouseUpgradeCom = new upgradeWarehouse;
            this._warehouseUpgradeCom.showUpgradeTip(tools_list);
        }
    }

    class warehouseModel {
        constructor() {
        }
    }

    class infoModel {
        constructor() {
        }
    }

    class factoryModel {
        constructor() {
            this._mf_id = '';
            this._is_open = false;
        }
        setTimeout() {
            this._timer = new Laya.Timer();
            this._timer.loop(1000, this, this.timerFun.bind(this));
        }
        timerFun() {
            var data = dataGlobal.getInstance().factory;
            for (var i in data) {
                if (data[i].being_goods && data[i].being_goods.id) {
                    if (data[i].being_goods.t > 0) {
                        data[i].being_goods.t--;
                        if (this._mf_id == i) {
                            factoryController.getInstance().initFormatSeconds();
                        }
                        if (data[i].being_goods.t == 0) {
                            this.factoryGoodGet(data[i].mf_id);
                        }
                    }
                }
            }
        }
        factoryGoodGet(id) {
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "factory_good_get",
                'm': "gzhq_factory",
                'd': {
                    'mf_id': id
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
        }
        getCurrentFactory() {
            return this._mf_id;
        }
    }

    class factoryInfo extends baseTips {
        constructor() {
            super();
            this.thisProduction = {};
        }
        onShowFactoryInfo(id) {
            factoryController.getInstance().model._mf_id = id;
            this._factoryInfo = new ui.factory.baseFactoryUI;
            this._factoryInfo.name = 'factoryInfo';
            this._factoryInfo.pivot(this._factoryInfo.width / 2, this._factoryInfo.height / 2);
            this.addChild(this._factoryInfo);
            this.showLayer();
            this.initFactoryInfo(id);
            this._factoryInfo.scene.close_btn.on(Laya.Event.CLICK, this, this.closeFactoryInfo);
        }
        closeFactoryInfo() {
            factoryController.getInstance().model._mf_id = '';
            this.hideLayer();
        }
        initFactoryInfo(id) {
            this._id = id;
            this.initSetFactoryInfo(id);
            this.initProduction(id);
            this.initProductTypeBtn(id);
            this.initProductionGood(id);
            this.initProductSuccess(id);
        }
        initSetFactoryInfo(id) {
            var data = dataGlobal.getInstance().factory[id];
            var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade];
            var factory_name = this._factoryInfo.scene.getChildByName('factory_name');
            var factory_level = this._factoryInfo.scene.getChildByName('factory_level');
            factory_level.text = data.grade + "级";
            factory_name.text = factory_info.name;
            console.log('工厂基本信息', data, factory_info, factory_name, factory_name, factory_level);
        }
        initProduction(id) {
            this._waitingList = this._factoryInfo.scene.waiting_list;
            var data = dataGlobal.getInstance().factory[id];
            var myData = data.queue_goods;
            this._waitingList.dataSource = [];
            for (var i in myData) {
                var _waitItem = {
                    id: i,
                    product_icon: {
                        skin: "",
                        visible: true
                    },
                    lock_div: {
                        visible: false
                    }
                };
                if (myData[i].lock == '1') {
                    console.log('已解锁', i);
                    _waitItem.lock_div.visible = false;
                    if (myData[i].product) {
                        var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[myData[i].product.id];
                        let index = good_info.pic.lastIndexOf("/");
                        var _skin = good_info.pic.substring(index + 1, good_info.pic.length);
                        _waitItem.product_icon.skin = 'factory/' + _skin + '.png';
                        _waitItem.product_icon.visible = true;
                    }
                }
                else {
                    _waitItem.product_icon.visible = false;
                    _waitItem.lock_div.visible = true;
                }
                this._waitingList.addItem(_waitItem);
            }
            this._waitingList.renderHandler = new Laya.Handler(this, this.initWaitingListItem, [id]);
            console.log(this._waitingList);
        }
        initWaitingListItem(factoryId, cell, index) {
            var data = dataGlobal.getInstance().factory[factoryId];
            var itemData = data.queue_goods[cell.dataSource.id];
            if (itemData.lock == '1') {
                if (itemData.product) {
                }
                else {
                }
            }
            else {
                var lock_price = cell.getChildByName('lock_div').getChildByName('price');
                lock_price.text = itemData.price;
                cell.on(Laya.Event.CLICK, this, this.lockSeat, [itemData, cell.getChildByName('bg').skin]);
            }
        }
        lockSeat(data, _skin) {
            tipController.getInstance();
            var _info = {
                "skin": _skin,
                "price": data.price
            };
            var confirm_fun = function () {
                this.close();
            };
            Laya.stage.event(GAMEEVENT.BASETIPS, ["开启卡槽", '确认花费' + data.price + '钻石开启队列', _info, confirm_fun]);
        }
        productTipsShow(rawMaterialInfo, cell, index) {
            console.log('展示生产时间信息', rawMaterialInfo, cell);
            var source = cell.dataSource;
            if (source.making_tips.visible) {
                return;
            }
            var product_name = cell.getChildByName('making_tips').getChildByName("product_name");
            var product_time = cell.getChildByName('making_tips').getChildByName("product_time");
            var _materialList = cell.getChildByName('making_tips').getChildByName("tips_list");
            this._initMaterialList(_materialList, rawMaterialInfo);
            product_name.text = rawMaterialInfo.name;
            product_time.text = rawMaterialInfo.t;
            source.making_tips.visible = true;
            this._productList.setItem(index, source);
            this._moveY = cell.y;
            this._moveX = cell.x;
            cell.startDrag(null, false, 100);
        }
        _initMaterialList(_materialList, rawMaterialInfo) {
            _materialList.dataSource = [];
            var _goods = rawMaterialInfo.good;
            for (var i in _goods) {
                var _item = {
                    icon: {
                        skin: ""
                    },
                    num: {
                        text: "",
                        color: "#cc8250"
                    }
                };
                if (dataGlobal.getInstance().userGoodInfo[_goods[i].id]) {
                    var get_num = dataGlobal.getInstance().userGoodInfo[_goods[i].id].num;
                    _item.num.text = get_num + "/" + _goods[i].num;
                    if (Number(get_num) < Number(_goods[i].num)) {
                        _item.num.color = '#d63426';
                    }
                    else {
                        _item.num.color = '#51af33';
                    }
                }
                else {
                    _item.num.text = "0" + "/" + _goods[i].num;
                    _item.num.color = '#d63426';
                }
                _materialList.addItem(_item);
            }
        }
        productTipsClose(rawMaterialInfo, cell, index) {
            console.log('关闭生产时间信息', rawMaterialInfo);
            var source = cell.dataSource;
            source.making_tips.visible = false;
            this._productList.setItem(index, source);
            var _curX = cell.x + cell.parent.parent.x;
            var _curY = cell.y + cell.parent.parent.y;
            var _waitBoxRightX = this._waitingList.x;
            var _waitBoxLeftX = this._waitingList.x + this._waitingList.width;
            var _waitBoxTopY = this._waitingList.y;
            var _waitBoxBottomY = this._waitingList.y + this._waitingList.height;
            if (_curX < _waitBoxLeftX && _curX > _waitBoxRightX) {
                if (_curY < _waitBoxBottomY && _curY > _waitBoxTopY) {
                    this.joinProductWaitQueue(rawMaterialInfo, cell);
                    return;
                }
            }
            var _makingBoxRightX = this._factoryInfo.scene.making.x;
            var _makingBoxLeftX = this._factoryInfo.scene.making.x + this._factoryInfo.scene.making.width;
            var _makingBoxTopY = this._factoryInfo.scene.making.y;
            var _makingBoxBottomY = this._factoryInfo.scene.making.y + this._factoryInfo.scene.making.height;
            if (_curX < _makingBoxLeftX && _curX > _makingBoxRightX) {
                if (_curY < _makingBoxBottomY && _curY > _makingBoxTopY) {
                    this.joinProductWaitQueue(rawMaterialInfo, cell);
                    return;
                }
            }
            this.backToBottom(cell);
        }
        initProductSuccess(id) {
            var data = dataGlobal.getInstance().factory[id];
            var data = data.succ_goods;
            this._successList = this._factoryInfo.scene.getChildByName('success_list');
            this._successList.dataSource = [];
            for (var i in data) {
                var _item = {
                    id: data[i].id,
                    icon: {
                        skin: ""
                    }
                };
                var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];
                let index = good_info.pic2.lastIndexOf("/");
                var _skin = good_info.pic2.substring(index + 1, good_info.pic.length);
                _item.icon.skin = 'factory/' + _skin + '.png';
                this._successList.addItem(_item);
            }
            this._successList.renderHandler = new Laya.Handler(this, this.successItemBindEvent);
        }
        successItemBindEvent(cell, index) {
            cell.on(Laya.Event.CLICK, this, this.harvestProduct, [cell, index]);
        }
        harvestProduct(cell, index) {
            var id = cell.dataSource.id;
            Laya.stage.event(NETWORKEVENT.FACTORYGOODSAVEBAK);
        }
        joinProductWaitQueue(info, cell) {
            var _goods = info.good;
            var _flag = true;
            for (var i in _goods) {
                if (dataGlobal.getInstance().userGoodInfo[_goods[i].id]) {
                    var get_num = dataGlobal.getInstance().userGoodInfo[_goods[i].id].num;
                    if (Number(get_num) > Number(_goods[i].num) || Number(get_num) == Number(_goods[i].num)) {
                        _flag = false;
                    }
                }
                else {
                    _flag = true;
                }
            }
            if (!_flag) {
                console.log(factoryController.getInstance().model._mf_id, '工厂ID');
                var factoryInfo = dataGlobal.getInstance().factory[factoryController.getInstance().model._mf_id];
                var myData = factoryInfo.queue_goods;
                for (var i in myData) {
                    if (!myData[i].product) {
                        Laya.stage.event(NETWORKEVENT.FACTORYADDWAITING);
                        this.backToBottom(cell);
                        console.log('有空位', info.id);
                        return;
                    }
                }
            }
            else {
                console.log("不可以");
            }
        }
        backToBottom(cell) {
            cell.x = this._moveX;
            cell.y = this._moveY;
        }
        initProductionGood(id) {
            var data = dataGlobal.getInstance().factory[id];
            var myData = data.being_goods;
            var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade];
            var pro_tool = this._factoryInfo.scene.making;
            var good_icon = pro_tool.getChildByName('making_icon');
            var time_pro = pro_tool.getChildByName('making_time');
            var _speedUpMaking = this._factoryInfo.scene.get_btn;
            _speedUpMaking.visible = false;
            if (myData && myData.id) {
                var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[myData.id];
                var factory_good_info = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id][myData.id];
                let index = good_info.pic2.lastIndexOf("/");
                var _skin = good_info.pic2.substring(index + 1, good_info.pic.length);
                good_icon.skin = 'factory/' + _skin + '.png';
                good_icon.visible = true;
                _speedUpMaking.visible = true;
                _speedUpMaking.getChildByName("btn_name").text = good_info.num2;
                _speedUpMaking.on(Laya.Event.CLICK, this, this.speedUpMaking, [good_info.id]);
                console.log(factory_good_info);
                console.log(good_info);
                var ani_size = new Laya.TimeLine();
                ani_size.addLabel("turnUp", 0).to(good_icon, { scaleX: 1.1, scaleY: 1.1 }, 1000, null, 0)
                    .addLabel("turnDown", 0).to(good_icon, { scaleX: 0.9, scaleY: 0.9 }, 1000, null, 0)
                    .addLabel("turnDown", 0).to(good_icon, { scaleX: 1.1, scaleY: 1.1 }, 1000, null, 0)
                    .addLabel("turnDown", 0).to(good_icon, { scaleX: 1, scaleY: 1 }, 1000, null, 0);
                ani_size.play(0, true);
                var gear_top = this._factoryInfo.scene.gear_top;
                var gear_bottom = this._factoryInfo.scene.gear_bottom;
                var gear_scr = new Laya.TimeLine();
                gear_scr.addLabel("turnUp", 0).to(gear_top, { rotation: -360 }, 20000, null, 0);
                gear_scr.play(0, true);
                var gear_scr_bottom = new Laya.TimeLine();
                gear_scr_bottom.addLabel("turnUp", 0).to(gear_bottom, { rotation: 360 }, 10000, null, 0);
                gear_scr_bottom.play(0, true);
                time_pro.value = Math.floor(myData.t) / (Math.floor(factory_good_info.t) / (Math.floor(factory_good_info.speed) + Math.floor(factory_info.speed))) * 100;
            }
            else {
                good_icon.visible = false;
                time_pro.value = 0;
            }
        }
        speedUpMaking(id) {
            Laya.stage.event(NETWORKEVENT.FACTORYPRODUCTSPEEDUP);
        }
        factory_open_seat_num(id, num) {
            tipController.getInstance();
            var data = dataGlobal.getInstance().factory[id];
            if (num == 2 && data.open_seat_num == 1) {
                Laya.stage.event(GAMEEVENT.TXTTIP, ['请先购买第二个生产队列']);
                return;
            }
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id];
            var user_factory_level = dataGlobal.getInstance().factory[id].grade;
            if (num == 1) {
                var gold = factory_info[user_factory_level].buy_num;
            }
            else if (num == 2) {
                var gold = factory_info[user_factory_level].buy_num2;
            }
            if (Math.floor(have_gold) < Math.floor(gold)) {
                Laya.stage.event(GAMEEVENT.TXTTIP, ['宝石不足，无法购买！']);
                return;
            }
            Laya.stage.event(GAMEEVENT.TIPSKUAN, ['确定消耗' + gold + '宝石购买额外队列？', '确定', '取消', function () {
                    this.factory_open_seat_num_act(id, num);
                    tipController.getInstance().close();
                }.bind(this), function () {
                    tipController.getInstance().close();
                }]);
        }
        factory_open_seat_num_act(id, num) {
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "factory_open_seat_num",
                'm': "gzhq_factory",
                'd': {
                    'mf_id': id,
                    'num': num
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
        }
        getUserGood(id) {
            var data = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id];
            var good_arr = [];
            for (var i in data) {
                var good_data = data[i].good;
                good_arr.push(data[i].id);
                for (var q in good_data) {
                    good_arr.push(good_data[q].id);
                }
            }
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "send_good",
                'm': "init",
                'd': {
                    'good_id': good_arr
                },
                'code': 1
            };
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
        }
        initProductionGoodList() {
            return;
            var science_list = this._factoryInfo.scene.bottom_div.getChildByName('science_list');
            science_list.dataSource = [];
            var id = this._id;
            var data = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id];
            var level = dataGlobal.getInstance().userInfo.grade;
            var user_good_info = dataGlobal.getInstance().userGoodInfo;
            var _index = -1;
            for (var i in data) {
                var isshow = true;
                if ((Math.floor(level) + 1) < Math.floor(data[i].grade2)) {
                    continue;
                }
                var science = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];
                let index = science.pic.lastIndexOf("/");
                var _skin = science.pic.substring(index + 1, science.pic.length);
                var factoryGoodsItem = {
                    name: 'factoryGoodsItem_' + data[i].id,
                    id: 'factoryGoodsItem_' + data[i].id,
                    good_pic: {
                        skin: "factory/" + _skin + '.png'
                    },
                    good_num: {
                        text: user_good_info[data[i].id].num
                    },
                    good_name: {
                        text: science.name
                    },
                    good_lock_div: {
                        visible: true
                    },
                    good_info: {
                        visible: true
                    }
                };
                _index++;
                science_list.addItem(factoryGoodsItem);
                science_list.visible = true;
                science_list.hScrollBarSkin = "";
                if (Math.floor(level) >= Math.floor(data[i].grade2)) {
                    factoryGoodsItem.good_info.visible = true;
                    factoryGoodsItem.good_lock_div.visible = false;
                    var goods_list = data[i].good;
                    var goods_num = 1;
                    var isMake = true;
                    for (var q in goods_list) {
                        var material_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[goods_list[q].id];
                        if (science_list.getItem(_index)) {
                            if (science_list.getItem(_index).name == factoryGoodsItem.name) {
                                var factoryGoodsCell = science_list.getCell(_index);
                                var material_num = factoryGoodsCell.getChildByName('good_info').getChildByName('good' + goods_num + '_num');
                                var material_icon = factoryGoodsCell.getChildByName('good_info').getChildByName('good' + goods_num + '_icon');
                                let index = material_info.pic.lastIndexOf("/");
                                var _skin = material_info.pic.substring(index + 1, material_info.pic.length);
                                material_icon.skin = 'main/' + _skin + '.png';
                                material_icon.visible = true;
                                var user_num = user_good_info[goods_list[q].id].num;
                                if (Math.floor(user_num) >= Math.floor(goods_list[q].num)) {
                                    material_num.color = '#A2613A';
                                }
                                else {
                                    material_num.color = '#F8393B';
                                    isMake = false;
                                }
                                material_num.text = goods_list[q].num;
                                material_num.visible = true;
                                goods_num++;
                            }
                        }
                    }
                    if (isMake) {
                        factoryGoodsCell.off(Laya.Event.CLICK, this, this.factoryAct);
                        factoryGoodsCell.on(Laya.Event.CLICK, this, this.factoryAct, [data[i].id]);
                    }
                    else {
                        factoryGoodsCell.off(Laya.Event.CLICK, this, this.showFactoryMake);
                        factoryGoodsCell.on(Laya.Event.CLICK, this, this.showFactoryMake, [id, data[i].id]);
                    }
                }
                else {
                    if (isshow) {
                        isshow = false;
                        factoryGoodsItem.good_info.visible = false;
                        factoryGoodsItem.good_lock_div.visible = true;
                        var good_lock_info = factoryGoodsCell.getChildByName('good_lock_div').getChildByName('good_lock_info');
                        good_lock_info.text = data[i].grade2 + '级可解锁';
                    }
                }
            }
        }
        factoryAct(id) {
            var factory_id = factoryController.getInstance().model._mf_id;
            var factory_info = dataGlobal.getInstance().factory[factory_id];
            if (factory_info.open_seat_num <= factory_info.queue_goods.length) {
                Laya.stage.event(GAMEEVENT.TXTTIP, ['没有足够商品队列']);
                return;
            }
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "factory_act",
                'm': "gzhq_factory",
                'd': {
                    'mf_id': this._id,
                    'id': id
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
        }
        showFactoryMake(mf_id, id) {
            factoryController.getInstance().showFactoryMake(mf_id, id);
        }
        upGradeBtn(id) {
            var upgare_btn = this._factoryInfo.scene.bottom_div.getChildAt(4);
            var data = dataGlobal.getInstance().factory[id];
            var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id];
            if (data.grade >= factory_info.lenght) {
                upgare_btn.visible = false;
            }
            else {
                upgare_btn.off(Laya.Event.CLICK, this, this.showFactoryUpgrade);
                upgare_btn.on(Laya.Event.CLICK, this, this.showFactoryUpgrade, [id]);
                upgare_btn.visible = true;
            }
        }
        showFactoryUpgrade(id) {
            factoryController.getInstance().showFactoryUpgrade(id);
        }
        initFormatSeconds() {
            var data = dataGlobal.getInstance().factory[this._id];
            var factory_seed = dataJson.getInstance().GET_SYS_FACTORY_INFO()[this._id][data.grade].speed;
            if (data.being_goods && data.being_goods.id) {
                var flower = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[this._id][data.being_goods.id];
                var time_pro = this._factoryInfo.scene.making.getChildByName('making_time');
                time_pro.value = Math.floor(data.being_goods.t) / (Math.floor(flower.t));
            }
        }
        initProductTypeBtn(id) {
            this._productList = this._factoryInfo.scene.getChildByName('making_list');
            var data = dataGlobal.getInstance().factory[id];
            var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id][data.grade];
            var production_goods = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[id];
            this._productList.dataSource = [];
            for (var i in production_goods) {
                var _goodItem = {
                    id: i,
                    making_tips: {
                        visible: false
                    },
                    icon: {
                        skin: "",
                        gray: false
                    }
                };
                var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[production_goods[i].id];
                let index = good_info.pic.lastIndexOf("/");
                var _skin = good_info.pic.substring(index + 1, good_info.pic.length);
                _goodItem.icon.skin = 'factory/' + _skin + '.png';
                console.log(factory_info.grade);
                if (factory_info.grade < production_goods[i].grade2) {
                    _goodItem.icon.gray = true;
                }
                this._productList.addItem(_goodItem);
            }
            this._productList.renderHandler = new Laya.Handler(this, this.initProductList, [production_goods, id]);
        }
        initProductList(productionInfo, factoryId, cell, index) {
            var _id = cell.dataSource.id;
            var production_goods = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[factoryId][_id];
            var rawMaterialInfo = production_goods;
            var factoryGrade = dataGlobal.getInstance().factory[factoryId].grade;
            if (factoryGrade < production_goods.grade2) {
                return;
            }
            cell.on(Laya.Event.MOUSE_DOWN, this, this.productTipsShow, [rawMaterialInfo, cell, index]);
            cell.on(Laya.Event.MOUSE_UP, this, this.productTipsClose, [rawMaterialInfo, cell, index]);
        }
    }

    class factoryIndex extends baseTips {
        constructor() {
            super();
            this.downMouseY = 0;
            this.offsetY = 0;
            this.maxY = 0;
            this.minY = -6312;
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        }
        mouseDown() {
            this.downMouseY = Laya.stage.mouseY;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseMoveOff);
        }
        mouseMove() {
            let y = this.offsetY - (Laya.stage.mouseY - this.downMouseY);
            this.moveMap(y);
        }
        mouseUp() {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        }
        mouseMoveOff() {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        }
        moveMap(y) {
            this._factory.scene.bg.y = this._factory.scene.bg.y - y / 10;
            if (this._factory.scene.bg.y < this.minY) {
                this._factory.scene.bg.y = this.minY;
            }
            if (this._factory.scene.bg.y > this.maxY) {
                this._factory.scene.bg.y = this.maxY;
            }
        }
        onShow(type) {
            this._factory = new ui.factory.factoryUI();
            this._factory.name = 'orderIndex';
            this._factory.pivot(this._factory.width / 2, this._factory.height / 2);
            this.addChild(this._factory);
            this.showLayer();
            this._factory.scene.close_btn.on(Laya.Event.CLICK, this, this.closeScene);
            this.get_factory_info();
        }
        closeScene() {
            this.hideLayer();
        }
        isOpenFactoryInfo() {
            var id = factoryController.getInstance().model._mf_id;
            var is_open = factoryController.getInstance().model._is_open;
            if (id && is_open) {
                var factoryInfo = dataGlobal.getInstance().factory;
                if (factoryInfo[id]) {
                    this.onShowFactoryInfo(id);
                }
                else {
                    Laya.stage.event(GAMEEVENT.TXTTIP, ['请先建造该工厂']);
                }
            }
            factoryController.getInstance().model._is_open = false;
        }
        get_factory_info() {
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "send_factory",
                'm': "init",
                'd': {},
                'code': 1
            };
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
        }
        showFactory() {
            this.isOpenFactoryInfo();
            var myData = dataGlobal.getInstance().factory;
            var data = dataJson.getInstance().GET_SYS_FACTORY_INFO();
            var level = dataGlobal.getInstance().userInfo.grade;
            var num = 1;
            for (var id in data) {
                var factory_item = this._factory.scene.factory_div.cells[num - 1];
                var factory_div = factory_item.getChildByName('open_div');
                var unlock_div = factory_item.getChildByName('unlock_div');
                factory_div.off(Laya.Event.CLICK, this, this.factory_good_save);
                factory_div.off(Laya.Event.CLICK, this, this.onShowFactoryInfo);
                unlock_div.off(Laya.Event.CLICK, this, this.factory_create);
                if (myData[id]) {
                    factory_div.visible = true;
                    unlock_div.visible = false;
                    if (Object.keys(myData[id].being_goods).length == 0) {
                        var ani = new Laya.Animation();
                        ani.loadAtlas("res/atlas/sleep.atlas");
                        ani.interval = 50;
                        ani.index = 1;
                        ani.autoSize = true;
                        ani.scaleX = 2;
                        ani.scaleY = 2;
                        ani.pivotX = ani.width;
                        ani.pivotY = ani.height;
                        ani.play();
                        factory_item.getChildByName('sleep_div').addChild(ani);
                        console.log("创建了", ani);
                    }
                    var factory_level = factory_div.getChildByName('factory_level');
                    factory_level.text = myData[id].grade;
                    var good_list_bg = factory_div.getChildByName('good_list_bg');
                    var good_list = good_list_bg.getChildByName('good_list');
                    var succ_goods_num = myData[id].succ_goods.length;
                    if (succ_goods_num > 0) {
                        var good_data = dataJson.getInstance().GET_SYS_FACTORY_GOOD();
                        if (succ_goods_num > 3) {
                            good_list_bg.width = succ_goods_num * 110 + (succ_goods_num + 1) * 10;
                        }
                        good_list.width = succ_goods_num * 110 + (succ_goods_num + 1) * 10;
                        good_list_bg.visible = true;
                        good_list_bg.x = 0;
                        var popfloat = new Laya.TimeLine();
                        popfloat.addLabel("turnUp", 0).to(good_list_bg, { y: -130 }, 1000, null, 0)
                            .addLabel("turnDown", 0).to(good_list_bg, { y: -100 }, 1000, null, 0);
                        popfloat.play(0, true);
                        good_list.x = good_list_bg.width / 2 + 20;
                        good_list.visible = true;
                        var list_data = myData[id].succ_goods;
                        var _dataSource = [];
                        good_list.dataSource = [];
                        for (var q in list_data) {
                            var goodInfo = good_data[id][list_data[q].id];
                            goodInfo = dataJson.getInstance().GET_SYS_GOOD_INFO()[goodInfo.id];
                            let index = goodInfo.pic.lastIndexOf("/");
                            var _skin = goodInfo.pic.substring(index + 1, goodInfo.pic.length);
                            var imgLoader = {
                                items: {
                                    skin: "factory/" + _skin + '.png'
                                }
                            };
                            _dataSource.push(imgLoader);
                            good_list.dataSource = _dataSource;
                        }
                        factory_div.on(Laya.Event.CLICK, this, this.onShowFactoryInfo, [id]);
                    }
                    else {
                        good_list_bg.visible = false;
                        good_list.visible = false;
                        factory_div.on(Laya.Event.CLICK, this, this.onShowFactoryInfo, [id]);
                    }
                }
                else {
                    factory_div.visible = false;
                    unlock_div.visible = true;
                    var gold = unlock_div.getChildByName('gold');
                    gold.text = data[id][1].unlocknum;
                    var factory_name = unlock_div.getChildByName('factory_name');
                    factory_name.text = data[id][1].name;
                    var factory_info = unlock_div.getChildByName('factory_info');
                    var xian = unlock_div.getChildByName('xian');
                    var tishi_icon = unlock_div.getChildByName('tishi_icon');
                    if (Math.floor(level) >= Math.floor(data[id][1].grade2)) {
                        factory_info.text = '点击建造';
                        xian.skin = 'factory/pic_xian2.png';
                        tishi_icon.visible = true;
                        unlock_div.touchable = true;
                        unlock_div.on(Laya.Event.CLICK, this, this.factory_create, [id]);
                    }
                    else {
                        factory_info.text = data[id][1].grade2 + '级可解锁';
                        xian.skin = 'factory/pic_xian1.png';
                        tishi_icon.visible = false;
                        unlock_div.touchable = true;
                        unlock_div.on(Laya.Event.CLICK, this, this.factory_create, [id]);
                    }
                }
                num++;
            }
            this._factory.scene.factory_div.visible = true;
        }
        factory_create(id) {
            this.factory_create_act(id);
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var level = dataGlobal.getInstance().userInfo.grade;
            var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id];
            var gold = factory_info[1].unlocknum;
            var grade2 = factory_info[1].grade2;
            tipController.getInstance();
            if (Math.floor(level) < Math.floor(grade2)) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [grade2 + '级解锁']);
                return;
            }
            if (Math.floor(have_gold) < Math.floor(gold)) {
                Laya.stage.event(GAMEEVENT.TXTTIP, ['宝石不足']);
                return;
            }
        }
        factory_create_act(id) {
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "factory_create",
                'm': "gzhq_factory",
                'd': {
                    'mf_id': id
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
        }
        factory_good_save(id) {
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "factory_good_save",
                'm': "gzhq_factory",
                'd': {
                    'mf_id': id
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
        }
        onShowFactoryInfo(id) {
            factoryController.getInstance().onShowFactoryInfo(id);
        }
    }

    class factoryUpgrade extends baseTips {
        constructor() {
            super();
        }
        showFactoryUpgrade(id) {
            this._factoryUpgrade = new ui.factory.factoryUpgradeUI;
            this._factoryUpgrade.name = 'factoryUpgrade';
            this._factoryUpgrade.pivot(this._factoryUpgrade.width / 2, this._factoryUpgrade.height / 2);
            this.addChild(this._factoryUpgrade);
            this.tweenShow();
            this._id = id;
            this._factoryUpgrade.scene.close_btn.on(Laya.Event.CLICK, this, this.onCliskClose);
            this.initFactoryGradeList();
        }
        onCliskClose() {
            this._factoryUpgrade.scene.close_btn.off(Laya.Event.CLICK, this, this.onCliskClose);
            this.tweenHide();
        }
        initFactoryGradeList() {
            this._isGrade = 0;
            this._gold = 0;
            var data = dataJson.getInstance().GET_SYS_FACTORY_INFO()[this._id];
            var myData = dataGlobal.getInstance().factory[this._id];
            var level = dataGlobal.getInstance().userInfo.grade;
            var upgrad_list = this._factoryUpgrade.scene.getChildByName('upgrad_list');
            var upgrade_icon = this._factoryUpgrade.scene.getChildByName('icon');
            var upgrade_grade = this._factoryUpgrade.scene.getChildByName('grade');
            var upgrad_div = this._factoryUpgrade.scene.getChildByName('upgrad_btn');
            var upgrad_gold = upgrad_div.getChildByName('upgrade_gold');
            upgrad_div.off(Laya.Event.CLICK, this, this.factoryUpGrade);
            var is_grade = true;
            upgrad_list.dataSource = [];
            upgrad_list.vScrollBarSkin = "";
            for (var i in data) {
                if (Math.floor(myData.grade) == Math.floor(data[i].grade)) {
                    upgrade_icon.url = data[i].pic;
                    upgrade_grade.text = '' + myData.grade;
                }
                if (data[i].grade == 1) {
                    continue;
                }
                var factoryUpgradeItem = {
                    this_grade: {
                        text: (Math.floor(data[i].grade) - 1) + ''
                    },
                    next_grade: {
                        text: Math.floor(data[i].grade) + ''
                    },
                    list_icon: {
                        skin: data[i].pic + '.png'
                    },
                    upgrade_time: {
                        text: '-' + data[i].speed + '%'
                    },
                    upgrade_info: {
                        text: '11',
                        color: "",
                        visible: true
                    },
                    kuan_xuan: {
                        visible: false
                    },
                    bg: {
                        skin: ''
                    }
                };
                if (Math.floor(myData.grade) >= Math.floor(data[i].grade)) {
                    factoryUpgradeItem.upgrade_info.text = '已解锁';
                    factoryUpgradeItem.upgrade_info.color = '#EADEC6';
                    factoryUpgradeItem.upgrade_info.visible = true;
                    factoryUpgradeItem.bg.skin = 'factory/pic_kuang4.png';
                }
                else {
                    factoryUpgradeItem.bg.skin = 'factory/pic_kuang5.png';
                    factoryUpgradeItem.upgrade_info.visible = false;
                    if (Math.floor(level) >= Math.floor(data[i].grade2)) {
                        if (is_grade) {
                            factoryUpgradeItem.kuan_xuan.visible = true;
                            is_grade = false;
                            this._isGrade = Math.floor(data[i].grade2);
                            this._gold = Math.floor(data[i].num2);
                            upgrad_gold.text = data[i].num2;
                        }
                    }
                    else {
                        factoryUpgradeItem.upgrade_info.text = data[i].grade2 + '级解锁';
                        factoryUpgradeItem.upgrade_info.color = '#7d4815';
                        factoryUpgradeItem.upgrade_info.visible = true;
                    }
                }
                upgrad_list.addItem(factoryUpgradeItem);
            }
            this.isUpgrade();
        }
        isUpgrade() {
            var upgrad_div = this._factoryUpgrade.scene.getChildByName("upgrad_btn");
            if (this._isGrade > 0) {
                upgrad_div.visible = true;
                upgrad_div.off(Laya.Event.CLICK, this, this.factoryUpGrade);
                upgrad_div.on(Laya.Event.CLICK, this, this.factoryUpGrade);
            }
            else {
                upgrad_div.visible = false;
            }
        }
        factoryUpGrade() {
            var gold = dataGlobal.getInstance().userInfo.have_gold;
            if (Math.floor(gold) < Math.floor(this._gold)) {
                this.onCliskClose();
                Laya.stage.event(GAMEEVENT.TXTTIP, ['宝石不足']);
                return;
            }
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "factory_up_grade",
                'm': "gzhq_factory",
                'd': {
                    'mf_id': this._id
                },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
            Laya.stage.event(NETWORKEVENT.FACTORYUPGRADEBAK);
        }
    }

    class factoryMake extends baseTips {
        constructor() {
            super();
        }
        showFactoryMake(mf_id, id) {
            this._factoryMake = new ui.factory.factoryMakeUI;
            this._factoryMake.name = 'factoryMake';
            this._factoryMake.pivot(this._factoryMake.width / 2, this._factoryMake.height / 2);
            this.addChild(this._factoryMake);
            this.tweenShow();
            this._mf_id = mf_id;
            this._id = id;
            this._close = this._factoryMake.scene.getChildByName('close_btn');
            this._close.on(Laya.Event.CLICK, this, this.onCliskClose);
            this._index = -1;
            this.initGoodList();
            this.initGoodInfo();
        }
        onCliskClose() {
            this._close.off(Laya.Event.CLICK, this, this.onCliskClose);
            this.tweenHide();
        }
        initGoodList() {
            var data = dataJson.getInstance().GET_SYS_FACTORY_GOOD()[this._mf_id][this._id].good;
            var user_good_info = dataGlobal.getInstance().userGoodInfo;
            var num = 1;
            var make_list = this._factoryMake.scene.getChildByName('make_list');
            make_list.dataSource = [];
            for (var i in data) {
                var makeItem = {
                    id: '',
                    good_icon: {
                        skin: ''
                    },
                    gou: {
                        visible: false
                    },
                    num_txt: {
                        text: ""
                    },
                    go_btn: {
                        visible: false
                    },
                    bg: {
                        skin: ""
                    },
                };
                this._index++;
                makeItem.id = this._index + '';
                var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];
                let index = good_info.pic.lastIndexOf("/");
                var _skin = good_info.pic.substring(index + 1, good_info.pic.length);
                makeItem.good_icon.skin = 'main/' + _skin + '.png';
                var user_num = user_good_info[data[i].id].num;
                if (num % 2 == 0) {
                    makeItem.bg.skin = 'factory/pic_kuang4.png';
                }
                else {
                    makeItem.bg.skin = 'factory/pic_kuang5.png';
                }
                if (Math.floor(user_num) >= Math.floor(data[i].num)) {
                    makeItem.gou.visible = true;
                    makeItem.num_txt.text = "" + user_num + "/" + data[i].num + "";
                    makeItem.go_btn.visible = false;
                }
                else {
                    makeItem.gou.visible = false;
                    makeItem.num_txt.text = "" + user_num + "/" + data[i].num + "";
                    makeItem.go_btn.visible = true;
                    make_list.getCell(this._index).getChildByName("go_btn").on(Laya.Event.CLICK, this, this.goClick, [good_info.type]);
                }
                num++;
                make_list.addItem(makeItem);
            }
        }
        initGoodInfo() {
            var pic = dataJson.getInstance().GET_SYS_GOOD_INFO()[this._id].pic2;
            var user_good_info = dataGlobal.getInstance().userGoodInfo;
            var user_num = user_good_info[this._id].num;
            var icon = this._factoryMake.scene.getChildByName('icon');
            let index = pic.lastIndexOf("/");
            var _skin = pic.substring(index + 1, pic.length);
            icon.skin = 'factory/' + _skin + '.png';
            var num = this._factoryMake.scene.getChildByName('num');
            num.text = user_num;
        }
        goClick(type) {
            this.onCliskClose();
            factoryController.getInstance().closeFactoryInfo();
            if (type == 5) {
                infoController.getInstance().showBottonDiv('factory');
            }
            else if (type == 6) {
                infoController.getInstance().showBottonDiv('farm');
                farmController.getInstance().onShow(1);
            }
        }
    }

    class factoryView {
        constructor() {
        }
        onShow(type) {
            if (this._factoryCom == null) {
                this._factoryCom = new factoryIndex;
            }
            this._factoryCom.onShow(type);
        }
        showFactory() {
            this._factoryCom.showFactory();
        }
        onShowFactoryInfo(id) {
            this._factoryInfoCom = new factoryInfo;
            this._factoryInfoCom.onShowFactoryInfo(id);
        }
        initProduction(id) {
            if (this._factoryInfoCom) {
                this._factoryInfoCom.initProduction(id);
            }
        }
        initProductionGoodList() {
            if (this._factoryInfoCom) {
                if (factoryController.getInstance().model._mf_id) {
                    this._factoryInfoCom.initProductionGoodList();
                }
            }
        }
        initFactoryInfo(id) {
            if (this._factoryInfoCom) {
                this._factoryInfoCom.initFactoryInfo(id);
            }
        }
        showFactoryMake(mf_id, id) {
            var _factoryMake = new factoryMake;
            _factoryMake.showFactoryMake(mf_id, id);
        }
        showFactoryUpgrade(id) {
            this._factoryUpgradeCom = new factoryUpgrade;
            this._factoryUpgradeCom.showFactoryUpgrade(id);
        }
        initFactoryGradeList() {
            if (this._factoryUpgradeCom) {
                this._factoryUpgradeCom.initFactoryGradeList();
            }
        }
        initFormatSeconds() {
            if (this._factoryInfoCom) {
                this._factoryInfoCom.initFormatSeconds();
            }
        }
        closeFactoryInfo() {
            if (this._factoryInfoCom) {
                this._factoryInfoCom.closeFactoryInfo();
            }
        }
    }

    class factoryNetwork {
        constructor() {
        }
        SendFactoryBak(data) {
            dataGlobal.getInstance().setFactory(data.gd);
            factoryController.getInstance().showFactory();
            factoryController.getInstance().model.setTimeout();
        }
        FactoryCreateBak(data) {
            data = data.gd;
            dataGlobal.getInstance().setFactory(data, data.mf_id);
            factoryController.getInstance().showFactory();
            if (data.msg) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [data.msg]);
            }
            infoController.getInstance().getUserInfo();
        }
        FactoryGoodSave(data) {
            data = {
                "ga": "factory_create_bak",
                "gd": {
                    "mf_id": "gc001",
                    "grade": "1",
                    "queue_goods": {
                        "seat_1": {
                            'lock': "1",
                            'product': {
                                "id": "wp5011"
                            },
                            'price': "100"
                        },
                        "seat_2": {
                            'lock': "1",
                            'product': {
                                "id": "wp5011"
                            },
                            'price': "100"
                        },
                        "seat_3": {
                            'lock': "1",
                            'product': null,
                            'price': "100"
                        },
                        "seat_4": {
                            'lock': "0",
                            'product': null,
                            'price': "100"
                        },
                    },
                    "being_goods": [],
                    "succ_goods": [
                        {
                            "id": "wp5012"
                        },
                        {
                            "id": "wp5013"
                        },
                        {
                            "id": "wp5014"
                        },
                        {
                            "id": "wp5015"
                        }
                    ],
                }, "code": 1
            };
            data = data.gd;
            dataGlobal.getInstance().setFactory(data, data.mf_id);
            factoryController.getInstance().showFactory();
            factoryController.getInstance().initFactoryInfo(data.mf_id);
        }
        FactoryOpenSeatNumBak(data) {
            data = data.gd;
            dataGlobal.getInstance().buySetFactory(data);
            factoryController.getInstance().showFactory();
            factoryController.getInstance().initProduction(data.mf_id);
            Laya.stage.event(GAMEEVENT.TXTTIP, ['成功购买队列']);
            infoController.getInstance().getUserInfo();
        }
        SendGoodBak(data) {
            data = { "ga": "send_good_bak", "gd": { "wp5041": { "id": "wp5041", "num": 8 }, "wp5042": { "id": "wp5042", "num": 10 }, "wp5043": { "id": "wp5043", "num": 8 }, "wp5044": { "id": "wp5044", "num": 10 }, "wp5045": { "id": "wp5045", "num": 8 } }, "code": 1 };
            data = data.gd;
            dataGlobal.getInstance().setUserGoodInfo(data);
            factoryController.getInstance().initProductionGoodList();
        }
        FactoryAct(data) {
            data = data.gd;
            dataGlobal.getInstance().setFactory(data, data.mf_id);
            factoryController.getInstance().showFactory();
            factoryController.getInstance().initFactoryInfo(data.mf_id);
        }
        FactoryUpGrade(data) {
            if (!data) {
                return;
            }
            data = data.gd;
            dataGlobal.getInstance().setFactory(data, data.mf_id);
            factoryController.getInstance().showFactory();
            factoryController.getInstance().initFactoryInfo(data.mf_id);
            factoryController.getInstance().initFactoryGradeList();
            infoController.getInstance().getUserInfo();
        }
        FactoryGoodGet(data) {
            data = data.gd;
            dataGlobal.getInstance().setFactory(data, data.mf_id);
            factoryController.getInstance().showFactory();
            var id = factoryController.getInstance().model._mf_id;
            if (id == data.mf_id) {
                factoryController.getInstance().initFactoryInfo(data.mf_id);
            }
        }
        FactoryAddWaiting(data) {
            data = {
                "ga": "factory_good_get_bak",
                "gd": {
                    "mf_id": "gc001",
                    "grade": "1",
                    "queue_goods": {
                        "seat_1": {
                            'lock': "1",
                            'product': {
                                "id": "wp5011"
                            },
                            'price': "100"
                        },
                        "seat_2": {
                            'lock': "1",
                            'product': {
                                "id": "wp5011"
                            },
                            'price': "100"
                        },
                        "seat_3": {
                            'lock': "1",
                            'product': null,
                            'price': "100"
                        },
                        "seat_4": {
                            'lock': "0",
                            'product': null,
                            'price': "100"
                        },
                    },
                    "being_goods": [],
                    "succ_goods": [
                        {
                            "id": "wp5011"
                        },
                        {
                            "id": "wp5012"
                        },
                        {
                            "id": "wp5013"
                        },
                        {
                            "id": "wp5014"
                        },
                        {
                            "id": "wp5015"
                        }
                    ],
                },
            };
            data = data.gd;
            dataGlobal.getInstance().setFactory(data, data.mf_id);
            factoryController.getInstance().showFactory();
            factoryController.getInstance().initProduction(data.mf_id);
        }
        FactoryProductSpeedUP(data) {
            data = {
                "ga": "factory_good_get_bak",
                "gd": {
                    "mf_id": "gc001",
                    "grade": "1",
                    "queue_goods": {
                        "seat_1": {
                            'lock': "1",
                            'product': {
                                "id": "wp5011"
                            },
                            'price': "100"
                        },
                        "seat_2": {
                            'lock': "1",
                            'product': {
                                "id": "wp5011"
                            },
                            'price': "100"
                        },
                        "seat_3": {
                            'lock': "1",
                            'product': null,
                            'price': "100"
                        },
                        "seat_4": {
                            'lock': "0",
                            'product': null,
                            'price': "100"
                        },
                    },
                    "being_goods": [],
                    "succ_goods": [
                        {
                            "id": "wp5011"
                        },
                        {
                            "id": "wp5012"
                        },
                        {
                            "id": "wp5013"
                        },
                        {
                            "id": "wp5014"
                        },
                        {
                            "id": "wp5015"
                        }
                    ],
                },
            };
            data = data.gd;
            dataGlobal.getInstance().setFactory(data, data.mf_id);
            factoryController.getInstance().showFactory();
            factoryController.getInstance().initFactoryInfo(data.mf_id);
        }
    }

    class factoryController {
        constructor() {
            this.model = new factoryModel;
            this._network = new factoryNetwork;
            Laya.stage.on(NETWORKEVENT.SENDFACTORYBAK, this, this._network.SendFactoryBak);
            Laya.stage.on(NETWORKEVENT.FACTORYCREATEBAK, this, this._network.FactoryCreateBak);
            Laya.stage.on(NETWORKEVENT.FACTORYOPENSEATNUMBAK, this, this._network.FactoryOpenSeatNumBak);
            Laya.stage.on(NETWORKEVENT.SENDGOODBAK, this, this._network.SendGoodBak);
            Laya.stage.on(NETWORKEVENT.FACTORYACTBAK, this, this._network.FactoryAct);
            Laya.stage.on(NETWORKEVENT.FACTORYUPGRADEBAK, this, this._network.FactoryUpGrade);
            Laya.stage.on(NETWORKEVENT.FACTORYGOODGETBAK, this, this._network.FactoryGoodGet);
            Laya.stage.on(NETWORKEVENT.FACTORYADDWAITING, this, this._network.FactoryAddWaiting);
            Laya.stage.on(NETWORKEVENT.FACTORYGOODSAVEBAK, this, this._network.FactoryGoodSave);
            Laya.stage.on(NETWORKEVENT.FACTORYPRODUCTSPEEDUP, this, this._network.FactoryProductSpeedUP);
        }
        static getInstance() {
            if (factoryController._instance == null) {
                factoryController._instance = new factoryController;
            }
            return factoryController._instance;
        }
        onShow(type) {
            if (this._factoryview == null) {
                this._factoryview = new factoryView;
            }
            this._factoryview.onShow(type);
        }
        showFactory() {
            this._factoryview.showFactory();
        }
        onShowFactoryInfo(id) {
            this._factoryview.onShowFactoryInfo(id);
        }
        initProduction(id) {
            if (this._factoryview) {
                this._factoryview.initProduction(id);
            }
        }
        initProductionGoodList() {
            if (this._factoryview) {
                this._factoryview.initProductionGoodList();
            }
        }
        initFactoryInfo(id) {
            if (this._factoryview) {
                this._factoryview.initFactoryInfo(id);
            }
        }
        showFactoryMake(mf_id, id) {
            if (this._factoryview) {
                this._factoryview.showFactoryMake(mf_id, id);
            }
        }
        showFactoryUpgrade(id) {
            if (this._factoryview) {
                this._factoryview.showFactoryUpgrade(id);
            }
        }
        initFactoryGradeList() {
            if (this._factoryview) {
                this._factoryview.initFactoryGradeList();
            }
        }
        initFormatSeconds() {
            if (this._factoryview) {
                this._factoryview.initFormatSeconds();
            }
        }
        closeFactoryInfo() {
            if (this._factoryview) {
                this._factoryview.closeFactoryInfo();
            }
        }
    }

    class bankIndex extends baseTips {
        constructor() {
            super();
        }
        onShowBank(type) {
            this._bankScene = new ui.bank.bankSceneUI;
            this._bankScene.pivotX = 0.5 * this._bankScene.width;
            this._bankScene.pivotY = 0.5 * this._bankScene.height;
            this.addChild(this._bankScene);
            this.showLayer();
            this._bankScene.scene.close_btn.on(Laya.Event.CLICK, this, this.closeScene);
        }
        closeScene() {
            this.hideLayer();
        }
    }

    class bankView {
        constructor() {
        }
        onShowBank(type) {
            if (this._bankCom == null) {
                this._bankCom = new bankIndex;
            }
            this._bankCom.onShowBank(type);
        }
    }

    class bankController {
        constructor() {
            this._bankView = new bankView;
        }
        static getInstance() {
            if (bankController._instance == null) {
                bankController._instance = new bankController;
            }
            return bankController._instance;
        }
        onShowBank(type) {
            this._bankType = type;
            if (this._bankView == null) {
                this._bankView = new bankView;
            }
            this._bankView.onShowBank(type);
        }
    }

    class mailIndex extends baseTips {
        constructor() {
            super();
        }
        onShowMail() {
            this._mailScene = new ui.email.emailUI;
            this._mailScene.pivotX = 0.5 * this._mailScene.width;
            this._mailScene.pivotY = 0.5 * this._mailScene.height;
            this.addChild(this._mailScene);
            this.showLayer();
            this._mailScene.scene.close_btn.on(Laya.Event.CLICK, this, this.closeScene);
            this._mailList = this._mailScene.scene.mail_list;
            this.getMailInfo();
        }
        getMailInfo() {
            Laya.stage.event(NETWORKEVENT.MAILINFOBAK);
        }
        initMailList() {
            var data = dataGlobal.getInstance().mailInfo;
            this._mailScene.scene.mail_num.text = Object.keys(data).length + '/100';
            this._mailList.dataSource = [];
            for (var i in data) {
                var _item = {
                    id: data[i].mail_id,
                    gift: {
                        skin: ''
                    },
                    from_text: {
                        text: ""
                    },
                    describe_list: {
                        dataSource: []
                    },
                    operate_btn: {
                        gray: false
                    }
                };
                if (data[i].type == 1) {
                    _item.gift.skin = 'base/common_icon_small_resident_bonus_box_04 (2).png';
                }
                _item.from_text.text = data[i].text;
                _item.describe_list.dataSource = data[i].return;
                if (data[i].return) {
                    for (var f in _item.describe_list.dataSource) {
                        if (_item.describe_list.dataSource[f].type == 'exp') {
                            var _data = _item.describe_list.dataSource[f];
                            _item.describe_list.dataSource[f] = {
                                gift_icon: {
                                    skin: "base/Icon_Experience_03.png"
                                },
                                gift_num: {
                                    text: _data.num
                                }
                            };
                        }
                        if (_item.describe_list.dataSource[f].type == 'diamond') {
                            var _data = _item.describe_list.dataSource[f];
                            _item.describe_list.dataSource[f] = {
                                gift_icon: {
                                    skin: "base/diamond.png"
                                },
                                gift_num: {
                                    text: _data.num
                                }
                            };
                        }
                    }
                }
                if (data[i].is_harvest == 0) {
                    _item.operate_btn.gray = false;
                }
                else {
                    _item.operate_btn.gray = true;
                }
                this._mailList.addItem(_item);
                this._mailList.renderHandler = new Laya.Handler(this, this.itemSelectHandler, null, false);
            }
            this._mailScene.scene.help_btn.on(Laya.Event.CLICK, this, this.onClickHelp);
        }
        itemSelectHandler(cell, index) {
            cell.getChildByName("operate_btn").on(Laya.Event.CLICK, this, this.onCellClick, [cell, index]);
        }
        onCellClick(cell, index) {
            console.log(cell.dataSource.id, index);
            var mailInfo = dataGlobal.getInstance().mailInfo[index];
            if (mailInfo.is_harvest == 1) {
                return;
            }
            Laya.stage.event(NETWORKEVENT.MAILOPERATE);
        }
        closeScene() {
            this.hideLayer();
        }
        onClickHelp() {
            tipController.getInstance();
            console.log("帮助");
            var confirm_fun = function () {
            };
            Laya.stage.event(GAMEEVENT.GOLDTIP, ["提示", '当邮箱内的邮件超过上限时，每收到一封新邮件，将会永久删除一封最旧的邮件，为了避免不必要损失，请及时查收邮件。', {}, confirm_fun]);
        }
    }

    class mailView {
        constructor() {
        }
        onShowMail() {
            if (this._mailCom == null) {
                this._mailCom = new mailIndex;
            }
            this._mailCom.onShowMail();
        }
        initMailList() {
            this._mailCom.initMailList();
        }
    }

    class orderNetwork {
        constructor() {
        }
        MailInfoBak(data) {
            data = {
                "ga": "mail_info_bak",
                "gd": [
                    {
                        "mail_id": "ml01",
                        "type": "1",
                        "text": "交易达成！",
                        "is_harvest": "0",
                        "return": [
                            {
                                "type": "diamond",
                                "num": "300"
                            },
                            {
                                "type": "exp",
                                "num": "300"
                            }
                        ]
                    },
                    {
                        "mail_id": "ml02",
                        "type": "1",
                        "text": "交易达成！",
                        "is_harvest": "1",
                        "return": [
                            {
                                "type": "exp",
                                "num": "300"
                            },
                            {
                                "type": "diamond",
                                "num": "300"
                            }
                        ]
                    },
                ],
                "code": 1
            };
            data = data.gd;
            dataGlobal.getInstance().setMailInfo(data);
            mailController.getInstance().initMailList();
        }
        MailOperate(data) {
        }
    }

    class mailController {
        constructor() {
            this._mailView = new mailView;
            this._network = new orderNetwork;
            Laya.stage.on(NETWORKEVENT.MAILINFOBAK, this, this._network.MailInfoBak);
            Laya.stage.on(NETWORKEVENT.MAILOPERATE, this, this._network.MailOperate);
        }
        static getInstance() {
            if (mailController._instance == null) {
                mailController._instance = new mailController;
            }
            return mailController._instance;
        }
        onShowMail() {
            if (this._mailView == null) {
                this._mailView = new mailView;
            }
            this._mailView.onShowMail();
        }
        initMailList() {
            this._mailView.initMailList();
        }
    }

    class settingIndex extends baseWindow {
        constructor() {
            super();
        }
        onShow() {
            this._settingScene = new ui.setting.settingUI;
            this._settingScene.scene.close_btn.on(Laya.Event.CLICK, this, this.tweenHide);
            this._settingScene.pivot(this._settingScene.width / 2, this._settingScene.height / 2);
            this.addChild(this._settingScene);
            this.tweenShow();
        }
        closeScene() {
        }
    }

    class settingView {
        constructor() {
        }
        onShowSetting() {
            this._settingCom = new settingIndex;
            this._settingCom.onShow();
        }
    }

    class settingController {
        constructor() {
        }
        static getInstance() {
            if (settingController._instance == null) {
                settingController._instance = new settingController;
            }
            return settingController._instance;
        }
        onShowSetting() {
            if (this._settingView == null) {
                this._settingView = new settingView;
            }
            this._settingView.onShowSetting();
        }
    }

    class infoIndex extends baseWindow {
        constructor() {
            super();
        }
        onShow() {
            this._topSence = new ui.base.scene.topSceneUI;
            this._topSence.scene.level.visible = false;
            this._topSence.scene.top_kuan.on(Laya.Event.CLICK, this, this.userCountInfo);
            this._topSence.scene.top_kuan.on(Laya.Event.CLICK, this, function () {
                Laya.stage.event(NETWORKEVENT.USERCOUNTINFO);
            });
            this._diamond_box = this._topSence.scene.diamond_kuan;
            this._gold_box = this._topSence.scene.gold_kuan;
            this._mail_btn = this._topSence.scene.mail_btn;
            this._help_btn = this._topSence.scene.help_btn;
            this._setting_btn = this._topSence.scene.setting_btn;
            this._diamond_box.on(Laya.Event.CLICK, this, this.showBank, ['diamond']);
            this._gold_box.on(Laya.Event.CLICK, this, this.showBank, ['gold']);
            this._mail_btn.on(Laya.Event.CLICK, this, this.showMail);
            this._setting_btn.on(Laya.Event.CLICK, this, this.showSetting);
            this.adaption();
            this.showChild(this._topSence);
            this._topSence.mouseThrough = true;
        }
        adaption() {
        }
        showSecen(data) {
            if (data == 'factory') {
                factoryController.getInstance().onShow(1);
            }
            else if (data == 'farm') {
                farmController.getInstance().onShow(1);
            }
        }
        getUserInfo() {
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "init_info",
                'm': "init",
                'd': {},
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
        }
        onShowUserInfo() {
            var data = dataGlobal.getInstance().userInfo;
            this._topSence.scene.level.text = data.grade;
            this._topSence.scene.level.visible = true;
            this._topSence.scene.uexp.value = Math.floor(data.exp / data.upgrade_exp * 100) > 100 ? 100 : data.exp / data.upgrade_exp;
            this._topSence.scene.gold_val.text = Math.floor(data.have_gold) + '';
        }
        showBottonDiv(data) {
        }
        showInfoDiv() {
            this._topSence.visible = true;
        }
        hideInfoDiv() {
            this._topSence.visible = false;
        }
        showUserInfoTip() {
            infoController.getInstance().showUserInfoTip();
        }
        userCountInfo() {
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "user_count_info",
                'm': "init",
                'd': {},
                'code': 1
            };
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
        }
        showBank(type) {
            bankController.getInstance().onShowBank(type);
        }
        showMail() {
            mailController.getInstance().onShowMail();
        }
        showSetting() {
            settingController.getInstance().onShowSetting();
        }
    }

    class infoUserTip extends baseTips {
        constructor() {
            super();
        }
        showUserInfoTip() {
            this._userInfoTip = new ui.base.tip.user_info_tipUI;
            this._userInfoTip.pivotX = 0.5 * this._userInfoTip.width;
            this._userInfoTip.pivotY = 0.5 * this._userInfoTip.height;
            this.addChild(this._userInfoTip);
            this.showLayer();
            var data = dataGlobal.getInstance().userInfo;
            this._userInfoTip.scene.uname.text = data.nickname;
            this._userInfoTip.scene.id.text = data.uid;
            this._userInfoTip.scene.ugrade.text = data.grade;
            this._userInfoTip.scene.next_grade.text = Number(data.grade) + 1 + "级将解锁";
            this._userInfoTip.scene.user_header.skin = data.pic;
            this._userInfoTip.scene.close_btn.on(Laya.Event.CLICK, this, this.closeUserInfoKuan);
            this._userInfoTip.scene.change_name.on(Laya.Event.CLICK, this, this.changeNickName);
            this._userInfoTip.scene.change_userpic.on(Laya.Event.CLICK, this, this.changeUserPic);
            this.renderUnlockingList();
        }
        closeUserInfoKuan() {
            this.hideLayer();
        }
        changeNickName() {
            infoController.getInstance().infoUserChangeNickName();
        }
        refreshUserInfo() {
            var data = dataGlobal.getInstance().userInfo;
            this._userInfoTip.scene.uname.text = data.nickname;
            this._userInfoTip.scene.user_header.skin = data.pic;
        }
        changeUserPic() {
            infoController.getInstance().infoUserChangePic();
        }
        renderUnlockingList() {
            var data = dataGlobal.getInstance().userInfo.lower_level_unlock;
            this._unlockList = this._userInfoTip.scene.crops_list;
            this._unlockList.dataSource = [];
            for (var i in data) {
                var _item = {
                    lock_crops: {
                        skin: "product/product01.png"
                    }
                };
                this._unlockList.addItem(_item);
            }
        }
    }

    class infoUserTip$1 extends baseTips {
        constructor() {
            super();
        }
        show() {
            this._useNickNameTip = new ui.base.tip.nickname_tipUI;
            this._useNickNameTip.pivotX = 0.5 * this._useNickNameTip.width;
            this._useNickNameTip.pivotY = 0.5 * this._useNickNameTip.height;
            this.addChild(this._useNickNameTip);
            this.showLayer();
            var data = dataGlobal.getInstance().userInfo;
            this._useNickNameTip.scene.tips_text.text = data.nickname;
            this._useNickNameTip.scene.close_btn.on(Laya.Event.CLICK, this, this.close);
            this._useNickNameTip.scene.confirm_btn.on(Laya.Event.CLICK, this, this.submitNickName);
        }
        close() {
            this.hideLayer();
        }
        submitNickName() {
            var nickname = this._useNickNameTip.scene.tips_text.text;
            var _data = {
                "nickname": nickname
            };
            dataGlobal.getInstance().setUserInfo(_data);
            Laya.stage.event(NETWORKEVENT.USERNICKNAMECHANGE);
        }
    }

    class infoUserTip$2 extends baseTips {
        constructor() {
            super();
        }
        show() {
            this._useAvatarTip = new ui.base.tip.avatar_tipUI;
            this._useAvatarTip.pivotX = 0.5 * this._useAvatarTip.width;
            this._useAvatarTip.pivotY = 0.5 * this._useAvatarTip.height;
            this.addChild(this._useAvatarTip);
            this.showLayer();
            var data = dataGlobal.getInstance().userInfo;
            this._avatarList = this._useAvatarTip.scene.avatar_list;
            this.initAvatarList();
            this._useAvatarTip.scene.close_btn.on(Laya.Event.CLICK, this, this.close);
            this._useAvatarTip.scene.get_btn.on(Laya.Event.CLICK, this, this.submitAvatar);
        }
        close() {
            this.hideLayer();
        }
        initAvatarList() {
            this.avatarList = [
                {
                    "id": "2",
                    "able": 1,
                    "select": 0
                },
                {
                    "id": "3",
                    "able": 1,
                    "select": 0
                },
                {
                    "id": "4",
                    "able": 1,
                    "select": 0
                },
                {
                    "id": "5",
                    "able": 1,
                    "select": 0
                },
                {
                    "id": "6",
                    "able": 1,
                    "select": 0
                },
                {
                    "id": "7",
                    "able": 1,
                    "select": 0
                },
                {
                    "id": "8",
                    "able": 1,
                    "select": 0
                },
                {
                    "id": "9",
                    "able": 1,
                    "select": 0
                },
                {
                    "id": "10",
                    "able": 1,
                    "select": 0
                }
            ];
            this._avatarList.dataSource = [];
            for (var i = 0; i < this.avatarList.length; i++) {
                var _item = {
                    id: "",
                    icon: {
                        skin: ""
                    },
                    select: {
                        skin: ""
                    }
                };
                _item.id = this.avatarList[i].id;
                if (this.avatarList[i].able) {
                    _item.icon.skin = "avatar/Avatar" + this.avatarList[i].id + "Enable.png";
                }
                else {
                    _item.icon.skin = "avatar/Avatar" + this.avatarList[i].id + "Disable.png";
                }
                if (this.avatarList[i].select) {
                    _item.select.skin = "avatar/AvatarSelected.png";
                }
                else {
                    _item.select.skin = "avatar/AvatarBorder.png";
                }
                this._avatarList.addItem(_item);
                this._avatarList.renderHandler = new Laya.Handler(this, this.bindClick);
            }
        }
        bindClick(cell, index) {
            cell.on(Laya.Event.CLICK, this, this.selectAvatar, [cell, index]);
        }
        selectAvatar(cell, index) {
            var _item = this._avatarList.getItem(index);
            _item.select.skin = "avatar/AvatarSelected.png";
            for (var i = 0; i < this.avatarList.length; i++) {
                if (i != index) {
                    var otherItem = this._avatarList.getItem(i);
                    otherItem.select.skin = "avatar/AvatarBorder.png";
                    this._avatarList.setItem(i, otherItem);
                }
            }
            this._select = _item.id;
            this._avatarList.setItem(index, _item);
        }
        submitAvatar() {
            var _data = {
                "avatar": this._select
            };
            dataGlobal.getInstance().setUserInfo(_data);
            Laya.stage.event(NETWORKEVENT.USERAVATARCHANGE);
        }
    }

    class infoUserUpgradeTip extends baseTips {
        constructor() {
            super();
        }
        infoUserUpgradeTip(data) {
            this._userInfoTip = new ui.base.tip.upgrade_tipUI;
            this._userInfoTip.pivotX = 0.5 * this._userInfoTip.width;
            this._userInfoTip.pivotY = 0.5 * this._userInfoTip.height;
            this.addChild(this._userInfoTip);
            this.tweenShow();
            this._userInfoTip.scene.y_btn.on(Laya.Event.CLICK, this, this.closeUserUpgradeTip);
            this.good_list = this._userInfoTip.scene.good_div.getChildByName('good_list');
            this._userInfoTip.scene.new_grade.text = 'LV' + data.grade2;
            this._userInfoTip.scene.add_gold.text = '+' + (data.num ? data.num : 0);
            var good_list = data.up_data;
            this.good_list.dataSource = [];
            if (good_list) {
                for (var i in good_list) {
                    var thisList = {
                        gicon: {
                            skin: ''
                        },
                        gname: {
                            text: ""
                        }
                    };
                    var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[good_list[i].id];
                    if (good_info) {
                        let index = good_info.pic.lastIndexOf("/");
                        var _skin = good_info.pic.substring(index + 1, good_info.pic.length);
                        thisList.gicon.skin = "factory/" + _skin + '.png';
                        thisList.gname.text = good_info.name;
                        this.good_list.addItem(thisList);
                    }
                }
                if (this.good_list.cells.length > 0) {
                    this._userInfoTip.scene.good_div.visible = true;
                    this._userInfoTip.scene.n10.visible = true;
                    this._userInfoTip.scene.n11.visible = true;
                    this._userInfoTip.scene.t9.visible = true;
                }
                else {
                    this._userInfoTip.scene.good_div.visible = false;
                    this._userInfoTip.scene.n10.visible = false;
                    this._userInfoTip.scene.n11.visible = false;
                    this._userInfoTip.scene.t9.visible = false;
                }
            }
        }
        closeUserUpgradeTip() {
            this.tweenHide();
        }
    }

    class infoView {
        constructor() {
        }
        onShow() {
            if (this._infoCom == null) {
                this._infoCom = new infoIndex;
            }
            this._infoCom.onShow();
        }
        onShowUserInfo() {
            this._infoCom.onShowUserInfo();
        }
        getUserInfo() {
            this._infoCom.getUserInfo();
        }
        showBottonDiv(data) {
            this._infoCom.showBottonDiv(data);
        }
        showInfoDiv() {
            this._infoCom.showInfoDiv();
        }
        userCountInfo() {
            this._infoCom.userCountInfo();
        }
        hideInfoDiv() {
            this._infoCom.hideInfoDiv();
        }
        showUserInfoTip() {
            this._userInfoTip = new infoUserTip;
            this._userInfoTip.showUserInfoTip();
        }
        infoUserUpgradeTip(data) {
            this._userUgradeTip = new infoUserUpgradeTip;
            this._userUgradeTip.infoUserUpgradeTip(data);
        }
        infoUserChangeNickName() {
            this._infoNickNameTip = new infoUserTip$1;
            this._infoNickNameTip.show();
        }
        refreshUserInfo(type) {
            if (type == 'changeNickName') {
                this._infoNickNameTip.close();
            }
            if (type == "changeAvatar") {
                this._infoAvatarTip.close();
            }
            this._userInfoTip.refreshUserInfo();
        }
        infoUserChangePic() {
            this._infoAvatarTip = new infoUserTip$2;
            this._infoAvatarTip.show();
        }
    }

    class infoNetwork {
        constructor() {
        }
        InitInfo(data) {
            dataGlobal.getInstance().setUserInfo(data.gd);
            infoController.getInstance().onShowUserInfo();
        }
        SendUserGradeUp(data) {
            data = data.gd;
            infoController.getInstance().infoUserUpgradeTip(data);
        }
        UserCountInfo(data) {
            if (!data) {
                return;
            }
            data = data.gd;
            dataGlobal.getInstance().setUserInfo(data);
            infoController.getInstance().showUserInfoTip();
        }
    }

    class infoController {
        constructor() {
            this.model = new infoModel;
            this._network = new infoNetwork;
            Laya.stage.on(GAMEEVENT.GETINITINFO, this, this.getUserInfo);
            Laya.stage.on(NETWORKEVENT.INITINFO, this, this._network.InitInfo);
            Laya.stage.on(GAMEEVENT.HIDEINFODIV, this, this.hideInfoDiv);
            Laya.stage.on(GAMEEVENT.SHOWINFODIV, this, this.showInfoDiv);
            Laya.stage.on(NETWORKEVENT.SENDUSERGRADEUP, this, this._network.SendUserGradeUp);
            Laya.stage.on(NETWORKEVENT.USERCOUNTINFO, this, this._network.UserCountInfo);
            Laya.stage.on(NETWORKEVENT.USERNICKNAMECHANGE, this, this.refreshUserInfo, ['changeNickName']);
            Laya.stage.on(NETWORKEVENT.USERAVATARCHANGE, this, this.refreshUserInfo, ['changeAvatar']);
        }
        static getInstance() {
            if (infoController._instance == null) {
                infoController._instance = new infoController;
            }
            return infoController._instance;
        }
        onShow() {
            if (this._infoview == null) {
                this._infoview = new infoView;
            }
            this._infoview.onShow();
            this.onShowUserInfo();
        }
        onShowUserInfo() {
            this._infoview.onShowUserInfo();
        }
        getUserInfo() {
            this._infoview.getUserInfo();
        }
        showBottonDiv(data) {
            this._infoview.showBottonDiv(data);
        }
        showInfoDiv() {
            this._infoview.showInfoDiv();
        }
        hideInfoDiv() {
            this._infoview.hideInfoDiv();
        }
        userCountInfo() {
            this._infoview.userCountInfo();
        }
        showUserInfoTip() {
            this._infoview.showUserInfoTip();
        }
        infoUserUpgradeTip(data) {
            this._infoview.infoUserUpgradeTip(data);
        }
        infoUserChangeNickName() {
            this._infoview.infoUserChangeNickName();
        }
        infoUserChangePic() {
            this._infoview.infoUserChangePic();
        }
        refreshUserInfo(type) {
            this._infoview.refreshUserInfo(type);
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
            infoController.getInstance().getUserInfo();
        }
        StoreGoodDel(data) {
            data = data.gd;
            var tmp_arr = [{ 'id': data.good_id, 'num': data.num }];
            dataGlobal.getInstance().setUserGoodInfo(tmp_arr);
            warehouseController.getInstance().initWarehouseInfo();
            warehouseController.getInstance().initWarehouseGoodList();
            infoController.getInstance().getUserInfo();
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
        showUpgradeWarehouse(tools_list) {
            if (this._warehouseview) {
                this._warehouseview.showUpgradeTip(tools_list);
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

    class orderIndex extends baseWindow {
        constructor() {
            super();
            this._orderItem = {};
        }
        onShowOrder() {
            this._orderIndex = new ui.order.gradeOrderUI();
            this._orderIndex.name = 'orderIndex';
            this._orderIndex.pivot(this._orderIndex.width / 2, this._orderIndex.height / 2);
            this.addChild(this._orderIndex);
            this.tweenShow();
            this._orderIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeOrder);
            this._orderIndex.scene.order_list.visible = false;
            this._orderIndex.scene.order_list.vScrollBarSkin = "";
            this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = false;
            this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName("good_list").visible = false;
            this._orderIndex.scene.inner_box.getChildByName("order_await").visible = false;
            this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('btn_remove').on(Laya.Event.CLICK, this, this.removeLottery);
            this.getLotteryInfo();
        }
        getLotteryInfo() {
            Laya.stage.event(NETWORKEVENT.LOTTERYINFOBAK);
        }
        sendGood(data) {
            var tmp_arr = [];
            for (var i in data) {
                var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[data[i].lottery_id];
                var good_list = lottery_info.goods;
                for (var i in good_list) {
                    tmp_arr.push(good_list[i].id);
                }
            }
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "send_good",
                'm': "init",
                'd': {
                    'good_id': tmp_arr
                },
                'code': 1
            };
            console.log("发送数据", tmp_data);
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
            Laya.stage.event(NETWORKEVENT.SENDGOODBAK);
        }
        setLotteryList() {
            this._orderList = this._orderIndex.scene.order_list;
            var lottery_list = dataGlobal.getInstance().lotteryInfo;
            this._orderList.dataSource = [];
            var num = 1;
            var key = '';
            if (lottery_list) {
                for (var i in lottery_list) {
                    console.log('目前的小订单信息---', lottery_list[i]);
                    this._orderItem = {
                        name: '',
                        id: '',
                        done_box: {
                            visible: true
                        },
                        enough: {
                            visible: false
                        },
                        order_n0: {
                            skin: "",
                            visible: true
                        },
                        order_customer: {
                            skin: "",
                            visible: true
                        }
                    };
                    var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[lottery_list[i].lottery_id];
                    console.log('---', i);
                    this.setOrderItem(lottery_info, i);
                    this._orderList.addItem(this._orderItem);
                    this._orderList.visible = true;
                    if (num == 1) {
                        key = i;
                    }
                    num++;
                    this._orderList.renderHandler = new Laya.Handler(this, this.itemSelectHandler, null, false);
                }
                var id = orderController.getInstance().model._order_id;
                if (id && this._orderItem[id]) {
                    this.clickOrderItem(id, this._orderList.getCell(0));
                }
                else {
                    if (key && lottery_list[key].lottery_id) {
                        this.clickOrderItem(lottery_list[key].lottery_id, this._orderList.getCell(0));
                    }
                }
            }
        }
        setOrderItem(info, index) {
            console.log('目前的任务状态信息--========================--', info, this._orderItem);
            console.log(index);
            var lottery_goods = info.goods3;
            this._orderItem.id = info.id;
            this._orderItem.name = info.id + '_item';
            if (info.status == 1) {
                this._orderIndex.scene.inner_box.getChildByName("order_await").visible = false;
                this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = true;
                this._orderItem.order_n0.skin = "order/Order_01.png";
                this._orderItem.order_customer.skin = "order/Avatar 6 Enable.png";
                for (var q in lottery_goods) {
                    if (lottery_goods[q].id == 'g001') {
                        this._orderIndex.scene.inner_box.getChildByName('order_detail').getChildByName('gold_val').text = lottery_goods[q].num;
                    }
                    else if (lottery_goods[q].id == 'exp001') {
                        this._orderIndex.scene.inner_box.getChildByName('order_detail').getChildByName('exp_val').text = lottery_goods[q].num;
                    }
                }
                this.setOrderStatus(info.id);
            }
            else {
                this._orderIndex.scene.inner_box.getChildByName("order_await").visible = true;
                this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = false;
                this._orderItem.order_n0.skin = "order/Order_03.png";
                this._orderItem.order_customer.visible = false;
                this._orderItem.done_box.visible = false;
            }
            this._orderList.setItem(index, this._orderItem);
        }
        itemSelectHandler(cell) {
            console.log(cell);
            cell.on(Laya.Event.CLICK, this, this.clickOrderItem, [cell.dataSource.id, cell]);
        }
        setOrderStatus(id) {
            var order_info = dataGlobal.getInstance().lotteryInfo[id];
            var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id];
            if (lottery_info.status == 2) {
                return;
            }
            if (order_info.is_ok == 1) {
                var is_goods = this.isGoodsEnough(lottery_info.goods);
                if (is_goods) {
                    for (var k = 0; k < this._orderList.cells.length; k++) {
                        if (this._orderList.getItem(k)) {
                            if (this._orderList.getItem(k).id === id) {
                                this._orderList.getItem(k).done_box.visible = true;
                                this._orderList.getItem(k).enough.visible = false;
                                this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('get_btn').skin = "warehouse/btn_green_medium.png";
                                this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('get_btn').on(Laya.Event.CLICK, this, this.lotteryAct, [1]);
                            }
                        }
                    }
                }
                else {
                    console.log(id, "材料不足");
                    for (var i = 0; i < this._orderList.cells.length; i++) {
                        if (this._orderList.getItem(i)) {
                            if (this._orderList.getItem(i).id === id) {
                                this._orderList.getItem(i).done_box.visible = false;
                                this._orderList.getItem(i).enough.visible = true;
                                this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('get_btn').skin = "warehouse/btn_gray_medium.png";
                                this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName('get_btn').off(Laya.Event.CLICK, this, this.lotteryAct);
                            }
                        }
                    }
                }
            }
        }
        clickOrderItem(id, cell) {
            var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id];
            cell.rotation = 10;
            orderController.getInstance().model.setOrderId(id);
            this.setClicAperture(id);
            this.setOrderStatus(id);
            this.setGoodList(id);
        }
        setClicAperture(id) {
            var lottery_info = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id];
            var lottery_goods_list = lottery_info.goods3;
            if (lottery_info.status == 1) {
                this._orderIndex.scene.inner_box.getChildByName("order_await").visible = false;
                this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = true;
            }
            else {
                this._orderIndex.scene.inner_box.getChildByName("order_await").visible = true;
                this._orderIndex.scene.inner_box.getChildByName("order_detail").visible = false;
            }
            for (var _z in this._orderList.dataSource) {
                if (this._orderList.dataSource[_z].id !== id) {
                    var index = Number(_z);
                    var _cell = this._orderList.getCell(index);
                    _cell.rotation = 0;
                }
            }
        }
        setGoodList(id) {
            var lottery_good = dataJson.getInstance().GET_SYS_FLOWER_LOTTERY()[id].goods;
            var user_good_info = dataGlobal.getInstance().userGoodInfo;
            this._good_list = this._orderIndex.scene.inner_box.getChildByName("order_detail").getChildByName("good_list");
            this._good_list.dataSource = [];
            for (var i in lottery_good) {
                var tmp_arr = [];
                tmp_arr.push({ 'id': lottery_good[i].id, 'num': lottery_good[i].num });
                var result = this.isGoodsEnough(tmp_arr);
                var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[lottery_good[i].id];
                if (!good_info) {
                    continue;
                }
                let index = good_info.pic.lastIndexOf("/");
                var _skin = good_info.pic.substring(index + 1, good_info.pic.length);
                var good_item = {
                    name: good_info.id,
                    gicon: {
                        skin: "factory/" + _skin + ".png"
                    },
                    gnum: {
                        text: ''
                    },
                    already: {
                        visible: true
                    }
                };
                if (result) {
                    var str = "" + user_good_info[lottery_good[i].id].num + "/" + lottery_good[i].num + '';
                    good_item.already.visible = true;
                }
                else {
                    var str = "" + user_good_info[lottery_good[i].id].num + "/" + lottery_good[i].num + '';
                    good_item.already.visible = false;
                }
                good_item.gnum.text = str;
                this._good_list.addItem(good_item);
                this._good_list.visible = true;
            }
        }
        isGoodsEnough(data) {
            var userGoodInfo = dataGlobal.getInstance().userGoodInfo;
            var result = true;
            if (data && data.length > 0) {
                for (var i in data) {
                    if (Math.floor(data[i].num) > Math.floor(userGoodInfo[data[i].id].num)) {
                        result = false;
                        return result;
                    }
                }
            }
            return result;
        }
        lotteryAct(type) {
            console.log('提交订单');
        }
        showOrderTime() {
        }
        closeOrder() {
            orderController.getInstance().model.clearOrderTime();
            this.tweenHide();
        }
        removeLottery() {
            var _id = orderController.getInstance().model._order_id;
        }
    }

    class orderGoodGoTip extends baseTips {
        constructor() {
            super();
        }
        showOrderGoodGoTip(x, y, id) {
            this._orderGoodGoTip = new ui.order.goodGoTipUI;
            this._orderGoodGoTip.x = x - CONST.DESIGNSTAGEWIDTH / 2 + this._orderGoodGoTip.width / 2;
            this._orderGoodGoTip.y = y - CONST.DESIGNSTAGEHEIGHT / 2;
            this._orderGoodGoTip.pivotX = 0.5 * this._orderGoodGoTip.width;
            this._orderGoodGoTip.pivotY = 1 * this._orderGoodGoTip.height;
            this.addChild(this._orderGoodGoTip);
            this.showLayer();
            var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[id];
            this._orderGoodGoTip.scene.gname.text = good_info.name;
            if (good_info.type == 6) {
                this._orderGoodGoTip.scene.make.text = '花田种植';
            }
            else if (good_info.type == 5) {
                this._orderGoodGoTip.scene.make.text = '工厂物品';
            }
            this._orderGoodGoTip.scene.goto_btn.on(Laya.Event.CLICK, this, this.goFun.bind(this), [good_info.type, good_info.id]);
            this.modal.on(Laya.Event.CLICK, this, this.hideLayer);
        }
        goFun(type, id) {
            this.tweenHide();
            orderController.getInstance().closeOrder();
            if (type == 5) {
                infoController.getInstance().showBottonDiv('factory');
                var factoryGoodInfo = dataJson.getInstance().GET_SYS_FACTORY_GOOD();
                console.log(id, factoryGoodInfo);
                var factoryId = '';
                for (var i in factoryGoodInfo) {
                    for (var q in factoryGoodInfo[i]) {
                        if (factoryGoodInfo[i][q].id == id) {
                            factoryId = i;
                            break;
                        }
                    }
                    if (factoryId) {
                        break;
                    }
                }
                if (factoryId) {
                    console.log('设置需要打开工厂的ID');
                    factoryController.getInstance().model._mf_id = factoryId;
                    factoryController.getInstance().model._is_open = true;
                }
                factoryController.getInstance().onShow(1);
            }
            else if (type == 6) {
                infoController.getInstance().showBottonDiv('farm');
            }
        }
    }

    class orderView {
        constructor() {
        }
        onShowOrder() {
            this._orderCom = new orderIndex;
            this._orderCom.onShowOrder();
        }
        sendGood(data) {
            this._orderCom.sendGood(data);
        }
        setLotteryList() {
            this._orderCom.setLotteryList();
        }
        clickOrderItem(id) {
        }
        showOrderGoodGoTip(x, y, id) {
            var _orderGoodGoTip = new orderGoodGoTip();
            _orderGoodGoTip.showOrderGoodGoTip(x, y, id);
        }
        getLotteryInfo() {
            this._orderCom.getLotteryInfo();
        }
        showOrderTime() {
            this._orderCom.showOrderTime();
        }
        closeOrder() {
            this._orderCom.closeOrder();
        }
    }

    class orderNetwork$1 {
        constructor() {
        }
        LotteryInfoBak(data) {
            data = {
                "ga": "lottery_info_bak",
                "gd": [
                    {
                        "lottery_id": "rw101",
                        "task_uid": "456489646464",
                        "task_uid_pic": "aaa",
                        "type": "1",
                        "is_ok": "1"
                    },
                    {
                        "lottery_id": "rw201",
                        "task_uid": "456489646464",
                        "task_uid_pic": "aaa",
                        "type": "1",
                        "is_ok": "1"
                    },
                    {
                        "lottery_id": "rw301",
                        "task_uid": "456489646464",
                        "task_uid_pic": "aaa",
                        "type": "1",
                        "is_ok": "1"
                    },
                ],
                "code": 1
            };
            data = data.gd;
            dataGlobal.getInstance().setlotteryInfo(data, true);
            orderController.getInstance().sendGood(data);
        }
        SendGoodBak(data) {
            data = {
                "ga": "send_good_bak", "code": 1,
                "gd": {
                    "hh6001": { "id": "hh6001", "num": 1 },
                    "hh6002": { "id": "hh6002", "num": 10 },
                    "hh6003": { "id": "hh6003", "num": 10 },
                    "hh6004": { "id": "hh6004", "num": 10 }
                }
            };
            data = data.gd;
            dataGlobal.getInstance().setUserGoodInfo(data);
            orderController.getInstance().model.setOrderTimeout();
            orderController.getInstance().setLotteryList();
        }
        LotteryActBak(data) {
            data = data.gd;
            var tmp_arr = [];
            tmp_arr.push(data);
            dataGlobal.getInstance().setlotteryInfo(tmp_arr);
            orderController.getInstance().sendGood(tmp_arr);
            orderController.getInstance().clickOrderItem(data.lottery_id);
            infoController.getInstance().getUserInfo();
        }
    }

    class orderModel {
        constructor() {
            this._order_id = '';
        }
        setOrderId(id) {
            this._order_id = id;
        }
        setOrderTimeout() {
            this.clearOrderTime();
            this._timer = new Laya.Timer();
            this.getTime();
            this._timer.loop(1000, this, this.timerFun);
        }
        timerFun() {
            if (this.thisDay <= 0) {
                orderController.getInstance().getLotteryInfo();
            }
            if (this.thisDay > 0) {
                this.thisDay--;
                orderController.getInstance().showOrderTime();
            }
        }
        getTime() {
            var curDate = new Date(new Date().setHours(0, 0, 0, 0));
            var nextDate = curDate.getTime() + 24 * 60 * 60 * 1000;
            var thisTime = new Date().getTime();
            this.thisDay = Math.floor((nextDate - thisTime) / 1000) + 10;
        }
        clearOrderTime() {
            if (this._timer) {
                this._timer.clear(this, this.timerFun);
            }
        }
    }

    class orderController {
        constructor() {
            this.model = new orderModel;
            this._network = new orderNetwork$1;
            Laya.stage.on(NETWORKEVENT.LOTTERYINFOBAK, this, this._network.LotteryInfoBak);
            Laya.stage.on(NETWORKEVENT.SENDGOODBAK, this, this._network.SendGoodBak);
            Laya.stage.on(NETWORKEVENT.LOTTERYACTBAK, this, this._network.LotteryActBak);
        }
        static getInstance() {
            if (orderController._instance == null) {
                orderController._instance = new orderController;
            }
            return orderController._instance;
        }
        onShowOrder() {
            if (this._orderview == null) {
                this._orderview = new orderView;
            }
            this._orderview.onShowOrder();
        }
        sendGood(data) {
            if (this._orderview == null) {
                this._orderview = new orderView;
            }
            this._orderview.sendGood(data);
        }
        setLotteryList() {
            this._orderview.setLotteryList();
        }
        clickOrderItem(id) {
            this._orderview.clickOrderItem(id);
        }
        showOrderGoodGoTip(x, y, id) {
            this._orderview.showOrderGoodGoTip(x, y, id);
        }
        showOrderTime() {
            this._orderview.showOrderTime();
        }
        getLotteryInfo() {
            this._orderview.getLotteryInfo();
        }
        closeOrder() {
            this._orderview.closeOrder();
        }
    }

    class screenScene extends baseWindow {
        constructor() {
            super();
        }
        onShow() {
            this._screenIndex = new ui.exchange.screenUI();
            this._screenIndex.name = 'exchangeIndex';
            this._screenIndex.pivot(this._screenIndex.width / 2, this._screenIndex.height / 2);
            this.addChild(this._screenIndex);
            this._screen_list = this._screenIndex.scene.screen_list;
            this.initScreenList();
            this.tweenShow();
            this._screenIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeexchange);
            this._screenIndex.scene.cancel_btn.on(Laya.Event.CLICK, this, this.closeexchange);
            this._screenIndex.scene.confirm_btn.on(Laya.Event.CLICK, this, this.confirmScreen);
        }
        closeexchange() {
            this.tweenHide();
        }
        confirmScreen() {
            this.tweenHide();
        }
        initScreenList() {
            this._screen_list.dataSource = [];
            var data = [1, 2, 3, 4];
            for (var i in data) {
                var _data = {
                    screen_title: {
                        text: '今日',
                    },
                    screen_check: {
                        visible: false
                    }
                };
                this._screen_list.addItem(_data);
                this._screen_list.renderHandler = new Laya.Handler(this, this.itemFatSelectHandler, null, false);
            }
        }
        itemFatSelectHandler(cell, index) {
            cell.off(Laya.Event.CLICK, this, this.onCellClick);
            cell.on(Laya.Event.CLICK, this, this.onCellClick, [cell, index]);
        }
        onCellClick(cell, index) {
            var _item = this._screen_list.getItem(index);
            _item.screen_check.visible = !_item.screen_check.visible;
            console.log(_item, _item.screen_check.visible);
            this._screen_list.setItem(index, _item);
        }
    }

    class exchangeIndex extends baseWindow {
        constructor() {
            super();
            this._exchangeItem = {};
        }
        onShowexchange() {
            this._exchangeIndex = new ui.exchange.exchangeUI();
            this._exchangeIndex.name = 'exchangeIndex';
            this._exchangeIndex.pivot(this._exchangeIndex.width / 2, this._exchangeIndex.height / 2);
            this.addChild(this._exchangeIndex);
            this.tweenShow();
            this._exchangeIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeexchange);
            this.getInfo();
            this._marketList = this._exchangeIndex.scene.list;
        }
        getInfo() {
            Laya.stage.event(NETWORKEVENT.EXCHANGEINFOBAK);
        }
        initExchangeList() {
            var data = dataGlobal.getInstance().exchangeInfo;
        }
        initMyGoodList() {
            var data = dataGlobal.getInstance().marketInfo;
            var _data_info = data.data_info;
            this._market_list.vScrollBarSkin = '';
            for (var i in _data_info) {
                var dataItem = {
                    id: _data_info[i].good_id,
                    icon: {
                        skin: "factory/pic_" + _data_info[i].good_id + ".png"
                    },
                    order_gold_val: {
                        text: _data_info[i].good_name
                    }
                };
                this._my_list.addItem(dataItem);
                this._my_list.visible = true;
                this.bindClickMyItem(this._my_list.getCell(Number(i)), Number(i));
            }
        }
        bindClickMarketItem(cell, index) {
            if (this._flagMarket) {
                return;
            }
            cell.on(Laya.Event.CLICK, this, function () {
                this._flagMarket = true;
                this.showBuyTip(this._market_list.getItem(index).id);
            }.bind(this));
        }
        bindClickMyItem(cell, index) {
            if (this._flagMy) {
                return;
            }
            cell.on(Laya.Event.CLICK, this, function () {
                this._flagMy = true;
                this.showSellTip(this._market_list.getItem(index).id);
            }.bind(this));
        }
        switchItem(str) {
        }
        closeexchange() {
            this.tweenHide();
        }
        showBuyTip(id) {
            exchangeController.getInstance().showBuyTip(id);
        }
        showSellTip(id) {
            exchangeController.getInstance().showSellTip(id);
        }
        goScreen() {
            if (this._screenView == null) {
                this._screenView = new screenScene;
            }
            this._screenView.onShow();
        }
    }

    class tradeingHome extends baseTips {
        constructor() {
            super();
        }
        showSellTip(id) {
            this._id = id;
            this._sellTip = new ui.exchange.tradeingHomeUI();
            this._sellTip.pivotX = 0.5 * this._sellTip.width;
            this._sellTip.pivotY = 0.5 * this._sellTip.height;
            this.addChild(this._sellTip);
            this.showLayer();
            this._sellTip.scene.return_btn.on(Laya.Event.CLICK, this, this.closeSellTip);
            this._sellTip.scene.cancel.on(Laya.Event.CLICK, this, this.closeSellTip);
        }
        closeSellTip() {
            this.hideLayer();
        }
        initInfo() {
            var good_info = dataGlobal.getInstance().marketInfo.data_info;
            for (var i in good_info) {
                if (good_info[i].good_id == this._id) {
                    var _good_info = good_info[i];
                }
            }
            this._sellTip.scene.good_name.text = _good_info.good_name;
            this._sellTip.scene.icon.skin = "factory/pic_" + _good_info.good_id + ".png";
            this._sellTip.scene.seller.text = _good_info.seller;
            this._sellTip.scene.price.text = _good_info.price;
            this._sellTip.scene.describe.text = _good_info.good_name;
            this._sellTip.scene.buy_btn.on(Laya.Event.CLICK, this, this.purchaseItems);
        }
        purchaseItems() {
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "store_good_del",
                'm': "store",
                'd': {
                    'good_id': this._id,
                    'num': this._num
                },
                'code': 1
            };
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
            this.closeSellTip();
        }
    }

    class exchangeSellTip extends baseTips {
        constructor() {
            super();
        }
        showSellTip(id) {
            this._id = id;
            this._sellTip = new ui.exchange.selltipUI();
            this._sellTip.pivotX = 0.5 * this._sellTip.width;
            this._sellTip.pivotY = 0.5 * this._sellTip.height;
            this.addChild(this._sellTip);
            this.tweenShow();
            this._sellTip.scene.jian_btn.on(Laya.Event.CLICK, this, this.setGoodNum, [-1]);
            this._sellTip.scene.jia_btn.on(Laya.Event.CLICK, this, this.setGoodNum, [1]);
            this._sellTip.scene.close_btn.on(Laya.Event.CLICK, this, this.closeSellTip);
            this._sellTip.scene.sell_btn.on(Laya.Event.CLICK, this, this.storeGoodDel);
            this.initGoodInfo();
        }
        closeSellTip() {
            this.tweenHide();
        }
        initGoodInfo() {
            var good_info = dataGlobal.getInstance().userGoodInfo[this._id];
            this._num = Math.floor((Math.floor(good_info.num) / 2)) < 1 ? 1 : Math.floor((Math.floor(good_info.num) / 2));
            this._sellTip.scene.tot_num.text = 'X' + this._num;
            this._good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[this._id];
            let index = this._good_info.pic.lastIndexOf("/");
            var _skin = this._good_info.pic.substring(index + 1, this._good_info.pic.length);
            this._sellTip.scene.gicon.graphics.drawTexture(Laya.loader.getRes("main/" + _skin + ".png"));
            this._sellTip.scene.gdescribe.text = this._good_info.info;
            this._sellTip.scene.tot_price.text = Math.floor(this._good_info.num) * Math.floor(this._num) + '';
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
            this._sellTip.scene.tot_num.text = 'X' + this._num;
            this._sellTip.scene.tot_price.text = Math.floor(this._good_info.num) * Math.floor(this._num) + '';
        }
        storeGoodDel() {
            let tmp_http = httpJson.getInstance();
            let tmp_data = {
                'a': "store_good_del",
                'm': "store",
                'd': {
                    'good_id': this._id,
                    'num': this._num
                },
                'code': 1
            };
            tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
            this.closeSellTip();
        }
    }

    class exchangeView {
        constructor() {
        }
        onShowExchange() {
            this._exchangeCom = new exchangeIndex;
            this._exchangeCom.onShowexchange();
        }
        initExchangeList() {
            this._exchangeCom.initExchangeList();
        }
        sendGood(data) {
        }
        setLotteryList() {
        }
        clickexchangeItem(id) {
        }
        getLotteryInfo() {
        }
        showexchangeTime() {
        }
        closeexchange() {
            this._exchangeCom.closeexchange();
        }
        showBuyTip(id) {
            this._tradeingHome = new tradeingHome;
            this._tradeingHome.showSellTip(id);
        }
        showSellTip(id) {
            this._exchangeSellCom = new exchangeSellTip;
            this._exchangeSellCom.showSellTip(id);
        }
    }

    class exchangeNetwork {
        constructor() {
        }
        ExchangeInfoBak(data) {
            data = {
                "ga": "exchange_info_bak",
                "code": 1,
                "gd": {
                    "type": "crops",
                    "data_info": [
                        {
                            "id": "bouquet3",
                            "price": "1.884"
                        },
                        {
                            "id": "bouquet3",
                            "price": "1.884"
                        },
                    ]
                }
            };
            data = data.gd;
            dataGlobal.getInstance().setExchangeInfo(data);
            var good_arr = [];
            for (var i in data.data_info) {
                var tmp_arr = {
                    'id': data.data_info[i].id,
                    'price': data.data_info[i].price
                };
                good_arr.push(tmp_arr);
            }
            dataGlobal.getInstance().setMarketInfo(good_arr);
            exchangeController.getInstance().initExchangeList();
        }
    }

    class exchangeController {
        constructor() {
            this._network = new exchangeNetwork;
            Laya.stage.on(NETWORKEVENT.EXCHANGEINFOBAK, this, this._network.ExchangeInfoBak);
        }
        static getInstance() {
            if (exchangeController._instance == null) {
                exchangeController._instance = new exchangeController;
            }
            return exchangeController._instance;
        }
        onShowExchange() {
            if (this._exchangeView == null) {
                this._exchangeView = new exchangeView;
            }
            this._exchangeView.onShowExchange();
        }
        initExchangeList() {
            if (this._exchangeView) {
                this._exchangeView.initExchangeList();
            }
        }
        showBuyTip(id) {
            if (this._exchangeView) {
                this._exchangeView.showBuyTip(id);
            }
        }
        showSellTip(id) {
            if (this._exchangeView) {
                this._exchangeView.showSellTip(id);
            }
        }
    }

    class rankIndex extends baseWindow {
        constructor() {
            super();
            this._rankItem = {};
        }
        onShowRank() {
            this._rankIndex = new ui.rank.rankUI;
            this._rankIndex.name = 'rankIndex';
            this._rankIndex.pivot(this._rankIndex.width / 2, this._rankIndex.height / 2);
            this.addChild(this._rankIndex);
            this.tweenShow();
            this._rankIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeRank);
            this._rankIndex.scene.item_all.on(Laya.Event.CLICK, this, function () {
                if (this._type != '1') {
                    this.switchItem('1');
                }
            }.bind(this));
            this._rankIndex.scene.item_flower.on(Laya.Event.CLICK, this, function () {
                if (this._type != '2') {
                    this.switchItem('2');
                    this.SecondFrame();
                }
            }.bind(this));
            this.switchItem('1');
            this.firstFrame();
        }
        switchItem(str) {
            this._type = str;
            this._rankIndex.scene.item_all.skin = 'warehouse/btn_biaoqian2.png';
            this._rankIndex.scene.item_flower.skin = 'warehouse/btn_biaoqian2.png';
            this._rankIndex.scene.item_all.labelColors = '#7D4815';
            this._rankIndex.scene.item_flower.labelColors = '#7D4815';
            this._rankIndex.scene.item_all_biao.visible = false;
            this._rankIndex.scene.item_flower_biao.visible = false;
            this._rankIndex.scene.n1box.visible = false;
            this._rankIndex.scene.n2box.visible = false;
            if (this._type == '1') {
                this._rankIndex.scene.item_all.skin = 'warehouse/btn_biaoqian1.png';
                this._rankIndex.scene.item_all.labelColors = '#fff';
                this._rankIndex.scene.item_all_biao.visible = true;
                this._rankIndex.scene.n1box.visible = true;
            }
            else if (this._type == '2') {
                this._rankIndex.scene.item_flower.skin = 'warehouse/btn_biaoqian1.png';
                this._rankIndex.scene.item_flower.labelColors = '#fff';
                this._rankIndex.scene.item_flower_biao.visible = true;
                this._rankIndex.scene.n2box.visible = true;
            }
        }
        closeRank() {
            this.tweenHide();
        }
        firstFrame() {
            var container = this._rankIndex.scene.n1box;
            var count_time = container.getChildByName('countdown');
            count_time.text = '21:09:11';
            var taskList = container.getChildByName('goods_list');
            this.taskListInit(taskList);
            var reward = container.getChildByName('reward');
            reward.text = '222 ONES';
            var taskDetailsList = container.getChildByName('details_list');
            this.detailsListInit(taskDetailsList);
            var prize1 = container.getChildByName('prize1');
            var prize2 = container.getChildByName('prize2');
            var prize3 = container.getChildByName('prize3');
            prize1.text = '9999 ONES';
            prize2.text = '999 ONES';
            prize3.text = '99 ONES';
            var prize_winner1 = container.getChildByName('prize_winner1');
            var prize_winner2 = container.getChildByName('prize_winner2');
            var prize_winner3 = container.getChildByName('prize_winner3');
            prize_winner1.text = '小吴';
            prize_winner2.text = 'Taddy';
            prize_winner3.text = '99dcew';
        }
        SecondFrame() {
        }
        taskListInit(taskList) {
            taskList.dataSource = [];
        }
        detailsListInit(taskDetailsList) {
            taskDetailsList.dataSource = [];
        }
    }

    class rankView {
        constructor() {
        }
        onShowRank() {
            this._rankCom = new rankIndex;
            this._rankCom.onShowRank();
        }
        initMarketGoodList() {
        }
        sendGood(data) {
        }
        setLotteryList() {
        }
        clickrankItem(id) {
        }
        getLotteryInfo() {
        }
        showrankTime() {
        }
        closerank() {
        }
    }

    class exchangeNetwork$1 {
        constructor() {
        }
        MarketInfoBak(data) {
            console.log("exchangeNetwork", '获取市场的信息');
            data = {
                "ga": "market_info_bak",
                "code": 1,
                "gd": {
                    "store_id": "45",
                    "num": "5",
                    "data_info": [
                        {
                            "good_id": "bouquet3",
                            "price": "1.884",
                            "num": "105",
                            'seller': 'xsefrty',
                            'good_name': '花卉',
                        },
                        {
                            "good_id": "bouquet1",
                            "price": "2.23421",
                            "num": "145",
                            'seller': 'xsefrty',
                            'good_name': '花卉',
                        },
                        {
                            "good_id": "bouquet2",
                            "price": "1.884",
                            "num": "105",
                            'seller': 'xsefrty',
                            'good_name': '花卉',
                        },
                        {
                            "good_id": "bouquet5",
                            "price": "2.23421",
                            "num": "111",
                            'seller': 'xsefrty',
                            'good_name': '花卉',
                        },
                        {
                            "good_id": "bouquet4",
                            "price": "14",
                            "num": "1",
                            'seller': 'xsefrty',
                            'good_name': '花卉',
                        }
                    ]
                }
            };
            data = data.gd;
            dataGlobal.getInstance().setMarketInfo(data);
            var good_arr = [];
            for (var i in data.data_info) {
                var tmp_arr = {
                    'id': data.data_info[i].good_id,
                    'num': data.data_info[i].num,
                    'price': data.data_info[i].price,
                };
                good_arr.push(tmp_arr);
            }
            dataGlobal.getInstance().setMarketInfo(good_arr);
            rankController.getInstance().initMarketGoodList();
        }
    }

    class rankController {
        constructor() {
            this._network = new exchangeNetwork$1;
        }
        static getInstance() {
            if (rankController._instance == null) {
                rankController._instance = new rankController;
            }
            return rankController._instance;
        }
        onShowRank() {
            if (this._rankView == null) {
                this._rankView = new rankView;
            }
            this._rankView.onShowRank();
        }
        initMarketGoodList() {
            if (this._rankView) {
                this._rankView.initMarketGoodList();
            }
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
    resConfig.animalRes = [];
    resConfig.fontRes = [
        { url: resConfig._url + 'res/atlas/font.atlas', type: Laya.Loader.JSON, sign: 'font' },
        { url: resConfig._url + 'res/atlas/font.png', type: Laya.Loader.IMAGE },
    ];
    resConfig.farm = [
        { url: resConfig._url + 'res/atlas/avatar.atlas', type: Laya.Loader.ATLAS, sign: 'avatar' },
        { url: resConfig._url + 'res/atlas/avatar.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/resource/crops.atlas', type: Laya.Loader.ATLAS, sign: 'crops' },
        { url: resConfig._url + 'res/atlas/resource/crops.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/animalBones/niu.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/animalBones/yang.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/base.atlas', type: Laya.Loader.ATLAS, sign: 'base' },
        { url: resConfig._url + 'res/atlas/base.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/product.atlas', type: Laya.Loader.ATLAS, sign: 'product' },
        { url: resConfig._url + 'res/atlas/product.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/main.atlas', type: Laya.Loader.ATLAS, sign: 'main' },
        { url: resConfig._url + 'res/atlas/farm.atlas', type: Laya.Loader.ATLAS, sign: 'farm' },
        { url: resConfig._url + 'res/atlas/warehouse.atlas', type: Laya.Loader.ATLAS, sign: 'warehouse' },
        { url: resConfig._url + 'res/atlas/order.atlas', type: Laya.Loader.ATLAS, sign: 'order' },
        { url: resConfig._url + 'res/atlas/factory.atlas', type: Laya.Loader.ATLAS, sign: 'factory' },
        { url: resConfig._url + 'res/atlas/character.atlas', type: Laya.Loader.ATLAS, sign: 'character' },
        { url: resConfig._url + 'res/atlas/sleep.atlas', type: Laya.Loader.ATLAS, sign: 'sleep' },
        { url: resConfig._url + 'res/atlas/sleep.atlas', type: Laya.Loader.ATLAS, sign: 'sleep' },
        { url: resConfig._url + 'res/atlas/main.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/main1.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/sleep.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/main2.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/farm.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/farm1.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/warehouse.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/order.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/factory.png', type: Laya.Loader.IMAGE },
        { url: resConfig._url + 'res/atlas/character.png', type: Laya.Loader.IMAGE },
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
        setBitmapFont() {
            this.mBitmapFont = new Laya.BitmapFont();
            resManger.getInstance().addGroupRes(resConfig.fontRes);
            resManger.getInstance().startLoad(GAMEEVENT.ONPROGRESSFONT, GAMEEVENT.ONPROGRESSFONT);
            Laya.stage.on(GAMEEVENT.ONLOADCOMPLETEFARM, this, this.onResCompleteFont);
        }
        onResCompleteFont() {
            Laya.Text.registerBitmapFont("userFont", this.mBitmapFont);
        }
        userFont() {
            return this.mBitmapFont;
        }
    }

    var Templet = Laya.Templet;
    var Event = Laya.Event;
    class animalIndex {
        constructor() {
            this.mStartX = 400;
            this.mStartY = 500;
            this.mActionIndex = 0;
            this.mCurrIndex = 0;
            this.mCurrSkinIndex = 0;
            resManger.getInstance().addGroupRes(resConfig.animalRes);
            resManger.getInstance().startLoad(GAMEEVENT.ONPROGRESSANIMAL, GAMEEVENT.ONLOADCOMPLETEANIMAL);
        }
        initAnimalAni(data) {
            for (var i in data) {
                console.log(data[i], i);
                if (data[i].is_lock) {
                    this.mAniPath = "animal/niu.sk";
                    this.mFactory = new Templet();
                    this.mFactory.on(Event.COMPLETE, this, this.parseComplete);
                    this.mFactory.loadAni(this.mAniPath);
                }
                else {
                }
            }
        }
        parseComplete() {
            this.mArmature = this.mFactory.buildArmature(1);
            this.mArmature.x = this.mStartX;
            this.mArmature.y = this.mStartY;
            this.mArmature.scale(0.5, 0.5);
            Laya.stage.addChild(this.mArmature);
            this.mArmature.on(Event.STOPPED, this, this.completeHandler);
            this.play();
        }
        completeHandler() {
            this.play();
        }
        play() {
            this.mCurrIndex++;
            if (this.mCurrIndex >= this.mArmature.getAnimNum()) {
                this.mCurrIndex = 0;
            }
            this.mArmature.play(this.mCurrIndex, false);
        }
    }

    class orderIndex$1 extends baseWindow {
        constructor() {
            super();
            this._orderItem = {};
        }
        onShowOrder() {
            this._orderIndex = new ui.materialorder.materialOrderUI();
            this._orderIndex.name = 'orderIndex';
            this._orderIndex.pivot(this._orderIndex.width / 2, this._orderIndex.height / 2);
            this.addChild(this._orderIndex);
            this.tweenShow();
            this._orderIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeOrder);
            this._materialList = this._orderIndex.scene.material_list;
            this._materialList.visible = false;
            this.getMaterialInfo();
        }
        getMaterialInfo() {
            Laya.stage.event(NETWORKEVENT.MATERIALINFOBAK);
        }
        sendGood(data) {
            Laya.stage.event(NETWORKEVENT.SENDGOODMATERIALBAK);
        }
        setMaterialList() {
            var material_info = dataJson.getInstance().GET_SYS_MATERIAL_INFO();
            var grade = 6;
            this._materialList.dataSource = [];
            for (var i in material_info) {
                var _materialItem = {
                    id: i,
                    status: '',
                    order_list: {
                        visible: false
                    },
                    locked_text: {
                        text: "",
                        visible: false
                    },
                    locked_bg: {
                        visible: false
                    },
                    lock_btn: {
                        visible: false,
                    },
                    lock_num: {
                        visible: false,
                        text: ""
                    },
                    timer: {
                        visible: false
                    },
                    tips_text: {
                        text: "",
                        visible: false
                    },
                    getnow_btn: {
                        visible: false
                    },
                    getnow_num: {
                        text: '',
                        visible: false
                    },
                };
                if (grade < Number(material_info[i].grade)) {
                    _materialItem.status = "0";
                    _materialItem.locked_bg.visible = true;
                    _materialItem.locked_text.text = "到达" + material_info[i].grade + "级可解锁";
                    _materialItem.locked_text.visible = true;
                    _materialItem.locked_text.visible = true;
                }
                else {
                    if (material_info[i].is_lock == 1) {
                        _materialItem.status = "1";
                        if (material_info[i].t > 0) {
                            _materialItem.status = "3";
                            _materialItem.getnow_btn.visible = true;
                            _materialItem.timer.visible = true;
                            _materialItem.tips_text.visible = true;
                            _materialItem.tips_text.text = material_info[i].t;
                            _materialItem.getnow_num.visible = true;
                            _materialItem.getnow_num.text = material_info[i].get_num;
                            materialController.getInstance().model.setOrderTime(material_info[i].t, i);
                        }
                    }
                    else {
                        _materialItem.status = "2";
                        _materialItem.lock_btn.visible = true;
                        _materialItem.lock_num.visible = true;
                        _materialItem.lock_num.text = material_info[i].lock_num;
                    }
                }
                this._materialList.addItem(_materialItem);
                this._materialList.visible = true;
                this._materialList.renderHandler = new Laya.Handler(this, this.setGoodsList, [i]);
            }
            materialController.getInstance().model.setOrderTimeout();
        }
        setGoodsList(id) {
            var material_info = dataJson.getInstance().GET_SYS_MATERIAL_INFO();
            for (var i in this._materialList.cells) {
                var _index = Number(i);
                var _cell = this._materialList.getCell(_index);
                var _dataSource = this._materialList.getItem(_index);
                var _info = material_info[_dataSource.id];
                if (_dataSource.status === "1") {
                    this.renderMaterialOrder(_cell, _dataSource);
                }
            }
        }
        renderMaterialOrder(_cell, _dataSource) {
            var materialOrderInfo = dataJson.getInstance().GET_SYS_MATERIAL_ORDERLIST()[_dataSource.id];
            var _orderList = _cell.getChildByName("order_list");
            _orderList.dataSource = [];
            if (materialOrderInfo.status == 0) {
                for (var i in materialOrderInfo.goods) {
                    var _item = {
                        lid: {
                            visible: false
                        },
                        good_icon: {
                            skin: "",
                            visible: false
                        },
                        good_num: {
                            text: "",
                            visible: false
                        },
                        already: {
                            visible: false
                        }
                    };
                    if (materialOrderInfo.goods[i].status == 1) {
                        _item.already.visible = true;
                        _item.lid.visible = true;
                    }
                    else {
                        _item.good_icon.skin = 'product/' + materialOrderInfo.goods[i].id + '.png';
                        _item.good_icon.visible = true;
                        _item.good_num.text = '×' + materialOrderInfo.goods[i].num;
                        _item.good_num.visible = true;
                    }
                    _orderList.addItem(_item);
                }
                _orderList.visible = true;
                _orderList.renderHandler = new Laya.Handler(this, this.bindOrderEvent, [materialOrderInfo]);
            }
            else {
            }
        }
        bindOrderEvent(info, cell, index) {
            cell.on(Laya.Event.CLICK, this, this.onCellClick, [cell, index, info]);
        }
        onCellClick(cell, index, info) {
            var x = cell.x + cell.parent.parent.x;
            var y = cell.y + cell.parent.parent.y;
            materialController.getInstance().showOrderTip(x, y, info, index);
        }
        closeOrder() {
            this.tweenHide();
        }
        showOrderTime(id) {
            var timeStr = materialController.getInstance().model.thisTime[id];
            for (var i in this._materialList.cells) {
                var _index = Number(i);
                if (this._materialList.getItem(_index).id == id) {
                    var _item = this._materialList.getItem(_index);
                    _item.tips_text.text = globalFun.getInstance().getCountDown(timeStr);
                    this._materialList.setItem(_index, _item);
                }
            }
        }
    }

    class orderTip extends baseTips {
        constructor() {
            super();
        }
        showOrderTip(x, y, info, index) {
            this._orderTip = new ui.materialorder.orderTipsUI;
            this._orderTip.x = x - CONST.DESIGNSTAGEWIDTH / 2 - 45;
            this._orderTip.y = (y - CONST.DESIGNSTAGEHEIGHT / 2) * CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
            this.addChild(this._orderTip);
            this.showTip();
            console.log(info, index);
            var need_num = info.goods[index].num;
            console.log(need_num);
            var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()['hh6003'];
            this._orderTip.scene.get_btn.off(Laya.Event.CLICK, this, this.getProduct.bind(this));
            this._orderTip.scene.getChildByName("num").text = good_info.num + '/' + need_num;
            this._orderTip.scene.good_icon.skin = "product/" + info.goods[index].id + '.png';
            if (good_info.num === need_num || good_info.num > need_num) {
                this._orderTip.scene.getChildByName("num").color = "#0eb544";
                var _status = 'load';
            }
            if (good_info.num < need_num) {
                this._orderTip.scene.getChildByName("num").color = "#ee2e45";
                var _status = 'purchase';
            }
            this._orderTip.scene.get_btn.on(Laya.Event.CLICK, this, this.getProduct.bind(this), [_status, info, index]);
            this.modal.on(Laya.Event.CLICK, this, this.hideLayer);
        }
        getProduct(_status, info, index) {
            if (_status == 'load') {
                console.log('进行装载');
            }
            else {
                tipController.getInstance();
                var _info = {
                    "skin": "product/" + info.goods[index].id + '.png',
                    "num_txt": info.goods[index].num,
                    "price": '11'
                };
                console.log(_info);
                var confirm_fun = function () {
                };
                Laya.stage.event(GAMEEVENT.BASETIPS, ["商品不足", '从工厂和农场生产商品，或者你现在可以用钻石购买', _info, confirm_fun]);
                this.hideLayer();
            }
        }
    }

    class materialView {
        constructor() {
        }
        onShowOrder() {
            this._materialCom = new orderIndex$1;
            this._materialCom.onShowOrder();
        }
        sendGood(data) {
            this._materialCom.sendGood(data);
        }
        setMaterialList() {
            this._materialCom.setMaterialList();
        }
        clickOrderItem(id) {
        }
        getLotteryInfo() {
        }
        showOrderTime(id) {
            this._materialCom.showOrderTime(id);
        }
        showOrderTip(x, y, info, index) {
            var _materialTip = new orderTip();
            _materialTip.showOrderTip(x, y, info, index);
        }
        closeOrder() {
            this._materialCom.closeOrder();
        }
    }

    class orderNetwork$2 {
        constructor() {
        }
        MaterialInfoBak(data) {
            data = {
                "ga": "material_info_bak",
                "gd": [
                    {
                        "aterial_id": "material101",
                        "task_uid": "456489646464",
                        "task_uid_pic": "aaa",
                        "type": "1",
                        "is_ok": "1"
                    },
                    {
                        "aterial_id": "material201",
                        "task_uid": "456489646464",
                        "task_uid_pic": "aaa",
                        "type": "1",
                        "is_ok": "1"
                    },
                    {
                        "aterial_id": "material301",
                        "task_uid": "456489646464",
                        "task_uid_pic": "aaa",
                        "type": "1",
                        "is_ok": "1"
                    },
                ],
                "code": 1
            };
            data = data.gd;
            dataGlobal.getInstance().setMaterialInfo(data, true);
            materialController.getInstance().sendGood(data);
        }
        SendGoodBak(data) {
            data = {
                "ga": "send_good_material_bak", "code": 1,
                "gd": {
                    "hh6001": { "id": "hh6001", "num": 1 },
                    "hh6002": { "id": "hh6002", "num": 10 },
                    "hh6003": { "id": "hh6003", "num": 10 },
                    "hh6004": { "id": "hh6004", "num": 10 }
                }
            };
            data = data.gd;
            dataGlobal.getInstance().setUserGoodInfo(data);
            materialController.getInstance().setMaterialList();
        }
        MaterialActBak(data) {
            data = data.gd;
            var tmp_arr = [];
            tmp_arr.push(data);
            dataGlobal.getInstance().setlotteryInfo(tmp_arr);
            infoController.getInstance().getUserInfo();
        }
    }

    class materialModel {
        constructor() {
            this._material_id = '';
            this.thisTime = {};
        }
        setOrderTime(time, id) {
            this.thisTime[id] = time;
        }
        setOrderTimeout() {
            if (this._timer) {
                return;
            }
            this._timer = new Laya.Timer();
            this._timer.loop(1000, this, this.timerFun);
        }
        timerFun() {
            for (var id in this.thisTime) {
                if (this.thisTime[id] <= 0) {
                    return;
                }
                this.thisTime[id]--;
                materialController.getInstance().showOrderTime(id);
            }
        }
        clearOrderTime() {
            if (this._timer) {
                this._timer.clear(this, this.timerFun);
            }
        }
    }

    class materialController {
        constructor() {
            this.model = new materialModel;
            this._network = new orderNetwork$2;
            Laya.stage.on(NETWORKEVENT.MATERIALINFOBAK, this, this._network.MaterialInfoBak);
            Laya.stage.on(NETWORKEVENT.SENDGOODMATERIALBAK, this, this._network.SendGoodBak);
        }
        static getInstance() {
            if (materialController._instance == null) {
                materialController._instance = new materialController;
            }
            return materialController._instance;
        }
        onShow() {
            if (this._materialview == null) {
                this._materialview = new materialView;
            }
            this._materialview.onShowOrder();
        }
        sendGood(data) {
            if (this._materialview == null) {
                this._materialview = new materialView;
            }
            this._materialview.sendGood(data);
        }
        setMaterialList() {
            this._materialview.setMaterialList();
        }
        showOrderTip(x, y, info, index) {
            this._materialview.showOrderTip(x, y, info, index);
        }
        showOrderTime(id) {
            this._materialview.showOrderTime(id);
        }
    }

    class animalIndex$1 extends baseTips {
        constructor() {
            super();
        }
        onShowAnimal(type) {
            this._currentType = type;
            this._animalScene = new ui.animal.animalProductionUI;
            this._animalScene.pivotX = 0.5 * this._animalScene.width;
            this._animalScene.pivotY = 0.5 * this._animalScene.height;
            this.addChild(this._animalScene);
            this.showLayer();
            this._animalScene.scene.close_btn.on(Laya.Event.CLICK, this, this.closeScene);
            this._animalList = this._animalScene.scene.product_list;
            this.initScene();
        }
        closeScene() {
            this.hideLayer();
        }
        initScene() {
            if (this._currentType == 'chicken') {
                this._animalScene.scene.gname.text = "鸡窝";
            }
            if (this._currentType == 'cow') {
                this._animalScene.scene.gname.text = "牛棚";
            }
            if (this._currentType == 'pig') {
                this._animalScene.scene.gname.text = "猪窝";
            }
            if (this._currentType == 'sheep') {
                this._animalScene.scene.gname.text = "羊棚";
            }
            Laya.stage.event(NETWORKEVENT.ANIMALPRODUCTINFO);
            var feednormal = dataGlobal.getInstance().userGoodInfo[this._currentType + "feed"];
            var feedtop = dataGlobal.getInstance().userGoodInfo[this._currentType + "feedtop"];
            this._animalScene.scene.feed_type.skin = "product/" + this._currentType + "Feed1.png";
            this._animalScene.scene.top_feed_icon.skin = "product/" + this._currentType + "Feed1.png";
            this._animalScene.scene.feed_num.text = feednormal.num;
            this._animalScene.scene.top_feed_num.text = feedtop.num;
            this._feedNormal = this._animalScene.scene.feed_type;
            this._feedNormalX = this._feedNormal.x;
            this._feedNormalY = this._feedNormal.y;
            this._feedTop = this._animalScene.scene.top_feed_icon;
            this._feedTopX = this._feedTop.x;
            this._feedTopY = this._feedTop.y;
            this._feedNormal.on(Laya.Event.MOUSE_DOWN, this, this.onStartDragFeed);
            this._feedNormal.on(Laya.Event.MOUSE_UP, this, this.onEndDragFeed);
        }
        showAnimalFactory(_type) {
            if (_type == 'animal_product_feed') {
                this.feedBack();
                this.resetFeedNum();
            }
            var data = dataGlobal.getInstance().animalProductList[String(this._currentType)];
            var _poroductSkin = '';
            if (this._currentType == "chicken") {
                _poroductSkin = "product/Egg.png";
            }
            if (this._currentType == "cow") {
                _poroductSkin = "product/Milk.png";
            }
            if (this._currentType == "sheep") {
                _poroductSkin = "product/Wool.png";
            }
            if (this._currentType == "pig") {
                _poroductSkin = "product/Milk.png";
            }
            this._animalList.dataSource = [];
            for (var i in data) {
                var _item = {
                    id: i,
                    innerBox: {
                        skin: "",
                        visible: true
                    },
                    ani: {
                        visible: true
                    },
                    unlock: {
                        visible: false
                    },
                    outbox_1: {
                        visible: true
                    },
                    outbox_2: {
                        visible: true
                    },
                    unlock_num: {
                        text: "",
                        visible: false
                    },
                    speedUp_box: {
                        visible: false
                    },
                    state: ""
                };
                if (data[i].unlock == "1") {
                    if (data[i].state == '0') {
                        _item.innerBox.visible = false;
                    }
                    if (data[i].state == '1') {
                        _item.innerBox.visible = true;
                        _item.innerBox.skin = "product/2_Food.png";
                    }
                    if (data[i].state == '2') {
                        _item.innerBox.visible = true;
                        _item.innerBox.skin = _poroductSkin;
                    }
                }
                else {
                    _item.innerBox.visible = false;
                    _item.ani.visible = false;
                    _item.outbox_2.visible = false;
                    _item.outbox_1.visible = false;
                    _item.unlock.visible = true;
                    _item.unlock_num.visible = true;
                    _item.unlock_num.text = data[i].locknum;
                }
                _item.state = data[i].state;
                this._animalList.addItem(_item);
            }
            this._animalList.renderHandler = new Laya.Handler(this, this.initListItem);
        }
        resetFeedNum() {
            var feednormal = dataGlobal.getInstance().userGoodInfo[this._currentType + "feed"];
            var feedtop = dataGlobal.getInstance().userGoodInfo[this._currentType + "feedtop"];
            this._animalScene.scene.feed_num.text = feednormal.num;
            this._animalScene.scene.top_feed_num.text = feedtop.num;
        }
        onStartDragFeed() {
            this._feedNormal.startDrag(null, false, 100);
            this._feedNormal.mouseThrough = true;
        }
        onEndDragFeed() {
            this._feedNormal.stopDrag();
            var _topY = this._animalList.y;
            var _bottomY = this._animalList.y + this._animalList.height;
            if (this._feedNormal.y < _bottomY && this._feedNormal.y > _topY) {
                var _baseX = this._animalList.x;
                for (var i in this._animalList.cells) {
                    var _cellLeft = this._animalList.cells[i].x + _baseX;
                    var _cellRight = _cellLeft + this._animalList.cells[i].width;
                    if (this._feedNormal.x < _cellRight && this._feedNormal.x > _cellLeft) {
                        this.feedingDiet(i);
                        return;
                    }
                }
            }
            this.feedBack();
        }
        feedingDiet(index) {
            console.log(index);
            var _index = Number(index) + 1;
            var id = 'slot_' + _index;
            var data = dataGlobal.getInstance().animalProductList[String(this._currentType)][id];
            if (data.unlock == '0' || data.state != '0') {
                console.log('back');
                this.feedBack();
                return;
            }
            Laya.Tween.to(this._feedNormal, { scaleX: 1.3, scaleY: 1.3 }, 150, null, null, null, false);
            Laya.Tween.to(this._feedNormal, { scaleX: 0.9, scaleY: 0.9 }, 150, null, null, 150, false);
            Laya.Tween.to(this._feedNormal, { scaleX: 1.4, scaleY: 1.4 }, 150, null, null, 300, false);
            Laya.Tween.to(this._feedNormal, { scaleX: 1, scaleY: 1 }, 150, null, Laya.Handler.create(this, function () {
                this.feeding(id);
            }), 450, false);
        }
        feeding(id) {
            console.log(id);
            Laya.stage.event(NETWORKEVENT.ANIMALPRODUCTFEED);
        }
        feedBack() {
            this._feedNormal.x = this._feedNormalX;
            this._feedNormal.y = this._feedNormalY;
            this._feedTop.x = this._feedTopX;
            this._feedTop.y = this._feedTopY;
        }
        initListItem(cell, index) {
            var data = dataGlobal.getInstance().animalProductList[String(this._currentType)][cell.dataSource.id];
            var _state = '';
            var _scale = 0;
            var _path = "res/animalBones/niu.sk";
            var _staticAnimal = "";
            if (this._currentType == "chicken") {
                _path = "res/animalBones/niu.sk";
                _staticAnimal = 'base/2_Hide.png';
                _scale = 0.38;
            }
            if (this._currentType == "cow") {
                _path = "res/animalBones/niu.sk";
                _staticAnimal = 'base/1_Hide.png';
                _scale = 0.38;
            }
            if (this._currentType == "sheep") {
                _path = "res/animalBones/yang.sk";
                _staticAnimal = 'base/3_Hide.png';
                _scale = 0.64;
            }
            if (this._currentType == "pig") {
                _scale = 0.5;
                _path = "res/animalBones/niu.sk";
                _staticAnimal = 'base/3_Hide.png';
            }
            if (data.unlock == "0") {
                cell.getChildByName('unlock').getChildByName('unlock_icon').skin = _staticAnimal;
                cell.on(Laya.Event.CLICK, this, this.lockSlot, [data, _staticAnimal]);
            }
            if (data.state == '0') {
                _state = 'stand';
            }
            if (data.state == '1') {
                _state = 'eat';
            }
            if (data.state == '2') {
                _state = 'full';
            }
            if (cell.getChildByName('ani').getChildByName("skeleton")) {
                cell.getChildByName('ani').getChildByName("skeleton").play(_state, true);
                return;
            }
            let templetStone = new Laya.Templet();
            templetStone.on(Laya.Event.COMPLETE, this, () => {
                var skeleton;
                skeleton = templetStone.buildArmature(1);
                skeleton.pos(100, 205);
                skeleton.scaleX = _scale;
                skeleton.scaleY = _scale;
                skeleton.showSkinByIndex(0);
                skeleton.play(_state, true);
                skeleton.name = 'skeleton';
                cell.getChildByName('ani').addChild(skeleton);
            });
            templetStone.loadAni(_path);
            cell.getChildByName("innerBox").on(Laya.Event.CLICK, this, this.clickInnerBox, [cell, index]);
        }
        lockSlot(data, _staticAnimal) {
            tipController.getInstance();
            var _info = {
                "skin": _staticAnimal,
                "price": data.locknum
            };
            var confirm_fun = function () {
                this.close();
                Laya.stage.event(NETWORKEVENT.ANIMALSlOTLOCK);
            };
            Laya.stage.event(GAMEEVENT.BASETIPS, ["开启卡槽", '确认花费' + data.locknum + '钻石开启位置', _info, confirm_fun]);
        }
        clickInnerBox(cell, index) {
            var data = cell.dataSource;
            if (data.state == '2') {
                console.log('收获', index, data.id);
                Laya.stage.event(NETWORKEVENT.ANIMALPRODUCTHARVEST);
            }
        }
    }

    class animalView {
        constructor() {
        }
        onShowAnimal(type) {
            if (this._animalCom == null) {
                this._animalCom = new animalIndex$1;
            }
            this._animalCom.onShowAnimal(type);
        }
        showAnimalFactory(_type) {
            this._animalCom.showAnimalFactory(_type);
        }
    }

    class factoryNetwork$1 {
        constructor() {
        }
        SendAnimalFactoryBak(data) {
            data = {
                "ga": "animal_product_info",
                "gd": {
                    "type": "sheep",
                    "slots": {
                        "slot_1": {
                            "id": "slot_1",
                            "unlock": "1",
                            "state": "0",
                            "time": "10000",
                            "timepass": "200",
                            "locknum": "100"
                        },
                        "slot_2": {
                            "id": "slot_2",
                            "unlock": "1",
                            "state": "1",
                            "time": "10000",
                            "timepass": "200",
                            "locknum": "100"
                        },
                        "slot_3": {
                            "id": "slot_3",
                            "unlock": "1",
                            "state": "2",
                            "time": "10000",
                            "timepass": "200",
                            "locknum": "100"
                        },
                        "slot_4": {
                            "id": "slot_4",
                            "unlock": "1",
                            "state": "2",
                            "time": "10000",
                            "timepass": "200",
                            "locknum": "100"
                        },
                        "slot_5": {
                            "id": "slot_5",
                            "unlock": "0",
                            "state": "1",
                            "time": "10000",
                            "timepass": "200",
                            "locknum": "100"
                        },
                        "slot_6": {
                            "id": "slot_6",
                            "unlock": "0",
                            "state": "1",
                            "time": "10000",
                            "timepass": "200",
                            "locknum": "100"
                        },
                    }
                }, "code": 1
            };
            dataGlobal.getInstance().setAnimalProductInfo(data.gd);
            animalController.getInstance().showAnimalFactory(data.ga);
        }
        HarvestAnimalFactory(data) {
            data = {
                "ga": "animal_product_harvest",
                "gd": {
                    "type": "sheep",
                    "info": {
                        "id": "slot_3",
                        "unlock": "1",
                        "state": "0",
                        "time": "10000",
                        "timepass": "200",
                        "locknum": "100"
                    }
                },
                "code": 1
            };
            dataGlobal.getInstance().setAnimalProductInfo(data.gd);
            animalController.getInstance().showAnimalFactory(data.ga);
        }
        FeedAnimalFactory(data) {
            data = {
                "ga": "animal_product_feed",
                "gd": {
                    "type": "sheep",
                    "info": {
                        "id": "slot_1",
                        "unlock": "1",
                        "state": "1",
                        "time": "10000",
                        "timepass": "200",
                        "locknum": "100"
                    }
                },
                "code": 1
            };
            var tmp_arr = [{ 'id': "sheepfeed", 'num': '9' }];
            dataGlobal.getInstance().setUserGoodInfo(tmp_arr);
            dataGlobal.getInstance().setAnimalProductInfo(data.gd);
            animalController.getInstance().showAnimalFactory(data.ga);
        }
        AnimalSlotLock(data) {
            data = {
                "ga": "animal_slot_lock",
                "gd": {
                    "type": "sheep",
                    "info": {
                        "id": "slot_5",
                        "unlock": "1",
                        "state": "0",
                        "time": "10000",
                        "timepass": "200",
                        "locknum": "100"
                    }
                },
                "code": 1
            };
            dataGlobal.getInstance().setAnimalProductInfo(data.gd);
            animalController.getInstance().showAnimalFactory(data.ga);
        }
    }

    class animalController {
        constructor() {
            this._animalView = new animalView;
            this._network = new factoryNetwork$1;
            Laya.stage.on(NETWORKEVENT.ANIMALPRODUCTINFO, this, this._network.SendAnimalFactoryBak);
            Laya.stage.on(NETWORKEVENT.ANIMALPRODUCTHARVEST, this, this._network.HarvestAnimalFactory);
            Laya.stage.on(NETWORKEVENT.ANIMALPRODUCTFEED, this, this._network.FeedAnimalFactory);
            Laya.stage.on(NETWORKEVENT.ANIMALSlOTLOCK, this, this._network.AnimalSlotLock);
        }
        static getInstance() {
            if (animalController._instance == null) {
                animalController._instance = new animalController;
            }
            return animalController._instance;
        }
        onShowAnimal(type) {
            this._animalType = type;
            if (this._animalView == null) {
                this._animalView = new animalView;
            }
            this._animalView.onShowAnimal(type);
        }
        showAnimalFactory(_type) {
            this._animalView.showAnimalFactory(_type);
        }
    }

    var Event$1 = Laya.Event;
    class farmIndex extends baseScene {
        constructor() {
            super();
            this.mStartX = 400;
            this.mStartY = 500;
            this.mActionIndex = 0;
            this.mCurrIndex = 0;
            this.mCurrSkinIndex = 0;
            this.lastDistance = 0;
        }
        onShow(type) {
            if (this._farmIndex == null) {
                this._farmIndex = new ui.farm.farmIndexsceneUI();
                this._animalIndex = new animalIndex;
                this.width = this._farmIndex.width;
                this.height = this._farmIndex.height;
                this._farmIndex.name = 'farmIndex';
                this.setScale(this._farmIndex);
                this.loadSeedList();
                this.showInit();
                this.land_div = new Laya.Sprite;
                this.land_div.name = 'land_div';
                this.land_div.x = 12;
                this.land_div.y = 1079;
                this._farmIndex.addChild(this.land_div);
                this.getFarmLand();
                this.getFarmSeed();
            }
            if (type == 2) {
                this.tweenAlphaAdd(this._farmIndex, 'farmIndex', type);
            }
            else {
                this.tweenTranAdd(this._farmIndex, 'farmIndex', type, 'right');
            }
        }
        showInit() {
            this.landArr = {};
            this._farmIndex.scene.bg_kuan.on(Laya.Event.CLICK, this, this.cleanAllStatu);
            this._farmIndex.scene.building.on(Laya.Event.CLICK, this, this.onMenuClick, ['building']);
            this._farmIndex.scene.order.on(Laya.Event.CLICK, this, this.onMenuClick, ['order']);
            this._farmIndex.scene.email.on(Laya.Event.CLICK, this, this.onMenuClick, ['email']);
            this._farmIndex.scene.upgrade.on(Laya.Event.CLICK, this, this.onMenuClick, ['upgrade']);
            this._farmIndex.scene.exchange.on(Laya.Event.CLICK, this, this.onMenuClick, ['exchange']);
            this._farmIndex.scene.rank.on(Laya.Event.CLICK, this, this.onMenuClick, ['rank']);
            this._farmIndex.scene.material_box.on(Laya.Event.CLICK, this, this.onMenuClick, ['material_order']);
            this._farmIndex.scene.factory_btn.on(Laya.Event.CLICK, this, this.onMenuClick, ['factory']);
            this._materialbox = this._farmIndex.scene.material_box;
            this._material_1 = this._farmIndex.scene.material_1;
            this._material_2 = this._farmIndex.scene.material_2;
            this._material_3 = this._farmIndex.scene.material_3;
            this.cleanAllStatu();
            this.initMaterial();
            this.getAnimalInfo();
        }
        initMaterial() {
            var material_info = dataJson.getInstance().GET_SYS_MATERIAL_INFO();
            for (var i in material_info) {
                if (material_info[i].is_lock == 1) {
                    if (i == 'MATERIAL301' && material_info[i].t == 0) {
                        this._material_1.visible = true;
                        this.setBalloonAni(this._material_1, 'onbase');
                    }
                    if (i == 'MATERIAL302' && material_info[i].t == 0) {
                        this._material_2.visible = true;
                        this.setBalloonAni(this._material_2, 'onbase');
                    }
                    if (i == 'MATERIAL303' && material_info[i].t == 0) {
                        this._material_3.visible = true;
                        this.setBalloonAni(this._material_3, 'onbase');
                    }
                }
            }
        }
        setBalloonAni(_sprite, type) {
            if (type == 'onbase') {
            }
            if (type == 'flyout') {
            }
            if (type == 'flyin') {
            }
        }
        getAnimalInfo() {
            var data = dataGlobal.getInstance().animalInfo;
            for (var i in data) {
                if (data[i].is_lock) {
                    this.renderAnimalBones(data[i]);
                }
                else {
                    this.renderAnimalStatic(data[i]);
                }
            }
        }
        renderAnimalBones(data) {
            var _x = 0;
            var _y = 0;
            var _path = "";
            var _scale = 0.3;
            if (data.id == "chicken") {
                _x = 0;
                _y = 80;
                _path = "res/animalBones/niu.sk";
            }
            if (data.id == "cow") {
                _x = 150;
                _y = 0;
                _path = "res/animalBones/niu.sk";
            }
            if (data.id == "sheep") {
                _x = 300;
                _y = -80;
                _path = "res/animalBones/yang.sk";
                _scale = 0.5;
            }
            if (data.id == "pig") {
                _y = -160;
                _x = 450;
                _path = "res/animalBones/niu.sk";
            }
            let templetStone = new Laya.Templet();
            templetStone.on(Laya.Event.COMPLETE, this, () => {
                var skeleton;
                skeleton = templetStone.buildArmature(1);
                skeleton.scaleX = _scale;
                skeleton.scaleY = _scale;
                skeleton.showSkinByIndex(0);
                skeleton.play('full', true);
                this._farmIndex.scene.animalsContainer.addChild(skeleton);
                let bound = skeleton.getBounds();
                skeleton.autoSize = true;
                console.log(skeleton);
                skeleton.pos(_x, _y);
                skeleton.on(Laya.Event.CLICK, this, this.enterAnimalScene, [data.id]);
            });
            templetStone.loadAni(_path);
        }
        bindClick(skeleton, templetStone, data) {
            skeleton.on(Laya.Event.CLICK, this, this.enterAnimalScene, [data.id]);
            templetStone.on(Laya.Event.CLICK, this, this.enterAnimalScene, [data.id]);
        }
        renderAnimalStatic(data) {
            var _x = 0;
            var _y = 0;
            var _path = "";
            if (data.id == "chicken") {
                _x = 0;
                _y = 80;
                _path = "base/2_Hide.png";
            }
            if (data.id == "cow") {
                _x = 150;
                _y = 0;
                _path = "base/1_Hide.png";
            }
            if (data.id == "sheep") {
                _x = 300;
                _y = -80;
                _path = "base/3_Hide.png";
            }
            if (data.id == "pig") {
                _y = -160;
                _x = 450;
                _path = "base/3_Hide.png";
            }
            let StaticSprite = new Laya.Image();
            this._farmIndex.scene.animalsContainer.addChild(StaticSprite);
            StaticSprite.skin = _path;
            StaticSprite.pos(_x - StaticSprite.width / 2, _y - StaticSprite.height);
            StaticSprite.on(Laya.Event.CLICK, this, this.unlockAnimal, [data]);
        }
        unlockAnimal(data) {
            animalController.getInstance().onShowAnimal(data.id);
            return;
            console.log('解锁动物', data.id, data);
            var have_gold = dataGlobal.getInstance().userInfo.have_gold;
            var grade = dataGlobal.getInstance().userInfo.grade;
            tipController.getInstance();
            if (grade < data.locklevel) {
                var _str = "升级至" + data.locklevel + "级才可解锁";
                Laya.stage.event(GAMEEVENT.TIPSKUAN, [_str, '确认', "取消", function () {
                        tipController.getInstance().close();
                    }, function () {
                        tipController.getInstance().close();
                    }]);
            }
            else {
                var _str = '确认花费' + data.unlocknum + '金币解锁动物';
                var _skin = '';
                if (data.id == "chicken") {
                    _skin = "base/2_Hide.png";
                }
                if (data.id == "cow") {
                    _skin = "base/1_Hide.png";
                }
                if (data.id == "sheep") {
                    _skin = "base/3_Hide.png";
                }
                if (data.id == "pig") {
                    _skin = "base/3_Hide.png";
                }
                var _info = {
                    skin: _skin,
                    price: data.unlocknum,
                    type: 'coin'
                };
                var confirm_fun = function () {
                    console.log('进行解锁，发送请求');
                };
                Laya.stage.event(GAMEEVENT.BASETIPS, ['解锁', _str, _info, confirm_fun]);
            }
        }
        enterAnimalScene(id) {
            console.log("成功", id);
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
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "init_seed_list",
                'm': "init",
                'd': {},
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
        }
        onFarmInitSeedList(data) {
            this._seedListClass.addSeedListItem(data);
        }
        showSeepList() {
            this.showBgKuan();
            this._seedListClass.setSeedListItem();
        }
        getFarmLand() {
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "init_field",
                'm': "init",
                'd': {},
                'code': 1
            };
            console.log("发送websocket数据", tmp_data);
            tmp_websocket.sendMessage(tmp_data);
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
            this._farmIndex.scene.bg_kuan.visible = false;
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
            this._farmIndex.scene.bg_kuan.visible = true;
        }
        onMenuClick(type) {
            this.recoveryBtn(type);
            switch (type) {
                case 'building':
                    this._farmIndex.scene.building.skin = 'main/warehouse.png.png';
                    this.onClickBuilding();
                    break;
                case 'upgrade':
                    this.onClickUpgrade();
                    break;
                case 'order':
                    this.onClickOrder();
                    this._farmIndex.scene.order.skin = 'main/btn_dingdan2.png';
                    break;
                case 'exchange':
                    this.onClickExchange();
                    this._farmIndex.scene.exchange.skin = 'farm/pic_factory3a.png';
                    break;
                case 'rank':
                    this.onClickRank();
                    break;
                case "material_order":
                    this.onClickMaterialOrder();
                    break;
                case "factory":
                    this.onClickFactory();
                    break;
            }
        }
        recoveryBtn(type) {
            this.muneClickStr = type;
            this._farmIndex.scene.building.skin = 'main/warehouse.png';
            this._farmIndex.scene.upgrade.skin = 'main/btn_shengji1.png';
            this._farmIndex.scene.email.skin = 'main/btn_youxiang1.png';
            this._farmIndex.scene.order.skin = 'main/btn_dingdan1.png';
        }
        onClickUpgrade() {
            this._farmIndex.scene.upgrade.skin = "main/btn_shengji2.png";
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
            orderController.getInstance().onShowOrder();
        }
        onClickExchange() {
            exchangeController.getInstance().onShowExchange();
        }
        onClickRank() {
            rankController.getInstance().onShowRank();
        }
        onClickFactory() {
            factoryController.getInstance().onShow();
        }
        onClickMaterialOrder() {
            materialController.getInstance().onShow();
        }
        onMouseDown(e) {
            var touches = e.touches;
            if (touches && touches.length == 2) {
                this.lastDistance = this.getDistance(touches);
                console.log('双指缩放', this.lastDistance);
                Laya.stage.on(Event$1.MOUSE_MOVE, this, this.onMouseMove);
            }
        }
        onMouseMove(e) {
            var distance = this.getDistance(e.touches);
            const factor = 0.01;
            this.lastDistance = distance;
        }
        onMouseUp(e) {
            Laya.stage.off(Event$1.MOUSE_MOVE, this, this.onMouseMove);
        }
        getDistance(points) {
            var distance = 0;
            if (points && points.length == 2) {
                var dx = points[0].stageX - points[1].stageX;
                var dy = points[0].stageY - points[1].stageY;
                distance = Math.sqrt(dx * dx + dy * dy);
            }
            return distance;
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
            dataGlobal.getInstance().setFarmInfo(data.gd);
            farmController.getInstance().onShowFarmInitField(data.gd);
        }
        FarmInitSeedList(data) {
            data = {
                "ga": "init_seed_list",
                "gd": {
                    "seed_data": [
                        {
                            "id": "wheat",
                            "pic": "resource/crops/WheatEnable.png"
                        },
                    ]
                },
                "code": 1
            };
            farmController.getInstance().model.setFarmSeed(data.gd.seed_data);
            farmController.getInstance().onFarmInitSeedList(data.gd);
        }
        FarmInitFlowerGrade(data) {
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
            if (myData.msg) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [myData.msg]);
            }
            infoController.getInstance().getUserInfo();
        }
        FarmInitPlantFlower(data) {
            console.log("请求种植-------------");
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
            if (myData.msg) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [myData.msg]);
            }
            infoController.getInstance().getUserInfo();
        }
        FarmInitFlowerFertilize(data) {
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
            if (myData.msg) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [myData.msg]);
            }
            infoController.getInstance().getUserInfo();
        }
        FarmInitFlowerWater(data) {
            var myData = data.gd;
            var tmp_arr = {
                'ff_id': myData.ff_id,
                'fat_time': myData.fat_time,
                'fat_time_tol': myData.fat_time_tol,
                'ff_exp': myData.ff_exp,
                'seed_data': myData.seed_data
            };
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            farmController.getInstance().initLand();
            if (myData.msg) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [myData.msg]);
            }
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
            var myData = data.gd;
            var tmp_arr = {
                'fat_time': myData.fat_time,
                'fat_time_tol': myData.fat_time_tol,
                'ff_exp': myData.ff_exp
            };
            dataGlobal.getInstance().setFlowerInfo(myData.ff_id);
            dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);
            farmController.getInstance().initLand();
            if (myData.msg) {
                Laya.stage.event(GAMEEVENT.TXTTIP, [myData.msg]);
            }
            infoController.getInstance().getUserInfo();
        }
        FarmInitFlowerFat(data) {
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
        AnimalProductMature(data) {
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
            Laya.stage.on(NETWORKEVENT.ANIMALPRODUCTMATURE, this, this._network.AnimalProductMature);
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
            infoController.getInstance();
            Laya.stage.event(GAMEEVENT.GETINITINFO);
            let tmp_websocket = webSocketJson.getInstance();
            let tmp_data = {
                'a': "send_data",
                'm': "gzhq_game",
                'd': { 'bs': 100 },
                'code': 1
            };
            tmp_websocket.sendMessage(tmp_data);
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

    class loginWin extends baseScene {
        constructor() {
            super();
            this.lastDistance = 0;
        }
        addEvents() {
            this._login_sence.scene.login_btn.clickHandler = new Laya.Handler(this, this.loginBtn);
            this._login_sence.on(Laya.Event.CLICK, this, this.loginBtn);
        }
        onShow() {
            if (this._login_sence == null) {
                this._login_sence = new ui.login.loginUI();
                this._login_sence.name = 'loading';
            }
            this.setScale(this._login_sence);
            this.adaption();
            this._login_sence.name = 'login';
            this.addEvents();
            this.tweenAlphaAdd(this._login_sence, 'login', 2);
        }
        adaption() {
            var sc = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
            var a = (sc * CONST.DESIGNSTAGEHEIGHT - CONST.STAGEHEIGHT) / sc;
            this._login_sence.scene.login_group.y = this._login_sence.scene.login_group.y - CONST.ADAPTION;
            this._login_sence.scene.loading_group.y = this._login_sence.scene.loading_group.y - CONST.ADAPTION;
        }
        onShowLogin() {
            this._login_sence.scene.loading_group.visible = false;
            this._login_sence.scene.login_group.visible = true;
            this._login_sence.scene.login_btn.on(Laya.Event.CLICK, this, this.loginBtn);
        }
        loginBtn() {
            Laya.stage.event(GAMEEVENT.TEST_LOGIN_FARM);
            var tmp_dataGlobal = dataGlobal.getInstance();
            var userid = Laya.LocalStorage.getItem("WYD:GAME:USER");
            if (!userid || userid.length < 8) {
                var myDate = new Date();
                var year = myDate.getFullYear();
                var month = myDate.getMonth() + 1;
                var date = myDate.getDate();
                var hour = myDate.getHours();
                var minute = myDate.getMinutes();
                var second = myDate.getSeconds();
                userid = "WYD" + year + month + date + hour + minute + second + dataGlobal.getRound(10000, 99999);
                Laya.LocalStorage.setItem("WYD:GAME:USER", userid);
                console.log("用户保存的ID", userid);
            }
            let mydata = {
                "a": "login",
                "m": "init",
                "d": {
                    "code": userid,
                    "reid": '',
                    "sid": '',
                    "sid2": '',
                    "sys": '',
                    "tid": CONST.IS_TB
                }
            };
            let tmp_http = httpJson.getInstance();
            tmp_http.httpPost(CONST.LOGIN_URL, mydata);
        }
        onupdateFarm(x) {
            this._login_sence.scene.loading_txt.text = x + '%';
            var num = Math.floor(x / (100 / 9)) - 1;
            this._login_sence.scene.loginProgressBar.value = x / 100;
            this._login_sence.scene.loading_icon.url = "ui://login/0_0000" + num;
        }
        onClick() {
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
        onLoginOK(data) {
            if (!data) {
                webSocketJson.getInstance();
                return;
            }
            console.log("onLoginOK的数据是：", data);
            let _loginC = loginController.getInstance();
            _loginC.model.setUserInfo(data.gd.info);
            _loginC.model.setGameWS(data.gd.ws.ws.ws);
            webSocketJson.getInstance();
        }
        onLoginErr(data) {
            console.log("登陆出错的数据是：", data);
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
            Laya.stage.on(NETWORKEVENT.HTTP_LOGIN_OK, this, this._network.onLoginOK);
            Laya.stage.on(NETWORKEVENT.HTTP_ERROR_BAK, this, this._network.onLoginErr);
            Laya.stage.on(GAMEEVENT.LOGIN_FARM, this, this.showFarmView);
        }
        static getInstance() {
            if (loginController._instance == null) {
                loginController._instance = new loginController;
            }
            return loginController._instance;
        }
        showFarmView() {
            Laya.stage.off(GAMEEVENT.TEST_LOGIN_FARM, this, this.showFarmView);
            webSocketJson.getInstance();
            this._loginview.showFarm();
            infoController.getInstance().onShow();
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
            resManger.getInstance().setBitmapFont();
        }
        initModule() {
            gameLayer.initModule();
            mainController.getInstance();
            loginController.getInstance();
        }
    }
    new Main();

}());
