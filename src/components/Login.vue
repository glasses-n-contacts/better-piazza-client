<template>
  <div class="login">
    <h1>Login</h1>
      <div class="form">
        <div>
          <input type="text" name="email" placeholder="EMAIL" v-model="credentials.email">
        </div>
        <div>
          <input type="password" name="password" placeholder="PASSWORD" v-model="credentials.password">
        </div>
        <div>
          <button class="app_user_btn" @click="login()">Login</button>
        </div>
      </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      loggingIn: false,
      error: ''
    }
  },
  methods: {
    async login () {
      const credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }
      await UsersService.login(credentials)
      this.$router.push({ name: 'Users' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_user_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
