<template>
  <div class="drink-details py-16" v-if="drink">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-beer-dark mb-4">
          {{ drink.name }}
        </h1>
        <p class="text-xl text-beer-dark/80">
          {{ drink.tagline.replace(".", "") }}
        </p>
        <div class="w-24 h-1 bg-beer-gold mx-auto mt-4"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Beer Image -->
        <div class="flex justify-center">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <img
              :src="`https://punkapi.online/v3/images/${String(drink.id).padStart(3, '0')}.png`"
              :alt="drink.name"
              class="h-96 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Beer Details -->
        <div class="space-y-8">
          <!-- Beer Stats -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-bold text-beer-dark mb-6">Beer Details</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-beer-cream rounded-lg p-4">
                <span class="font-semibold text-beer-dark"
                  >Established Since:</span
                >
                <p class="text-beer-dark/70">{{ drink.first_brewed }}</p>
              </div>
              <div class="bg-beer-cream rounded-lg p-4">
                <span class="font-semibold text-beer-dark"
                  >Alcohol Content:</span
                >
                <p class="text-beer-dark/70">{{ drink.abv }}%</p>
              </div>
              <div class="bg-beer-cream rounded-lg p-4">
                <span class="font-semibold text-beer-dark"
                  >Bitterness (IBU):</span
                >
                <p class="text-beer-dark/70">{{ drink.ibu || "N/A" }}</p>
              </div>
              <div class="bg-beer-cream rounded-lg p-4">
                <span class="font-semibold text-beer-dark"
                  >Colour Scale (SRM):</span
                >
                <p class="text-beer-dark/70">{{ drink.srm || "N/A" }}</p>
              </div>
              <div class="bg-beer-cream rounded-lg p-4">
                <span class="font-semibold text-beer-dark">pH Level:</span>
                <p class="text-beer-dark/70">{{ drink.ph || "N/A" }}</p>
              </div>
              <div class="bg-beer-cream rounded-lg p-4">
                <span class="font-semibold text-beer-dark">Attenuation:</span>
                <p class="text-beer-dark/70">
                  {{ drink.attenuation_level || "N/A" }}%
                </p>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="border-b border-gray-200">
              <nav class="flex">
                <button
                  v-for="tab in tabs"
                  :key="tab.id"
                  @click="activeTab = tab.id"
                  class="flex-1 px-6 py-4 text-center font-medium transition-colors duration-200"
                  :class="
                    activeTab === tab.id
                      ? 'bg-beer-gold text-beer-dark border-b-2 border-beer-orange'
                      : 'text-beer-dark/70 hover:text-beer-dark hover:bg-gray-50'
                  "
                >
                  {{ tab.label }}
                </button>
              </nav>
            </div>

            <div class="p-6">
              <!-- Description Tab -->
              <div v-if="activeTab === 'description'" class="space-y-4">
                <p class="text-beer-dark leading-relaxed">
                  {{ drink.description }}
                </p>
              </div>

              <!-- Ingredients Tab -->
              <div
                v-if="activeTab === 'ingredients' && drink.ingredients"
                class="space-y-4"
              >
                <div
                  v-for="(value, key) in drink.ingredients"
                  :key="key"
                  class="border-l-4 border-beer-gold pl-4"
                >
                  <h4 class="font-semibold text-beer-dark mb-2">
                    {{ capitalize(key) }}:
                  </h4>
                  <p class="text-beer-dark/70">
                    {{ formatIngredients(value) }}
                  </p>
                </div>
              </div>

              <!-- Food Pairing Tab -->
              <div v-if="activeTab === 'food-pairing'" class="space-y-4">
                <h4 class="font-semibold text-beer-dark mb-4">
                  Perfect Food Pairings:
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="pairing in drink.food_pairing"
                    :key="pairing"
                    class="flex items-center space-x-2"
                  >
                    <div class="w-2 h-2 bg-beer-gold rounded-full"></div>
                    <span class="text-beer-dark/70">{{ pairing }}</span>
                  </li>
                </ul>
              </div>

              <!-- Brewers Tips Tab -->
              <div v-if="activeTab === 'brewers-tips'" class="space-y-4">
                <div class="bg-beer-cream rounded-lg p-4">
                  <h4 class="font-semibold text-beer-dark mb-2">
                    Brewer's Tip:
                  </h4>
                  <p class="text-beer-dark/70 italic">
                    {{ drink.brewers_tips }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Logo -->
      <div class="text-center mt-16">
        <img
          alt="tap beer logo"
          src="@/assets/tap-beer.png"
          class="h-16 w-auto mx-auto opacity-50"
        />
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="text-center py-16">
    <div
      class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-beer-gold"
    ></div>
    <p class="mt-4 text-beer-dark text-lg">Loading drink details...</p>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default defineComponent({
  name: "DrinkDetails",
  setup() {
    const route = useRoute();
    const drink = ref(null);
    const activeTab = ref("description");

    const tabs = [
      { id: "description", label: "Description" },
      { id: "ingredients", label: "Ingredients" },
      { id: "food-pairing", label: "Food Pairing" },
      { id: "brewers-tips", label: "Brewer's Tips" },
    ];

    const fetchDrink = async () => {
      try {
        const drinkId = route.params.id;
        const response = await axios.get(
          "https://punkapi.online/v3/beers?page=1&per_page=80",
        );
        // Find the drink with matching id
        drink.value = response.data.find((d) => d.id.toString() === drinkId);
      } catch (error) {
        console.error("Error fetching drink:", error);
      }
    };

    const formatIngredients = (ingredient) => {
      if (typeof ingredient === "string") return `( ${ingredient} )`;
      let list = [];
      Object.values(ingredient).forEach((item) => {
        if (Array.isArray(item)) {
          item.forEach((sub) => sub.name && list.push(sub.name));
        } else if (item.name) {
          list.push(item.name);
        }
      });
      list = [...new Set(list)];
      return `( ${list.join(" , ")} )`;
    };

    const capitalize = (str) => {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    onMounted(() => {
      fetchDrink();
    });

    return {
      drink,
      activeTab,
      tabs,
      formatIngredients,
      capitalize,
    };
  },
});
</script>
