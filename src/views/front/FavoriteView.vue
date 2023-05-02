<template>
  <div class="container py-8">
    <Loading v-model:active="isLoading" loader="bars"/>
    <div class="row g-0 g-md-3 g-lg-4 align-items-center flex-column flex-md-row d-flex justify-content-center">
      <h1 class="text-center text-primary mb-7 fw-bold noto-serif-font">你的收藏茶品</h1>
      <template v-if="followList.list.length > 0">
        <div class="col-md-9">
          <div class="row g-0 g-md-3 g-lg-4 me-3">
            <div class="d-flex align-items-center shadow-sm mb-2 mb-md-3 p-2 text-center" v-for="list in followList.list" :key="list.id">
              <span class="col-1"><a href="#"><span class="material-icons fs-2" @click.prevent="() => addtoFollow(list.id)">delete</span></a></span>
              <img class="col-4 img-fluid object-fit px-2" :src="list.imageUrl" :key="list.id" alt="img-fluid" height="130">
              <div class="col-7 d-flex flex-column align-items-center">
                <p class="fs-4 fs-md-6 mb-0">{{ list.title }}</p>
                <span class="col-12 fs-4 fs-md-6 d-block">{{ $filters.currency(list.price) }}</span>
                <button type="button" class="btn btn-primary w-50" :disabled="loadingItem === list.id+'1'" @click.prevent="() => addToCart(list.id)">加入購物車
                  <i class="fas fa-spinner fa-pulse" v-if="loadingItem === list.id+'1'"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <p class="text-center h4 mb-3">目前收藏為空，再去收藏吧</p>
        <router-link class="w-25 btn btn-primary mt-0" to="/products">去收藏</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import productStore from '@/stores/ProductStore'
import statusStore from '@/stores/StatusStore'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import cartStore from '@/stores/CartStore'
export default {
  computed: {
    ...mapState(productStore, ['tempProducts', 'followList']),
    ...mapState(cartStore, ['loadingItem']),
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    ...mapActions(productStore, ['getProductAll', 'addToCart', 'addtoFollow', 'tempProductsall']),
    getFollow () {
      this.getProductAll()
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.getFollow()
  }
}
</script>
