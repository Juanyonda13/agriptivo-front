<template>
  <v-dialog v-model="dialog" max-width="500px">
    <AlertContainer ref="alertContainer" />


    <v-card :loading="loadingForm">
      <v-card-title>
        <span class="text-h5">Registrar tu Cultivo</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="validForm">
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  v-model="name_cultive"
                  label="Nombre de tu Cultivo*"
                  :rules="cultiveRules"
                  maxlength="50"
                  counter
                  variant="outlined"
                  type="text"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  v-model="capacidad_cultive"
                  label="Capacdad de tu cultivo*"
                  :rules="capacidadRules"
                  maxlength="50"
                  counter
                  variant="outlined"
                  type="number"
                  
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete
                  label="Sistemas*"
                  clearable
                  item-title="name_system"
                  item-value="id_system"
                  :items="systems"
                  variant="outlined"
                  v-model="fk_system_id"
                  :rules="selectRules"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete
                  label="Categorias*"
                  clearable
                  item-title="name_category"
                  item-value="id_category"
                  :items="categories"
                  variant="outlined"
                  v-model="fk_category_id"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete
                  label="Sub categoria*"
                  clearable
                  item-title="name_subcategory"
                  item-value="id_subcategory"
                  :items="subCategories"
                  variant="outlined"
                  v-model="fk_subcategory_id"
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
import AlertContainer from "../../components/Alerts/AlertContainer.vue";
import { useStore } from "vuex";
import { ref, watch, onMounted, defineProps, defineEmits,computed } from "vue";
import { useRoute } from "vue-router";

const store = useStore();

// Data
const prop = defineProps(["modelValue"]);
const emit = defineEmits(["modelValue"]);
const dialog = ref(prop.modelValue);

//FORM
const name_cultive = ref(null);
const capacidad_cultive = ref(null);
const fk_finca_id = ref(null);
const fk_subcategory_id = ref(null);
const validForm = ref(false);
const loadingForm = ref(false);
const categories= ref([null])
const fk_system_id=ref(null)
const fk_category_id=ref(null)
const subCategories=ref([null])

const form=ref(false);
const alertContainer=ref(null);
const showAlert= ref(false);
const errorMessage=ref(null);

// Rules
const cultiveRules = ref([
  (value) => !!value || "Requerido.",
  (value) => (value || "").length >= 3 || "Mínimo 3 letras",
  (value) => (value || "").length <= 50 || "Máximo 50 letras",
]);
const selectRules = ref([
  (value) => !!value || "Requerido.",
])

//Route
const route=useRoute()

// Mounted
onMounted(()=>  { store.dispatch("finca/list")       })
onMounted(() => { store.dispatch("system/list") })

// Computed
const fincas = computed(() =>Array.isArray(store.getters["finca/fincas"]) ? store.getters["finca/fincas"] : []);
const systems=computed(() => store.getters["system/systems"] );


// Methods
async function submitForm() {
  loadingForm.value = true;
  validForm.value = false;

  const { valid } = await form.value.validate();

  if (valid) {
    const credentials = {
      name_cultive: name_cultive.value,
      capacidad_cultive: capacidad_cultive.value,
      fk_finca_id:route.params.id_finca,
      fk_subcategory_id:fk_subcategory_id.value,
    };

    try {
      const response = await store.dispatch("cultive/register", credentials);
      await store.dispatch("cultive/list",route.params.id_finca)
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
  emit("update:modelValue",false); 
}
watch(
  () => prop.modelValue,
  (newValue) => {
    dialog.value = newValue;
  }
)
watch(
() => fk_system_id.value,
async (newvalue) => {
  if (newvalue) {
    try {
      await store.dispatch("category/list", newvalue);
      categories.value = store.getters['category/categories'];
      if( store.getters['category/categories'] === null) {
        categories.value = [null]
        fk_category_id.value = null
        fk_subcategory_id.value = null
      }
      console.log(categories.value );
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  } else {
    categories.value = [];
  }
}
)
watch(
() => fk_category_id.value,
async (newvalue) => {
  if (newvalue) {
    try {
      await store.dispatch("subCategory/list", newvalue)
      subCategories.value = store.getters['subCategory/subCategories']
      if(store.getters['subCategory/subCategories'] === null) {
        subCategories.value = [null]
        fk_subcategory_id.value = null
      }
      console.log(store.getters['subCategory/subCategories'])
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  } else {
    subCategories.value = []
  }
}
)

</script>
