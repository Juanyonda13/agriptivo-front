<template>
    <v-alert :type="type" :value="true"  @input="dismissAlert" dismissible dense>
      <div class="transparent-alert">
      {{ message }}
      </div>
    </v-alert>
  </template>
  
  <script>
  export default {
    props: {
      type: String, // Tipo de alerta (success, warning, error, etc.)
      message: String // Mensaje de la alerta
    },
    methods: {
      dismissAlert() {
        this.$emit('close');
      },
      
    }
  };
  </script>
  <style scoped>
  .transparent-alert {
    background-color: transparent;
  }
  </style>