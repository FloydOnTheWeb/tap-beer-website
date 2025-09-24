<template>
  <div id="app">
    <Navigation />
    <Breadcrumb />
    <router-view />
    <AppFooter />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    Navigation,
    Breadcrumb,
    AppFooter
  }
};
</script>
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f2b33;
}

.breadcrumb-container > a,
a.router-link-active {
  color: #919ea9;
  text-decoration: none;
}
</style>
