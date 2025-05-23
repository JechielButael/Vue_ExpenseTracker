<template>
  <div class="background">
    <div class="content-wrapper">
      <form @submit.prevent="onSignIn" class="form-card">
        <div class="form-signin-title">Welcome Back!</div>
        <div class="form-subtitle">Please sign in to start chatting!</div>

        <div class="auth">
          <div class="auth-label">Username</div>
          <input class="auth-input" v-model="user.username" name="username" />
        </div>
        <div class="auth">
          <div class="auth-label">Password</div>
          <input class="auth-input" v-model="user.password" name="password" />
          <button class="auth-button" type="submit">Login</button>
        </div>
        <div class="form-sign">
          <div class="form-subtitle">Don't have an account?</div>
          <button @click="$router.push('/signup')">Sign Up</button>
        </div>
      </form>
      <div class="auth-img">
        <img src="../assets/signin-pic.png" alt="signin_pic" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSignIn() {
      console.log(import.meta.env.VITE_API_BASE_URL);
      axios
        .post(`${import.meta.env.VITE_API_BASE_URL}/user/getUser`, this.user)
        .then(({ data }) => {
          if (data.status) {
            toast.success(data.message);
            setTimeout(() => {
              this.$router.push({
                name: "Tracker",
                params: {
                  id: data.data._id,
                  username: data.data.username,
                  gender: data.data.gender,
                  email: data.data.email,
                },
              });
            }, 500);
          } else {
            toast.error(data.message);
          }
          this.clearValues();
        });
    },
    clearValues() {
      Object.keys(this.user).forEach((key) => {
        this.user[key] = "";
      });
    },
  },
};
</script>

<style lang="scss">
.form-signin-title {
  width: 100%;
  font-size: 42px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #e8e8e8;
  padding-bottom: 12px;

  @media (min-width: 2000px) {
    font-size: 6rem;
  }
}
</style>
