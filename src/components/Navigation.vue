<template>
  <div
    class="nav-container bg-beer-light bg-blend-screen bg-cover bg-center"
    :style="{
      backgroundImage: 'url(' + require('@/assets/barley-field.jpg') + ')',
    }"
  >
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <img
            src="@/assets/tap-beer.png"
            width="100"
            height="50"
            class="h-12 w-auto"
            alt="tap beer logo"
            loading="lazy"
          />
        </router-link>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg bg-beer-gold hover:bg-beer-orange transition-colors duration-200"
          aria-label="Toggle navigation"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              "
            ></path>
          </svg>
        </button>

        <!-- Desktop navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/about"
            class="nav-link text-beer-dark hover:text-beer-orange font-medium transition-colors duration-200"
            active-class="text-beer-orange bg-beer-cream px-3 py-1 rounded-lg"
          >
            About
          </router-link>
          <router-link
            to="/drinks"
            class="nav-link text-beer-dark hover:text-beer-orange font-medium transition-colors duration-200"
            active-class="text-beer-orange bg-beer-cream px-3 py-1 rounded-lg"
          >
            Drinks
          </router-link>
          <router-link
            to="/contact"
            class="nav-link text-beer-dark hover:text-beer-orange font-medium transition-colors duration-200"
            active-class="text-beer-orange bg-beer-cream px-3 py-1 rounded-lg"
          >
            Contact
          </router-link>
        </div>
      </div>

      <!-- Mobile navigation -->
      <div v-show="isMobileMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-2">
          <router-link
            to="/about"
            @click="closeMobileMenu"
            class="nav-link text-beer-dark hover:text-beer-orange font-medium py-2 px-4 rounded-lg hover:bg-beer-cream transition-colors duration-200"
            active-class="text-beer-orange bg-beer-cream"
          >
            About
          </router-link>
          <router-link
            to="/drinks"
            @click="closeMobileMenu"
            class="nav-link text-beer-dark hover:text-beer-orange font-medium py-2 px-4 rounded-lg hover:bg-beer-cream transition-colors duration-200"
            active-class="text-beer-orange bg-beer-cream"
          >
            Drinks
          </router-link>
          <router-link
            to="/contact"
            @click="closeMobileMenu"
            class="nav-link text-beer-dark hover:text-beer-orange font-medium py-2 px-4 rounded-lg hover:bg-beer-cream transition-colors duration-200"
            active-class="text-beer-orange bg-beer-cream"
          >
            Contact
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navigation",
  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    };
  },
});
</script>

<style scoped>
.nav-container {
  background-blend-mode: screen;
}
</style>
