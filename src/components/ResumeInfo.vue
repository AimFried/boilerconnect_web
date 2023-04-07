<template>
    <div class="row g-0 resume-container" v-if="data.length != 0">
        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="resume-info">
                <label>
                    <strong>{{ data.totalInterventions }}</strong> 
                    <template v-if="data.totalInterventions <= 1"> intervention</template> 
                    <template v-if="data.totalInterventions > 1"> interventions</template>
                </label>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="resume-info">
                <label><strong>{{ data.totalInterveners }}</strong> 
                    <template v-if="data.totalInterveners <= 1"> technicien</template>
                    <template v-if="data.totalInterveners > 1"> techniciens</template>
                </label>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="resume-info">
                <label><strong>{{ data.todayInterventions }}</strong> 
                    <template v-if="data.todayInterventions <= 1"> intervention aujoud'hui</template>
                    <template v-if="data.todayInterventions > 1"> interventions aujoud'hui</template>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumeInfo',
    props: ['data']
  };
</script>

<style>
.resume-container{
    margin: 0% 5%;
}
.resume-info {
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: 0.3s;
}
.resume-info:hover {
    scale: calc(0.95);
    transition: 0.3s;
}
</style>