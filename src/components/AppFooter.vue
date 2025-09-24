<template>
  <footer class="base-footer">
    <div class="container">
      <div class="row">
        <div class="col-12 copyright mt-2 mb-0">
          <p class="float-left mb-2">
            <a @click="scrollToTop" class="scroll-up">Back to top</a>
          </p>
          <p class="text-right mb-2">
            created with <i class="fa fa-heart"></i> by
            <a href="https://www.floydontheweb.com" target="_blank"
              ><i>FloydOnTheWeb</i></a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
footer.base-footer {
  background-color: #1f2b33;
}
footer.base-footer .container,
footer.base-footer a {
  color: #919ea9;
  font-size: 1em;
  text-decoration: none;
}
footer.base-footer .fa-heart {
  color: #ff5f40;
}
footer.base-footer .scroll-up {
  cursor: hand;
}
</style>
