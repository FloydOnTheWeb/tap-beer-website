<template>
<div class="nav-container">
  <nav id="navigation" class="container navbar navbar-expand-lg navbar-light">
    <router-link class="nav-link navbar-brand" to="/">
      <img
        src="../assets/tap-beer.png"
        width="80"
        height="40"
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
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/drinks">Drinks</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #1f2b33;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #e78200;
}

.nav-container{background-color:#ffe78f;}
.navbar-light .navbar-nav .nav-link.router-link-active {
  color: #1f2b33;
}
</style>
