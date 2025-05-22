<template>
  <div class="background">
    <div class="content-wrapper">
      <!-- hamburger menu -->
      <button
        v-if="!isLargeScreen"
        class="hamburger-menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        ☰
      </button>

      <!-- dropdown menu (only appears when button is clicked) -->
      <div v-if="isMenuOpen && !isLargeScreen" class="dropdown-menu">
        <button
          v-for="item in tabItems"
          :key="`dropdown-${item.name}`"
          @click="selectTab(item.name)"
        >
          <img :src="item.icon" alt="icon" />
          {{ item.name }}
        </button>
        <button @click="$router.push('/')" class="sign-out-btn">
          <img src="../assets/sign-out.png" alt="sign-out" />
          Sign Out
        </button>
      </div>

      <div class="tracker">
        <div v-if="isLargeScreen" class="tabs">
          <div class="profile">
            <img :src="profilePic" alt="profile-pic" />
            <div class="profile-details">
              <span>{{ username.replace(/^\w/, (c) => c.toUpperCase()) }}</span>
              <p>User</p>
            </div>
          </div>
          <div class="tabs-links">
            <button
              v-for="item in tabItems"
              :key="`link-${item.name}`"
              @click="selectedTab = item.name"
            >
              <img :src="item.icon" alt="link-icon" />
              {{ item.name }}
            </button>
          </div>
          <div class="sign-out">
            <button @click="signOut">
              <img src="../assets/sign-out.png" alt="sign-out_icon" />
              Sign Out
            </button>
          </div>
        </div>

        <div class="tab-content">
          <Dashboard
            @remove-item="removeItem"
            :state="state"
            v-if="selectedTab === 'Dashboard'"
          />
          <Incomes
            @add-income="addIncome"
            @remove-item="removeItem"
            :state="state"
            :sortedList="sortedTransitions"
            v-if="selectedTab === 'Incomes'"
          />
          <Expenses
            @add-income="addIncome"
            @remove-item="removeItem"
            :state="state"
            v-if="selectedTab === 'Expenses'"
          />
          <Details
            :username="username"
            :gender="gender"
            :email="email"
            v-if="selectedTab === 'Details'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { Header, Form, IncomeList } from "./TabComponents";
import dashboardIcon from "../assets/dashboard.png";
import incomeIcon from "../assets/income.png";
import expenseIcon from "../assets/expense.png";
import detailsIcon from "../assets/details.png";
import maleProfilePic from "../assets/profile_pic-male.png";
import femaleProfilePic from "../assets/profile_pic-female.png";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

// Import the components for each tab
import Dashboard from "./tabs/Dashboard.vue";
import Incomes from "./tabs/Incomes.vue";
import Expenses from "./tabs/Expenses.vue";
import Details from "./tabs/Details.vue";

import axios from "axios";

