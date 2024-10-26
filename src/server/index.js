const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')
const mysql = require('mysql') // 导入 mysql
const { getAllPosts, getPostById, addPost } = require('./mysql') // 导入获取posts和单篇文章的函数及addPost

const app = express()
app.use(cors())

// 记录断开和重连时间的变量
let disconnectTime = null
let reconnectTime = null

// 创建数据库连接池
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root', // 替换为你的 MySQL 用户名
  password: '123456', // 替换为你的 MySQL 密码
  database: 'my_project' // 替换为你的数据库名称
})

// 监听连接池的错误事件
pool.on('error', (err) => {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('数据库连接丢失:', err)
    disconnectTime = new Date() // 记录断开时间

    // 重新建立连接
    pool.getConnection((error, connection) => {
      if (error) {
        console.error('重连数据库失败:', error)
        setTimeout(() => pool.getConnection(), 2000) // 2秒后重试
      } else {
        reconnectTime = new Date() // 记录重连时间
        const duration = (reconnectTime - disconnectTime) / 1000 // 计算断开持续时间（秒）
        console.log(`数据库连接已恢复，断开持续时间: ${duration} 秒`)
        connection.release() // 释放连接
      }
    })
  } else {
    throw err
  }
})

// 调整请求体大小的限制，例如增加到50MB（根据你的需求进行调整）
app.use(bodyParser.urlencoded({ extended: true, limit: '15mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(multiparty())

// 测试接口
app.get('/test', (req, res) => {
  res.send('测试用的接口')
})

// 获取所有文章的接口
app.get('/getPosts', (req, res) => {
  getAllPosts()
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.status(500).send({ isSucceed: false, msg: '查询失败', code: 500, data: err })
    })
})

// 根据ID获取单篇文章的接口
app.get('/getPost', (req, res) => {
  const postId = req.query.id
  getPostById(postId)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.status(500).send({ isSucceed: false, msg: '获取文章失败', code: 500, data: err })
    })
})

// 添加文章的接口
app.post('/addPost', (req, res) => {
  const { title, content, image, summary, date, comments, likes } = req.body

  console.log('Received:', { title, content, image, summary, date, comments, likes }) // 打印接收到的数据

  addPost(title, content, image, summary, date, comments, likes)
    .then(() => res.status(200).send('Post added successfully'))
    .catch(err => {
      console.error('数据库插入错误:', err)
      res.status(500).send('Error adding post')
    })
})

// 获取评论的接口
app.get('/getComments', (req, res) => {
  const postId = req.query.postId
  pool.query('SELECT * FROM comments WHERE post_id = ?', [postId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(results)
  })
})

// 添加评论的接口
app.post('/addComment', (req, res) => {
  const { post_id, author, content } = req.body
  pool.query('INSERT INTO comments (post_id, author, content) VALUES (?, ?, ?)', [post_id, author, content], (err, results) => {
    if (err) {
      console.error('添加评论失败:', err)
      return res.status(500).json({ error: err.message })
    }
    res.status(201).json({ id: results.insertId, post_id, author, content }) // 返回新评论的数据
  })
})

// 更新点赞数的接口
app.post('/updateLikes/:id', (req, res) => {
  const articleId = req.params.id; // 从 URL 获取文章 ID
  const { likes } = req.body; // 从请求体获取新的点赞数

  // 更新数据库中对应文章的点赞数
  pool.query('UPDATE posts SET likes = ? WHERE id = ?', [likes, articleId], (err, results) => {
    if (err) {
      console.error('更新点赞数失败:', err);
      return res.status(500).json({ error: '更新点赞数失败' });
    }

    if (results.affectedRows > 0) {
      res.json({ message: '点赞数更新成功', likes }); // 返回成功消息
    } else {
      res.status(404).json({ message: '文章未找到' }); // 找不到对应文章
    }
  });
});


// 启动服务器
app.listen(3000, () => {
  console.log('恭喜你，服务器启动成功')
})
