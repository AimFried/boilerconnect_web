<template>
  <ResumeInfo v-bind:data="data" />
  <div class="row g-0">
    <div class="col-12" v-if="data['interventionsByMonth']">
      <GChart type="LineChart" v-bind:data="data['interventionsByMonth']" :options="chartOptions" />
    </div>
  </div>
</template>
  
<script>
import api from '../api';
import ResumeInfo from '../components/ResumeInfo.vue'
import { GChart } from 'vue-google-charts'

export default {
  name: 'ViewDashboard',
  components: { ResumeInfo, GChart },
  data() {
    return {
      data: [],
      chartOptions: {
        chart: {},
        colors: ['#ECA72C'],
        crosshair: { trigger: 'both' },
        height: 500,
        lineWidth: 4,
        legend: { position: 'bottom' },
        pointSize: 10,
      }
    }
  },
  mounted() {
    this.refreshResume();
  },
  methods: {
    refreshResume() {
      api.get('statistics')
        .then(response => {
          this.data = response.data;
        })
        .finally(() => { });
    }
  }
};
</script>