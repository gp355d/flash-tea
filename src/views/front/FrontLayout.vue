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
    ...mapActions(cartStore, ['getCarts'])
  },
  mounted () {
    this.getCarts()
  }
}
</script>
<style>

</style>
