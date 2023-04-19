<template>
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <v-form ref="form" v-slot="{ errors }">
          <div class="mb-3">
            <label for="title">標題</label>
            <v-field type="text" name="標題" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入標題"
            :class="{ 'is-invalid': errors['標題'] }" rules="required"></v-field>
            <error-message name="標題" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <v-field type="text" name="優惠碼" class="form-control" id="coupon_code" v-model="tempCoupon.code" placeholder="請輸入優惠碼"
            :class="{ 'is-invalid': errors['優惠碼'] }" rules="required"></v-field>
            <error-message name="優惠碼" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            {{ due_date }}
            <input type="date" class="form-control" id="due_date"
                   v-model="due_date" min="">
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <v-field type="number" name="折扣百分比" min="0" max="100" class="form-control" id="price"
                   v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比" :class="{ 'is-invalid': errors['折扣百分比'] }" rules="required"></v-field>
            <error-message name="折扣百分比" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     :true-value="1"
                     :false-value="0"
                     v-model="tempCoupon.is_enabled" id="is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </v-form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="() => changestatus(tempCoupon)"
                  > {{ isNew ? '新增優惠卷' : '更新優惠券' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins/mixin'
export default {
  props: ['coupon', 'isNew'],
  data () {
    return {
      tempCoupon: {},
      due_date: ''
    }
  },
  mixins: [mixin],
  methods: {
    changestatus (tempCoupon) {
      this.$emit('update-coupon', tempCoupon)
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = dateAndTime
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
      // 取得今天的日期物件
      const today = new Date()
      // 設定最小日期為本周的周日
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      // 轉換日期為ISO格式 (yyyy-mm-dd)
      const minDateISO = minDate.toISOString().split('T')[0]
      // 設定最小和最大日期
      const dateInput = document.getElementById('due_date')
      dateInput.min = minDateISO
    }
  }
}
</script>
