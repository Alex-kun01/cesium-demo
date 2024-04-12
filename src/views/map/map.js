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
        this.viewer = new Cesium.Viewer(this.mapId);
        window.viewer = this.viewer
    }
}