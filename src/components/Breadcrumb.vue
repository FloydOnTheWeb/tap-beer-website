<template>
  <nav class="breadcrumb-container" aria-label="breadcrumb">
    <ol class="container breadcrumb mb-0">
      <!-- <li class="breadcrumb-item"><router-link to="/">Home</router-link></li> -->
      <li
        v-for="route in $route.matched"
        v-bind:key="route.fullpath"
        class="breadcrumb-item"
      >
        <router-link :to="{ name: route.name }">
          {{ route.meta.breadcrumb }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.breadcrumb-container {
  background-color: #1f2b33;
}
.breadcrumb {
  padding: 0.5rem 1rem;
  color: #919ea9;
  border-radius: 0;
  background-color: transparent;
  font-size: 1em;
}
.breadcrumb-item,
.breadcrumb-item a,
.breadcrumb-item.active {
  color: #919ea9;
  text-decoration: none;
}
@media screen and (max-width: 786px) {
  .breadcrumb {
    font-size: initial;
  }
}
</style>
