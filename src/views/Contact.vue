<template>
  <div id="contact" class="container">
    <div class="row mt-3 mb-5">
      <div class="col">
        <div class="card contact-us">
          <div class="card-header highlight-primary text-left textisdark">
            <i class="fa fa-envelope"></i> Contact us
          </div>
          <div class="card-body">
            <form>
              <div class="form-group text-left">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder=""
                  required
                />
              </div>
              <div class="form-group text-left">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder=""
                  required
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group text-left">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div class="mx-auto">
                <button
                  type="submit"
                  class="btn highlight-primary textisdark text-right"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="card bg-light mb-0">
          <div
            class="card-header highlight-secondary textisdark text-uppercase"
          >
            <i class="fa fa-home"></i> Address
          </div>
          <div class="card-body pt-2">
            <img
              alt="Vue logo"
              class="img-fluid"
              src="../assets/tap-beer.png"
            />
            <div class="map p-0 mt-2 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.9090006615806!2d0.21835682759938388!3d51.57490607964634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8bb139ab44137%3A0xb19a26f8c3b44802!2sBuckingham%20Cl%2C%20Hornchurch%20RM11%202QS!5e0!3m2!1sen!2suk!4v1595899908891!5m2!1sen!2suk"
                frameborder="0"
                style="border:0;padding:0;"
              ></iframe>
            </div>
            <p>Buckingham Street, London</p>
            <p>United Kingdom</p>
            <p>Email : email@tapbeer.com</p>
            <p>Tel. +44 020 356 2535</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.highlight-primary {
  background-color: #eebb4d;
}
.highlight-secondary {
  background-color: #fecb89;
}
.contact-us {
  background-color: #f4f6ff;
}
.textisdark {
  font-size: 1em;
  color: #1f2b33;
}
.card,
.btn,
.map {
  border: 1px solid rgba(31, 43, 51, 0.3);
}
</style>
