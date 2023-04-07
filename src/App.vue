<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="../public/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
    </a>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link" aria-current="page">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/interventions" class="nav-link" aria-current="page">Interventions</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/interveners" class="nav-link" aria-current="page">Techniciens</router-link>
        </li>
      </ul>
        <input class="input-search" type="search" placeholder="Rechercher ..." v-model="searchTapping" aria-label="Search" @keyup.enter="redirectToPage()">
        <select name="searchBy" id="searchBy" v-model="seleted">
          <option value="intervener">Technicien</option>
          <option value="name">Nom du client</option>
          <option value="surname">Prénom du client</option>
          <option value="address">Adresse</option>
          <option value="brand">Marque</option>
          <option value="boiler">Modèle</option>
          <option value="dateEntryService">Date de mise en service</option>
          <option value="dateIntervention">Date intervention</option>
          <option value="serialNumber">Numéro de série</option>
          <option value="description">Description</option>
          <option value="duration">Durée</option> 
        </select>
        <button class="btn-accept" @click="redirectToPage()" v-bind:disabled="searchTapping == '' || seleted == ''">Rechercher</button>
  </div>
</nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      searchTapping: "",
      seleted: "serialNumber",
    };
  },
  methods: {
    redirectToPage() {
      if(this.searchTapping != "" && this.seleted != ''){
        window.location.href = '/search/' + this.searchTapping.toString() + '/' + this.seleted.toString();
      }      
    },
  },
};
</script>
