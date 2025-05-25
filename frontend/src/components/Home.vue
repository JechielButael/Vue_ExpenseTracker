<template>
  <div class="background">
    <div class="content-wrapper">
      <form @submit.prevent class="form-card">
        <div class="form-home-title">Spend Smarter, Save More</div>
        <div class="form-subtitle-home">
          Stay on top of your finances with ease and confidence. Log your
          income, manage expenses, track savings, and take control of your
          financial future.
        </div>
      </form>
      <div class="auth-img">
        <img src="../assets/signin-pic.png" alt="signin_pic" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.form-card {
  margin: 1rem;
}
.form-home-title {
  width: 100%;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  padding-bottom: 24px;
  color: #fab732;

  @media screen and (min-width: 2000px) {
    font-size: 7rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 769px) {
    font-size: 2.5rem;
  }
}

.form-subtitle-home {
  font-size: 2rem;
  letter-spacing: 0.5px;
  padding-bottom: 24px;

  @media screen and (min-width: 2000px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.3rem;
  }
}
</style>
