<template>
  <div class="map" id="cesiumContainer"></div>
</template>
<script setup name="map">
import { onMounted } from 'vue';
import CreateMap from './map.js'
onMounted(() => {
    const mapControl = new CreateMap('cesiumContainer')
})
</script>
<style lang="scss" scoped>
  .map{
    width: 100%;
    height: 100%;
  }
</style>