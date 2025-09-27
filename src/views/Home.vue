<template>
  <div class="home">
    <!-- Hero Section -->
    <div
      class="hero-section bg-beer-blue bg-blend-soft-light bg-cover bg-center relative"
      :style="{
        backgroundImage: 'url(' + require('@/assets/beer-drink.png') + ')',
      }"
    >
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="text-center">
          <img
            alt="Tap Beer logo"
            src="@/assets/tap-beer.png"
            class="mx-auto mb-8 h-24 w-auto"
          />
          <h1 class="text-4xl md:text-6xl font-bold text-beer-dark mb-6">
            World Class Signature Beers
          </h1>
          <p class="text-xl md:text-2xl text-beer-dark/80 max-w-2xl mx-auto">
            Malted from fresh barley extract from our farms.
          </p>
        </div>
      </div>
    </div>

    <!-- Featured Drinks Section -->
    <div class="bg-beer-gold py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-beer-dark text-center mb-12">
          Featured Drinks
        </h2>
        <p class="text-center text-beer-dark/70 mb-4">
          Debug: Loading: {{ loading }}, Error: {{ error }}, Drinks Count:
          {{ drinks.length }}
        </p>
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-8">
          <div
            class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-beer-gold"
          ></div>
          <p class="mt-2 text-beer-dark">Loading featured drinks...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-8">
          <p class="text-red-600">Error loading drinks: {{ error }}</p>
        </div>

        <!-- Drinks Grid -->
        <div
          v-else-if="drinks.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div
            v-for="drink in drinks"
            :key="drink.id"
            class="drink-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex flex-col md:flex-row">
              <!-- Drink Image -->
              <div class="md:w-1/3">
                <router-link :to="`/drinks/${drink.id}`" class="block">
                  <img
                    :src="`https://punkapi.online/v3/images/${String(drink.id).padStart(3, '0')}.png`"
                    :alt="drink.name"
                    class="w-full h-48 md:h-full object-cover"
                    loading="lazy"
                  />
                </router-link>
              </div>

              <!-- Drink Info -->
              <div class="md:w-2/3 p-6 flex flex-col justify-center">
                <router-link :to="`/drinks/${drink.id}`" class="block group">
                  <h3
                    class="text-xl font-bold text-beer-dark mb-2 group-hover:text-beer-orange transition-colors duration-200"
                  >
                    {{ drink.name }}
                  </h3>
                </router-link>
                <p class="text-beer-dark/70 mb-3 text-sm">
                  {{ drink.tagline.replace(".", "") }}
                </p>
                <div class="text-sm text-beer-dark/60">
                  {{ drink.volume.value }} {{ drink.volume.unit }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Drinks State -->
        <div v-else class="text-center py-8">
          <p class="text-beer-dark">
            No featured drinks available at the moment.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Home",
  setup() {
    const drinks = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchDrinks = async () => {
      try {
        loading.value = true;
        error.value = null;
        console.log("Starting to fetch drinks...");
        const response = await axios.get(
          "https://punkapi.online/v3/beers?page=1&ids=6,10,25,8",
        );
        console.log("API Response:", response.data);
        // The API returns a direct array
        drinks.value = response.data;
        console.log("Fetched drinks:", drinks.value);
        console.log("Number of drinks:", drinks.value.length);
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching drinks:", err);
        console.error("Error details:", err.response?.data);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      console.log("Home component mounted, fetching drinks...");
      fetchDrinks();
    });

    return {
      drinks,
      loading,
      error,
      fetchDrinks,
    };
  },
});
</script>

<style scoped>
.hero-section {
  background-blend-mode: soft-light;
}

.drink-card {
  transition: transform 0.2s ease-in-out;
}

.drink-card:hover {
  transform: translateY(-2px);
}
</style>
