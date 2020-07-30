<template>
  <div class="about">
    <section class="success" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pt-3 text-center">
            <h1 class="h4">About</h1>
            <hr class="star-light" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <img
              alt="tap beer logo"
              class="img-fluid pb-2"
              src="../assets/tap-beer.png"
            />
            <p>
              We are proud of our rare and high quality products, and one of the
              major malt producers in the world. Established in 1918, a company
              called Stock started to produce malt beers in Leicester, United
              Kingdon. Our premium beer range were a best-seller then, and has
              remained top of the charts ever since. Tap beer was founded by
              Jewish-owners settled in Liverpool and was a great success when
              the distilleries were pillaged, closed or nationalized. Because of
              this, Tap beer had to rebuild the company toward the end the last
              century and chose to expand in other countries like America and
              Japan.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="text-left">
              <h3 class="h5"><strong>Testimonial</strong></h3>
              <div class="seprator"></div>
              <div
                id="testimonial-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="item active">
                    <div class="row p-3">
                      <button class="quote">
                        <i
                          class="fa fa-quote-left testimonial-fa"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <p class="testimonial-para">
                        What a great offering - convenient and affordable. I
                        purchased a beer appreciation kit as a Christmas present
                        and was very impressed. The products were immaculately
                        presented and well received. There was a great range to
                        select from, and certainly beat trawling through the
                        same old stock down at the local bottle shop. If you're
                        looking for a present for the beer drinker that has
                        everything, you will find it at Tap Beer!
                      </p>
                      <div class="row">
                        <div class="col-xs-2">
                          <img
                            src="../assets/thumbs-up.jpg"
                            class="img-responsive pl-3 pr-3 rounded-circle"
                            width="100"
                          />
                        </div>
                        <div class="col-xs-10 text-left">
                          <div class="h6"><strong>Richard Havey</strong></div>
                          <p class="testimonial-subtitle">
                            <span>Chlinical Chemistry Technologist</span><br />
                            <span>Officeal All Star Cafe</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 pt-0 pb-3 text-center">
            <hr class="star-light" />
          </div>
        </div>
      </div>
    </section>

    <section class="success pb-4" id="faq-team">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 pb-4" id="accordion-style-1">
            <div class="col-12">
              <h3 class="h5 mb-4 text-center">
                <strong>Frequently Asked Questions</strong>
              </h3>
            </div>
            <div class="col-12 mx-auto">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header p-1" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <i class="fa fa-question main"></i>&nbsp;<i
                          class="fa fa-angle-double-right mr-3"
                        ></i
                        ><span class="qa-title">How many distilleries?</span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse fade"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body text-left">
                      We own three distilleries in the England.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header p-1" id="headingTwo">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i class="fa fa-plus main"></i>&nbsp;<i
                          class="fa fa-angle-double-right mr-3"
                        ></i
                        ><span class="qa-title"
                          >Outlook for expansion in regions</span
                        >
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse fade"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body text-left">
                      Asia and Pacific
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header p-1" id="headingFour">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <i class="fa fa-envelope main"></i>&nbsp;<i
                          class="fa fa-angle-double-right mr-3"
                        ></i
                        ><span class="qa-title">How to contact HQ by post</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse fade"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body text-left">
                      Write to us at P.O Box 217-8471
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6" id="beer-factory">
            <img
              alt="beer process"
              class="img-fluid img-rounded img-thumbnail"
              src="../assets/beer-chambers.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.testimonial-subtitle {
  color: #1f2b33;
  font-size: 0.8em;
}
.seprator {
  height: 2px;
  width: 56px;
  background-color: #eebb4d;
  margin: 7px 0 10px 0;
}
button.quote {
  border: none;
  background-color: #eebb4d;
}

#accordion-style-1 a {
  color: #eebb4d;
}
#accordion-style-1 .btn-link {
  font-weight: 400;
  color: #eebb4d;
  background-color: transparent;
  text-decoration: none !important;
  font-size: 16px;
  font-weight: bold;
  padding-left: 25px;
}

#accordion-style-1 .card-body {
  border-top: 2px solid #eebb4d;
}

#accordion-style-1 .card-header .btn.collapsed .fa.main {
  display: none;
}

#accordion-style-1 .card-header .btn .fa.main {
  background: #eebb4d#eebb4d;
  padding: 13px 11px;
  color: #ffffff;
  width: 35px;
  height: 41px;
  position: absolute;
  left: -1px;
  top: 10px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  display: block;
}
.qa-title {
  color: #1f2b33;
}
.accordion .card,
.card-header,
h5 {
  text-decoration: none;
}
</style>
