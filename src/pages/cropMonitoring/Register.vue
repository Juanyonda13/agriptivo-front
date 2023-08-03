<template>
    <v-dialog v-model="dialog" max-width="500px">
      <AlertContainer ref="alertContainer" />
  
      <v-card :loading="loadingForm">
        <v-card-title>
          <span class="text-h5">Registra tu Seguimiento</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="validForm">
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="promedio_medicion"
                    label="Promedio de medicion*"
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
                  <v-text-field
                    v-model="pspromedio_medicion"
                    label="Ps promedio de mediocion*"
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
                    label="Unidad de medida*"
                    clearable
                    item-title="name_munit"
                    item-value="id_munit"
                    :items="munit"
                    variant="outlined"
                    v-model="fk_wunit_id"
                    :rules="selectRules"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="talla_medicion"
                    label="Talla de medicion*"
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
                    label="Medida de peso*"
                    clearable
                    item-title="name_wunit"
                    item-value="id_wunit"
                    :items="wunit"
                    variant="outlined"
                    v-model="fk_munit_id"
                    :rules="selectRules"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="desecho"
                    label="Numero de desechos*"
                    :rules="capacidadRules"
                    maxlength="50"
                    counter
                    variant="outlined"
                    type="numer"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="observacion_medicion"
                    label="Observacion de medicion*"
                    :rules="capacidadRules"
                    maxlength="50"
                    counter
                    variant="outlined"
                    type="string"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="img_medicion"
                    label="Imagenes de medicion*"
                    :rules="capacidadRules"
                    maxlength="50"
                    counter
                    variant="outlined"
                    type="file"
                  ></v-text-field>
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
  //IMPORTS
  import AlertContainer from "../../components/Alerts/AlertContainer.vue";
  import { useStore } from "vuex";
  import { ref, watch, onMounted, defineProps, defineEmits,computed } from "vue";
  import {  useRoute } from "vue-router";
  
  
  // DATA
  const route=useRoute()
  const store = useStore();
  const prop = defineProps(["modelValue"]);
  const emit = defineEmits(["modelValue"]);
  const dialog = ref(prop.modelValue);
  const promedio_medicion = ref(null);
  const pspromedio_medicion = ref(null);
  const fk_wunit_id = ref(null);
  const talla_medicion = ref(null);
  const fk_munit_id=ref(null);
  const observacion_medicion=ref(null);
  const fk_cultive_id=ref(null);
  const img_medicion=ref([]);
  const desecho=ref(null);
  //FORM Y ALERT
  const validForm = ref(false);
  const loadingForm = ref(false);
  const form=ref(false);

  const alertContainer=ref(null);
  const showAlert= ref(false);
  const errorMessage=ref(null);
  
  // RULES
  const cultiveRules = ref([
    (value) => !!value || "Requerido.",
    (value) => (value || "").length >= 3 || "Mínimo 3 letras",
    (value) => (value || "").length <= 50 || "Máximo 50 letras",
  ]);
  const selectRules = ref([
    (value) => !!value || "Requerido.",
  ]);
  
  // MOUNTED
  onMounted(()=>  { store.dispatch("Munit/list")});
  onMounted(()=>  { store.dispatch("Wunit/list")});


  // COMPUTED
  const munit =computed(() => store.getters["Munit/mUnities"] );
  const wunit = computed(() =>Array.isArray(store.getters["Wunit/wunits"]) ? store.getters["Wunit/wunits"] : []);
  console.log(wunit.value);
  
  
  // METHODS
  async function submitForm() {
    loadingForm.value = true;
    validForm.value = false;
  
    const { valid } = await form.value.validate();
  
    if (valid) {
      const credentials = new FormData();
      credentials.set("promedio_medicion",promedio_medicion.value)
      credentials.set("pspromedio_medicion",pspromedio_medicion.value)
      credentials.set("fk_wunit_id",fk_wunit_id.value)
      credentials.set("talla_medicion",talla_medicion.value)
      credentials.set("fk_munit_id",fk_munit_id.value)
      credentials.set("observacion_medicion",observacion_medicion.value)
      credentials.set("fk_cultive_id",fk_cultive_id.value)
      credentials.set("img_medicion",img_medicion.value)
      credentials.set("desecho",desecho.value)
      credentials.set("fk_cultive_id",route.params.id_cultive)

      // const credentials = {
      //   promedio_medicion:        promedio_medicion.value,
      //   pspromedio_medicion:      pspromedio_medicion.value,
      //   fk_wunit_id:              fk_wunit_id.value,
      //   talla_medicion:           talla_medicion.value,
      //   fk_munit_id:              fk_munit_id.value,
      //   observacion_medicion:     observacion_medicion.value,
      //   fk_cultive_id:            fk_cultive_id.value,
      //   img_medicion:             img_medicion.value,
      // };
  
      try {
        const response = await store.dispatch("cropMonitoring/register", credentials);
        await store.dispatch("cropMonitoring/list",route.params.id_cultive)
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


  //WHATCH
  watch(
    () => prop.modelValue,
    (newValue) => {
      dialog.value = newValue;
    }
  );
  </script>
  