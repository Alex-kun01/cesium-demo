import * as Cesium from 'cesium';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNWQ2MjA3Mi04YTBhLTQ3MzktOGU1YS1mMDY0N2YzN2ZlMjEiLCJpZCI6MjA4MDg3LCJpYXQiOjE3MTI4MjU4MTV9.3bQVIDkC9lcNavXP66cmU0moxUbbx7opvnzYfKkp92M';
import "cesium/Build/Cesium/Widgets/widgets.css";

export default class CreateMap {
    constructor(mapId) {
        this.mapId = mapId
        this.viewer = null
        this.init()
    }

    init() {
        window.CESIUM_BASE_URL = '/';
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
            navigationInstructionsInitiallyVisible:false
        });
        viewer._cesiumWidget._creditContainer.style.display = 'none'
        window.viewer = this.viewer
    }
}