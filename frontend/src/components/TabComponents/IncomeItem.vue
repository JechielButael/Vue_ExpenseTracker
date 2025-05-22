<template>
  <div class="income-item">
    <div class="item-icon">
      <img :src="TransactionIcon" alt="transaction-icon" />
    </div>
    <div class="income-content">
      <div class="income-title">
        <div class="dot">•</div>
        <div>{{ income.title }}</div>
      </div>
      <div class="income-details">
        <div class="date">
          <font-awesome-icon
            class="social-icon"
            :icon="['fas', 'calendar']"
            :style="{ color: '#162152' }"
            size="l"
          />
          {{ formattedDate }}
        </div>
        <div class="desc">
          <font-awesome-icon
            class="social-icon"
            :icon="['fas', 'comment']"
            :style="{ color: '#162152' }"
            size="l"
          />
          {{ income.desc }}
        </div>
      </div>
    </div>
    <div
      :style="{ color: income.category == 'Income' ? 'green' : 'red' }"
      class="price"
    >
      {{ income.value }}$
    </div>
    <div class="income-remove">
      <img :src="TrashIcon" class="removeItem" @click="removeItem" />
    </div>
  </div>
</template>

<script>
import TransactionIcon from "../../assets/transaction.png";
import TrashIcon from "../../assets/trash-bin.png";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, computed } from "vue";

export default {
  name: "IncomeItem",
  props: {
    income: Object,
  },
  setup(props, { emit }) {
    const date = ref(new Date(props.income.date));

    const formattedDate = computed(() =>
      date.value.toLocaleDateString("en-GB", {
        timeZone: "Asia/Jerusalem",
      })
    );
    function removeItem() {
      emit("remove-item", props.income._id);
    }

    return {
      formattedDate,
      removeItem,
      TransactionIcon,
      TrashIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.income-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: #e7f6ff;
  border-radius: 10px;
  padding: 8px 5px 8px 5px;
  margin: 2px 5px 10px;
  color: #162152;
  border: 2px solid #007bff;
}
.item-icon {
  height: 3rem;
  width: 3rem;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center;

  img {
    height: 2.5rem;
  }
}

.income-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;

  .dot {
    font-size: 1rem;
  }
}

.income-content {
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  justify-content: center;
}
.income-details {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: nowrap;
  max-width: 100%;

  .date {
    display: flex;
    font-size: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .desc {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 0.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.income-remove {
  display: flex !important;
  align-items: flex-end !important;
  margin-bottom: 0.2rem;
  align-self: flex-end;
  justify-content: center;
  .removeItem {
    height: 1.3rem;
    cursor: pointer;
  }
}

.price {
  width: 100px;
  text-align: right;
  font-size: 1rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.date {
  color: #666;
  text-align: right;
  font-size: 20px;
}

@media (min-width: 768px) {
  .income-content {
    width: 300px;
    gap: 0.8rem;
  }

    .item-icon {
    height: 3rem;
    width: 3rem;

    img {
      height: 3rem;
    }
  }

  .income-details {
    gap: 1rem;
  }
}
@media (min-width: 1024px) {
  .income-content {
    width: 250px;
    gap: 0.8rem;
  }

  .income-details {
    gap: 1rem;
  }
}

@media (min-width: 1440px) {
  .income-item {
    gap: 1rem;
    padding: 15px 15px 15px 0px;
    border-radius: 10px;
    margin: 0 auto 15px;
    padding: 5px 10px 5px 10px;
    margin: 2px 15px 10px;
  }
  .item-icon {
    height: 4rem;
    width: 4rem;

    img {
      height: 4.5rem;
    }
  }

  .income-title {
    gap: 0.7rem;
    font-size: 1.2rem;
    font-weight: 600;

    .dot {
      font-size: 2rem;
    }
  }

  .income-content {
    gap: 1.5rem;
    width: 550px;
  }
  .income-details {
    gap: 1.5rem;
    max-width: 10rem;

    .date {
      font-size: 1rem;
      gap: 0.5rem;
    }
    .desc {
      gap: 0.5rem;
      color: #666;
      font-size: 0.5rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 1rem;
    }
  }

  .income-remove {
    .removeItem {
      height: 2.5rem;
      cursor: pointer;
    }
  }

  .price {
    min-width: 100px;
    font-size: 1.8rem;
    font-weight: 900;
    flex-shrink: 0;
  }

  .date {
    color: #666;
    text-align: right;
    font-size: 20px;
  }
}

@media (min-width: 2000px) {
  .income-item {
    gap: 3rem;
    border: 3.5px solid #007bff;
    padding: 15px 15px 15px 15px;
    margin: 15px 25px 15px;
    border-radius: 20px;
  }
  .item-icon {
    height: 5.5rem;
    width: 5.5rem;

    img {
      height: 6.5rem;
    }
  }

  .income-title {
    gap: 2rem;
    font-size: 2rem;
    font-weight: 600;

    .dot {
      font-size: 3rem;
    }
  }

  .income-content {
    gap: 1.5rem;
    width: 1000px;
  }
  .income-details {
    gap: 4rem;
    max-width: 10rem;

    .date {
      font-size: 1.5rem;
      gap: 2rem;
    }
    .desc {
      gap: 2rem;
      font-size: 1.5rem;
    }
  }

  .income-remove {
    .removeItem {
      height: 3.5rem;
    }
  }

  .price {
    font-size: 3rem;
  }
}
</style>
