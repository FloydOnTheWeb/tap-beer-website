<template>
  <div class="nav-container">
    <nav id="navigation" class="container navbar navbar-expand-lg navbar-light">
      <router-link class="nav-link navbar-brand" to="/">
        <img
          src="../assets/tap-beer.png"
          width="100"
          height="50"
          class="d-inline-block align-top"
          alt="tap beer logo"
          loading="lazy"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto justify-content-end">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/drinks"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              >Drinks</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/contact"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar-light .navbar-toggler {
  border-color: #eebb4d;
  outline: 0;
  background-color: #eebb4d;
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(31, 43, 51, 1);
  text-decoration: none;
  letter-spacing: 1px;
  min-width: 100px;
}

#nav a.router-link-exact-active {
  color: #e78200;
}

.nav-container {
  background-color: #ffe78f;
background-image: url('~@/assets/barley-field.jpg');
  background-blend-mode: screen;
}
.navbar-light .navbar-nav .nav-link.router-link-active {
  color: rgba(31, 43, 51, 1);
  background-color: rgba(254, 203, 137, 0.8);
  border-radius: 0.2em;
}
@media (min-width: 968px) {
  #navbarSupportedContent {
    display: block;
    height: auto !important;
    visibility: visible;
  }
}
</style>
