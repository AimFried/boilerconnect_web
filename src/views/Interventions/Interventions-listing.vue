<template>
  <div class="container-page">
    <div class="header-title">
      <h4>Interventions</h4>
    </div>
    <ListingList v-bind:data="data['interventions']" v-bind:mode="'intervention'"/>
  </div>
</template>
  
<script>
import api from '../../api';
import ListingList from '../../components/ListingList.vue';

export default {
  name: 'Interventions',
  components: { ListingList },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.refreshInterventions();
  },
  methods: {
    refreshInterventions() {
      api.get('intervention')
        .then(response => {
          this.data = response.data;
        })
        .finally(() => {});
    }
  }
};
</script>