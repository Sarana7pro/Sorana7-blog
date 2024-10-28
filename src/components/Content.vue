<template>
  <div class="main-content">
    <h1>主要内容</h1>
    <div class="cards">
      <a v-for="post in paginatedPosts" :key="post.id" :href="'/AppViews?id=' + post.id" class="card-link">
        <div class="card">
          <img :src="post.image" :alt="post.title" />
          <div class="card-content">
            <h3>{{ post.title }}</h3>
            <h4>{{ post.summary }}</h4>
            <div class="meta-info">
              <span>{{ new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              <span>{{ post.likes }} 赞</span>
            </div>
          </div>
        </div>
      </a>
    </div>
    <PostPagination
      :totalItems="filteredPosts.length"
      :itemsPerPage="itemsPerPage"
      :currentPage="currentPage"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script>
import PostPagination from '../components/PostPagination.vue'

export default {
  name: 'ContentComponent',
  components: {
    PostPagination
  },
  props: {
    searchQuery: { // 接收搜索查询
      type: String,
      default: ''
    }
  },
  data () {
    return {
      posts: [],
      currentPage: 1,
      itemsPerPage: 5
    }
  },
  computed: {
    filteredPosts () {
      if (!this.searchQuery) return this.posts
      return this.posts.filter(post =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    paginatedPosts () {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredPosts.slice(start, end)
    }
  },
  mounted () {
    fetch('http://localhost:3000/getPosts')
      .then(response => response.json())
      .then(data => {
        this.posts = data.sort((a, b) => b.id - a.id)
      })
      .catch(err => {
        console.error('获取数据失败:', err)
      })
  },
  methods: {
    handlePageChange (page) {
      this.currentPage = page
    }
  }
}
</script>

  <style scoped>
  .main-content {
      padding: 30px;
      background-color: #f8f9fa;
      width: 100%;
      max-width: 1200px;
      border-radius: 12px;
      margin: 100px auto;
      opacity: 95%;
      min-height: 500px;
  }

  .card-link {
      text-decoration: none;
      color: inherit;
      font-weight: inherit;
      font-style: inherit;
  }

  .cards {
      display: flex;
      flex-direction: column;
      gap: 20px;
  }

  .card {
      display: flex;
      flex-direction: row;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      cursor: url('@/assets/cur/busy.gif'), auto;
  }

  .card img {
      width: 50%;
      height: 300px;
      border-radius: 8px;
      object-fit: cover;
      margin-right: 15px;
  }

  .card-content {
      flex: 1;
      display: flex;
      flex-direction: column;
  }

  .card-content h3 {
      font-size: 1.5rem;
      margin: 0 0 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
  }

  .meta-info {
      display: flex;
      justify-content: space-between;
      margin-top: 210px;
      font-size: 14px;
      color: #999;
  }

  h4 {
      color: #807f7f;
      font-size: 16px;
      margin: 0 0 10px;
      text-overflow: ellipsis;
  }
  </style>
