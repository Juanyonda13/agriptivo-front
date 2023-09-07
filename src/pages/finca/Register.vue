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
                <v-text-field
                  v-model="name_finca"
                  label="Nombre de tu finca*"
                  :rules="fincaRules"
                  maxlength="50"
                  counter
                  variant="outlined"
                  type="text"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete
                  label="Departamentos*"
                  clearable
                  item-title="name_department"
                  item-value="id_department"
                  :items="departamenties"
                  variant="outlined"
                  v-model="id_department"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete
                  label="Municipios*"
                  clearable
                  item-title="name_municipality"
                  item-value="id_municipality"
                  :items="municipalities || []"
                  variant="outlined"
                  v-model="fk_municipality_id"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete
                  label="Veredas*"
                  clearable
                  item-title="name_vereda"
                  item-value="id_municipality"
                  :items=" veredas || []"
                  variant="outlined"
                  v-model="fk_verda_id"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" variant="text" @click="cancel"
          >Cancelar</v-btn
        >
        <v-btn color="blue darken-1" variant="text" @click="submitForm"
          >Guardar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import AlertContainer from "../../components/Alerts/AlertContainer.vue"
import { useStore } from "vuex"
import { ref, watch, onMounted, defineProps, defineEmits,computed } from "vue"

const store = useStore();

// Data
const prop =          defineProps(["modelValue","type","data"])
const emit =          defineEmits(["modelValue"])
const dialog =        ref(prop.modelValue); // Inicializamos el valor con la propiedad
const name_finca =    ref(null)
const fk_verda_id =   ref(null)
const id_department=  ref(null)
const municipalities= ref([null])
const fk_municipality_id= ref(null) 
const veredas=         ref([null])
const validForm =     ref(false)
const loadingForm =   ref(false)
const form=           ref(false)
const alertContainer= ref(null)
const showAlert=      ref(false)
const errorMessage=   ref(null)

// Rules
const fincaRules = ref([
  (value) => !!value || "Requerido.",
  (value) => (value || "").length >= 3 || "Mínimo 3 letras",
  (value) => (value || "").length <= 50 || "Máximo 50 letras",
]);

// Mounted
onMounted(() => { store.dispatch("municipality/list") });
onMounted(() => { store.dispatch("departament/list") });

// Computed
const departamenties =computed(() => store.getters["departament/departamens"] );

const typeForm=computed(() => prop.type=== 1
        ? "Registrar Finca"
        : "Actualizar Finca"  
        );


// Methods
async function submitForm() {

  loadingForm.value = true;
  validForm.value = false;

  const { valid } = await form.value.validate();

  if (valid) {
    const credentials = {
      name_finca: name_finca.value,
      fk_vereda_id: fk_verda_id.value
    };

    try {
      let response;
      if (prop.type === -1 && prop.data) {
        response = await store.dispatch("finca/update",{ credentials, id:prop.data.value.id_finca} );
      } else {
        response = await store.dispatch("finca/register", credentials);
      }
      // const response = await store.dispatch("finca/register", credentials);
      await store.dispatch("finca/list")
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
  emit("update:modelValue",false); // Emite el evento para actualizar el valor de la propiedad

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
      name_finca.value = newValue.value.name_finca;
      fk_verda_id.value = newValue.value.fk_vereda_id;
    }
  }
);
watch(
  () => id_department.value,
  async (newDepartmentId) => {
    if (newDepartmentId) {
      try {
        await store.dispatch("municipality/departamentShow", newDepartmentId);
        municipalities.value = store.getters['municipality/municipalities'];
        console.log(store.getters['municipality/municipalities']);
      } catch (error) {
        console.error("Error fetching municipalities:", error);
      }
    } else {
      municipalities.value = [];
    }
  }
)
watch(
  () => fk_municipality_id.value,
  async (newVeredatId) => {
    if (newVeredatId) {
      try {
        await store.dispatch("vereda/list", newVeredatId);
        veredas.value = store.getters['vereda/veredas'];
      } catch (error) {
        console.error("Error fetching municipalities:", error);
      }
    } else {
      // If no department is selected, reset the municipalities array
      veredas.value = [];
    }
  }
)



</script>
