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
        :items="cultives"
        class="elevation-3"
        :search="search"
        :items-per-page="5"
        height="400"
      >
        <!-- Contenido adicional del v-data-table -->
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Gestionar Cultivos</v-toolbar-title>

            <v-btn color="primary" dark class="mb-2" @click="openModal">
              + Nuevo cultivos
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon size="small" class="me-2" @click="editItem(item.raw)">
            mdi-pencil
          </v-icon>
          <v-icon size="small" @click="deleteItem(item.raw)">
            mdi-delete
          </v-icon>
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
    title: "Mis cultivos",
    align: "start",
    sortable: false,
    value: "name_cultives",
  },
  { 
    title: 'Acciones', 
    // key: 'actions',
    sortable: false 
  },
];

const store = useStore();

const modalOpen = ref(false);
const search = ref("");
onMounted(async () => {
  await store.dispatch("cultive/list");
});

const cultives = computed(() =>
  Array.isArray(store.getters["cultive/cultives"])
    ? store.getters["cultive/cultives"]
    : []
);

const openModal = () => {
  modalOpen.value = !modalOpen.value;
};

const components = { Register };
</script>
  