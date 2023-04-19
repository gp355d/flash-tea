<template>
<div class="container py-8">
  <div class="row g-0 d-flex justify-content-center py-5">
    <div class="col-md-9 p-3">
      <h2 class="text-center text-primary mb-7 fw-bold noto-serif-font">茶葉知識文章</h2>
      <div class="row mb-5 p-3">
        <div class="col-md-6 col-lg-4  mb-3 mb-md-0" v-for="article in articles" :key="article.id">
          <div class="h-100 shadow-sm">
            <img class="object-fit w-100 img-fluid" :src="article.imgurl" alt="article-img" height="300px">
            <div class="content p-3 flex-column align-items-center">
              <h3 class="h5 fw-bold">{{article.title}}</h3>
              <div class="d-flex justify-content-between">
                <span>{{article.author}}</span>
                <span>{{$filters.date(article.create_at)}}</span>
              </div>
              <p class="mb-0 text-truncate">{{ article.description }}</p>
              <div class="d-flex justify-content-end">
              <router-link :to="`/knowledge/${article.id}`">more</router-link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination :pages="pagination" @emitPages="getArticles"></Pagination>
</div>
</template>

<script>
import Pagination from '../../components/PaginationView.vue'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      articles: [],
      pagination: {}
    }
  },
  methods: {
    getArticles () {
      const loader = this.$loading.show()
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          this.articles = res.data.articles
          this.pagination = res.data.pagination
          loader.hide()
        }).catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  },
  components: {
    Pagination
  },
  mounted () {
    this.getArticles()
  }
}
</script>
