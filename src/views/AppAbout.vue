<template>
    <div id="app">
        <div class="AboutMe">
            <AboutMe />
        </div>
    </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    AboutMe
  }
}
</script>

<style>
#app {
    background-image: url('@/assets/images/bg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: auto;
    min-height: 945px;
    display: flex; /* 使用 Flexbox */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
}

.AboutMe {
    display: flex; /* 使用 Flexbox */
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中 */
    justify-content: center; /* 垂直居中 */
    width: 100%; /* 宽度100% */
}
</style>
