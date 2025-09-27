<template>
  <div class="about">
    <!-- About Section -->
    <section class="bg-beer-gold py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-beer-dark mb-4">About</h1>
          <div class="w-24 h-1 bg-beer-dark mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Company Info -->
          <div>
            <img
              alt="tap beer logo"
              class="w-32 h-auto mb-6"
              src="@/assets/tap-beer.png"
            />
            <p class="text-beer-dark text-lg leading-relaxed">
              We are proud of our rare and high quality products, and one of the
              major malt producers in the world. Established in 1918, a company
              called Stock started to produce malt beers in Leicester, United
              Kingdom. Our premium beer range were a best-seller then, and has
              remained top of the charts ever since. Tap beer was founded by
              Jewish-owners settled in Liverpool and was a great success when
              the distilleries were pillaged, closed or nationalized. Because of
              this, Tap beer had to rebuild the company toward the end the last
              century and chose to expand in other countries like America and
              Japan.
            </p>
          </div>

          <!-- Testimonial -->
          <div>
            <h3 class="text-2xl font-bold text-beer-dark mb-4">Testimonial</h3>
            <div class="w-14 h-1 bg-beer-gold mb-6"></div>

            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-start space-x-4">
                <div class="bg-beer-gold p-3 rounded-full">
                  <i class="fa fa-quote-left text-beer-dark text-xl"></i>
                </div>
                <div class="flex-1">
                  <p class="text-beer-dark mb-6 leading-relaxed">
                    "What a great offering - convenient and affordable. I
                    purchased a beer appreciation kit as a Christmas present and
                    was very impressed. The products were immaculately presented
                    and well received. There was a great range to select from,
                    and certainly beat trawling through the same old stock down
                    at the local bottle shop. If you're looking for a present
                    for the beer drinker that has everything, you will find it
                    at Tap Beer!"
                  </p>

                  <div class="flex items-center space-x-4">
                    <img
                      src="@/assets/thumbs-up.jpg"
                      class="w-16 h-16 rounded-full object-cover"
                      alt="Richard Havey"
                    />
                    <div>
                      <h4 class="font-bold text-beer-dark">Richard Havey</h4>
                      <p class="text-beer-dark/70 text-sm">
                        Clinical Chemistry Technologist<br />
                        Official All Star Cafe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- FAQ -->
          <div>
            <h3 class="text-2xl font-bold text-beer-dark mb-8 text-center">
              Frequently Asked Questions
            </h3>

            <div class="space-y-4">
              <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  @click="toggleFaq(index)"
                  class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                >
                  <div class="flex items-center space-x-3">
                    <div class="bg-beer-gold p-2 rounded-full">
                      <i :class="faq.icon" class="text-beer-dark"></i>
                    </div>
                    <span class="font-medium text-beer-dark">{{
                      faq.question
                    }}</span>
                  </div>
                  <svg
                    class="w-5 h-5 text-beer-dark transition-transform duration-200"
                    :class="{ 'rotate-180': faq.isOpen }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  v-show="faq.isOpen"
                  class="px-6 py-4 bg-white border-t border-gray-200"
                >
                  <p class="text-beer-dark">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Beer Factory Image -->
          <div class="flex items-center justify-center">
            <img
              alt="beer process"
              class="w-full h-auto rounded-lg shadow-lg"
              src="@/assets/beer-chambers.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const faqs = ref([
      {
        question: "How many distilleries?",
        answer: "We own three distilleries in England.",
        icon: "fa fa-question",
        isOpen: false,
      },
      {
        question: "Outlook for expansion in regions",
        answer: "Asia and Pacific",
        icon: "fa fa-plus",
        isOpen: false,
      },
      {
        question: "How to contact HQ by post",
        answer: "Write to us at P.O Box 217-8471",
        icon: "fa fa-envelope",
        isOpen: false,
      },
    ]);

    const toggleFaq = (index) => {
      faqs.value[index].isOpen = !faqs.value[index].isOpen;
    };

    return {
      faqs,
      toggleFaq,
    };
  },
});
</script>
