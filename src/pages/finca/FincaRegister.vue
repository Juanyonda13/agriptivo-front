<template>
  <v-container fluid>
    <AlertContainer ref="alertContainer" />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" class="fill-height">
        <v-card :loading="loadingForm">
          <v-card-title class="text-center">
            <h2>Crear Finca</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="form">
              <v-text-field
                v-model="name_finca"
                label="Nombre de tu finca"
                :rules="fincaRules"
                prepend-icon="mdi-account"
                maxlength="50"
                counter
                type="text"
              ></v-text-field>
              <v-btn color="primary" block @click="submitForm">Registrar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
    
  <script>
import AlertContainer from "../../components/Alerts/AlertContainer.vue";
export default {
  components: {
    AlertContainer,
  },
  data() {
    return {
      name_finca: null,
      fincaRules: [
        (value) => !!value || "Requerido.",
        (value) => (value || "").length >= 3 || "Min 3 letras",
        (value) => (value || "").length <= 50 || "Max 50 letras",
      ],
    };
  },

  mounted() {
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
  },
};
</script>
    