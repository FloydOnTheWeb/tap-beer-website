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
          title: "id"
        },
        {
          title: "name",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "tagline",
          visible: true,
          editable: false,
          sortable: true
        },
        {
          title: "description",
          visible: true,
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
    }
  }
};
</script>
