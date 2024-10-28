<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} {{ siteName }}. 保留所有权利.</p>
        <p>免责声明：本网站内容仅供参考，所有信息均不构成任何形式的法律建议。使用本网站即表示您同意我们的使用条款和隐私政策。</p>
        <ul class="social-links">
          <li v-for="link in socialLinks" :key="link.name">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </footer>
  </template>

<script>
export default {
  name: 'AppFooter',
  props: {
    siteName: {
      type: String,
      default: '月下の博客'
    },
    socialLinks: {
      type: Array,
      default: () => [
        { name: 'GitHub', url: 'https://github.com/Sarana7pro' },
        { name: 'Gitee', url: 'https://gitee.com/yxsh5002' },
        { name: 'QQ:1779246766', url: 'http://shang.qq.com/email/stop/email_stop.html?qq=1779246766' }
      ]
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
  }

  .footer .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer .social-links {
    list-style: none;
    padding: 0;

  }

  .footer .social-links li {
    display: inline;
    margin: 0 10px;
  }

  .footer .social-links a {
    color: white;
    text-decoration: none;
    cursor: url('@/assets/cur/busy.gif'), auto;
  }

  .footer .social-links a:hover {
    text-decoration: underline;
  }
  </style>
