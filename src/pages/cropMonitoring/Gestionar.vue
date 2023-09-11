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
          :items="cropMonitoring"
          class="elevation-3"
          :search="search"
          :items-per-page="5"
          height="400"
        >
          <!-- Contenido adicional del v-data-table -->
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Gestionar Los seguimientos del cultivo</v-toolbar-title>
  
              <v-btn color="primary" dark class="mb-2" @click="openModal">
                + Nuevo Seguimiento
              </v-btn>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon size="small" class="me-2" @click="openModal(-1, item)">
              mdi-pencil
            </v-icon>
  
            <v-icon size="small" class="me-2" @click="deleteItem(item.raw)">
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
  import {  useRoute } from "vue-router";

  const headers = [
    {
      title: "Promedio de la medicion",
      align: "start",
      sortable: false,
      value: "promedio_medicion",
    },
    {
      title: "ps Promedio",
      sortable: false,
      value: "pspromedio_medicion",
    },
    {
      title: "Talla medicion",
      sortable: false,
      value: "talla_medicion",
    },
    {
      title: "Acciones",
      key: "actions",
      sortable: false,
    },
  ];
  
  const store = useStore();
  
  const modalOpen = ref(false);
  const search = ref("");

  //ROUTER
  const route=useRoute()

  onMounted(async () => {
    await store.dispatch("cropMonitoring/list",route.params.id_cultive);
  });




  const cropMonitoring = computed(() =>
    Array.isArray(store.getters["cropMonitoring/cropMonitoring"])
      ? store.getters["cropMonitoring/cropMonitoring"]
      : []
  );
  const openModal = () => {
    modalOpen.value = !modalOpen.value;
  };
  


  const components = { Register };
  </script>
    