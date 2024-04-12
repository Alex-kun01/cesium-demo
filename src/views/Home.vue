<template>
  <div class="home">
    <div class="fun_bar">
      <div class="name" @click="gotoDemo(item)" v-for="(item, index) in funs" :key="index">{{ item.name }}</div>
    </div>
    <router-view />
  </div>
</template>
<script setup name="home">
import router from '../route/index'
const funs = [
  { name: '测试', route: 'Map' },
]
const gotoDemo = (item) => {
  router.push({ name: item.route })
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;

  .fun_bar {
    width: 100%;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999999999;

    .name {
      cursor: pointer;
      color: #ddd;
      user-select: none;

      &:hover {
        font-weight: bold;
        color: rgb(255, 209, 6);
      }
    }
  }
}
</style>