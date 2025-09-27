<template>
  <div class="bg-beer-dark">
    <nav class="container mx-auto px-4 py-2">
      <ol class="flex items-center space-x-2 text-sm">
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="crumb.path"
          class="flex items-center"
        >
          <router-link
            v-if="index < breadcrumbs.length - 1"
            :to="crumb.path"
            class="text-beer-gray hover:text-white transition-colors duration-200"
          >
            {{ crumb.label }}
          </router-link>
          <span v-else class="text-white font-medium">
            {{ crumb.label }}
          </span>
          <svg
            v-if="index < breadcrumbs.length - 1"
            class="w-4 h-4 mx-2 text-beer-gray"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Breadcrumb",
  setup() {
    const route = useRoute();

    const breadcrumbs = computed(() => {
      const crumbs = [];
      const pathArray = route.path.split("/").filter((path) => path);

      // Always start with Home
      crumbs.push({ label: "Home", path: "/" });

      // Build breadcrumbs based on current route
      if (pathArray.length > 0) {
        if (pathArray[0] === "drinks") {
          crumbs.push({ label: "Drinks", path: "/drinks" });
          if (pathArray[1]) {
            crumbs.push({ label: "Drink Details", path: route.path });
          }
        } else if (pathArray[0] === "about") {
          crumbs.push({ label: "About", path: "/about" });
        } else if (pathArray[0] === "contact") {
          crumbs.push({ label: "Contact", path: "/contact" });
        }
      }

      return crumbs;
    });

    return {
      breadcrumbs,
    };
  },
});
</script>
