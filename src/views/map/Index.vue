<template>
  <div class="map">
    <div class="control_bar">
      <div class="button" @click="address">定位</div>
    </div>
    <div class="container" id="cesiumContainer"></div>
  </div>
</template>
<script setup name="map">
import { onMounted } from 'vue';
import CreateMap from './map.js'
let mapControl = null


const address = () => {
  mapControl.flyTo()
}

onMounted(() => {
    mapControl = new CreateMap('cesiumContainer')
})
</script>
<style lang="scss" scoped>
  .map{
    width: 100%;
    height: 100%;

    .control_bar {
      width: 80px;
      min-height: 100px;
      position: absolute;
      top: 25px;
      left: 10px;
      z-index: 9999999;

      .button {
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #000;
        border-radius: 8px;
        margin-bottom: 10px;
        background-color: #fff;
        cursor: pointer;

        &:hover {
        font-weight: bold;
          color: rgb(218, 116, 32);
        }
      }
    }

    .container {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
</style>