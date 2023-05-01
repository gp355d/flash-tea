<template>
  <div class="container py-8">
    <div class="row g-0 g-md-3 g-lg-4 justify-content-center mb-0">
      <h1 class="text-center text-primary mb-7 fw-bold noto-serif-font">茶品介紹</h1>
      <div class="col-lg-3 mb-4 mb-md-0">
        <ul class="list-group" >
          <li class="list-unstyled">
            <a
            href="#"
                class="list-group-item list-group-item-action"
                :class="{ active: category === '' }"
                @click.prevent="setCategory('')"
              >
                全部商品
              </a>
          </li>
          <li class="list-unstyled">
            <template v-for="(item, index) in categories" :key="`${index}-${item}`">
              <a
              href="#"
                class="list-group-item list-group-item-action"
                :class="{ active: category === item }"
                @click.prevent="setCategory(item)"
              >
                {{ item }}
              </a>
            </template>
          </li>
        </ul>
      </div>
      <div class="col-lg-9 mb-4 mb-md-0">
        <div class="row g-0 g-md-3 g-lg-4 mb-3">
          <div class="col-md-6 col-lg-4 mb-4 mb-md-3" v-for="product in product" :key="product.id">
            <div class="card border-0 shadow-sm rounded-3">
              <div class="">
                <router-link :to="`/product/${product.id}`" >
                  <img :src="product.imageUrl" height="250" class="card-img-top object-fit mb-0" alt="product-img">
                </router-link>
                <div class="card-body fw-bold text-primary p-5">
                  <span class="badge rounded-pill bg-primary">{{ product.category }}</span>
                  <h5 class="card-title fs-4 lh-29 fw-bold">{{ product.title }}</h5>
                  <div class="fs-5 lh-30 fw-bold mb-5 position-relative">
                    <a href="#"  @click.prevent="() => addtoFollow(product.id)" >
                      <span class="position-absolute end-0 material-icons fs-1" style="cursor: pointer;" v-if="followList.id.indexOf(product.id) === -1">
                      <!-- 未加入 true -->
                      favorite_border
                      </span>
                      <span class="position-absolute end-0 material-icons fs-1 text-primary" style="cursor: pointer;" v-else>
                        <!-- 已加入 false-->
                        favorite
                      </span>
                    </a>
                    <span>{{ $filters.currency(product.price) }}</span>
                  </div>
                  <div class="d-grid">
                    <button :disabled="loadingItem === product.id+'1'" type="button" class="btn btn-outline-primary fw-normal" @click="() => addToCart(product.id, 1)" >
                      加入購物車
                      <i class="fas fa-spinner fa-pulse" v-if="loadingItem === product.id+'1'"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination :pages="pagination" @emitPages="getProducts"/>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import productStore from '@/stores/ProductStore'
import cartStore from '@/stores/CartStore'
import Pagination from '@/components/PaginationView.vue'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      pagination: {},
      product: []
    }
  },
  methods: {
    ...mapActions(productStore, ['getProductAll', 'getid']),
    ...mapActions(cartStore, ['addToCart']),

    getProducts (page = 1) {
      const loader = this.$loading.show()
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/?page=${page}&category=${this.category}`
      this.$http.get(url)
        .then((res) => {
          this.product = res.data.products
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
          loader.hide()
        })
    },
    ...mapActions(productStore, ['addtoFollow', 'setCategory', 'getProductAll'])

  },
  watch: {
    category () {
      this.getProducts()
    }
  },
  computed: {
    ...mapState(productStore, ['followList', 'productsAll', 'category', 'categories']),
    ...mapState(cartStore, ['loadingItem'])
  },
  components: {
    Pagination
  },
  mounted () {
    this.getProducts()
    this.getProductAll()
    this.getid()
  }
}
</script>
