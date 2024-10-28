<template>
    <div id="AppHome" class="background">
      <HdView />
      <div class="layout">
        <ContentComponent :searchQuery="searchQuery" />
        <div>
          <SidebarComponent @search="updateSearchQuery" />
        </div>
      </div>
      <AppFooter />
    </div>
  </template>

<script>
import HdView from '../components/HdView'
import ContentComponent from '../components/Content.vue'
import SidebarComponent from '../components/Sidebar.vue'
import AppFooter from '../components/Footer.vue'

export default {
  name: 'AppHome',
  components: {
    HdView,
    ContentComponent,
    SidebarComponent,
    AppFooter
  },
  data () {
    return {
      searchQuery: '' // 搜索查询
    }
  },
  methods: {
    updateSearchQuery (query) {
      this.searchQuery = query // 更新搜索查询
    }
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
    justify-content: space-between;
    padding: 20px;
  }
  </style>
