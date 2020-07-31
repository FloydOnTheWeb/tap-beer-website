<template>
  <div class="drink-details container">
    <div v-for="drink in drinks" v-bind:key="drink.id">
      <div class="row pt-4 pb-1">
        <div class="col-lg-12 text-center">
          <h1 class="h4 bm-2">{{ drink.name }}</h1>
          <p class="h5">
            {{ drink.tagline.replace(".", "") }}
          </p>
        </div>
      </div>
      <div class="row pt-3">
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
            <p class="highlight">
              <strong>Established Since:</strong>
              {{ drink.first_brewed }}
            </p>
            <p class="highlight">
              <strong>Alchohol Content:</strong>
              {{ drink.abv }}
            </p>
            <p class="highlight">
              <strong>Bitterness:</strong>
              {{ drink.ibu }}
            </p>
            <p class="highlight">
              <strong>Colour scale:</strong>
              {{ drink.srm }}
            </p>
            <p class="highlight">
              <strong>ph level:</strong>
              {{ drink.ph }}
            </p>
          </div>
          <nav class="mt-4">
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
              <div v-if="drink.ingredients != null">
                <div
                  v-for="(value, propertyName) in drink.ingredients"
                  v-bind:key="propertyName"
                >
                  {{
                    propertyName.charAt(0).toUpperCase() + propertyName.slice(1)
                  }}
                  {{ drinkIngredients(value) }}
                </div>
              </div>
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
      axios
        .get(`https://api.punkapi.com/v2/beers?ids=${drinkSelected}`)
        .then(response => (this.drinks = response.data))
        .catch(error => console.log(error));
    },
    drinkIngredients(ingredient) {
      if (typeof ingredient != "string") {
        var ingredientList = [];
        Object.keys(ingredient).forEach(function(item) {
          ingredientList.push(ingredient[item].name);
        });
      }
      if (ingredientList) {
        ingredientList = [...new Set(ingredientList)];
        ingredient = ingredientList.join(" , ");
      }
      ingredient = "( " + ingredient.toString() + " )";
      return ingredient;
    }
  }
};
</script>

<style scoped>
.nav-tabs a.nav-link {
  color: #1f2b33;
}
p.highlight {
  background-color: #fecb89;
  border-radius: 2rem 0 0 2rem;
  padding: 0.75rem 1.25rem;
  background: -moz-linear-gradient(left, #fecb89 20%, #ffffff 100%);
  background: -webkit-linear-gradient(left, #fecb89 20%, #ffffff 100%);
  background: linear-gradient(to right, #fecb89 20%, #ffffff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fecb89', endColorstr='#ffffff',GradientType=1 );
}
</style>