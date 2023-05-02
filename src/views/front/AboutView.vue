<template>
  <section class="container py-8">
    <h1 class="text-center text-primary mb-7 fw-bold noto-serif-font">關於我們</h1>
    <div class="row g-0 g-md-3 g-lg-4 justify-content-center">
      <div class="col-md-9">
        <div class="row g-0 g-md-3 g-lg-4 mb-4 pb-4">
          <div class="col-lg-6 d-flex justify-content-center" data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <img class="img-fluid object-fit mb-3" src="https://images.unsplash.com/photo-1579887829663-67706e62e6ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" alt="about-img" style="border-radius:40px;min-height:400px;">
          </div>
          <div class="col-lg-6 d-flex align-items-center p-4" data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div class="p-4 bg-white shadow-sm" style="border-radius:40px;">
              <h3 class="text-center fs-4 fw-bold">黑心茶葉氾濫</h3>
              <p>近幾年市面出現各種黑心茶葉，它可能含有有害化學物質、污染物或人工添加物。這些茶葉可能來自未經嚴格把關的產區，或者是在過程中使用不合法的農藥和化學物質。黑心茶葉不僅可能對人體有害,
                還可能對環境造成危害。我們強烈建議消費者選擇來自可靠品牌並經過嚴格品質把關的茶葉</p>
            </div>
          </div>
        </div>
        <div class="row g-0 g-md-3 g-lg-4 flex-row-reverse d-flex justify-content-center pb-4">
          <div class="col-lg-6 d-flex justify-content-center" data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <img class="img-fluid object-fit mb-3" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" alt="about-img" style="border-radius:40px;min-height:400px;">
          </div>
          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div class="p-4 bg-white shadow-sm" style="border-radius:40px;">
              <h3 class="text-center fs-4 fw-bold">提供給顧客最好的品質</h3>
              <p>我們的品牌初衷是為顧客提供最高品質的產品與服務。我們相信，只有提供最好的產品和服務，才能得到顧客的信任和支持。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container text-center py-5 bg-secondary" data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <div class="row g-0 g-md-3 g-lg-4 d-flex justify-content-center">
      <p>品嘗一杯好茶，紓解工作壓力<br>愛喝茶的你，睡眠總是不好，想要在工作片刻<br>喜歡喝茶，又怕自己買的品質參差不齊</p>
      <router-link href="#" class="btn btn-primary w-25" to="/products">了解更多</router-link>
    </div>
  </section>
  <section class="container py-5">
    <div class="row g-0 g-md-3 g-lg-4 d-flex justify-content-center">
      <div class="col-9">
        <div class="row g-0 g-md-3 g-lg-4">
          <h2 class="text-center text-primary mb-7 fw-bold noto-serif-font">三大堅持</h2>
          <div class="col-lg-4 mb-3 mb-lg-0" data-aos="flip-up" data-aos-easing="ease-in-sine">
              <div class="card h-100 shadow-sm">
                  <div class="d-flex justify-content-center">
                    <span class="material-icons text-primary" style="font-size: 120px;">
                      military_tech
                    </span>
                  </div>
                  <div class="card-body p-5">
                    <h5 class="text-primary card-title fs-4 lh-29 fw-bold">品質保證</h5>
                    <p>我們堅持從原料和生產過程中嚴格把關，確保產品品質達到標準。</p>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 mb-3 mb-lg-0" data-aos="flip-up" data-aos-easing="ease-in-sine">
              <div class="card h-100 shadow-sm">
                  <div class="d-flex justify-content-center">
                    <span class="material-icons text-primary" style="font-size: 120px;">
                      energy_savings_leaf
                    </span>
                  </div>
                  <div class="card-body p-5">
                    <h5 class="card-title text-primary fs-4 lh-29 fw-bold">鮮度保證</h5>
                    <p>我們採用先進的包裝技術，確保茶葉鮮度。</p>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 mb-3 mb-lg-0" data-aos="flip-up" data-aos-easing="ease-in-sine">
              <div class="card h-100 shadow-sm">
                  <div class="d-flex justify-content-center">
                    <span class="material-icons text-primary" style="font-size: 120px;">
                      gpp_good
                    </span>
                  </div>
                  <div class="card-body p-5">
                    <h5 class="card-title text-primary fs-4 lh-29 fw-bold">滿意保證</h5>
                    <p>我們提供售後服務，如果您對我們的產品不滿意，我們將為您提供退款或更換產品的服務。</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container py-5 bg-secondary">
    <div class="row g-0 g-md-3 g-lg-4 d-flex justify-content-center p-3">
      <h2 class="text-center text-primary mb-7 fw-bold noto-serif-font">聯絡我們</h2>
      <div class="col-md-9" data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div class="row g-0 g-md-3 g-lg-4 flex-row-reverse">
          <div class="col-lg-6 d-flex justify-content-center mb-lg-0 mb-md-3 mb-2">
            <img class="img-fluid object-fit" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" alt="call" style="border-radius:40px;">
          </div>
          <div class="col-lg-6 d-flex flex-md-column flex-column justify-content-center shadow-sm p-4 bg-secondary" style="border-radius:40px;">
            <p>如您有任何疑問歡迎透過下列的方式來聯絡我們，我們很樂意為您服務</p>
            <p><span class="me-2">聯絡信箱:</span><a href="mailto:andychen@gmail.com">andychen@gmail.com</a></p>
            <p><span class="me-2">聯絡電話:</span><a href="tel:+886-4-2556258">04-2556258</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      user: {
        email: '',
        phone: '',
        msg: ''
      }

    }
  },
  methods: {
    send () {
      this.$refs.formabout.resetForm()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '表單已送出',
        showConfirmButton: false,
        timer: 1500
      })
    },
    validateTelephone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入09開頭的手機號碼'
    }
  }
}
</script>

<style scoped>
</style>
