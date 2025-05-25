<template>
  <div class="background">
    <div class="content-wrapper">
      <form @submit.prevent="onSignUp" class="form-card">
        <div class="form-title">Create an account</div>

        <div class="auth">
          <div class="auth-label">Username</div>
          <input
            class="auth-input"
            v-model="newUser.username"
            name="username"
          />
        </div>
        <div class="auth">
          <div class="auth-label">Email</div>
          <input class="auth-input" v-model="newUser.email" name="email" />
        </div>
        <div class="auth">
          <div class="auth-label">Password</div>
          <input
            class="auth-input"
            v-model="newUser.password"
            name="password"
          />
        </div>
        <div class="auth-gender">
          <label>
            <input
              type="radio"
              name="Gender"
              v-model="newUser.gender"
              value="Male"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="Gender"
              v-model="newUser.gender"
              value="Female"
            />
            Female
          </label>
        </div>
        <button class="auth-button" type="submit">Enter</button>
        <div class="form-sign">
          <div class="form-subtitle">Already have an account?</div>
          <button @click="$router.push('/signin')">Sign In</button>
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
  name: "SignUp",
  data() {
    return {
      newUser: {
        username: "",
        password: "",
        email: "",
        gender: "",
      },
    };
  },
  methods: {
    onSignUp() {
      axios
        .post(`${import.meta.env.VITE_API_BASE_URL}/user/create`, this.newUser)
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
      Object.keys(this.newUser).forEach((key) => {
        this.newUser[key] = "";
      });
    },
  },
};
</script>

<style lang="scss">
.form-title {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #e8e8e8;
  padding-bottom: 12px;
  display: flex;
  justify-content: center;
  margin: 1rem;

  @media screen and (min-width: 2000px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 769px) {
    font-size: 2rem;
  }
}

.auth-gender {
  padding: 0 0 12px 0;

  @media screen and (min-width: 2000px) {
    display: flex;
    padding: 0 0 1rem 0;
    gap: 2rem;
  }
}

.auth-gender input {
  accent-color: #fab732;

  @media screen and (min-width: 2000px) {
    transform: scale(2);
  }
}

label {
  font-size: larger;

  @media screen and (min-width: 2000px) {
    font-size: xx-large;
  }
}
input[type="radio"] {
  margin-right: 8px;
}
</style>
