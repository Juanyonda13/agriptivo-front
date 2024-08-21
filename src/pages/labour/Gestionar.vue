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
          :items="labour"
          class="elevation-3"
          :search="search"
          :items-per-page="5"
          height="400"
        >
          <!-- Contenido adicional del v-data-table -->
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Gestionar Actividades</v-toolbar-title>
  
              <v-btn color="primary" dark class="mb-2" @click="openModal">
                + Nuevas actividades
              </v-btn>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn variant="text" class="">
              <v-icon size="large" class="me-2" @click="openModal(-1, item)">
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn variant="text">
              <v-icon size="large" class="me-2" @click="deleteItem(item.raw)">
                mdi-delete
              </v-icon>
            </v-btn>

          </template>
        </v-data-table>
      </v-col>
    </v-row>
  

    <Register :modelValue="modalOpen" @update:modelValue="modalOpen = $event" />
  </template>
    
    <script setup>
  import { ref, computed, onMounted } from "vue"
  import { useStore } from "vuex"
  import { useRouter, useRoute } from "vue-router"
  import Register from "./Register.vue"
  
  const headers = [
    {
      title: "Actividad",
      align: "start",
      sortable: false,
      value: "name_labour",
    },
    {
      title: "Horas de trabajo",
      sortable: false,
      value: "working_hours_labour",
    },
    {
      title: "Costo de trabajo",
      sortable: false,
      value: "cost_labour",
    },
    {
      title: "Acciones",
      align: "center",
      key: "actions",
      sortable: false,
    },
  ]

  const router = useRouter()
  const route = useRoute()
  
  const store = useStore()
  
  const modalOpen = ref(false)
  const search = ref("")

  onMounted(async () => {
    await store.dispatch("labour/list",route.params.id_process)
  })
  
  const labour = computed(() =>
    Array.isArray(store.getters["labour/labour"])
      ? store.getters["labour/labour"]
      : []
  )
  
  const openModal = () => {
    modalOpen.value = !modalOpen.value
  };
  
  
  </script>
    