const mysql = require('mysql')

// 连接数据库的配置信息
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'my_project'
}

function conMysql (sql) {
  const Myconnect = mysql.createConnection(dbConfig)

  Myconnect.connect(function (err) {
    if (err) {
      console.log(`mysql连接失败:${err}!`)
    } else {
      console.log('恭喜哦，mysql连接成功哦')
    }
  })

  return new Promise((resolve, reject) => {
    Myconnect.query(sql, (err, result) => {
      if (err) {
        reject(err)
      } else {
        const res = JSON.parse(JSON.stringify(result))
        closeMysql(Myconnect)
        resolve(res)
      }
    })
  })
}

// 新增函数获取所有posts数据
function getAllPosts () {
  const sql = 'SELECT * FROM posts'
  return conMysql(sql).then(result => {
    // 转换图片为Base64
    return result.map(post => {
      if (post.image) {
        const base64Image = Buffer.from(post.image).toString('base64')
        post.image = `data:image/jpeg;base64,${base64Image}` // 根据实际格式修改
      }
      return post
    })
  })
}

// 新增函数获取单篇文章数据
function getPostById (postId) {
  const sql = `SELECT * FROM posts WHERE id = ${mysql.escape(postId)}`
  return conMysql(sql).then(result => {
    console.log(result) // 打印调试信息，查看返回的数据结构
    if (result.length > 0 && result[0].image) {
      const base64Image = Buffer.from(result[0].image).toString('base64')
      result[0].image = `data:image/jpeg;base64,${base64Image}` // 根据实际格式修改
    }
    return result[0] // 返回单篇文章数据
  })
}

// 新增函数插入文章
function addPost (title, content, image, summary, date, comments = 0, likes = 0) {
  if (typeof image !== 'string') {
    throw new Error('Image must be a base64 string')
  }

  const base64Data = image.replace(/^data:image\/jpeg;base64,/, '')
  const binaryData = Buffer.from(base64Data, 'base64')

  const formattedDate = date ? new Date(date).toISOString().slice(0, 19).replace('T', ' ') : new Date().toISOString().slice(0, 19).replace('T', ' ')
  const sql = 'INSERT INTO posts (title, content, image, summary, date, comments, likes) VALUES (?, ?, ?, ?, ?, ?, ?)'
  const values = [title, content, binaryData, summary, formattedDate, comments, likes]

  return conMysql(mysql.format(sql, values)).catch(err => {
    console.error('数据库插入错误:', err)
    throw err
  })
}

// 关闭mysql数据库的函数
function closeMysql (Myconnect) {
  Myconnect.end((err) => {
    if (err) {
      console.log(`mysql关闭失败:${err}!`)
    } else {
      console.log('mysql关闭成功')
    }
  })
}

// 导出函数
exports.conMysql = conMysql
exports.getAllPosts = getAllPosts
exports.getPostById = getPostById
exports.addPost = addPost
