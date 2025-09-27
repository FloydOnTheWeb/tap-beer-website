<template>
  <div class="drinks">
    <!-- Hero Section -->
    <div
      class="drinks-hero bg-beer-cream bg-blend-soft-light bg-cover bg-center relative"
      :style="{
        backgroundImage: 'url(' + require('@/assets/barley-field.jpg') + ')',
      }"
    >
      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Carousel -->
          <div class="order-2 md:order-1">
            <DrinksCarousel />
          </div>

          <!-- Content -->
          <div class="order-1 md:order-2 text-center md:text-left">
            <img
              alt="Tap Beer logo"
              src="@/assets/tap-beer.png"
              class="mx-auto md:mx-0 mb-6 h-20 w-auto"
            />
            <h1 class="text-3xl md:text-4xl font-bold text-beer-dark mb-4">
              Our full range of premium beers
            </h1>
            <p class="text-lg text-beer-dark/80">
              Discover our carefully curated selection of world-class beers,
              each crafted with passion and tradition.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Drinks Table Section -->
    <div class="bg-white py-16">
      <div class="container mx-auto px-4">
        <DrinksTable />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DrinksTable from "@/components/DrinksTable.vue";
import DrinksCarousel from "@/components/DrinksCarousel.vue";

export default defineComponent({
  name: "Drinks",
  components: {
    DrinksTable,
    DrinksCarousel,
  },
});
</script>

<style scoped>
.drinks-hero {
  background-blend-mode: soft-light;
}
</style>
