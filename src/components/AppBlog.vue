<template>
  <div id="AppBlog" class="main-content">
    <h1>推荐文章</h1>
    <div class="cards">
      <a
        v-for="post in filteredPosts"
        :key="post.id"
        :href="'/AppViews?id=' + post.id"
        class="card-link"
      >
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
  </div>
</template>

<script>
export default {
  name: 'AppBlog',
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      recommendedPosts: []
    }
  },
  computed: {
    filteredPosts () {
      return this.recommendedPosts.filter(post =>
        post.title.includes(this.searchQuery) ||
        post.summary.includes(this.searchQuery)
      )
    }
  },
  methods: {
    fetchRecommendedPosts () {
      fetch('http://localhost:3000/getRecommendedPosts')
        .then(response => response.json())
        .then(data => {
          this.recommendedPosts = data
        })
        .catch(err => {
          console.error('获取推荐文章失败:', err)
        })
    }
  },
  mounted () {
    this.fetchRecommendedPosts()
  }
}
</script>

<style scoped>
.main-content {
  padding: 30px;
  background-color: #ffffff;
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

.card-content h3,
h4 {
  margin: 0 0 10px;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
}
</style>
