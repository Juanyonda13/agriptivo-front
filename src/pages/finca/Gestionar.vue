<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-text-field
        outlined
        dense
        append-icon="mdi-magnify"
        hide-details
        v-model="search"
      >
      </v-text-field>
    </v-col>
  </v-row>

  <v-row justify="center">
    <v-col cols="6">
      <v-data-table
        :headers="headers"
        :items="fincas"
        class="elevation-3"
        :search="search"
        :items-per-page="5"
        height="400"
      >
        <!-- Contenido adicional del v-data-table -->
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Gestionar Fincas</v-toolbar-title>

            <v-btn color="primary" dark class="mb-2" @click="openModal">
              + Nueva finca
            </v-btn>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-col>
  </v-row>

  <!-- Modal de registro -->
  <Register :modelValue="modalOpen" @update:modelValue="modalOpen = $event" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Register from "./Register.vue";

const headers = [
  {
    title: "Mis fincas",
    align: "start",
    sortable: false,
    value: "name_finca",
  },
];

const store = useStore();

const modalOpen = ref(false);
const search = ref("");
onMounted(async () => {
  await store.dispatch("finca/list");
});

const fincas = computed(() =>
  Array.isArray(store.getters["finca/fincas"])
    ? store.getters["finca/fincas"]
    : []
);

const openModal = () => {
  modalOpen.value = !modalOpen.value;
};

const components = { Register };
</script>

