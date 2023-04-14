import { defineStore, mapActions } from 'pinia'
import cartStore from '../stores/cartStore'
import statusStore from '../stores/statusStore'
import axios from 'axios'
import Swal from 'sweetalert2'
const status = statusStore()
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const productStore = defineStore('product', {
  state: () => {
    return {
      tempProducts: [],
      followList: {
        id: [],
        list: []
      },
      productsAll: [],
      category: '',
      categories: [],
      isLoading: false,
      loadingItem: ''
    }
  },
  actions: {
    // get carts
    ...mapActions(cartStore, ['addToCart']),
    getProductAll () {
      status.isLoading = true
      axios
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.productsAll = res.data.products
          this.tempProductsall(this.productsAll)
          this.createCategories()
          status.isLoading = false
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
    createCategories () {
      if (this.productsAll.length !== 0) {
        const categoriesMap = this.productsAll.map((item) => item.category)
        this.categories = [...new Set(categoriesMap)]
      }
    },
    setCategory (category = '') {
      this.category = category
    },
    tempProductsall (products) {
      this.tempProducts = products
      this.getid()
      this.checkCollection()
    },
    getid () {
      this.followList.id = JSON.parse(localStorage.getItem('followId')) || []
    },
    checkCollection () {
      this.followList.list = []
      this.tempProducts.forEach((item) => {
        if (this.followList.id.indexOf(item.id) > -1) { // 未加入
          this.followList.list.push(item)
        }
      })
    },
    addtoFollow (id) {
      const follwId = this.followList.id.indexOf(id)
      if (follwId === -1) {
        this.followList.id.push(id)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '已收藏',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.followList.id.splice(follwId, 1)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '取消收藏',
          showConfirmButton: false,
          timer: 1500
        })
      }
      localStorage.setItem('followId', JSON.stringify(this.followList.id))
      this.getProductAll()
    }
  }
})
export default productStore
