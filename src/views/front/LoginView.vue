<template>
  <div class="container">
    <div class="row g-0 justify-content-center mt-3">
      <div class="col-6">
        <h1 class="fs-2">請先登入</h1>
        <form id="form" class="form-signin" @submit.prevent="check">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username"
              placeholder="name@example.com" required autofocus v-model="user.username">
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password"
              placeholder="Password" required v-model="user.password">
            <label for="password">Password</label>
          </div>
          <div class="text-center">
            <button class="btn btn-lg btn-primary mt-3 text-nowrap" type="submit">
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    check () {
      this.$http.post(`${VITE_APP_URL}admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `mytoken=${token}; expires=${new Date(expired)};`// 將存取到的token存入cookie
          this.$router.push('/admin/products')
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
    }
  },
  mounted () {
    document.title = this.$route.meta.title
  }
}
</script>
