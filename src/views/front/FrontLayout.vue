<template>
  <div class="wrapper">
    <div class="min-vh-100">
      <NavbarCompoment :num="cartNUm"/>
      <router-view/>
    </div>
  </div>
  <FooterCompoment/>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/CartStore'
import NavbarCompoment from '@/components/NavbarCompoment.vue'
import FooterCompoment from '@/components/FooterCompoment.vue'
export default {
  components: {
    NavbarCompoment,
    FooterCompoment
  },
  computed: {
    ...mapState(cartStore, ['cartNUm']) // 取用cart store內的狀態資料(資料)
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    navbarDisappear () {
      let lastPosition = 0
      const nav = document.querySelector('nav')
      document.addEventListener('scroll', function () {
        const currentPosition = window.scrollY
        if (currentPosition > lastPosition) {
          nav.style.top = '-60px' // 讓nav bar消失
        } else {
          nav.style.top = '0px' // 讓nav bar出現
          nav.style.transition = '.8s'
        }
        lastPosition = currentPosition// 再記住現在位置，跟未來的位置做比較
      })
    }
  },
  mounted () {
    this.getCarts()
    this.navbarDisappear()
  }
}
</script>
<style>

</style>
