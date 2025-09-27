<template>
  <div id="contact" class="py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-beer-dark mb-4">Contact Us</h1>
        <div class="w-24 h-1 bg-beer-gold mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex items-center mb-6">
            <div class="bg-beer-gold p-3 rounded-full mr-4">
              <i class="fa fa-envelope text-beer-dark text-xl"></i>
            </div>
            <h2 class="text-2xl font-bold text-beer-dark">Send us a message</h2>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-beer-dark mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beer-gold focus:border-transparent transition-colors duration-200"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-beer-dark mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beer-gold focus:border-transparent transition-colors duration-200"
                placeholder="your.email@example.com"
                required
              />
              <p class="text-sm text-gray-600 mt-1">
                We'll never share your email with anyone else.
              </p>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-beer-dark mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beer-gold focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-beer-gold hover:bg-beer-orange text-beer-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-beer-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            </button>
          </form>
        </div>

        <!-- Contact Info & Map -->
        <div class="space-y-8">
          <!-- Contact Information -->
          <div class="bg-beer-cream rounded-lg shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div class="bg-beer-gold p-3 rounded-full mr-4">
                <i class="fa fa-home text-beer-dark text-xl"></i>
              </div>
              <h2 class="text-2xl font-bold text-beer-dark">Our Location</h2>
            </div>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <i class="fa fa-map-marker-alt text-beer-gold mt-1"></i>
                <div>
                  <p class="text-beer-dark font-medium">Address</p>
                  <p class="text-beer-dark/70">Buckingham Street, London</p>
                  <p class="text-beer-dark/70">United Kingdom</p>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <i class="fa fa-envelope text-beer-gold"></i>
                <div>
                  <p class="text-beer-dark font-medium">Email</p>
                  <a
                    href="mailto:email@tapbeer.com"
                    class="text-beer-dark/70 hover:text-beer-orange transition-colors duration-200"
                  >
                    email@tapbeer.com
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <i class="fa fa-phone text-beer-gold"></i>
                <div>
                  <p class="text-beer-dark font-medium">Phone</p>
                  <a
                    href="tel:+440203562535"
                    class="text-beer-dark/70 hover:text-beer-orange transition-colors duration-200"
                  >
                    +44 020 356 2535
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.9090006615806!2d0.21835682759938388!3d51.57490607964634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8bb139ab44137%3A0xb19a26f8c3b44802!2sBuckingham%20Cl%2C%20Hornchurch%20RM11%202QS!5e0!3m2!1sen!2suk!4v1595899908891!5m2!1sen!2suk"
                class="w-full h-full border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Contact",
  setup() {
    const form = ref({
      name: "",
      email: "",
      message: "",
    });

    const isSubmitting = ref(false);

    const submitForm = async () => {
      isSubmitting.value = true;

      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Reset form
        form.value = {
          name: "",
          email: "",
          message: "",
        };

        // Show success message (you could use a toast notification here)
        alert("Thank you for your message! We'll get back to you soon.");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "Sorry, there was an error sending your message. Please try again.",
        );
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      form,
      isSubmitting,
      submitForm,
    };
  },
});
</script>
