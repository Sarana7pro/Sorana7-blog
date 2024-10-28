<template>
    <nav class="HdView">
        <div class="logo">
            <router-link to="/" class="custom-link">
                <img src="@/assets/icon/mea2.jpg" class="logo-img">
            </router-link>
            <router-link to="/" class="custom-link">
                <h1>月下の博客</h1>
            </router-link>
        </div>
        <ul class="nav-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/blog">推荐文章</router-link></li>
            <li><router-link to="/contact">联系我</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'HdView'
}
</script>

<style scoped>
.HdView {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 70px;
    background-color: rgba(51, 51, 51, 0.5);
    backdrop-filter: blur(10px);
    color: #fff;
    z-index: 1000;
}

.logo {
    display: flex; /* 使用 flexbox 让图片和标题并排显示 */
    align-items: center; /* 垂直居中对齐 */
}

.logo h1 {
    margin: 0;
}

.nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.nav-links li {
    margin-left: 20px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    cursor: url('@/assets/cur/busy.gif'), auto;
}

.nav-links a:hover {
    text-decoration: underline;
}

.custom-link {
    color: #fff;
    text-decoration: none;
}

.logo-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: url('@/assets/cur/busy.gif'), auto;
}
</style>
