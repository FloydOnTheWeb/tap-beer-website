<template>
  <div class="drinks-carousel">
    <div class="relative">
      <!-- Carousel Container -->
      <div class="overflow-hidden rounded-lg">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="drink in drinks"
            :key="drink.id"
            class="w-full flex-shrink-0"
          >
            <router-link
              :to="{ name: 'Drink', params: { id: drink.id } }"
              class="block group"
            >
              <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3
                  class="text-xl font-bold text-beer-dark mb-4 group-hover:text-beer-orange transition-colors duration-200"
                >
                  {{ drink.name }}
                </h3>
                <div class="flex justify-center mb-4">
                  <img
                    :src="`https://punkapi.online/v3/images/${String(drink.id).padStart(3, '0')}.png`"
                    :alt="drink.name"
                    class="h-32 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <p class="text-beer-dark/70 text-sm">
                  {{ drink.tagline }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="previousSlide"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-beer-gold hover:bg-beer-orange text-beer-dark p-2 rounded-full shadow-lg transition-colors duration-200"
        :disabled="currentSlide === 0"
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
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-beer-gold hover:bg-beer-orange text-beer-dark p-2 rounded-full shadow-lg transition-colors duration-200"
        :disabled="currentSlide >= drinks.length - 1"
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
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      <!-- Dots Indicator -->
      <div class="flex justify-center mt-6 space-x-2">
        <button
          v-for="(drink, index) in drinks"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-colors duration-200"
          :class="index === currentSlide ? 'bg-beer-gold' : 'bg-gray-300'"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: "DrinksCarousel",
  setup() {
    const drinks = ref([]);
    const currentSlide = ref(0);
    const apiPage = ref(1);
    const perPage = ref(10);
    let autoSlideInterval = null;

    const fetchDrinks = async () => {
      try {
        const response = await axios.get(
          `https://punkapi.online/v3/beers?page=${apiPage.value}&per_page=${perPage.value}`,
        );
        drinks.value = response.data;
      } catch (error) {
        console.error("Error fetching drinks:", error);
      }
    };

    const nextSlide = () => {
      if (currentSlide.value < drinks.value.length - 1) {
        currentSlide.value++;
      } else {
        currentSlide.value = 0;
      }
    };

    const previousSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--;
      } else {
        currentSlide.value = drinks.value.length - 1;
      }
    };

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };

    onMounted(() => {
      fetchDrinks().then(() => {
        startAutoSlide();
      });
    });

    onUnmounted(() => {
      stopAutoSlide();
    });

    return {
      drinks,
      currentSlide,
      nextSlide,
      previousSlide,
      goToSlide,
    };
  },
});
</script>
