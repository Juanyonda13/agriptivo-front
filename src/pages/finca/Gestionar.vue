<template>
  <v-data-table
    :headers="headers"
    :items="fincas"
    class="elevation-1"
  >
    <!-- Contenido adicional del v-data-table -->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Gestionar Fincas</v-toolbar-title>
        <v-btn color="primary" dark class="mb-2" @click="openModal">
          Nueva finca
        </v-btn>
      </v-toolbar>
    </template>
  </v-data-table>

  <Register v-model="modalOpen" @save="saveModal"></Register>
</template>

<script>
import Register from './Register.vue';

export default {
  data() {
    return {
      headers: [
        {
          title: 'My finca',
          align: 'start',
          sortable: false,
          key: 'name_finca',
        },
      ],
      fincas: [],
      modalOpen: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters['auth/currentUser'];
    },
  },
  mounted() {
    this.getFincas();
  },
  methods: {
    async getFincas() {
      try {
        await this.$store.dispatch('finca/list', this.user._id);
        const res = this.$store.getters['finca/fincas'];
        this.fincas = Array.isArray(res) ? res : [res];
      } catch (error) {
        console.error(error);
      }
    },
    openModal() {
      this.modalOpen = true;
    },
    saveModal(data) {
      // Lógica para guardar la nueva finca
      console.log(data);
      this.modalOpen = false;
    },
  },
  components: {
    Register,
  },
};
</script>
