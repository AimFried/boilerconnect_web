<template>
  <div class="container-page">
    <div class="header-title">
      <h4>Techniciens</h4>
    </div>
    <ListingCard v-bind:data="data['interveners']" />
  </div>
</template>
    
<script>
import api from '../../api';
import ListingCard from '../../components/ListingCard.vue';

export default {
  name: 'Interveners',
  components: { ListingCard },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.refreshInterveners();
  },
  methods: {
    refreshInterveners() {
      api.get('intervener')
        .then(response => {
          this.data = response.data;
        })
        .finally(() => { });
    }
  }
};
</script>
