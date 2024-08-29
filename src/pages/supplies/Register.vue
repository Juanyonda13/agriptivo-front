<template>
  <v-dialog v-model="dialog" max-width="500px">
    <AlertContainer ref="alertContainer" />

    <v-card :loading="loadingForm">
      <v-card-title>
        <span class="text-h5">{{ typeForm }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="validForm">
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field v-model="name_supplies" label="Nombre de suministro*" :rules="fincaRules" maxlength="50"
                  counter variant="outlined" type="text"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field v-model="amount_supplies" label="Cantidad*" :rules="fincaRules" maxlength="50" counter
                  variant="outlined" type="number"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete label="Unidad de medición*" clearable item-title="name_wunit" item-value="id_wunit"
                  :items="DataWunits" variant="outlined" v-model="fk_wunit_id"></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field v-model="price_supplies" label="Precio*" :rules="fincaRules" maxlength="50" counter
                  variant="outlined" type="number"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete label="Fincas*" clearable item-title="name_finca" item-value="id_finca"
                  :items="DataFincas" variant="outlined" v-model="fk_finca_id"></v-autocomplete>
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
import AlertContainer from "../../components/Alerts/AlertContainer.vue"
import { useStore } from "vuex"
import { ref, watch, onMounted, defineProps, defineEmits, computed } from "vue"
import { useRoute } from "vue-router";

const store = useStore();

// Data
const prop = defineProps(["modelValue", "type", "data"])
const emit = defineEmits(["modelValue"])
const dialog = ref(prop.modelValue); // Inicializamos el valor con la propiedad

const name_supplies = ref(null)
const amount_supplies = ref(null)
const fk_wunit_id = ref(null)
const price_supplies = ref(null)
const fk_finca_id = ref(null)

const validForm = ref(false)
const loadingForm = ref(false)
const form = ref(false)
const alertContainer = ref(null)
const showAlert = ref(false)
const errorMessage = ref(null)

// Rules
const fincaRules = ref([
  (value) => !!value || "Requerido.",
  (value) => (value || "").length >= 1 || "Mínimo 1 letras",
  (value) => (value || "").length <= 50 || "Máximo 50 letras",
]);

// Mounted
onMounted(() => { store.dispatch("finca/list") });
onMounted(() => { store.dispatch("Wunit/list") });

// Computed
const DataFincas = computed(() => store.getters["finca/fincas"]);
const DataWunits = computed(() => store.getters["Wunit/wunits"]);

const typeForm = computed(() => prop.type === 1
  ? "Registrar Suministro"
  : "Actualizar Suministro"
);
const route = useRoute()

// Methods
async function submitForm() {

  loadingForm.value = true;
  validForm.value = false;

  const { valid } = await form.value.validate();

  if (valid) {
    const credentials = {
      name_supplies: name_supplies.value,
      amount_supplies: amount_supplies.value,
      fk_wunit_id: fk_wunit_id.value,
      price_supplies: price_supplies.value,
      fk_finca_id: fk_finca_id.value
    };

    try {
      let response;
      if (prop.type === -1 && prop.data) {
        response = await store.dispatch("supply/update", { credentials, id: prop.data.value.id_supplies });
      } else {
        response = await store.dispatch("supply/register", credentials);
      }
      // const response = await store.dispatch("finca/register", credentials);
      await store.dispatch("supply/list",route.params.id_finca)
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
  emit("update:modelValue", false); // Emite el evento para actualizar el valor de la propiedad
}

//WHATCH
watch(
  () => prop.modelValue,
  (newValue) => {
    dialog.value = newValue;
  }
);
watch(
  () => prop.data,
  (newValue) => {
    if (prop.type === -1 && newValue) {
      name_supplies.value = newValue.value.name_supplies;
      amount_supplies.value = newValue.value.amount_supplies;
      fk_wunit_id.value = newValue.value.fk_wunit_id;
      price_supplies.value = newValue.value.price_supplies;
      fk_finca_id.value = newValue.value.fk_finca_id;
    }
  }
);

</script>
