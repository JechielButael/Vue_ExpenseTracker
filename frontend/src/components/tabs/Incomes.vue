<template>
  <div class="trackers">
    <Header :title="'Incomes'" />
    <div class="total-tracker">Total Incomes: {{ state.totalIncomes }}$</div>

    <div class="tracker-container">
      <Form type="Income" :state="state" @add-income="addIncome" />
      <IncomeList
        class="form-list"
        :sortedlist="
          state.allTransitions.filter(
            (transition) => transition.category === 'Income'
          )
        "
        @remove-item="removeItem"
      />
    </div>
  </div>
</template>

<script>
import { Header, Form, IncomeList } from "../TabComponents";

export default {
  name: "Incomes",
  components: {
    Header,
    Form,
    IncomeList,
  },
  props: {
    state: Object,
    sortedList: Object,
  },
  setup(props, { emit }) {
    function removeItem(id) {
      emit("remove-item", id);
    }
    function addIncome(obj) {
      emit("add-income", obj);
    }

    return {
      removeItem,
      addIncome,
    };
  },
};
</script>

<style lang="scss">
.trackers {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 100%;
}
.tracker-container {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .form-list {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    width: 100%;
    margin: 0.5rem 0.2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .form-list {
      flex: 1;
      overflow-y: auto;
    }
  }
}

.tracker-container form {
  width: 30%;
  padding: 10px;
}

.tracker-container .income-list {
  flex: 1;
  overflow-y: auto;
}

.total-tracker {
  font-family: "Fira Code", "Fira Sans", sans-serif;
  background-color: #ffce00;
  color: rgb(91, 105, 148);
  font-size: 1.8rem;
  font-weight: 900;
  padding: 5px 10px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;

  @media (max-width: 1024px) {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 900;
    padding: 5px 10px;
  }

  @media (min-width: 2000px) {
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 10px;
    font-size: 3rem;
    font-weight: 900;
    padding: 1.5rem 2.5rem;
  }
}

@media screen and (max-width: 426px) {
  .tracker-container form {
    width: 100%;
    padding: 20px;
  }
}

@media screen and (min-width: 2000px) {
  .tracker-container form {
    padding: 20px;
  }
}
</style>
