<template>
  <div class="trackers">
    <Header :title="'Expenses'" />
    <div class="total-tracker">Total Expenses: {{ state.totalExpenses }}$</div>
    <div class="tracker-container">
      <Form type="Expense" :state="state" @add-income="addIncome" />
      <IncomeList
        class="form-list"
        :sortedlist="
          state.allTransitions.filter(
            (transition) => transition.category === 'Expense'
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
  name: "Expenses",
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
    function addIncome(obj) {
      console.log(obj);
      emit("add-income", obj);
    }

    return {
      removeItem,
      addIncome,
    };
  },
};
</script>

<style >

</style>
