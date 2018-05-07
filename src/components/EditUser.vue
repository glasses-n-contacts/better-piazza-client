<template>
  <div class="users">
    <h1>Edit User</h1>
      <div class="form">
        <div>
          <input type="text" name="email" placeholder="EMAIL" v-model="email">
        </div>
        <div>
          <input type="password" name="password" placeholder="PASSWORD">
        </div>
        <div>
          <button class="app_user_btn" @click="updateUser">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
  name: 'EditUser',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      const response = await UsersService.getUser({
        id: this.$route.params.id
      })
      this.email = response.data.email
      this.password = response.data.password
    },
    async updateUser () {
      await UsersService.updateUser({
        id: this.$route.params.id,
        email: this.email,
        password: this.password
      })
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
