<template>
  <nav class="sticky-top navbar navbar-expand-lg navbar-light bg-transprent">
    <div class="container">
      <router-link to="/">
        <img src="../assets/images/logo.svg" alt="logo"/>
      </router-link>
      <button class="navbar-toggler" type="button"
        aria-controls="offcanvasNavbar" @click.prevent="toggleOffcanvas(true)">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="menu d-flex align-items-center list-unstyled mb-0">
          <li class="nav-item pe-7">
            <router-link to="/products" class="link d-block fs-6">茶品介紹</router-link>
          </li>
          <li class="nav-item pe-7">
            <router-link to="/knowledge" class="link d-block fs-6">茶葉知識</router-link>
          </li>
          <li class="nav-item pe-7">
            <router-link to="/about" class="link d-block fs-6">關於我們</router-link>
          </li>
          <li class="nav-item pe-7">
            <router-link to="/QA" class="link d-block fs-6">常見問題</router-link>
          </li>
          <li class="nav-item pe-7">
            <router-link to="/favorite" class="link d-block fs-6">茶品收藏</router-link>
          </li>
          <li class="nav-item">
            <router-link  v-if="num > 0" to="/cart" class="position-relative end-0">
              <span class="material-icons fs-4"> shopping_cart </span>
              <span
                class="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">{{ num }}</span>
            </router-link>
            <router-link  v-else to="/cart" class="position-relative end-0">
              <span class="material-icons fs-4"> shopping_cart </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div ref="offcanvasElement" class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header p-0 mb-12">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
        <router-link to="/">
          <img src="../assets/images/logo.svg" alt="logo" @click="toggleOffcanvas(false)">
        </router-link>
      </h5>
      <button type="button" class="btn-close text-reset" aria-label="Close" @click.prevent=toggleOffcanvas(false)></button>
    </div>
    <div class="offcanvas-body p-0">
      <div>
        <ul class="menu d-flex flex-column list-unstyled mb-0 offcanvas-nav text-center">
          <li class="nav-item">
            <router-link to="/products" class="link d-block fs-6 mb-7" @click.prevent="toggleOffcanvas(false)">茶品介紹</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/knowledge" class="link d-block fs-6 mb-7" @click.prevent="toggleOffcanvas(false)">茶葉知識</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="link d-block fs-6 mb-7" @click.prevent="toggleOffcanvas(false)">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/QA" class="link d-block fs-6 mb-7" @click.prevent="toggleOffcanvas(false)">常見問題</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorite" class="link d-block fs-6 mb-7" @click.prevent="toggleOffcanvas(false)">茶品收藏</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="link d-block fs-6" @click.prevent="toggleOffcanvas(false)">購物車</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'
export default {
  props: ['num'],
  data () {
    return {
      showOffcanvas: false
    }
  },
  methods: {
    toggleOffcanvas (value = !this.showOffcanvas) {
      this.showOffcanvas = value
      const offcanvasElement = this.$refs.offcanvasElement
      const offcanvas = new Offcanvas(offcanvasElement)
      const getoff = document.querySelector('.offcanvas')
      const backdrop = document.querySelector('.offcanvas-backdrop')
      const body = document.querySelector('body')
      if (!this.showOffcanvas && backdrop) {
        offcanvas.hide()
        getoff.classList.remove('show')
        getoff.style.transition = '0.3s ease-in-out'
        backdrop.parentNode.removeChild(backdrop)
        body.style.overflow = 'scroll'
        body.style.paddingRight = 0
      } else {
        offcanvas.show()
      }
    }
  }
}
</script>
<style>

</style>
