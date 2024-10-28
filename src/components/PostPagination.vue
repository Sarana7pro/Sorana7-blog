<template>
    <div class="pagination">
      <button
        :disabled="currentPage === 1"
        @click="$emit('page-changed', currentPage - 1)">
        上一页
      </button>

      <span v-for="page in totalPages" :key="page"
        :class="{ active: page === currentPage }"
        @click="$emit('page-changed', page)">
        {{ page }}
      </span>

      <button
        :disabled="currentPage === totalPages"
        @click="$emit('page-changed', currentPage + 1)">
        下一页
      </button>
    </div>
  </template>

<script>
export default {
  name: 'PostPagination',
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    }
  }
}
</script>

  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  .pagination button {
    padding: 5px 10px;
    cursor: url('@/assets/cur/busy.gif'), auto;
  }

  .pagination span {
    padding: 5px;
    cursor: pointer;
  }

  .pagination span.active {
    font-weight: bold;
  }
  </style>
