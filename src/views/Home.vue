<template>
  <div class="home">
    <div class="container jumbotron jumbotron-fluid mb-0 mt-0 pt-5 pb-5">
      <div class="container">
        <img alt="Vue logo" src="../assets/tap-beer.png" />
        <h1 class="display-4">World Class Signature Beers</h1>
        <p class="lead">Malted from fresh barley extract from our farms.</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
      <div v-for="drink in drinks" v-bind:key="drink.id" class="drink-specials col-md-3 pt-1 pb-1" >
        <div class="row no-gutters">
          <div class="col-md-2">
            <img :src="drink.image_url" class="card-img" :alt="drink.name" :id="drink.id" />
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <div class="card-title">{{ drink.name }}</div>
              <p class="card-text tagline">{{ drink.tagline }}</p>
              <small class="card-text">{{ drink.volume.value }} {{ drink.volume.unit }}</small>
            </div>
          </div>
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
      axios
        .get("https://api.punkapi.com/v2/beers?ids=6|13|25|5")
        .then(response => (this.drinks = response.data))
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped>
.jumbotron {
  background-color: #b8daff;
  background-image: url(../assets/beer-drink.png);
  background-position: center center;
  background-size: cover;
  background-blend-mode: soft-light;
}
.drink-specials{background-color:#eebb4d;}
.card-title{background-color:#1f2b33; color:#ffffff;border-radius:.25em;padding-top:.25em;padding-bottom:.25em;}
.card-text.tagline{font-size:0.9em;}
@media screen and (max-width: 764px) {
    .card-img{  max-height: 240px;
    width: auto;}
}

</style>
