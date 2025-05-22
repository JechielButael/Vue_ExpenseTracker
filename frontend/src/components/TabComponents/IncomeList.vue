<template>
  <div class="layout-container">
    <div class="income-list">
      <IncomeItem
        v-for="obj in sortedlist"
        :key="obj.id"
        :income="obj"
        @remove-item="removeItem"
      />
    </div>
  </div>
</template>

<script>
import IncomeItem from "./IncomeItem.vue";

export default {
  name: "IncomeList",
  components: { IncomeItem },
  props: {
    sortedlist: Object,
  },
  setup(props, { emit }) {
    function removeItem(id) {
      emit("remove-item", id);
    }

    return {
      IncomeItem,
      removeItem,
    };
  },
};
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.income-list {
  right: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  margin: 0.5rem 0.2rem;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

@media screen and (max-width: 1440px) {
  .income-list {
    right: 0;
    position: relative;
    overflow-y: auto;
    box-sizing: border-box;
    right: 0;
    overflow-x: hidden;
    flex: 1;
  }
}
</style>
