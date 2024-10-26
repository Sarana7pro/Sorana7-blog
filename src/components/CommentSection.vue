<template>
  <div class="comment-section">
    <h2>评论区</h2>
    <div v-if="comments.length > 0">
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <h3>{{ comment.author }}</h3>
        <p>{{ comment.content }}</p>
        <span class="comment-date">{{ formatCommentDate(comment.created_at) }}</span> <!-- 使用 created_at -->
      </div>
    </div>
    <div v-else>
      <p>暂无评论</p>
    </div>
    <div class="add-comment">
      <h3>添加评论</h3>
      <input type="text" v-model="newComment.author" placeholder="您的名字" />
      <textarea v-model="newComment.content" placeholder="您的评论"></textarea>
      <button @click="submitComment">提交评论</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentSection',
  data () {
    return {
      comments: [], // 存储评论列表
      newComment: {
        author: '',
        content: ''
      }
    }
  },
  methods: {
    formatCommentDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' } // 添加小时和分钟
      return new Date(date).toLocaleString('zh-CN', options) // 使用 toLocaleString 显示完整日期
    },
    fetchComments () {
      const postId = this.$route.query.id // 假设你通过路由获取文章ID
      fetch(`http://localhost:3000/getComments?postId=${postId}`)
        .then((response) => response.json())
        .then((data) => {
          this.comments = data // 保存获取的评论列表
        })
        .catch((err) => {
          console.error('获取评论失败:', err)
        })
    },
    submitComment () {
      const postId = this.$route.query.id // 获取文章ID
      if (!this.newComment.author || !this.newComment.content) {
        alert('请填写所有字段')
        return
      }
      fetch('http://localhost:3000/addComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post_id: postId,
          author: this.newComment.author,
          content: this.newComment.content
        })
      })
        .then((response) => response.json())
        .then((data) => {
          this.comments.push(data) // 添加新评论到评论列表
          this.newComment.author = ''
          this.newComment.content = ''
        })
        .catch((err) => {
          console.error('提交评论失败:', err)
        })
    }
  },
  mounted () {
    this.fetchComments() // 组件挂载时获取评论
  }
}
</script>

  <style scoped>
  .comment-section {
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 12px;
    max-width: 1200px;
    margin: 20px auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin: 0px 100px; /* 设置外边距 */
  }

  .comment-item {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  .comment-date {
    font-size: 12px;
    color: #999;
  }

  .add-comment {
    margin-top: 30px;
  }

  .add-comment input,
  .add-comment textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .add-comment button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .add-comment button:hover {
    background-color: #0056b3;
  }
  </style>
