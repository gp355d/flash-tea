<template>
  <div class="container py-8">
    <Loading v-model:active="isLoading"/>
    <h1 class="text-center fw-bold text-primary mb-7 noto-serif-font">填寫訂單</h1>
    <div class="pt-4 pb-3 mb-3">
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
            <div class="timeline-pointer text-center step-3">
              <p>購物完成</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-0 g-md-3 justify-content-center flex-column flex-md-row">
      <div class="col-md-9 d-flex flex-column justify-content-between mt-0">
        <div class="col-12">
          <router-link to="/cart" class="d-inline-flex align-items-center text-decoration-none">
            <span class="material-icons">keyboard_return</span>
            回購物車列表
          </router-link>
        </div>
      </div>
    </div>
    <div class="row g-0 g-md-3 justify-content-center flex-column flex-md-row mt-2">
      <div class="col-md-9 mb-3 d-flex flex-column justify-content-between mt-0">
      <div class="row g-0 g-md-3">
        <div class="col-md-6" v-if="cartNUm > 0">
            <div class="border p-2 h-100">
              <h3 class="text-center fw-bold text-primary">訂單明細</h3>
              <div class="d-flex align-items-center mb-4 shadow-sm p-2" v-for="item in carts.carts" :key="item.id">
                <div class="col-4">
                  <img class="col-4 object-fit p-1 w-100 img-fluid" :src="item.product?.imageUrl" alt="order-img" height="150">
                </div>
                <div class="col-3">
                  <span class="fs-6 fs-md-4 mb-0">{{ item.product?.title }}</span>
                </div>
                <div class="col-3 text-end">
                  <span class="fs-6 fs-md-4">{{ $filters.currency(item.product?.price) }}</span>
                </div>
                <div class="col-2 text-end">
                  <span class="col-2 fs-6 fs-md-4">X{{ item.qty }}</span>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <input type="text" class="form-control me-2" v-model="couponCode">
                <button class="btn btn-primary text-nowrap" type="button" @click.prevent="() => sendCoupon(couponCode)">套用優惠碼</button>
              </div>
              <div class="d-flex justify-content-between fs-5">
                <template v-if="discoutStatus">
                  <div class="w-100">
                    <div class="d-flex justify-content-between">
                      <span>已套用</span>
                      <span class="fw-bold text-success">{{ coupon_Name }}優惠券</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>原始總價</span><span class="fw-bold text-success">{{ $filters.currency(total) }}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>優惠</span><span class="fw-bold text-success">{{ discocount }}折</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>總計</span>
                      <span class="fw-bold text-danger">{{ $filters.currency(final_total) }}</span>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="w-100 d-flex justify-content-between">
                    <span>總和</span>
                    <span class="fw-bold text-danger">{{ $filters.currency(total) }}</span>
                  </div>
                </template>
              </div>
            </div>
        </div>
        <template v-else>
          <div class="col-md-6">
            <div class="border p-2 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column">
              <h2 class="fs-5 fw-bold">目前無選購商品</h2>
              <router-link to="/products" class="btn btn-primary">去選購商品</router-link>
            </div>
          </div>
        </template>
        <div class="col-md-6">
          <v-form ref="form" v-slot="{ errors }" @submit="sendOrder">
            <div class="p-2">
              <h3 class="text-center fw-bold text-primary">顧客資訊</h3>
              <div class="mb-3">
                <span class="text-danger me-1">*</span>
                <label for="customer-name" class="form-label">姓名</label>
                <v-field type="text" name="姓名" class="form-control" id="customer-name" placeholder="請填寫姓名" :class="{ 'is-invalid': errors['姓名'] }" rules="required" v-model="form.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>
               <div class="mb-3">
                <span class="text-danger me-1">*</span>
                <label for="customer-emall" class="form-label">Email</label>
                <v-field type="email" name="信箱" class="form-control" id="customer-emall" placeholder="name@example.com" :class="{ 'is-invalid': errors['信箱'] }" rules="email|required" v-model="form.email"></v-field>
                <error-message name="信箱" class="invalid-feedback"></error-message>
              </div>
             <div class="mb-3">
              <span class="text-danger me-1">*</span>
                <label for="customer-phone" class="form-label">電話</label>
                <v-field type="tel" name="電話" class="form-control" id="customer-phone" placeholder="0912345678" :class="{ 'is-invalid': errors['電話'] }" :rules="validateTelephone" v-model="form.phone"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
              </div>
             <div class="mb-3">
              <span class="text-danger me-1">*</span>
                <label for="customer-address" class="form-label">地址</label>
                <v-field type="text" name="地址" class="form-control" id="customer-address" placeholder="請輸入地址" :class="{ 'is-invalid': errors['地址'] }" rules="required" v-model="form.address"></v-field>
                <error-message name="地址" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <span class="text-danger me-1">*</span>
                <label for="customer-pay" class="form-label">付款方式</label>
                <v-field id="customer-pay" name="付款方式" class="form-control" :class="{ 'is-invalid': errors['付款方式'] }" rules="required" v-model="form.region" as="select">
                  <option value="" disabled>請選擇</option>
                  <option value="1">ATM轉帳</option>
                  <option value="2">信用卡</option>
                  <option value="3">銀行轉帳</option>
                  <option value="4">超商繳費</option>
                </v-field>
                <error-message name="付款方式" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="customer-note" class="form-label">備註</label>
                <textarea class="form-control" id="customer-note" rows="3" v-model="form.msg"></textarea>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-primary">送出訂單</button>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/CartStore'
import status from '@/stores/StatusStore'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        phone: '',
        address: '',
        region: '',
        msg: ''
      },
      couponCode: '',
      // discount: 0,
      discoutStatus: false
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'isLoading', 'final_total', 'coupon_Name', 'discocount', 'cartNUm']),
    ...mapState(status, ['isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    validateTelephone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入09開頭的手機號碼'
    },
    sendCoupon (code) {
      this.couponCode = code
      const coupon = {
        code: this.couponCode
      }
      this.$http.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/coupon`, { data: coupon })
        .then((res) => {
          this.discoutStatus = res.data.success
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `已套用 ${this.coupon_Name} 優惠券`,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          return 0
        })
      this.couponCode = ''
    },
    sendOrder () {
      if (this.carts.length === 0) {
        alert('購物車清單內為空')
      } else {
        const data = {
          user: {
            name: this.form.name,
            email: this.form.email,
            tel: this.form.phone,
            address: this.form.address
          },
          message: this.form.msg
        }
        const loader = this.$loading.show()
        this.$http.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order`, { data })
          .then(res => {
            this.getCarts()
            this.loadingItem = ''
            this.$refs.form.resetForm()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '訂單已送出',
              showConfirmButton: false,
              timer: 1500
            })
            this.$router.push(`/complete/${res.data.orderId}`)
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
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.getCarts()
  }
}
</script>
