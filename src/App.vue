<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Navigation />
    <Breadcrumb />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navigation from "@/components/Navigation.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import AppFooter from "@/components/AppFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    Navigation,
    Breadcrumb,
    AppFooter,
  },
});
</script>

<style>
#app {
  @apply font-sans antialiased text-beer-dark;
}

.router-link-active {
  @apply text-beer-gray no-underline;
}
</style>
