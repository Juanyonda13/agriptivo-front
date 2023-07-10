<template>
    <div>
      <!-- <p>{{ fincas }}</p> -->
      <v-data-table class="elevation-1" :headers="headers" :items="fincas">
        <!-- Contenido adicional del v-data-table -->
      </v-data-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          {
            text: "Finca",
            align: "start",
            value: "name_finca",
          },
        ],
        fincas: [],
      };
    },
    computed: {
      user() {
        return this.$store.getters["auth/currentUser"];
      },
    },
    mounted() {
      this.getUserInfo();
      this.getFincas();
    },
    methods: {
      async getUserInfo() {
        await this.$store.dispatch("auth/userInfo");
      },
  
      async getFincas() {
        try {
          await this.$store.dispatch("finca/list", this.user._id);
          const res = this.$store.getters["finca/fincas"];
          this.fincas = Array.isArray(res) ? res : [res];
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  