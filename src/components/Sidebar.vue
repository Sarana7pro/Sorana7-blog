<template>
  <aside class="sidebar">
    <div class="profile-card">
      <img src="@/assets/icon/mea.jpg" alt="Profile" />
      <p class="name">月下</p>
      <p class="contact">侵权请联系删除</p>
    </div>
    <div class="links">
      <input type="text" placeholder="搜索" class="search-bar" />
      <ul>
        <li>
          <router-link to="/AppPublishArticle" class="blue-button">发布文章</router-link>
        </li>
        <!-- <li><a href="#">链接1</a></li>
        <li><a href="#">链接2</a></li> -->
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style scoped>
.sidebar {
  padding: 50px; /* 更小的内边距，突出卡片内容 */
  background-color: #f8f9fa; /* 背景颜色更温和 */
  width: 100%; /* 确保宽度随屏幕变化 */
  max-width: 200px; /* 限制宽度 */
  border-radius: 12px; /* 圆角效果 */
  margin: 100px 70px; /* 设置外边距 */
  opacity: 95%; /* 透明度 */
  height: 300px;
}

.profile-card {
  text-align: center;
  margin-bottom: 20px;
}

.profile-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.name {
  margin: 0; /* 去掉默认的外边距 */
}

.contact {
  margin: 0; /* 去掉默认的外边距 */
  display: none; /* 默认隐藏 */
}

.search-bar {
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0; /* 清除内边距 */
}

ul li {
  text-align: center; /* 列表项文本居中 */
  margin: 10px 0;
}

/* 清除超链接样式 */
a {
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素颜色 */
}

/* 新增按钮样式 */
.blue-button {
  display: inline-block; /* 使链接表现得像按钮 */
  padding: 10px 30px; /* 内边距 */
  background-color: rgb(85, 124, 231); /* 背景颜色为蓝色 */
  color: white; /* 文字颜色为白色 */
  border-radius: 5px; /* 圆角 */
  text-align: center; /* 文本居中 */
  transition: background-color 0.3s; /* 背景色渐变效果 */
}

.blue-button:hover {
  background-color: darkblue; /* 鼠标悬停时颜色变化 */
}
</style>
