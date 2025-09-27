<template>
  <div id="display-beers">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-beer-dark text-center mb-4">
        Beer Collection
      </h2>
      <div class="w-24 h-1 bg-beer-gold mx-auto"></div>
    </div>

    <!-- Search and Filter -->
    <div class="mb-6">
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div class="flex-1 max-w-md">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search beers..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beer-gold focus:border-transparent"
          />
        </div>
        <div class="flex gap-2">
          <select
            v-model="sortBy"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beer-gold focus:border-transparent"
          >
            <option value="name">Sort by Name</option>
            <option value="abv">Sort by ABV</option>
            <option value="ibu">Sort by IBU</option>
            <option value="first_brewed">Sort by Date</option>
          </select>
          <button
            @click="toggleSortOrder"
            class="px-4 py-2 bg-beer-gold hover:bg-beer-orange text-beer-dark rounded-lg transition-colors duration-200"
          >
            {{ sortOrder === "asc" ? "↑" : "↓" }}
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-8">
      <div
        class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-beer-gold"
      ></div>
      <p class="mt-2 text-beer-dark">Loading beers...</p>
    </div>

    <!-- Beers Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="beer in paginatedBeers"
        :key="beer.id"
        @click="showDrinkDetails(beer)"
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3
              class="text-lg font-bold text-beer-dark group-hover:text-beer-orange transition-colors duration-200"
            >
              {{ beer.name }}
            </h3>
            <span class="text-sm text-beer-dark/60">#{{ beer.id }}</span>
          </div>

          <p class="text-beer-dark/70 text-sm mb-4 line-clamp-2">
            {{ beer.tagline }}
          </p>

          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="font-medium text-beer-dark">ABV:</span>
              <span class="text-beer-dark/70">{{ beer.abv }}%</span>
            </div>
            <div>
              <span class="font-medium text-beer-dark">IBU:</span>
              <span class="text-beer-dark/70">{{ beer.ibu || "N/A" }}</span>
            </div>
            <div>
              <span class="font-medium text-beer-dark">Est.:</span>
              <span class="text-beer-dark/70">{{ beer.first_brewed }}</span>
            </div>
            <div>
              <span class="font-medium text-beer-dark">SRM:</span>
              <span class="text-beer-dark/70">{{ beer.srm || "N/A" }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div
      v-if="totalPages > 1"
      class="flex justify-center items-center mt-8 space-x-2"
    >
      <button
        @click="currentPage = Math.max(1, currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-beer-gold hover:bg-beer-orange text-beer-dark rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <span class="px-4 py-2 text-beer-dark">
        Page {{ currentPage }} of {{ totalPages }}
      </span>

      <button
        @click="currentPage = Math.min(totalPages, currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-beer-gold hover:bg-beer-orange text-beer-dark rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default defineComponent({
  name: "DrinksTable",
  setup() {
    const router = useRouter();
    const beers = ref([]);
    const loading = ref(false);
    const searchQuery = ref("");
    const sortBy = ref("name");
    const sortOrder = ref("asc");
    const currentPage = ref(1);
    const itemsPerPage = 12;

    const fetchDrinks = async () => {
      loading.value = true;
      try {
        const response = await axios.get(
          "https://punkapi.online/v3/beers?page=1&per_page=80",
        );
        beers.value = response.data;
      } catch (error) {
        console.error("Error fetching beers:", error);
      } finally {
        loading.value = false;
      }
    };

    const filteredBeers = computed(() => {
      let filtered = beers.value;

      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (beer) =>
            beer.name.toLowerCase().includes(query) ||
            beer.tagline.toLowerCase().includes(query) ||
            beer.description.toLowerCase().includes(query),
        );
      }

      return filtered.sort((a, b) => {
        let aVal = a[sortBy.value];
        let bVal = b[sortBy.value];

        if (sortBy.value === "first_brewed") {
          aVal = new Date(aVal);
          bVal = new Date(bVal);
        }

        if (sortOrder.value === "asc") {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredBeers.value.length / itemsPerPage);
    });

    const paginatedBeers = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredBeers.value.slice(start, end);
    });

    const toggleSortOrder = () => {
      sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
    };

    const showDrinkDetails = (beer) => {
      router.push({
        name: "Drink",
        params: { id: beer.id },
      });
    };

    // Reset to first page when search or sort changes
    watch([searchQuery, sortBy, sortOrder], () => {
      currentPage.value = 1;
    });

    onMounted(() => {
      fetchDrinks();
    });

    return {
      beers,
      loading,
      searchQuery,
      sortBy,
      sortOrder,
      currentPage,
      totalPages,
      paginatedBeers,
      toggleSortOrder,
      showDrinkDetails,
    };
  },
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
