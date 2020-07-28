<template>
  <div id="display-beers">
    <vue-bootstrap-table
      :columns="columns"
      :values="values"
      :show-filter="true"
      :show-column-picker="true"
      :selectable="false"
      :sortable="true"
      :paginated="true"
      :pageSize="5"
      :multi-column-sortable="true"
      :filter-case-sensitive="false"
      :row-click-handler="showDrinkDetails"
    >
      <template v-slot:name="slotProps">
        {{ slotProps.value.name }}
      </template>
      <template v-slot:description="slotProps">
        {{ slotProps.value.description }}
      </template>
    </vue-bootstrap-table>
  </div>
</template>

<script>
import Vue from "vue";
import VueBootstrapTable from "vue2-bootstrap-table2";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  components: {
    VueBootstrapTable: VueBootstrapTable
  },
  data: function() {
    return {
      columns: [
        {
          title: "Product code",
          name: "id"
        },
        {
          title: "Name",
          name: "name",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "Tagline",
          name: "tagline",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "Established Since",
          name: "first_brewed",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "Alchohol Content",
          name: "abv",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "Bitterness",
          name: "ibu",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "Colour scale",
          name: "srm",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "ph level",
          name: "ph",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "Sugars consumed",
          name: "attenuation_level",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "Description",
          name: "description",
          visible: false,
          editable: false,
          sortable: true
        },
        {
          title: "Tips",
          name: "brewers_tips",
          visible: false,
          editable: false,
          sortable: true
        }
      ],
      values: []
    };
  },
  mounted() {
    this.fetchDrinks();
  },
  methods: {
    fetchDrinks() {
      axios
        .get("https://api.punkapi.com/v2/beers")
        .then(response => (this.values = response.data))
        .catch(error => console.log(error));
    },
    showDrinkDetails(event, entry) {
      this.$router.push({ path: `/drinks/${entry.id}` });
    }
  }
};
</script>
