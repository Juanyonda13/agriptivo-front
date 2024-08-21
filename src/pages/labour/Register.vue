<template>
    <v-dialog v-model='dialog' max-width='500px'>
      <AlertContainer ref='alertContainer' />
  
  
      <v-card :loading='loadingForm'>
        <v-card-title>
          <span class='text-h5'>Registrar tu Actividad</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref='form' v-model='validForm'>
              <v-row>
                <v-col cols='12' sm='6' md='12'>
                  <v-text-field
                    v-model='name_labour'
                    label='Nombre de tu Actividad*'
                    :rules='processRules'
                    maxlength='50'
                    counter
                    variant='outlined'
                    type='text'
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols='12' sm='6' md='12'>
                  <v-textarea label="descripcion"
                    v-model='description'
                    :rules='descriptionRules'
                    maxlength='50'
                    counter
                    variant='outlined'
                    type='text'
                  >
                  </v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols='12' sm='6' md='12'>
                    <v-text-field
                            v-model='cost_labour'
                            label='Costo*'
                            :rules='processRules'
                            counter
                            variant='outlined'
                            type='number'
                    ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols='12' sm='6' md='12'>
                    <v-text-field
                            v-model='working_hours_labour'
                            label='Horas de trabajo*'
                            :rules='processRules'
                            counter
                            variant='outlined'
                            type='number'
                    ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-autocomplete
                  label="Trabajadores*"
                  clearable
                  item-title="name_user"
                  item-value="id_user"
                  :items="jornareros"
                  variant="outlined"
                  v-model="id_user"
                ></v-autocomplete>
              </v-col>
            </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color='blue darken-1' variant='text' @click='cancel'
            >Cancelar</v-btn
          >
          <v-btn color='blue darken-1' variant='text' @click='submitForm'
            >Guardar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import AlertContainer from '../../components/Alerts/AlertContainer.vue'
  import { useStore } from 'vuex'
  import { ref, watch, onMounted, defineProps, defineEmits,computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const store = useStore()
  
  // Data
  const prop = defineProps(['modelValue'])
  const emit = defineEmits(['modelValue'])
  const dialog = ref(prop.modelValue)
  
  //FORM
  const name_labour = ref(null)
  const description = ref(null)
  const validForm = ref(false)
  const loadingForm = ref(false)
  const id_user=ref(null)
  const cost_labour=ref(null)
  const working_hours_labour=ref(null)

  const form=ref(false)
  const alertContainer=ref(null)
  const showAlert= ref(false)
  const errorMessage=ref(null)
  
  // Rules
  const processRules = ref([
    (value) => !!value || 'Requerido.',
    (value) => (value || '').length >= 3 || 'Mínimo 3 letras',
    (value) => (value || '').length <= 50 || 'Máximo 50 letras',
  ])
  const descriptionRules = ref([
    (value) => (value || '').length >= 3  || 'Mínimo 3 letras',
    (value) => (value || '').length <= 500 || 'Máximo 500 letras',
  ])
  //Route
  const route=useRoute()
  
  // Mounted
  onMounted(()=>  { store.dispatch('role/listJornareros',3)})
  

  const jornareros =computed(() => store.getters["role/jornareros"] )

  async function submitForm() {
    loadingForm.value = true
    validForm.value = false
  
    const { valid } = await form.value.validate()
  
    if (valid) {
      const credentials = {
        name_labour: name_labour.value,
        description: description.value,
        id_user:id_user.value,
        cost_labour:cost_labour.value,
        working_hours_labour:working_hours_labour.value,
        fk_process_id:route.params.id_process,
      }
      
      try {
        const response = await store.dispatch('labour/register', credentials)
        await store.dispatch('labour/list',route.params.id_process)
        alertContainer.value.addAlert({
          id: 1,
          type: 'success',
          message: response,
        })
  
        loadingForm.value = false
        close()
      } catch (error) {
        showAlert.value = true
        errorMessage.value = error.message
  
        if (error && typeof error === 'object') {
          const { code, message } = error
          const typeMessage = code === 409 ? 'warning' : 'error'
  
          alertContainer.value.addAlert({
            id: 1,
            type: typeMessage,
            message: message,
          })
        } else {
          alertContainer.value.addAlert({
            id: 1,
            type: 'error',
            message: error,
          })
        }
  
        loadingForm.value = false
      }
    } else {
      loadingForm.value = false
    }
  }
  
  function cancel() {
    emit('update:modelValue',false) 
  }
  watch(
    () => prop.modelValue,
    (newValue) => {
      dialog.value = newValue
    }
  )
  
  </script>
  