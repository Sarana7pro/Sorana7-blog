<template>
  <div class="about-me-container" v-if="isVisible">
    <h1 class="title">关于我</h1>
    <div class="profile-card">
      <img src="@/assets/icon/mea.jpg" alt="Profile" />
    </div>
    <p class="description">这里是个人信息的简要介绍。</p>
    <ul class="info-list">
      <li><strong>姓名:</strong> 月下</li>
      <li><strong>年龄:</strong> 20</li>
      <li><strong>爱好:</strong> 编程, 阅读, 动漫</li>
      <li><strong>邮箱:</strong> a1779246766@gmail.com</li>
    </ul>
    <ul class="social-links">
      <li v-for="link in socialLinks" :key="link.name">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      isVisible: false,
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/Sarana7pro' },
        { name: 'Gitee', url: 'https://gitee.com/yxsh5002' },
        { name: 'QQ:1779246766', url: 'http://shang.qq.com/email/stop/email_stop.html?qq=1779246766' }
      ]
    }
  },
  mounted () {
    // 在组件挂载时，设置可见性为 true，触发动画
    this.isVisible = true
  }
}
</script>

<style scoped>
.about-me-container {
  display: flex; /* 使用 flexbox */
  flex-direction: column; /* 垂直排列子元素 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  background-color: rgba(255, 255, 255, 0.9); /* 背景色与透明度 */
  border-radius: 10px; /* 圆角 */
  padding: 20px; /* 内边距 */
  width: 80%; /* 宽度 */
  max-width: 600px; /* 最大宽度 */
  margin: auto; /* 水平居中 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  opacity: 0; /* 初始透明度 */
  transform: scale(0.9); /* 初始缩放 */
  animation: popup 0.5s forwards; /* 添加动画 */
}

@keyframes popup {
  to {
    opacity: 1; /* 结束时透明度为1 */
    transform: scale(1); /* 结束时缩放为1 */
  }
}

.title {
  font-size: 2rem; /* 标题字体大小 */
  margin-bottom: 15px; /* 标题下方间距 */
}

.description {
  font-size: 1.2rem; /* 描述字体大小 */
  color: #666; /* 描述字体颜色 */
  margin-bottom: 20px; /* 描述下方间距 */
}

.info-list {
  list-style-type: none; /* 去掉列表样式 */
  padding: 0; /* 去掉内边距 */
  font-size: 1rem; /* 列表字体大小 */
  color: #333; /* 列表字体颜色 */
}

.info-list li {
  margin: 5px 0; /* 列表项间距 */
}

.profile-card {
  text-align: center;
  margin-bottom: 20px;
}

.profile-card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.social-links{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  list-style-type: none; /* 去掉列表样式 */
}
.social-links li{
  margin: 0 10px;
}
.social-links a{
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}
.social-links a:hover{
  color: #1E90FF;
}
</style>