export default {
  name: "Tracker",
  components: {
    Dashboard,
    Incomes,
    Expenses,
    Details,
    Header,
    Form,
    IncomeList,
  },
  data() {
    return {
      tabItems: [
        { name: "Dashboard", icon: dashboardIcon },
        { name: "Incomes", icon: incomeIcon },
        { name: "Expenses", icon: expenseIcon },
        { name: "Details", icon: detailsIcon },
      ],
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const selectedTab = ref("Dashboard");
    const profilePic = computed(() => {
      return props.gender === "Male" ? maleProfilePic : femaleProfilePic;
    });
    const isMenuOpen = ref(false);
    const isLargeScreen = ref(window.innerWidth > 768);

    const updateScreenSize = () => {
      isLargeScreen.value = window.innerWidth > 768;
      if (isLargeScreen.value) {
        isMenuOpen.value = false;
      }
    };

    const closeMenuOnOutsideClick = (event) => {
      if (
        !event.target.closest(".hamburger-menu") &&
        !event.target.closest(".dropdown-menu")
      ) {
        isMenuOpen.value = false;
      }
    };

    const state = reactive({
      allTransitions: [],

      balance: computed(() =>
        state.allTransitions.reduce((acc, curr) => acc + curr.value, 0)
      ),
      totalIncomes: computed(() =>
        state.allTransitions
          .filter((transition) => transition.category === "Income")
          .reduce((acc, curr) => acc + curr.value, 0)
      ),
      totalExpenses: computed(() =>
        state.allTransitions
          .filter((transition) => transition.category === "Expense")
          .reduce((acc, curr) => acc + curr.value, 0)
      ),
    });

    const sortedTransitions = computed(() => {
      console.log(state.allTransitions.map((item) => item.date));
      return [...state.allTransitions].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    });

    const getAllIncomes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/user/getAllUserIncomes/${
            props.id
          }`
        );
        if (response.status === 200 && Array.isArray(response.data.incomes)) {
          state.allTransitions = response.data.incomes.map((income) => ({
            ...income,
            date: new Date(income.date),
          }));
          console.log("All Transitions:", state.allTransitions);
          state.allTransitions = [...state.allTransitions];
        } else {
          console.error("Invalid response for transitions.");
          state.allTransitions = [];
        }
      } catch (error) {
        console.error("Error fetching transitions:", error);
        state.allTransitions = [];
      }
    };

    onMounted(() => {
      getAllIncomes();
      window.addEventListener("resize", updateScreenSize);
      document.addEventListener("click", closeMenuOnOutsideClick);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateScreenSize);
      document.removeEventListener("click", closeMenuOnOutsideClick);
    });
    const selectTab = (tabName) => {
      selectedTab.value = tabName;
      isMenuOpen.value = false;
    };

    const addIncome = async (obj) => {
      try {
        const newIncome = {
          title: obj.title,
          desc: obj.desc,
          value: parseInt(obj.value, 10),
          date: new Date(obj.date),
          category: obj.category,
        };

        if (
          !newIncome.title ||
          !newIncome.value ||
          !newIncome.desc ||
          !newIncome.date
        ) {
          toast.error("One or more details are empty!");
        } else {
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/user/addIncome/${props.id}`,
            newIncome
          );

          if (response.status === 200) {
            await getAllIncomes();

            state.allTransitions = [...state.allTransitions];
            toast.success("Item Added successfully!");
          }
        }
      } catch (error) {
        console.error("Error adding income: ", error);
      }
    };

    const signOut = () => {
      toast.info("Signed out successfully!");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    };

    const removeItem = async (id) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/deleteIncome/` + props.id,
        { incomeId: id }
      );
      toast.success("Item deleted successfully!");
      await getAllIncomes();
    };

    return {
      state,
      addIncome,
      getAllIncomes,
      removeItem,
      profilePic,
      selectedTab,
      sortedTransitions,
      isMenuOpen,
      isLargeScreen,
      selectTab,
      signOut,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "DM Sans" !important;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

.tracker {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.tabs {
  height: 95%;
  width: 20%;
  border: 0.2rem solid #fab732;
  border-radius: 20px;
  background-color: rgb(231, 216, 175);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.tab-content {
  width: 100%;
  height: 100%;
  background-color: rgb(237, 226, 195);
  position: relative;
}

.profile {
  display: flex;
  margin: 3rem 2rem;
  gap: 1rem;
  align-items: center;

  img {
    height: 70px;
  }

  .profile-details {
    span {
      font-weight: 600;
      font-size: 1.8rem;
      color: rgb(27, 44, 76);
    }

    p {
      color: rgb(80, 79, 79);
      margin-left: 0.2rem;
    }
  }
}

.tabs-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 3.5rem;

  button {
    text-decoration: none;
    background: none;
    border: none;
    display: flex;
    cursor: pointer;
    gap: 0.8rem;
    font-size: 1.2rem;
    color: rgb(80, 79, 79);

    &:hover {
      gap: 1rem;
    }
    &:hover,
    &:focus {
      color: rgb(27, 44, 76);
      font-weight: 550;
    }
  }

  img {
    height: 30px;
  }
}
.sign-out {
  display: flex;
  margin-top: auto; /* takes all the remaining space of tabs above sign-out, which is why tabs-links is being pushed up and sign-out being pushed down  */
  padding-bottom: 1rem;
  margin-left: 1rem;
  button {
    text-decoration: none;
    background: none;
    border: none;
    display: flex;
    cursor: pointer;
    gap: 0.4rem;
    font-size: 1rem;
    color: rgb(80, 79, 79);

    &:hover {
      gap: 0.6rem;
    }

    @media (min-width: 2000px) {
      gap: 1rem;
      font-size: 2rem;
    }
  }

  img {
    height: 1.3rem;

    @media (min-width: 2000px) {
      height: 2.5rem;
    }
  }

  @media (min-width: 2000px) {
    padding-bottom: 2rem;
    margin-left: 3rem;
  }
}

body {
  background: #eee;
}

@media (min-width: 2000px) {
  .profile {
    margin: 5rem 5rem;
    gap: 2rem;

    img {
      height: 120px;
    }

    .profile-details {
      span {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;
        margin-left: 1rem;
      }
    }
  }
  .tabs-links {
    gap: 2rem;
    margin-left: 7rem;

    button {
      gap: 2rem;
      font-size: 2.5rem;
    }

    img {
      height: 50px;
    }
  }
}

@media (max-width: 1440px) {
  .tabs {
    width: 25%;
  }
  .tab-content {
    width: 75%;
  }
}

@media (min-width: 1024px) {
  .tracker {
    gap: 1rem;
  }
  .tabs {
    width: 25%;
  }
  .tab-content {
    width: 70%;
    height: 95%;
    border: 0.2rem solid #fab732;
    border-radius: 20px;
    position: relative;
  }
}

@media (max-width: 768px) {
  .tabs {
    display: none;
  }
  .tab-content {
    width: 100%;
  }

  .hamburger-menu {
    display: block;
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1100;
    color: white;
  }

  .dropdown-menu {
    position: absolute;
    top: 3rem;
    right: 2rem;
    background: rgb(231, 216, 175);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    z-index: 1050;
  }

  .dropdown-menu button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    padding: 0.7rem;
    cursor: pointer;
    font-size: 1.1rem;
    color: rgb(80, 79, 79);
    text-align: left;
    width: 100%;
  }

  .dropdown-menu button:hover {
    background-color: rgba(27, 44, 76, 0.1);
  }

  .dropdown-menu img {
    height: 24px;
  }

  .sign-out-btn {
    margin-top: 0.5rem;
    font-weight: bold;
  }
}

@media (max-width: 480px) {
  .tab-content {
    width: 100%;
  }
  .profile {
    flex-direction: column;
    text-align: center;
  }
  .tabs-links {
    margin-left: 1rem;
  }
  .sign-out {
    margin-left: 0;
    justify-content: center;
  }
  .dropdown-menu {
    top: 3rem;
    right: 3rem;
  }
}

@media (max-width: 320px) {
  .tab-content {
    width: 100%;
  }
  .profile img {
    height: 50px;
  }
  .profile-details span {
    font-size: 1.4rem;
  }
  .tabs-links button {
    font-size: 1rem;
  }
  .dropdown-menu {
    top: 3rem;
    right: 2rem;
  }
}

@media (min-width: 769px) {
  .hamburger-menu {
    display: none;
  }

  .tabs {
    display: flex;
  }

  .dropdown-menu {
    display: none;
  }
}
</style>
