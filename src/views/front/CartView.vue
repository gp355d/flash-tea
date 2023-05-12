<template>
  <div class="container py-8">
    <Loading v-model:active="isLoading" loader="bars"/>
    <h1 class="text-center text-primary mb-7 fw-bold noto-serif-font">購物車列表</h1>
    <div class="row g-0 g-md-3 g-lg-4 justify-content-center flex-column flex-md-row mb-4">
      <template v-if="carts.carts?.length">
      <div class="pt-4 pb-3">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-9 col-md-7 timeline">
            </div>
          </div>
          <div class="row">
            <div class="col-3 col-md-5">
              <div class="timeline-pointer text-center step-1 active">
                <p>購物清單確認</p>
              </div>
            </div>
            <div class="col-6 col-md-2">
              <div class="timeline-pointer text-center step-2">
                <p>填寫訂單</p>
              </div>
            </div>
            <div class="col-3 col-md-5">
              <div class="timeline-pointer text-center step-3">
                <p>購物完成</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <router-link to="/products" class="d-inline-flex align-items-center text-decoration-none">
          <span class="material-icons">keyboard_return</span>
          回商品列表
        </router-link>
        <div class="row g-0 g-md-3 g-lg-4 bg-white p-2">
          <div class="col-12 mb-3">
              <div class="text-end">
                <button class="btn btn-outline-danger" type="button" @click="clearCart"
                  :disabled="loadingItem === 'deleteAll'">
                  <i class="fas fa-spinner fa-pulse" v-if="loadingItem === 'deleteAll'"></i>
                  清空購物車
                </button>
              </div>
          </div>
          <div class="col-12">
            <div class="row g-4 d-flex shadow-sm mb-3 p-2" v-for="item in carts.carts" :key="item.id">
              <div class="col-4 d-flex align-items-center">
                <img class="object-fit w-100 img-fluid" :src="item.product.imageUrl" alt="">
              </div>
              <div class="col-8 d-flex flex-column justify-content-center">
                <div class="row g-4 mb-4">
                  <div class="col-12 mb-0 position-relative fs-5 fw-bold">{{ item.product.title }}
                    <div class="col position-absolute top-0 end-0"><a href="#" @click.prevent="() => deleteItem(item)"
                        :disabled="item.id === loadingItem"><span class="material-icons fs-2">delete</span></a>
                    </div>
                  </div>
                </div>
                <div class="row g-4 d-flex justify-content-between">
                  <span class="col-4 d-block fs-3 text-danger fw-bold">{{ $filters.currency(item.product.price) }}</span>
                  <select name="product-number" id="" class="form-select w-50" v-model="item.qty" @change="() => updateCartItem(item)"
                            :disabled="item.id === loadingItem">
                    <option :value="i" v-for="i in 10" :Key="i + '45678'">{{ i }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mb-6">
            <div class="d-flex justify-content-end align-items-center shadow-sm">
              <span class="fs-4 me-6">總金額</span>
              <span class="fs-5 text-end me-2 text-danger fw-bold">{{ $filters.currency(carts.total) }}</span>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-end">
            <router-link to="/order" class="btn btn-primary">確認訂單</router-link>
          </div>
        </div>
      </div>
      </template>
      <template  v-else>
        <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <p class="text-center h4 mb-3">目前購物車為空的狀態喔!，再去選購吧~</p>
          <router-link class="w-25 btn btn-primary" to="/products">購物去</router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/CartStore'
import status from '@/stores/StatusStore'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: {},
      form: {
        email: '',
        name: '',
        phone: '',
        address: '',
        msg: ''
      },
      total: 0
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapState(cartStore, ['carts', 'final_total', 'isLoading', 'loadingItem']),
    ...mapState(status, ['isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'deleteItem', 'updateCartItem', 'clearCart']),
    changeLoading (modalLoading) {
      this.loadingItem = modalLoading
    },
    validateTelephone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的手機號碼'
    }

  },
  mounted () {
    this.getCarts()
  }

}
</script>

<style lang="scss">
$primary: #46633D;

.timeline {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 9px;
    width: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #C1C1C1;
  }
   &::before {
    content: "";
    position: absolute;
    top: 9px;
    width: 50%;
    left: 50;
    right: 0;
    height: 2px;
    background-color: #C1C1C1;
  }
  &-pointer {
    position: relative;
    color: #c1c1c1;
    p {
      padding-top: 24px;
      margin-bottom: 0;
      line-height: 1.5;
    }
    &::before {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 20px;
      border: 1px solid #fff;
      border-radius: 50%;
      background-color: #C1C1C1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      z-index: 1;
    }
    &.step-1::before {
      content: '1';
    }
    &.step-2::before {
      content: '2';
    }
    &.step-3::before {
      content: '3';
    }
    &.active {
      color: $primary;
      &::before {
        color: #FFFFFF;
        background-color: $primary;
        border-color: $primary;
      }
    }
  }
}
</style>
