# 个人博客项目

这是一个基于 Node.js 和 Vue2 构建的个人博客系统，旨在帮助用户快速搭建自己的博客，实现文章发布、评论、用户管理以及后台管理等功能。

## 目录

- [项目介绍](#项目介绍)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [安装与运行](#安装与运行)
- [常见问题](#常见问题)
- [贡献](#贡献)

## 项目介绍

本项目采用前后端分离架构：

- **后端**：使用 Node.js（Express 框架）提供 RESTful API 接口;
- **前端**：使用 Vue2 搭建单页面应用（SPA）；
- **数据库**：使用 MySQL 进行数据存储。

通过本项目，你可以学习到如何利用 Node.js 和 Vue2 构建一个功能完善的个人博客系统，并且可以根据个人需求进行扩展和定制。

## 功能特性

- **文章管理**：支持文章的发布、编辑、删除和预览。
- **评论系统**：实现文章评论及回复功能。
- **用户认证**：提供用户注册、登录及权限管理。
- **分类与标签**：支持文章的分类与标签管理，便于内容筛选。
- **后台管理**：提供简洁易用的后台管理界面。
- **响应式设计**：兼容 PC 和移动设备访问。

## 技术栈

- **前端**：
  - Vue2
  - Vuex（状态管理）
  - Vue Router（路由管理）
  - Axios（接口请求）
- **后端**：
  - Node.js
  - Express
  - MySQL
- **构建工具**：
  - webpack
  - Babel

## 安装与运行

### 前置条件

- Node.js v12.0+（或更高版本）
- npm 或 yarn 包管理器
- MySQL 数据库

### 数据库部分

1. **进入数据库目录：**

   ```bash
   cd src/server
   ```
   
2. **配置数据库连接：**

   ```bash
   修改 `server/index.js ,  server/mysql.js`配置文件，填入 MySQL 连接信息。
   ```

3. **启动服务：**

   ```bash
   node index.js
   ```

### 前端部分

1. **进入前端目录：**

   ```bash
   cd blog
   ```

2. **安装依赖：**

   ```bash
   npm install
   ```

3. **启动开发服务器：**

   ```bash
   npm run serve
   ```

4. **访问项目：**

   打开浏览器访问 [http://localhost:8080](http://localhost:8080) 查看项目效果。



## 常见问题

- **数据库连接失败：**
  - 请检查 `server/index.js ,  server/mysql.js` 中的数据库连接信息是否正确，并确保数据库服务已启动。

- **跨域问题：**
  - 若前后端分离时遇到跨域问题，请在后端使用 [cors](https://www.npmjs.com/package/cors) 中间件：
    ```javascript
    const cors = require('cors');
    app.use(cors());
    ```

- **启动项目报错：**
  - 确认 Node.js 版本是否符合要求，并检查各依赖是否已正确安装。

## 贡献

欢迎大家为本项目贡献代码！  
如果你有任何建议或问题，请提交 [Issues](https://github.com/你的仓库/issues) 或直接 [Fork](https://github.com/你的仓库) 后提交 Pull Request。

