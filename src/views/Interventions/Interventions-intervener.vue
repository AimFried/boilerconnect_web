<template>
  <div class="container-page">
    <div class="header-title">
      <h4>Technicien : {{ this.$route.params.name }}</h4>
    </div>
    <ListingList v-bind:data="data['interventions']" v-bind:mode="'intervener'" />
  </div>
</template>
    
<script>
import api from '../../api';
import ListingList from '../../components/ListingList.vue';

export default {
  name: 'InterventionsByIntervener',
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
      api.get('intervention?intervener=' + this.$route.params.name)
        .then(response => {
          this.data = response.data;
        })
        .finally(() => { });
    }
  }
};
</script>