<template>
  <div id="app">
    <NavBar v-if="showNavBarAndFooter" />
    <router-view />
    <Footer v-if="showNavBarAndFooter" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { NavBar, Footer },
  setup() {
    const route = useRoute();

    // Define routes where NavBar should NOT appear
    const noNavBarOrFooterRoutes = ["Tracker"];

    const showNavBarAndFooter = computed(
      () => !noNavBarOrFooterRoutes.includes(route.name)
    );

    return { showNavBarAndFooter };
  },
};
</script>
