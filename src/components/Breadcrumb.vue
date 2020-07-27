<template>
  <nav class="breadcrumb-container" aria-label="breadcrumb">
    <ol class="container breadcrumb mb-0">
      <li class="breadcrumb-item active">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <router-link to="/about">About</router-link>
      </li>
    </ol>
  </nav>
  <!-- TODO: dynammic breadcrumbs -->
</template>

<style scoped>
.breadcrumb-container{background-color: #1f2b33d9;}
.breadcrumb{
  padding: 0.5rem 1rem;
  color: #ebecf1;
  border-radius: 0;
  background-color: transparent;
}
.breadcrumb a{
    color: #ebecf1;
    text-decoration: none;
    font-size: 0.9em;
}
</style>