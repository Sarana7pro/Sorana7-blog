<template>
    <div id="AppHome" class="background">
      <HdView />
      <div class="layout">
        <PublishArticle />
      </div>
      <AppFooter />
    </div>
  </template>

<script>
import HdView from '../components/HdView'
import AppFooter from '../components/Footer.vue'
import PublishArticle from '../components/PublishArticle.vue' // 引入 PublishArticle 组件

export default {
  name: 'AppHome',
  components: {
    HdView,
    AppFooter,
    PublishArticle // 注册 PublishArticle 组件
  }
}
</script>

  <style lang="less">
  #AppHome {
    background-image: url('@/assets/images/bg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* 使背景固定 */
    height: auto;
  }

  .layout {
    display: flex;
    justify-content: center; /* 将 PublishArticle 居中 */
    padding: 20px;
  }
  </style>
