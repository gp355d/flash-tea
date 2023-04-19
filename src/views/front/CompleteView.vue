<template>
  <div class="container py-8">
    <!-- <loading v-model:active="isLoading"></loading> -->
    <h2 class="text-center text-primary fw-bold mb-7 noto-serif-font">訂購完成</h2>
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
              <div class="timeline-pointer text-center step-2 active">
                <p>填寫訂單</p>
              </div>
            </div>
            <div class="col-3 col-md-5">
              <div class="timeline-pointer text-center step-3 active">
                <p>購物完成</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="row g-0 g-md-3 g-lg-4 align-items-center justify-content-center flex-column flex-md-row">
      <div class="col-9 mb-3 d-flex flex-column justify-content-between">
        <div class="row g-0 g-md-3 g-lg-4">
          <div class="col-md-6 mb-6">
            <!-- <router-link to="/home" class="w-50 d-flex align-items-center text-decoration-none">
              <span class="material-icons">keyboard_return</span>
              回首頁
            </router-link> -->
            <div class="border p-2 mb-2 mb-md-0 h-100">
              <!-- {{ order.products['-NQB8IpoU-mqce9kzwNo'].product.title }} -->
              <h3 class="text-center fw-bold text-primary">訂單明細</h3>
              <template v-for="item in order.products" :key="item.id">
                <div class="d-flex align-items-center mb-4 shadow-sm p-2">
                  <img class="col-4 object-fit img-fluid" :src="item.product.imageUrl" alt="" height="50">
                  <p class="col-3 fs-6 fs-md-4 mb-0 d-flex flex-nowrap p-2">{{item.product.title}}</p>
                  <span class="col-3 fs-6 fs-md-4 text-end">{{ $filters.currency(item.product.price) }}</span>
                  <span class="col-2 fs-6 fs-md-4 text-end">X{{ item.qty }}</span>
                </div>
              </template>
              <!-- <div class="d-flex justify-content-between fs-5">
                <span>小計</span>
                <span>0</span>
              </div> -->
              <div class="d-flex justify-content-between fs-5">
                <span>總計</span>
                <span class="fw-bold noto-serif-font text-danger noto-serif-font">{{  $filters.currency(order.total) }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 border py-2">
            <div class="row g-0 g-md-3 g-lg-4">
              <div class="col-lg-6 mb-2">
                <h3 class="text-center text-primary fw-bold">顧客資訊</h3>
                <div class="shadow-sm p-2">
                  <div class="">
                    <span>姓名:</span>
                    <span>{{order.user.name}}</span>
                  </div>
                  <div class="">
                    <span>電話:</span>
                    <span>{{order.user.tel}}</span>
                  </div>
                  <div class="">
                    <span>Emai:</span>
                    <span>{{order.user.email}}</span>
                  </div>
                  <div class="">
                    <span>地址:</span>
                    <span>{{order.user.address}}</span>
                  </div>
                  <div class="">
                    <span>備註:</span>
                    <span>{{order.message}}</span>
                  </div>
                </div>

              </div>
              <div class="col-lg-6">
                <h3 class="text-center text-primary fw-bold">訂單資訊</h3>
                <div class="shadow-sm p-2">
                  <div class="">
                    <span>訂單狀態:</span>
                    <span>{{ order.is_paid ? '付款完成' : '尚未付款' }}</span>
                  </div>
                  <div class="">
                    <span>訂單編號:</span>
                    <span>{{ order.id }}</span>
                  </div>
                  <div class="">
                    <span>訂單金額:</span>
                    <span>{{ $filters.currency(order.total) }}</span>
                  </div>
                  <div class="mb-2">
                    <span>訂單成立時間:</span>
                    <span>{{$filters.date(order.create_at)}}</span>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" @click.prevent="() => pay()" v-if="order.is_paid!==true">前往付款</button>
                    <div v-else></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
<script>
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      order: {
        products: [],
        user: {}
      }
    }
  },
  methods: {
    getOrder () {
      const orderId = this.$route.params.order_id
      // console.log(this.$route.params)
      const loader = this.$loading.show()
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order/${orderId}`)
        .then((res) => {
          const { order } = res.data
          this.order = order
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
    },
    pay () {
      const orderId = this.$route.params.order_id
      const loader = this.$loading.show()
      this.$http.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${orderId}`)
        .then((res) => {
          console.log(res)
          this.getOrder()
          loader.hide()
          this.$router.push('/pay')
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
