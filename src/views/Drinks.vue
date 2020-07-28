<template>
  <div class="drinks container">
    <div class="row flex-column-reverse flex-md-row drinks-slider">
      <div class="col-sm-12 col-md-6 my-auto"><DrinksCarousel /></div>
      <div class="col-sm-12 col-md-6 pt-2 pb-2 my-auto">
        <img alt="Vue logo" src="../assets/tap-beer.png" />
        <h1 class="h5">Our full range of premium beers</h1>
      </div>
    </div>
    <div class="row pt-3 pb-5 drinks-table">
      <div class="col-md-12"><DrinksTable /></div>
    </div>
  </div>
</template>

<script>
import DrinksTable from "@/components/DrinksTable";
import DrinksCarousel from "@/components/DrinksCarousel.vue";
export default {
  components: {
    DrinksTable,
    DrinksCarousel
  }
};
</script>

<style scoped>
.drinks-slider {
  background-color: #fecb89;
  background-image: url(../assets/barley-field.jpg);
  background-position: center center;
  background-size: cover;
  background-blend-mode: soft-light;
}
.drinks-table{
  background-color:#ffffff;
}
#display-beers >>> .table-bordered {background: #fecb89;}
#display-beers >>> .table.vue-table thead > tr > th,
#display-beers >>> .btn.btn-outline-primary.active, #display-beers >>> .btn-outline-primary{
  background-color: #eebb4d;
  border-color: #1f2b33;
  color:#1f2b33;
}
#display-beers >>> .btn.btn-outline-primary.active{font-weight: bold;}
#display-beers >>> .table-bordered td{border-color: #1f2b33;}
#display-beers >>> .btn-toolbar {justify-content: space-around;}
#display-beers >>> .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(253, 231, 167, .5);
}
#display-beers >>> .form-control {
  background-color: #ffeeba;
  border: 1px solid #fecb89;
  color:#1f2b33;
}
.drinks-carousel >>> .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231f2b33' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.drinks-carousel >>> .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231f2b33' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}
.drinks-carousel >>> .carousel-control-next,
.drinks-carousel >>> .carousel-control-prev {
  opacity: 1;
  color: #1f2b33;
}
</style>
