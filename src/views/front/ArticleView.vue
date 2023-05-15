<template>
  <div class="container py-8">
    <h1 class="text-center text-primary mb-7 fw-bold">{{ article.title }}</h1>
    <Loading v-model:active="isLoading"/>
    {{ create_at[0] }}
    <p>{{ article.description }}</p>
    <span class="badge bg-primary mb-2 me-2" v-for="tag in article.tag" :key="tag.id">{{ tag }}</span>
    <div>
      <router-link class="d-inline-flex align-items-center text-decoration-none" to="/products">
        <span class="material-icons">keyboard_return</span>繼續購物
      </router-link>
    </div>
    <div class="row g-0 d-flex justify-content-center">
        <div class="col-md-9">
          <div class="row g-0">
            <div class="col-12 d-flex justify-content-center mb-5">
              <img class="img-fluid object-fit" :src="article.imgurl" alt="">
            </div>
            <div class="col-12 d-flex flex-column justify-content-center align-items-start">
            <div v-html="article.content"></div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import StatusStore from '@/stores/statusStore'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      article: {},
      create_at: 0
    }
  },
  methods: {
    getArticle () {
      const { id } = this.$route.params
      const loader = this.$loading.show()
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/article/${id}`)
        .then((res) => {
          this.article = res.data.article
          this.article.content = res.data.article.content.replace(/\n/g, '<br>')
          this.create_at = new Date(this.article.create_at * 1000)
            .toISOString()
            .split('T')
          loader.hide()
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          loader.hide()
        })
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapState(StatusStore, ['isLoading'])
  },
  mounted () {
    this.getArticle()
  }
}
</script>
