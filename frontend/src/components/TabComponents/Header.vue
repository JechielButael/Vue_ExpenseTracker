<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
header {
  padding: 15px 30px;
  background-color: rgb(34, 39, 56);
  border-bottom: 5px solid #ffce00;

  @media screen and (min-width: 1024px) {
    border-radius: 20px 20px 0 0;
  }

  @media screen and (min-width: 2000px) {
    padding: 2rem 3rem;
  }
}

header h1 {
  color: #eee;
  font-size: 28px;

  @media screen and (min-width: 2000px) {
    font-size: 2.8rem;
  }
}
</style>
