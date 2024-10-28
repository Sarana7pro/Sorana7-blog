<template>
  <div id="GoodBlog">
    <HdView />
    <div id="layout">
      <div class="content-container">
        <AppBlog :searchQuery="searchQuery" />
        <SidebarComponent @search="updateSearchQuery" />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HdView from '../components/HdView.vue'
import AppBlog from '../components/AppBlog.vue'
import AppFooter from '../components/Footer.vue'
import SidebarComponent from '../components/Sidebar.vue'

const searchQuery = ref('')

const updateSearchQuery = (query) => {
  searchQuery.value = query
}
</script>

<style scoped>
#GoodBlog {
  background-image: url('@/assets/images/bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
}

#layout {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.content-container {
  display: flex;
  flex: 1;
}
</style>
