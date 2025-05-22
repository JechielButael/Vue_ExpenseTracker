<template>
  <Header :title="'Details'" />
  <div class="details">
    <h1>Basic Information</h1>
    <div class="detail-item">
      <span class="label">Name:</span>
      <span class="value">{{ username }}</span>
    </div>
    <div class="detail-item">
      <span class="label">Email:</span>
      <span class="value">{{ email }}</span>
    </div>
    <div class="detail-item">
      <span class="label">Gender:</span>
      <span class="value">{{ gender }}</span>
    </div>
    <div class="detail-item">
      <span class="label">Type:</span>
      <span class="value">User</span>
    </div>
  </div>
</template>

<script>
import { Header, Form, IncomeList } from "../TabComponents";

export default {
  name: "Details",
  components: {
    Header,
  },
  props: {
    email: String,
    gender: String,
    username: String,
  },
};
</script>

<style scoped>
.details {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #e7f6ff;

  h1 {
    color: #555;
  }

  @media (min-width: 2000px) {
    max-width: 800px;
    margin: 3rem auto;
    padding: 3rem;
    border-radius: 1rem;
    gap: 1.5rem;
  }
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 8px;
  background: white;

  @media (min-width: 2000px) {
    margin: 1rem 0;
    padding: 1rem;
    border: 3px solid #6b6b6b;
    border-radius: 12px;
  }
}

.label {
  font-weight: bold;
  color: #555;
}

.value {
  color: #222;
  font-weight: 500;
}
</style>
