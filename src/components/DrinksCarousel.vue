<template>
  <div class="drinks-carousel">
    <b-carousel
      id="carousel-no-animation"
      style="color:#1f2b33"
      controls
      background="transparent"
      img-width="1"
      img-height="1"
    >
      <b-carousel-slide
        v-for="drink in drinks"
        v-bind:key="drink.id"
        style="color:#1f2b33"
        img-blank
      >
        <router-link :to="`/drinks/${drink.id}`" class="no-style">
          <div class="drink-caption pb-2">{{ drink.name }}</div>
          <img
            class=""
            width="auto"
            height="150"
            :src="drink.image_url"
            :alt="drink.name"
        /></router-link>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import Vue from "vue";
import { BCarousel } from "bootstrap-vue";
Vue.component("b-carousel", BCarousel);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  components: {
    BCarousel
  },
  mounted() {
    this.fetchDrinks();
  },
  data() {
    return {
      drinks: []
    };
  },

  methods: {
    fetchDrinks() {
      axios
        .get("https://api.punkapi.com/v2/beers")
        .then(response => (this.drinks = response.data))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.no-style {
  text-decoration: none;
}
.carousel-item {
  width: 100%;
  height: 260px;
}
.drink-caption {
  font-size: 1.2em;
  width: 100%;
  color: #1f2b33;
  font-weight: bold;
}
</style>
