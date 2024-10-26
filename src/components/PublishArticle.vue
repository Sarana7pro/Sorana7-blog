<template>
  <div class="publish-article">
    <h1>发表文章</h1>
    <form @submit.prevent="submitArticle">
      <div class="form-group">
        <label for="title">标题</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div class="form-group">
        <label for="content">内容</label>
        <textarea id="content" v-model="content" required></textarea>
      </div>
      <div class="form-group">
        <label>上传图片</label>
        <div class="drop-area" @dragover.prevent @drop.prevent="handleDrop" @click="triggerFileInput">
          <input type="file" ref="fileInput" @change="handleFileUpload" style="display:none;" />
          <p v-if="!image">拖动图片到这里或点击选择文件</p>
          <img v-if="image" :src="image" alt="上传的图片" class="uploaded-image" />
        </div>
      </div>
      <div class="form-group">
        <label for="summary">摘要</label>
        <textarea id="summary" v-model="summary" required></textarea>
      </div>
      <button type="submit">发布文章</button>
    </form>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'PublishArticle',
  data () {
    return {
      title: '',
      content: '',
      image: '',
      summary: '',
      message: ''
    }
  },
  methods: {
    handleDrop (event) {
      const file = event.dataTransfer.files[0]
      this.uploadImage(file)
    },
    handleFileUpload (event) {
      const file = event.target.files[0]
      this.uploadImage(file)
    },
    uploadImage (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    triggerFileInput () {
      this.$refs.fileInput.click()
    },
    submitArticle () {
      console.log('Submitted summary:', this.summary)

      const newArticle = {
        title: this.title,
        content: this.content,
        image: this.image,
        summary: this.summary,
        date: new Date().toISOString(), // 确保日期格式正确
        comments: 0,
        likes: 0
      }

      fetch('http://localhost:3000/addPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArticle)
      })
        .then((response) => {
          if (response.ok) {
            this.message = '文章发布成功！'
            this.title = ''
            this.content = ''
            this.image = ''
            this.summary = ''
          } else {
            throw new Error('发布文章失败')
          }
        })
        .catch((err) => {
          console.error(err)
          this.message = '发布文章失败，请重试。'
        })
    }
  }
}
</script>

<style scoped>
.publish-article {
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 12px;
  width: 100%;
  max-width: 1200px;
  min-height: 700px;
  margin: 50px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.drop-area {
  border: 2px dashed #007bff;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.uploaded-image {
  max-width: 100%;
  margin-top: 10px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
