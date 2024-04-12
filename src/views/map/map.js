import * as Cesium from 'cesium';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNWQ2MjA3Mi04YTBhLTQ3MzktOGU1YS1mMDY0N2YzN2ZlMjEiLCJpZCI6MjA4MDg3LCJpYXQiOjE3MTI4MjU4MTV9.3bQVIDkC9lcNavXP66cmU0moxUbbx7opvnzYfKkp92M';
import "cesium/Build/Cesium/Widgets/widgets.css";

export default class CreateMap {
    constructor(mapId) {
        this.mapId = mapId
        this.viewer = null
        this.camera = null
        this.init()
        // this.addTerrain()
        this.handelCartesian()
    }

    flyTo() {
        this.viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(103.26,30.94, 2500)
        });
    }

    /**
     * 屏幕坐标(cartesian2)转世界坐标（cartesian3）
     * @param {*} xy cartesian2
     */
    screenToWorld(xy) {
       return this.viewer.scene.globe.pick(this.viewer.camera.getPickRay(xy), this.viewer.scene);
    }

    /**
     * 经纬度转世界坐标
     * @param {Array} lonlat 经纬度
     * @param {Number} h 经纬度
     */
    lonlatToWorld(lonlat, h) {
        return new Cesium.Cartesian3.fromDegrees(lonlat[0], lonlat[1], h);
    }

    /**
     * 监听事件
     */
    handelCartesian() {
        const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        handler.setInputAction((event) => {      
            const cartesian2 = event.position
            console.log('屏幕坐标（平面坐标系cartesian2）', cartesian2);
            // 屏幕坐标转空间坐标
            const cartesian3 = this.screenToWorld(cartesian2)
            console.log('空间坐标系（笛卡尔坐标系cartesian3）',cartesian3);
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }

    /**
     * 加载地形
     */
    addTerrain() {
        const terrainProvider = new Cesium.CesiumTerrainProvider({
            url: Cesium.IonResource.fromAssetId(1), //这使用了Cesium Ion的默认全球地形
            requestWaterMask: true, //请求水体效果所需要的海岸线数据
            requestVertexNormals: true //请求地形照明数据
          });
          this.viewer.terrainProvider = terrainProvider;
          //地形夸张
        //   this.viewer.scene.globe.terrainExaggeration = 1.3;
    }

    init() {
        window.CESIUM_BASE_URL = '/';
        try {
            this.viewer = new Cesium.Viewer(this.mapId, {
                animation:false,//动画小部件
                baseLayerPicker:false,//地图图层组件
                fullscreenButton:false,//全屏组件
                geocoder:false,//地理编码搜索组件
                homeButton:false,//首页组件
                infoBox:false,//信息框
                sceneModePicker:false,//场景模式
                selectionIndicator:false,//选取指示器组件
                timeline:false,//时间轴
                navigationHelpButton:false,//帮助按钮
                navigationInstructionsInitiallyVisible: false,
                terrainProvider: await Cesium.CesiumTerrainProvider.fromIonAssetId(3956, {
                requestVertexNormals: true
                })
            });
            this.viewer._cesiumWidget._creditContainer.style.display = 'none'
            window.viewer = this.viewer
        } catch (error) {
            console.log(error);
        }
        
    }
}