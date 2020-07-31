<template>
  <div class="home">
    <div id="jumbo">
      <div class="container jumbotron jumbotron-fluid mb-0 mt-0 pt-5 pb-5">
        <div class="container">
          <img alt="Vue logo" src="../assets/tap-beer.png" />
          <h1 class="display-4">World Class Signature Beers</h1>
          <p class="lead">Malted from fresh barley extract from our farms.</p>
        </div>
      </div>
    </div>
    <div id="drinks">
      <div class="container">
        <div class="row">
          <div
            v-for="drink in drinks"
            v-bind:key="drink.id"
            class="drink-specials col-sm-3 p-4"
          >
            <div class="row flex-column-reverse flex-lg-row no-gutters">
              <div class="col-sm-12 col-md-2">
                <router-link
                  :to="{
                    path: `/drinks/${drink.id}`,
                    params: { id: drink.id }
                  }"
                  class="no-style"
                  ><img
                    :src="drink.image_url"
                    class="card-img"
                    :alt="drink.name"
                    :id="drink.id"
                /></router-link>
              </div>
              <div class="featured-bottle col-sm-12 col-md-10">
                <div class="card-body">
                  <router-link :to="`/drinks/${drink.id}`" class="no-style"
                    ><div class="card-title">{{ drink.name }}</div></router-link
                  >
                  <p class="card-text tagline mb-1">
                    {{ drink.tagline.replace(".", "") }}
                  </p>
                  <small class="card-text"
                    >{{ drink.volume.value }} {{ drink.volume.unit }}</small
                  >
                </div>
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
        .get("https://api.punkapi.com/v2/beers?ids=6|10|25|8")
        .then(response => (this.drinks = response.data))
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped>
#jumbo {
  background-color: #b8daff;
  background-image: url(../assets/beer-drink.png);
  background-position: center center;
  background-size: cover;
  background-blend-mode: soft-light;
}
#jumbo .jumbotron {
  background-color: transparent;
}
#drinks {
  background-color: #eebb4d;
}
.card-title {
  background-color: #1f2b33;
  color: #ffffff;
  border-radius: 0.25em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
}
.card-text.tagline {
  font-size: 0.9em;
}
.no-style {
  text-decoration: none;
}
@media screen and (max-width: 986px) {
  .featured-bottle .card-body {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .card-img {
    max-height: 240px;
    width: auto;
  }
  .drink-specials .no-gutters {
    background-color: #fecb89;
    padding-bottom: 1em;
    border-radius: 0.5em;
  }
}
</style>
