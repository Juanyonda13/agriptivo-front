<template>
  <v-dialog v-model="dialog" max-width="500px">
    <AlertContainer ref="alertContainer" />


    <v-card :loading="loadingForm">
      <v-card-title>
        <span class="text-h5">Registrar suminstro a utilizar</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="validForm">
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete label="Fincas*" clearable item-title="name_finca" item-value="id_finca"
                  :items="dataFincas" variant="outlined" v-model="id_finca"></v-autocomplete>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete label="Cultivos*" clearable item-title="name_cultive" item-value="id_cultive"
                  :items="dataCultives" variant="outlined" v-model="fk_cultive_id"></v-autocomplete>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete label="Procesos*" clearable item-title="name_process" item-value="id_process"
                  :items="dataProcess" variant="outlined" v-model="fk_process_id"></v-autocomplete>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field v-model="amount_outsupplies" label="Cantidad*" :rules="capacidadRules" maxlength="50"
                  counter variant="outlined" type="number"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete label="Unidad de peso*" clearable item-title="name_wunit" item-value="id_wunit"
                  :items="dataWunits" variant="outlined" v-model="fk_wunit_id" :rules="selectRules"></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete label="Suministro*" clearable item-title="name_supplies" item-value="id_supplies"
                  :items="dataSupplies" variant="outlined" v-model="fk_supplies_id"></v-autocomplete>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" variant="text" @click="cancel">Cancelar</v-btn>
        <v-btn color="blue darken-1" variant="text" @click="submitForm">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import AlertContainer from "../../components/Alerts/AlertContainer.vue";
import { useStore } from "vuex";
import { ref, watch, onMounted, defineProps, defineEmits, computed } from "vue";
import { useRoute } from "vue-router";

const store = useStore();

// Data
const prop = defineProps(["modelValue"]);
const emit = defineEmits(["modelValue"]);
const dialog = ref(prop.modelValue);

//FORM
const id_finca = ref(null);
const dataCultives = ref([null]);
const fk_cultive_id = ref(null);
const dataProcess = ref([null]);
const fk_process_id = ref(null);
const amount_outsupplies = ref(null);
const fk_wunit_id = ref(null);
const fk_supplies_id = ref(null);

const validForm = ref(false);
const loadingForm = ref(false);

const form = ref(false);
const alertContainer = ref(null);
const showAlert = ref(false);
const errorMessage = ref(null);

// Rules
const outsuppliesRules = ref([
  (value) => !!value || "Requerido.",
  (value) => (value || "").length >= 3 || "Mínimo 3 letras",
  (value) => (value || "").length <= 50 || "Máximo 50 letras",
]);
const selectRules = ref([
  (value) => !!value || "Requerido.",
])

//Route
const route = useRoute()

// Mounted
onMounted(() => {
  store.dispatch("finca/list"),
    store.dispatch("supply/list"),
    store.dispatch("Wunit/list")
})

// Computed
const dataFincas = computed(() => store.getters["finca/fincas"])
const dataSupplies = computed(() => store.getters["supply/supplies"])
const dataWunits = computed(() => store.getters["Wunit/wunits"]);


// Methods
async function submitForm() {
  loadingForm.value = true;
  validForm.value = false;

  const { valid } = await form.value.validate();

  if (valid) {
    const credentials = {
      fk_process_id: fk_process_id.value,
      amount_outsupplies: amount_outsupplies.value,
      fk_wunit_id: fk_wunit_id.value,
      fk_supplies_id: fk_supplies_id.value,
    };

    console.log("data a enviar", credentials)

    try {
      let response;
      if (prop.type === -1 && prop.data) {
        response = await store.dispatch("outsupply/update", { credentials, id: prop.data.value.id_outsupplies });
      } else {
        response = await store.dispatch("outsupply/register", credentials);
      }
      await store.dispatch("outsupplies/list")
      alertContainer.value.addAlert({
        id: 1,
        type: "success",
        message: response,
      });

      loadingForm.value = false;
      close();
    } catch (error) {
      showAlert.value = true;
      errorMessage.value = error.message;

      if (error && typeof error === "object") {
        const { code, message } = error;
        const typeMessage = code === 409 ? "warning" : "error";

        alertContainer.value.addAlert({
          id: 1,
          type: typeMessage,
          message: message,
        });
      } else {
        alertContainer.value.addAlert({
          id: 1,
          type: "error",
          message: error,
        });
      }

      loadingForm.value = false;
    }
  } else {
    loadingForm.value = false;
  }
}

function cancel() {
  emit("update:modelValue", false);
}
watch(
  () => prop.modelValue,
  (newValue) => {
    dialog.value = newValue;
  }
)
// CULTIVES
watch(
  () => id_finca.value,
  async (newFincaId) => {
    if (newFincaId) {
      try {
        await store.dispatch("cultive/list", newFincaId);
        dataCultives.value = store.getters['cultive/cultives'];
      } catch (error) {
        console.error("Error fetching cultives:", error);
      }
    } else {
      dataCultives.value = [];
    }
  }
)
// PROCESS
watch(
  () => fk_cultive_id.value,
  async (newCultiveId) => {
    if (newCultiveId) {
      try {
        await store.dispatch("process/list", newCultiveId);
        dataProcess.value = store.getters['process/process'];
        console.log("DATA", dataProcess.value)
      } catch (error) {
        console.error("Error fetching process:", error);
      }
    } else {
      dataProcess.value = [];
    }
  }
)
</script>
