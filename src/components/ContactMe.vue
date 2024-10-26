<template>
    <div class="contact-me">
      <h2>联系我</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" v-model="formData.name" placeholder="请输入您的姓名" required />
        </div>

        <div class="form-group">
          <label for="email">电子邮件</label>
          <input type="email" id="email" v-model="formData.email" placeholder="请输入您的电子邮件" required />
        </div>

        <div class="form-group">
          <label for="subject">主题</label>
          <input type="text" id="subject" v-model="formData.subject" placeholder="请输入主题" required />
        </div>

        <div class="form-group">
          <label for="message">消息</label>
          <textarea id="message" v-model="formData.message" placeholder="请输入您的消息" required></textarea>
        </div>

        <button type="submit">发送消息</button>
      </form>
    </div>
  </template>

<script>
export default {
  name: 'ContactMe',
  data () {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm () {
      // 这里可以处理表单提交，比如发送数据到服务器
      console.log('Form submitted:', this.formData)
      alert('消息已发送')

      // 清空表单
      this.formData.name = ''
      this.formData.email = ''
      this.formData.subject = ''
      this.formData.message = ''
    }
  }
}
</script>

  <style scoped>
  .contact-me {
    max-width: 700px;
    margin: 20px auto;
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .contact-me h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  </style>
