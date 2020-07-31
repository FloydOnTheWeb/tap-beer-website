<template>
  <div class="breadcrumb-container">
    <Breadcrumbs class="container breadcrumb mb-0" />
  </div>
</template>

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
.breadcrumb-item.active,
.breadcrumb-item.active a,
.breadcrumb-container > a,
a.router-link-active {
  color: #919ea9;
  text-decoration: none;
}
@media screen and (max-width: 786px) {
  .breadcrumb {
    font-size: initial;
  }
}
</style>
