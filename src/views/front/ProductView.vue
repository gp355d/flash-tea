<template>
  <section class="container py-8">
    <div class="row g-0 g-md-3 g-lg-4 d-flex justify-content-center mb-4">
      <div class="col-md-9">
        <div class="row g-0 g-md-3 g-lg-4 mb-4">
          <h1 class="text-center text-primary fw-bold mb-7 noto-serif-font">鮮品味茶品</h1>
          <div class="col-md-7 d-flex align-items-center mb-2 mb-lg-0">
            <swiper
                  :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }"
                  :spaceBetween="10"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :modules="modules"
                  class="mySwiper-big"
                >
                  <swiper-slide
                    v-for="(image, i) in product.imagesUrl"
                    :key="i"
                  >
                    <img class="iobject-fit" :src="image" />
                  </swiper-slide>
            </swiper>
          </div>
          <div class="col-md-5">
            <div class="d-flex flex-column justify-content-center h-100">
              <div>
                <div class="d-flex align-items-center mb-2">
                  <h3 class="h3 text-nowrap me-2 mb-0 fw-bold">{{ product.title }}</h3>
                  <a
                    href="#"
                    class="d-flex mb-md-0 align-items-center text-decoration-none"  @click.prevent="() => addtoFollow(product.id)" style="cursor: pointer;"
                  >
                  <span class="material-icons fs-2" v-if="followList.id.indexOf(product.id) === -1">
                  <!-- 未加入 true -->
                  favorite_border
                  </span>
                  <span class="material-icons fs-2 text-primary" style="cursor: pointer;" v-else>
                    <!-- 已加入 false-->
                    favorite
                  </span>
                  </a>
                </div>
                <span class="badge rounded-pill bg-primary mb-2">{{
                  product.category
                }}</span>
                <p class="fs-5" v-html="product.description"></p>
                <div class="d-flex flex-column h-100">
                  <div class="align-self-end">
                    <div class="text-decoration-line-through fs-4">
                      <span class="me-2">原價</span>
                      <span>{{ $filters.currency(product.origin_price) }}</span>
                    </div>
                    <div class="fs-2 mb-2 fw-bold text-danger">
                      <span class="me-2">特價</span>
                      <span>{{ $filters.currency(product.price) }}</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <select class="form-select me-2" name="qty" v-model.number="itemNum">
                      <option :value="num" v-for="num in 5" :key="num + '0'">
                        {{ num }}{{ product.unit }}
                      </option>
                    </select>
                    <button
                      type="button"
                      class="btn btn-primary me-3 me-md-0 text-nowrap"
                      @click="() => addToCart(product.id, itemNum)"
                    >
                      加入購物車
                      <i class="fas fa-spinner fa-pulse" v-if="loadingItem === product.id+'1'"></i>
                    </button>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="row g-0 g-md-3 g-lg-4">
          <div class="col-12 h-50">
            <swiper
              @swiper="setThumbsSwiper"
              :spaceBetween="10"
              :slidesPerView="4"
              :freeMode="true"
              :watchSlidesProgress="true"
              :modules="modules"
              class="mySwiper align-items-center"
            >
              <swiper-slide
                v-for="(image, i) in product.imagesUrl"
                :key="i"
              >
                <img class="object-fit" :src="image" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-0 g-md-3 g-lg-4 d-flex justify-content-center mb-4">
      <div class="col-md-9">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              商品介紹
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              商品規格
            </button>
          </li>
        </ul>
        <div class="tab-content p-2" id="myTabContent">
          <div
            class="tab-pane fade show active p-5"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab" v-html="product.content"
          >
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th class="bg-secondary" width="150">茶品名稱:</th>
                <td>{{ product.title }}</td>
              </tr>
              <tr>
                <th class="bg-secondary" width="150">產地:</th>
                <td>{{ product.product_country }}</td>
              </tr>
              <tr>
                <th class="bg-secondary" width="150">淨重:</th>
                <td>{{ product.product_weight }}{{ product.product_unit }}</td>
              </tr>
              <tr>
                <th class="bg-secondary" width="150">保存期限:</th>
                <td>{{ product.product_year }}{{ product.product_year_unit }}</td>
              </tr>
              <tr>
                <th class="bg-secondary" width="150">包裝類型:</th>
                <td>{{ product.category }}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-0 g-md-3 g-lg-4 d-flex justify-content-center">
      <h2 class="text-center text-primary mb-7 mb-md-2 fw-bold noto-serif-font">相關商品</h2>
      <div class="col-md-9">
        <div class="swiper-container">
          <swiper class="pb-8"
          :slidesPerView="3"
          :spaceBetween="24"
          :modules="modules"
          :pagination="{ clickable: true }"
          navigation
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 24
          },
            992: {
              slidesPerView: 3,
              spaceBetween: 24,
            }
          }"
          >
            <swiper-slide v-for="item in related" :key="item.id">
              <div class="card d-flex h-100 shadow-sm">
                <router-link class="text-decoration-none" :to="`/product/${item.id}`">
                  <div class="bg-cover"
                    style="min-height: 200px;cursor: pointer;background-position: center;"
                      @click.prevent="() =>render(item.id)" :style="{backgroundImage:`url(${item.imageUrl})`} ">
                  </div>
                  <div class="card-body p-2">
                    <h5 class="card-title fs-4 lh-29 fw-bold">{{ item.title }}</h5>
                    <p class="fw-normal fs-6 mb-2"><span class="d-block" style="height: 48px;line-height:1.2;vertical-align: middle;">{{ item.description.replace(/<[^>]*>|<\/[^>]*>/gm, "") }}</span></p>
                    <div class="fs-5 lh-30 fw-bold mb-5">
                      <span class="text-danger">{{ $filters.currency(item.price) }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import { Navigation, Thumbs, Pagination } from 'swiper'
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/CartStore' // 匯入store狀態
import productStore from '@/stores/ProductStore'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: [],
      products: [],
      tempProducts: [],
      thumbsSwiper: null,
      modules: [Navigation, Thumbs, Pagination],
      itemNum: 1,
      id: '',
      fillter: [],
      productsAll: []
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProductSingle () {
      const { id } = this.$route.params
      const loader = this.$loading.show()
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          const { product } = res.data
          this.product = product
          this.products = this.product
          this.getCategory()
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
    },
    getCategory () {
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.productsAll = res.data.products
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },

    setThumbsSwiper (swiper) {
      this.thumbsSwiper = swiper
    },
    ...mapActions(cartStore, ['addToCart']), // 取用cart store內的狀態資料(方法)
    ...mapActions(productStore, ['tempProductsa11', 'getProductAll', 'addtoFollow', 'getid']),
    render (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  computed: {
    ...mapState(productStore, ['followList']),
    ...mapState(cartStore, ['loadingItem']),
    related () {
      return this.productsAll.filter(
        (item) => this.products.id !== item.id && item.category === this.products.category)
    }
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  },
  mounted () {
    this.getProductSingle()
    this.getProductAll()
  }
}
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}

.mySwiper-big .swiper-slide img,
.mySwiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 商品大圖切換外框 */
.mySwiper-big {
  width: 100%;
  height: 400px;
}

.mySwiper-big .swiper-slide {
  background-size: cover;
  background-position: center;
}
.mySwiper {
  height: 140px;
  box-sizing: border-box;
  padding: 10px 0;
}
.mySwiper .swiper-slide {
  width: 25%;
  background-size: cover;
  background-position: center;
  height: auto;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
.card:hover {
  opacity: .3;
}
</style>
