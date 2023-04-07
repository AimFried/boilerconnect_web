<template>
    <div class="listing-card-container">

        <div v-if="data" class="listing-card-style" v-for="item in data"
            :key="item.name"
            @click="$router.push({ name: 'IntervenerInterventions', params: { name: item.name } })">
            <div class="row g-0" style="width: 100%;">
                <div class="col-6 col-sm-3 col-md-3 col-lg-3">
                    <img src="/profil.png" alt="Profils-technicien">
                </div>
                <div class="col-6 col-sm-9 col-md-9 col-lg-9">
                    <h4><strong>{{ item.name }}</strong></h4>
                    <p>{{ item.totalInterventions }}
                        <template v-if="item.totalInterventions <= 1"> intervention</template>
                        <template v-if="item.totalInterventions > 1"> interventions</template>
                    </p>
                    <p>Dernier rapport envoyé le {{ formatDate(item.lastIntervention) }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="data && data.length < 1" class="listing-style"
        style="display: flex;justify-content: center;margin: 1% 5%;">
        <div class="row g-0">
            <label>Aucun technicien enregistré !</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListingList',
    props: ['data'],
    methods: {
        formatDate(stringDate) {
            var date = new Date(stringDate);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();

            var dateFormatee = ('0' + day).slice(-2) + '/' + ('0' + month).slice(-2) + '/' + year;

            return dateFormatee;
        }
    }
};
</script>
