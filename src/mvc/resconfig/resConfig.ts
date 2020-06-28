/*
* name;
*/
export default class resConfig {
    public static _url = '';
    /**loading和login页面 */
    public static loadingRes: Array<any> = [
        { url: resConfig._url + 'ui.json', type: Laya.Loader.JSON },
        { url: resConfig._url + 'res/atlas/loading.atlas', type: Laya.Loader.ATLAS, sign: 'login' },
        { url: resConfig._url + 'res/atlas/loading.png', type: Laya.Loader.IMAGE},
    ]
    
    /**首次载入数据 */
    /**载入农场数据 */
    public static farm: Array<any> = [
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
        // {url:resConfig._url+'farm/farmIndexscene.scene',type:Laya.Loader.JSON,sign:'farmIndex'},
        // {url:resConfig._url+'farm/farmLand.scene',type:Laya.Loader.JSON,sign:'farmland'},
        // // {url:resConfig._url+'res/ui/base.json',type:Laya.Loader.BUFFER,sign:'base'},

        // // {url:resConfig._url+'res/ui/farmland.json',type:Laya.Loader.BUFFER,sign:'farmland'},
        // // {url:resConfig._url+'res/ui/animation.json',type:Laya.Loader.BUFFER,sign:'animation'},
        // // {url:resConfig._url+'res/ui/animation_atlas0.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/base.json',type:Laya.Loader.BUFFER,sign:'base'},
        // {url:resConfig._url+'res/ui/base_atlas0.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/base_atlas0_1.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/base_atlas0_2.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/base_atlas0_3.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/base_atlas0_4.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/farm.json',type:Laya.Loader.BUFFER,sign:'farm'},
        // {url:resConfig._url+'res/ui/farm_atlas0.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/farm_atlas0_1.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/farm_atlas0_2.png',type:Laya.Loader.IMAGE},
        // // {url:resConfig._url+'res/ui/farm_atlas0_4.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/factory.json',type:Laya.Loader.BUFFER,sign:'factory'},
        // {url:resConfig._url+'res/ui/factory_atlas0.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/factory_atlas0_1.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/factory_atlas0_2.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/factory_atlas0_3.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/factory_atlas0_4.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/warehouse.json',type:Laya.Loader.BUFFER,sign:'warehouse'},
        // {url:resConfig._url+'res/ui/warehouse_atlas0.png',type:Laya.Loader.IMAGE},
        // {url:resConfig._url+'res/ui/order.json',type:Laya.Loader.BUFFER,sign:'order'},
        // {url:resConfig._url+'res/ui/order_atlas0.png',type:Laya.Loader.IMAGE},
    ]
    /**动态载入资源 */
    public static dynamicRes: Array<any> = [
        // {url:resConfig._url+'res/login/login.json',type:Laya.Loader.BUFFER,sign:"login"},
        // {url:resConfig._url+'res/login/login_atlas0.png',type:Laya.Loader.IMAGE,sign:"loginimg"},
    ]
    /** 
    *获取动态资源对应地址
    */
    public static getDynamicResUrl(signname: string, type = 0) {
        for (var key in resConfig.dynamicRes) {
            if (resConfig.dynamicRes[key] && resConfig.dynamicRes[key]['sign'] == signname) {
                if (type == 1) {
                    return resConfig.dynamicRes[key];
                } else {
                    return resConfig.dynamicRes[key]['url'];
                }
            }
        }
        return 'null';
    }
    /**
	*通过标识获取已载入图片资源 
	*/
    public static getResUrl(signname: string) {
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