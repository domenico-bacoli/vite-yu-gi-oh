<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  data() {
    return {

    };
  },

  components: {
    AppNavbar,
    AppMain,
    AppFooter,
  }
}
</script>

<template>
  <AppNavbar></AppNavbar>

  <AppMain></AppMain>

  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped></style>
