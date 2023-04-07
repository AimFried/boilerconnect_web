<template>
  <div class="container-page">
    <div class="header-title">
      <h4>Recherche: "{{ data['search'] }}" par {{ data['by'] }}</h4>
    </div>
    <ListingList v-bind:data="data['interventions']" v-bind:mode="'search'" />
  </div>
</template>
  
<script>
import api from '../api';
import ListingList from '../components/ListingList.vue';

export default {
  name: 'Search',
  components: { ListingList },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.refreshSearch();
  },
  methods: {
    refreshSearch() {
      api.get('search?q=' + this.$route.params.q + '&by=' + this.$route.params.by)
        .then(response => {
          this.data = response.data;
        })
        .finally(() => { });
    }
  }
};
</script>