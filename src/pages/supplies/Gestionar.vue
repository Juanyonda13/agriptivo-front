<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-text-field outlined dense append-icon="mdi-magnify" hide-details v-model="search"></v-text-field>
    </v-col>
  </v-row>

  <v-row justify="center">
    <v-col cols="6">
      <v-data-table :headers="headers" :items="filteredSupplies" class="elevation-3" :search="search"
        :items-per-page="5" height="400">
        <!-- Contenido adicional del v-data-table -->
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Gestionar Suministros</v-toolbar-title>

            <v-btn color="primary" dark class="mb-2" @click="openModal(1)">
              + Nuevo suministro
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon size="small" class="me-2" @click="openModal(-1, item)">
            mdi-pencil
          </v-icon>
          <v-icon size="small" @click="deleteItem(item.raw)">
            mdi-delete
          </v-icon>
          <!-- <v-icon size="small" @click="cultive(item.raw.id_finca)">
            mdi-monitor-edit
          </v-icon> -->
        </template>
      </v-data-table>
    </v-col>
  </v-row>

  <!-- Modal de registro -->
  <Register :modelValue="modalOpen" @update:modelValue="modalOpen = $event" :type="typeModal"
    @update:type="typeModal = $event" :data="dataModal" @update:data="dataModal = $event" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Register from "./Register.vue";
// import { useRouter, useRoute } from "vue-router"

const headers = [
  {
    title: "Mis suministros",
    align: "start",
    sortable: false,
    // value: "name_supplies",
    value: "combined",
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
const dataModal = ref({});
const typeModal = ref(1);

onMounted(async () => {
  await store.dispatch("supply/list");
});

const supplies = computed(() =>
  Array.isArray(store.getters["supply/supplies"]) ? store.getters["supply/supplies"] : []
);

const combinedSupplies = computed(() =>
  supplies.value.map(supply => ({
    ...supply,
    combined: `${supply.name_supplies} - ${supply.amount_supplies} ${supply.WUnitModel.name_wunit}`
  }))
);

const filteredSupplies = computed(() =>
  combinedSupplies.value.filter((supply) => supply.combined.toLowerCase().includes(search.value.toLowerCase()))
);


const openModal = (type, item = null) => {
  modalOpen.value = true
  typeModal.value = type
  if (type === -1 && item) {
    // Si el tipo es -1 (editar) y se proporciona un ítem, se establece el valor del ítem en dataModal.
    dataModal.value = { ...item };
  } else {
    // Si el tipo no es -1 o no se proporciona un ítem, se crea un nuevo objeto en dataModal.
    dataModal.value = {};
  }
};


const deleteItem = (item) => {
  // Implementa la lógica para eliminar el ítem aquí
};

const components = { Register }

</script>
