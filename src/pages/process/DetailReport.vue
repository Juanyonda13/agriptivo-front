<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card :loading="loadingForm">
      <v-card-title class="text-center">
        <span class="text-h5">Reporte</span>
      </v-card-title>

      <v-card-text>
        <div v-if="loadingForm">Cargando datos del reporte...</div>

        <div v-else>
          <v-timeline align="start" density="compact" v-if="dataReport">
            <v-timeline-item v-for="(value, key) in formattedDataReport" :key="key" dot-color="primary">
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ key }}</strong>
                </div>
                <div>{{ value }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-card-text>

      <v-card-actions class="flex justify-center">
        <v-btn color="blue darken-1" variant="text" @click="cancel">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, watch, defineProps, defineEmits, computed } from 'vue';

const props = defineProps(['modalValueDetailReport', 'idProcess']);
const emit = defineEmits(['update:modalValueDetailReport']);
const dialog = ref(props.modalValueDetailReport);
const store = useStore();

const loadingForm = ref(false);
const dataReport = ref(null);

function cancel() {
  emit('update:modalValueDetailReport', false);
}

async function fetch(id) {
  loadingForm.value = true;
  try {
    await store.dispatch('report/list', id);
    const data = store.getters['report/report'];

    dataReport.value = {
      "Costos fijos": data.costos_fijos,
      "Punto de equilibrio": data.PE,
      "Mano de obra directa": data.mano_obra_directa,
      "Rentabilidad": data.rentabilidad,
      "Venta de punto de equilibrio": data.ventaPE
    };
  } catch (error) {
    console.error('Error al cargar el reporte:', error);
    dataReport.value = {};
  } finally {
    loadingForm.value = false;
  }
}

function formatNumber(value) {
  if (typeof value === 'number') {
    return value.toLocaleString()
  }
  return value;
}

const formattedDataReport = computed(() => {
  const formatted = {};
  for (const key in dataReport.value) {
    formatted[key] = formatNumber(dataReport.value[key]);
  }
  return formatted;
});

watch(
  () => props.modalValueDetailReport,
  async (newValue) => {
    dialog.value = newValue;
    if (newValue && props.idProcess) {
      await fetch(props.idProcess);
    }
  }
);

watch(
  () => props.idProcess,
  async (newValue) => {
    if (newValue && dialog.value) {
      await fetch(newValue);
    }
  }
);
</script>
