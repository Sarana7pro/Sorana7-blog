<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { startSakura } from './assets/js/fullScreenFlower'
export default {
  name: 'App', // 可以为组件指定名称
  mounted () {
    startSakura()
  }
}
</script>

<style>
.container {
  cursor: url('@/assets/cur/arrow.gif'), auto;
}
</style>
