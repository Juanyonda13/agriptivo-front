<template>
    <v-dialog v-model='dialog' max-width='500px'>
      <v-card :loading='loadingForm'>
        <v-card-title class="text-center">
          <span class='text-h5'>Quieres generar el reporte?</span>
        </v-card-title>

        <v-card-actions class="flex justify-center">
          <v-btn color='blue darken-1' variant='text' @click='cancel'
            >Cancelar</v-btn
          >
          <v-btn color='blue darken-1' variant='text' @click='submitForm'
            >Generar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <AlertContainer ref='alertContainer' />
  </template>
  
  <script setup>
  import AlertContainer from '../../components/Alerts/AlertContainer.vue'
  import { useStore } from 'vuex'
  import { ref, watch,  defineProps, defineEmits } from 'vue'
  import { useRoute } from 'vue-router'
  
  const store = useStore()
  
  // Data
  const prop = defineProps(['modalValueReport','idProcess'])
  const emit = defineEmits(['modalValueReport'])
  const dialog = ref(prop.modalValueReport)
  
  //FORM
  const validForm = ref(false)
  const loadingForm = ref(false)

  const form=ref(false)
  const alertContainer=ref(null)
  const showAlert= ref(false)
  const errorMessage=ref(null)


  //Route
  const route=useRoute()
  

  async function submitForm() {
    loadingForm.value = true
    validForm.value = false
      
      try {
        await store.dispatch('report/list',prop.idProcess)
        await store.dispatch('process/list',route.params.id_cultive)
        alertContainer.value.addAlert({
          id: 1,
          type: 'success',
          message: "Reporte creado exitosamente",
        })
  
        loadingForm.value = false
        cancel()
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

  }
  
  function cancel() {
    emit('update:modalValueReport',false) 
  }
  watch(
    () => prop.modalValueReport,
    (newValue) => {
      dialog.value = newValue
    }
  )
  
  </script>
  