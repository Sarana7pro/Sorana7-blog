<template>
  <div class="article-content" v-if="article">
    <h1>{{ article.title }}</h1>
    <img :src="article.image" :alt="article.title" />
    <p>{{ article.content }}</p>
    <div class="meta-info">
      <span>发布日期: {{ formattedDate }}</span>
      <span>点赞数: {{ article.likes }}</span>
    </div>
    <button @click="likeArticle" class="like-button">点赞</button>
    <button @click="recommendArticle" class="recommend-button">推荐</button>
  </div>
  <div v-else>
    <p>文章加载中...</p>
  </div>
</template>

<script>
export default {
  name: 'AppContent',
  data () {
    return {
      posts: [],
      article: null
    }
  },
  methods: {
    likeArticle () {
      this.article.likes += 1
      fetch(`http://localhost:3000/updateLikes/${this.article.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes: this.article.likes })
      })
        .then(response => {
          if (!response.ok) throw new Error('网络响应不是 OK')
          return response.json()
        })
        .catch(err => {
          console.error('更新点赞数失败:', err)
        })
    },
    recommendArticle () {
      fetch(`http://localhost:3000/recommendArticle/${this.article.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) throw new Error('推荐失败')
          return response.json()
        })
        .then(data => {
          console.log('推荐成功:', data)
        })
        .catch(err => {
          console.error('推荐文章失败:', err)
        })
    }
  },
  mounted () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const articleId = urlParams.get('id')
    fetch('http://localhost:3000/getPosts')
      .then(response => response.json())
      .then(data => {
        this.posts = data
        this.article = this.posts.find(post => post.id === Number(articleId))
      })
      .catch(err => {
        console.error('获取文章列表失败:', err)
      })
  }
}
</script>

<style scoped>
.article-content {
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 12px;
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  margin: 50px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center; /* 使文本居中 */
}

.article-content img {
  width: auto;
  max-width: 1000px;
  border-radius: 8px;
  margin: 20px 0;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 添加对齐 */
  margin-top: 15px;
  font-size: 14px;
  color: #999;
}

.like-button {
  background-color: #f87bd2; /* 按钮背景色 */
  color: white; /* 按钮文字颜色 */
  border: none; /* 去除边框 */
  border-radius: 5px; /* 圆角 */
  padding: 20px 40px; /* 内边距 */
  cursor: pointer; /* 鼠标指针为手形 */
  font-size: 25px; /* 字体大小 */
}

.like-button:hover {
  background-color: #fa95f2; /* 悬停效果 */
}
.recommend-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 20px 40px;
  cursor: pointer;
  font-size: 25px;
  margin-left: 10px;
}

.recommend-button:hover {
  background-color: #45a049;
}
</style>
