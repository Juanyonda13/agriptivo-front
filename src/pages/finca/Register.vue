<template>
  <v-dialog
    v-bind:value="value"
    max-width="500px"
    @input="$emit('update:value', $event)"
  >
  <AlertContainer ref="alertContainer" />

    <template v-slot:activator="{ props }">
      <slot name="activator" :props="props"></slot>
    </template>
    <v-card :loading="loadingForm">
      <!-- Contenido del diálogo para agregar una nueva finca -->
      <v-card-title>
        <span class="text-h5">Registrar tu finca</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="form">
            <!-- Campos del formulario para la nueva finca -->
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  v-model="name_finca"
                  label="Nombre de tu finca"
                  :rules="fincaRules"
                  prepend-icon="mdi-account"
                  maxlength="50"
                  counter
                  type="text"
                ></v-text-field>
              </v-col>
              <!-- Otros campos del formulario -->
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
  
<script>
import AlertContainer from "../../components/Alerts/AlertContainer.vue";
export default {
   components: {
    AlertContainer,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      name_finca: null,      
      fincaRules: [
        (value) => !!value || "Requerido.",
        (value) => (value || "").length >= 3 || "Min 3 letras",
        (value) => (value || "").length <= 50 || "Max 50 letras",
      ],
      loadingForm: false,
    };
  },
  mounted(){
    this.$store.dispatch("auth/userInfo");
  },
  computed: {
    user() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    async submitForm() {
      this.loadingForm = true;
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        const credentials = {
          name_finca: this.name_finca,
          fk_user_id: this.user._id,
        };

        try {
          const response = await this.$store.dispatch(
            "finca/register",
            credentials
          );
          this.$refs.alertContainer.addAlert({
            id: 1,
            type: "success",
            message: response,
          });

          this.loadingForm = false;
          
        } catch (error) {

          this.showAlert = true;
          this.errorMessage = error.message;

          if (error && typeof error === "object") {
            const { code, message } = error;
            const typeMessage = code === 409 ? "warning" : "error";

            this.$refs.alertContainer.addAlert({
              id: 1,
              type: typeMessage,
              message: message,
            });

            this.loadingForm = false;
          } else {
            this.$refs.alertContainer.addAlert({
              id: 1,
              type: "error",
              message: error,
            });
            this.loadingForm = false;
          }
        }
      } else {
        this.loadingForm = false;
      }
    },
    cancel() {
      this.$emit("update:value", false);
    },
  },
};
</script>
  
  