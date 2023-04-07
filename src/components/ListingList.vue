<template>
    <div class="header-style">
        <div class="row g-0">
            <div class="col-2 col-sm-3 col-md-3 col-lg-3" v-if="mode != 'intervener'">
                <label>Technicien</label>
            </div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                <label>Client</label>
            </div>
            <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                <label>Numéro de série</label>
            </div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3" v-if="mode == 'intervener'">
                <label>Durée</label>
            </div>
            <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                <label>En service le</label>
            </div>
            <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                <label>Faite le</label>
            </div>
        </div>
    </div>

    <div v-if="!data">
        <div class="row g-0" v-for="n in 3" style="display: flex;align-items: center;">
            <div class="listing-loading-style preload"></div>
        </div>
    </div>

    <div v-if="data && data == null && mode == 'search'" class="listing-style" style="display: flex;justify-content: center;">
        <div class="row g-0">
            <label>Aucun résultats !</label>
        </div>
    </div>

    <div v-if="data && data.length == 0 && mode == 'intervention'" class="listing-style"
        style="display: flex;justify-content: center;">
        <div class="row g-0">
            <label>Aucune intervention enregistrée !</label>
        </div>
    </div>

    <div class="listing-content" id="scrollbar">
        <div v-if="data" class="listing-style" v-for="item in data" :key="item.id"
            @click="$router.push({ name: 'InterventionDetail', params: { id: item.id } })">
            <div class="row g-0" style="display: flex;align-items: center;">
                <div class="col-2 col-sm-3 col-md-3 col-lg-3" v-if="mode != 'intervener'">
                    <label>{{ item.intervener }}</label>
                </div>
                <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                    <label>{{ item.name }} | {{ item.surname }}</label>
                </div>
                <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                    <label>{{ item.serialNumber }}</label>
                </div>
                <div class="col-3 col-sm-3 col-md-3 col-lg-3" v-if="mode == 'intervener'">
                    <label>{{ item.duration }} min</label>
                </div>
                <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                    <label>{{ formatDate(item.dateEntryService) }}</label>
                </div>
                <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                    <label>{{ formatDate(item.dateIntervention) }}</label>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'ListingList',
    props: ['data', 'mode'],
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
