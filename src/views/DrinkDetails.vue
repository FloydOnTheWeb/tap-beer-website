<template>
  <div class="drink-details container">
    <div class="row pt-4 pb-1" v-for="drink in drinks" v-bind:key="drink.id">
      <div class="col-lg-12 text-center">
        <h1 class="h4 bm-2">{{ drink.name }}</h1>
        <p class="h5">
          {{ drink.tagline }}
        </p>
      </div>
    </div>
    <div class="row pt-3" v-for="drink in drinks" v-bind:key="drink.id">
      <div class="col-md-4 pb-4 text-center">
        <img
          :src="drink.image_url"
          class="mx-auto d-block"
          :alt="drink.name"
          :id="drink.id"
          height="300"
        />
      </div>

      <div class="col-md-8 text-left">
        <div class="text-left">
          <p>
            <strong>Established Since:</strong>
            {{ drink.first_brewed }}
          </p>
          <p>
            <strong>Alchohol Content:</strong>
            {{ drink.abv }}
          </p>
          <p>
            <strong>Bitterness:</strong>
            {{ drink.ibu }}
          </p>
          <p>
            <strong>Colour scale:</strong>
            {{ drink.srm }}
          </p>
          <p>
            <strong>ph level:</strong>
            {{ drink.ph }}
          </p>

          <h3 class="h6">Method</h3>

          <p>{{ drink.method }}</p>

          <ol>
            <li
              v-for="method in drink.method"
              v-bind:key="method"
              :depth="depth + 1"
            >
              {{ method }}
            </li>
          </ol>
        </div>
        <nav>
          <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-description-tab"
              data-toggle="tab"
              href="#nav-description"
              role="tab"
              aria-controls="nav-description"
              aria-selected="true"
              >Description</a
            >
            <a
              class="nav-item nav-link"
              id="nav-ingredients-tab"
              data-toggle="tab"
              href="#nav-ingredients"
              role="tab"
              aria-controls="nav-ingredients"
              aria-selected="false"
              >Ingredients</a
            >
            <a
              class="nav-item nav-link"
              id="nav-food-pairing-tab"
              data-toggle="tab"
              href="#nav-food-pairing"
              role="tab"
              aria-controls="nav-food-pairing"
              aria-selected="false"
              >Food pairing</a
            >
            <a
              class="nav-item nav-link"
              id="nav-brewers-tips-tab"
              data-toggle="tab"
              href="#nav-brewers-tips"
              role="tab"
              aria-controls="nav-brewers-tips"
              aria-selected="false"
              >Brewers tips</a
            >
          </div>
        </nav>
        <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-description"
            role="tabpanel"
            aria-labelledby="nav-description-tab"
          >
            {{ drink.description }}
          </div>
          <div
            class="tab-pane fade"
            id="nav-ingredients"
            role="tabpanel"
            aria-labelledby="nav-ingredients-tab"
          >
            <!-- {{ drink.ingredients }} -->
            <ol>
              <li
                v-for="ingredient in drink.ingredients"
                v-bind:key="ingredient"
              >
                {{ ingredient }}
              </li>
            </ol>
          </div>
          <div
            class="tab-pane fade"
            id="nav-food-pairing"
            role="tabpanel"
            aria-labelledby="nav-food-pairing-tab"
          >
            <ol>
              <li v-for="pairing in drink.food_pairing" v-bind:key="pairing">
                {{ pairing }}
              </li>
            </ol>
          </div>
          <div
            class="tab-pane fade"
            id="nav-brewers-tips"
            role="tabpanel"
            aria-labelledby="nav-brewerstips-tab"
          >
            {{ drink.brewers_tips }}
          </div>
        </div>
        <div class="text-center mx-auto mt-5 mb-5">
          <img
            alt="tap beer logo"
            class="img-fluid"
            src="../assets/tap-beer.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
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
      let drinkSelected = this.$route.params.id;
      console.log(drinkSelected);
      axios
        .get(`https://api.punkapi.com/v2/beers?ids=${drinkSelected}`)
        .then(response => (this.drinks = response.data))
        .catch(error => console.log(error));
    }
  }
};
</script>
