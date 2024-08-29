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
              + Nuevo cultivo
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
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                size="small"
                class="me-2"
                @click="crop_monitoring(item.raw.id_cultive)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-monitor-edit
              </v-icon>
            </template>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                size="small"
                class="me-2"
                @click="estadistic(item.raw.id_cultive)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-monitor
              </v-icon>
            </template>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                size="small"
                @click="process(item.raw.id_cultive)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-monitor
              </v-icon>
            </template>
          </v-tooltip>
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
import { useRouter, useRoute } from "vue-router"

const headers = [
  {
    title: "Mis cultivos",
    align: "start",
    sortable: false,
    value: "name_cultive",
  },
  {
    title: "Total del cultivo",
    sortable: false,
    value: "total_cultive",
  },
  {
    title: "Categoria del cultivo",
    sortable: false,
    value: "name_category",
  },
  {
    title: "Capacidad del cultivo",
    sortable: false,
    value: "capacidad_cultive",
  },
  {
    title: "Acciones",
    key: "actions",
    sortable: false,
  },
]

//router
const router = useRouter()
const route = useRoute()

const crop_monitoring = (id) => {
   router.push(
    {
      name:'crop_monitoring_gesiotnar',
      params:{id_cultive:id}
    }
   )
}

const estadistic=(id)=>{
  router.push({
    name:'estadistic',
    params:{id_cultive:id}
  })
}

const process =(id)=>{
  router.push({
    name:'process',
    params:{id_cultive:id}
  })
}
const store = useStore();

const modalOpen = ref(false);
const search = ref("");
onMounted(async () => {
  await store.dispatch("cultive/list",route.params.id_finca);
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
  