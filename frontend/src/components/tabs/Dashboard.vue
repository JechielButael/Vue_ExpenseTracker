<template>
  <div class="dashboard">
    <Header :title="'Dashboard'" />
    <div class="dash-titles">
      <div class="total-income">
        Incomes:
        <br />
        {{ state.totalIncomes }}$
      </div>
      <div class="total-income">
        Balance:
        <br />
        {{ state.balance }}$
      </div>
      <div class="total-income">
        Expenses:
        <br />
        {{ state.totalExpenses }}$
      </div>
    </div>
    <!-- <Form :state="state" @add-income="AddIncome" /> -->
    <IncomeList
      class="list"
      :sortedlist="state.allTransitions"
      @remove-item="removeItem"
    />
  </div>
</template>

<script>
import { Header, Form, IncomeList } from "../TabComponents";

export default {
  name: "Dashboard",
  components: {
    Header,
    Form,
    IncomeList,
  },
  props: {
    state: Object,
  },
  setup(props, { emit }) {
    function removeItem(id) {
      emit("remove-item", id);
    }

    return {
      removeItem,
    };
  },
};
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  max-height: 100%;
}

.dash-titles {
  display: flex;
}
.total-income {
  font-family: "Fira Code", "Fira Sans", sans-serif;
  background-color: #ffce00;
  color: rgb(91, 105, 148);
  font-size: 0.8rem;
  font-weight: 900;
  padding: 0.5rem 1.5rem;
  flex: 1;
  max-width: 200px;
  min-width: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 0.5rem;

  @media screen and (min-width: 768px) {
    margin-top: 0.5rem;
    max-width: 250px;
    min-width: 100px;
    border-radius: 8px;
    font-size: 1.2rem;
    padding: 5px 10px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0.5rem;
    max-width: 200px;
    min-width: 200px;
    border-radius: 8px;
    font-size: 1.2rem;
    padding: 5px 10px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 300px;
    min-width: 300px;
    font-size: 2rem;
  }

  @media screen and (min-width: 2000px) {
    margin-top: 1rem;
    border-radius: 8px;
    max-width: 500px;
    min-width: 400px;
    font-size: 2.8rem;
    padding: 1rem 4rem;
  }
}
</style>
