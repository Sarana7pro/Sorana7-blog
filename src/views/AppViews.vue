<template>
  <div id="AppViews" class="background">
    <HdView />
    <div class="layout">
      <AppContent @post-selected="onPostSelected" /> <!-- 传递 postId 的事件 -->
      <div>
        <SidebarComponent />
      </div>
    </div>
    <CommentSection :postId="selectedPostId" /> <!-- 使用 selectedPostId 作为 postId -->
    <AppFooter />
  </div>
</template>

<script>
import HdView from '../components/HdView'
import AppContent from '../components/AppContent.vue'
import SidebarComponent from '../components/Sidebar.vue'
import AppFooter from '../components/Footer.vue'
import CommentSection from '@/components/CommentSection.vue'

export default {
  name: 'AppViews',
  components: {
    HdView,
    AppContent,
    AppFooter,
    SidebarComponent,
    CommentSection
  },
  data () {
    return {
      selectedPostId: null // 初始化选中的 postId
    }
  },
  methods: {
    onPostSelected (postId) {
      this.selectedPostId = postId // 当选择的文章改变时更新 postId
    }
  }
}
</script>

<style lang="less">
#AppViews {
    background-image: url('@/assets/images/bg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* 使背景固定 */
    height: auto;
    min-height: 800px;
}

.layout {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
</style>
