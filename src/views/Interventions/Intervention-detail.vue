<template>

<div class="container-page" v-if="data">
  
  <div class="header-title">
    <h4>Intervention : {{ data.serialNumber }}</h4>
  </div>
  
  <div class="line-step">Client</div>

  <div class="row g-0 content-step">
    <div class="col-6 pe-2">
      <input class="form-control" type="text" :value="data.name" aria-label="Disabled input example" disabled readonly>
    </div>
    <div class="col-6 ps-2">
      <input class="form-control" type="text" :value="data.surname" aria-label="Disabled input example" disabled readonly>
    </div>
    <input class="form-control" type="text" :value="data.address" aria-label="Disabled input example" disabled readonly>
  </div>

  <div class="line-step">Chaudière</div>
 
  <div class="row g-0 content-step">
          <div class="col-4 pe-2">
            <input class="form-control" type="text" :value="data.boiler" aria-label="Disabled input example" disabled readonly>
          </div>
          <div class="col-4 pe-2 ps-2">
            <input class="form-control" type="text" :value="data.brand" aria-label="Disabled input example" disabled readonly>
          </div>
          <div class="col-4 ps-2">
            <input class="form-control" type="text" :value="data.serialNumber" aria-label="Disabled input example" disabled readonly>
          </div>
        </div>
      
        <div class="line-step">Technicien</div>

        <div class="row g-0 content-step">
          <div class="col-4 pe-2">
            <input class="form-control" type="text" :value="data.intervener" aria-label="Disabled input example" disabled readonly>
          </div>
          <div class="col-4 pe-2 ps-2">
            <input class="form-control" type="text" :value="data.duration" aria-label="Disabled input example" disabled readonly>
          </div>
          <div class="col-4 ps-2">
            <input class="form-control" type="text" :value="data.description" aria-label="Disabled input example" disabled readonly>
          </div>
        </div>

        <div class="row g-0 content-step">
          <div class="col-4 pe-2">
            <input class="form-control" type="text" :value="data.dateEntryService" aria-label="Disabled input example" disabled readonly>
          </div>
          <div class="col-4 pe-2 ps-2">
            <input class="form-control" type="text" :value="data.dateIntervention" aria-label="Disabled input example" disabled readonly>
          </div>
          <div class="col-4 ps-2">
            <input class="form-control" type="text" :value="data.updated_at" aria-label="Disabled input example" disabled readonly>
          </div>
        </div>
        <button class="btn-denied" data-bs-toggle="modal" data-bs-target="#deleteIntervention">Supprimer</button>
  </div>


  <div class="modal fade" id="deleteIntervention" tabindex="-1" aria-labelledby="deleteIntervention" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="deleteIntervention">Suppression d'un rapport d'intervention</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Voulez-vous vraiment supprimer ce rapport d'intervention ?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-accept" data-bs-dismiss="modal">Non</button>
        <button type="button" class="btn-denied" data-bs-dismiss="modal" @click="deleteIntervention()">Oui</button>
      </div>
    </div>
  </div>
</div>
</template>
  
<script>
import api from '../../api';

export default {
  name: 'InterventionDetail',
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.refreshIntervention();
  },
  methods: {
    refreshIntervention() {
      api.get('intervention?id=' + this.$route.params.id )
        .then(response => {
          this.data = response.data['intervention'][0];
        })
        .finally(() => {});
    },
    deleteIntervention() {
      api.delete('intervention/' + this.$route.params.id )
        .then(response => { 
          window.history.back();
        })
        .finally(() => {});
    }
  }
};
</script>

<style>
.line-step {
  width: 15%;
  height: 40px;
  background-color: #ECA72C;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding-left: 1%;
  margin-top: 20px;
  text-align: center;
  justify-content: center;
}
.content-step {
  margin: 1% 2%;
}
</style>