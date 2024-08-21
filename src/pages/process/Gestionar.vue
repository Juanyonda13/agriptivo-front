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
      <v-col cols="9">
        <v-data-table
          :headers="headers"
          :items="process"
          class="elevation-3"
          :search="search"
          :items-per-page="5"
          height="400"
        >
          <!-- Contenido adicional del v-data-table -->
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Gestionar procesos</v-toolbar-title>
  
              <v-btn color="primary" dark class="mb-2" @click="openModal">
                + Nuevo procesos
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
            <v-btn variant="text">
              <v-tooltip top
                activator="parent"
                location="top"
              >
                Actividades
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    size="large"
                    class="me-2"
                    @click="labour(item.raw.id_process)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-monitor-edit
                  </v-icon>
                </template>
            </v-tooltip>
            </v-btn>
            <v-btn variant="text">
              <v-tooltip top
                activator="parent"
                location="top"
              >
                Cif
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    size="large"
                    class="me-2"
                    @click="cif(item.raw.id_process)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-monitor-edit
                  </v-icon>
                </template>
            </v-tooltip>
            </v-btn>
            <v-btn variant="text">
              <v-tooltip top
                activator="parent"
                location="top"
              >
                Sumninistros salida
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    size="large"
                    class="me-2"
                    @click="output(item.raw.id_process)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-monitor-edit
                  </v-icon>
                </template>
            </v-tooltip>
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
      title: "Proceso",
      align: "start",
      sortable: false,
      value: "name_process",
    },
    {
      title: "Estado del proceso",
      sortable: false,
      value: "state_process",
    },
    {
      title: "Fecha de creación",
      sortable: false,
      value: "created_at",
    },
    {
      title: "Acciones",
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
    await store.dispatch("process/list",route.params.id_cultive)
  })
  
  const process = computed(() =>
    Array.isArray(store.getters["process/process"])
      ? store.getters["process/process"]
      : []
  );
  const openModal = () => {
    modalOpen.value = !modalOpen.value
  };
  
  const labour=(id)=>{
    router.push(
    {
      name:'labour',
      params:{id_process:id}
    }
   )
  }
  const cif=(id)=>{
    router.push(
    {
      name:'cif',
      params:{id_process:id}
    }
   )
  }
  const output=(id)=>{
    router.push(
    {
      name:'salida_suministro_gestionar',
      params:{id_process:id}
    }
   )
  }
  </script>
    