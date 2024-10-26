<template>
    <div id="AppViews" class="background">
      <HdView />
      <div id="app-contact">
    <ContactMe /> <!-- 引入 ContactMe 组件 -->
  </div>
      <AppFooter />
    </div>
  </template>

<script>
import HdView from '../components/HdView'
import ContactMe from '../components/ContactMe.vue'
import AppFooter from '../components/Footer.vue'

export default {
  name: 'AppViews',
  components: {
    HdView,
    ContactMe,
    AppFooter
  }
}
</script>

  <style lang="less">
#app-contact {

  max-width: 800px;
  min-height: 670px;
  margin: 70px auto;
  padding: 20px;
  text-align: center;
}

#app-contact h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}
  </style>
