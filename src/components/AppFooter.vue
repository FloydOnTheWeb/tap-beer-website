<template>
  <footer class="bg-beer-dark text-beer-gray py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <button
            @click="scrollToTop"
            class="text-beer-gray hover:text-white transition-colors duration-200 flex items-center space-x-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
            <span>Back to top</span>
          </button>
        </div>
        <div class="text-center md:text-right">
          <p class="text-sm">
            Created with <i class="fa fa-heart text-red-500"></i> by
            <a
              href="https://www.floydontheweb.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-beer-gray hover:text-white transition-colors duration-200 italic"
            >
              FloydOnTheWeb
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
</script>
