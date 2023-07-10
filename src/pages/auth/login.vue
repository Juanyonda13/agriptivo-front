<template>
  <v-container fluid>
    <AlertContainer ref="alertContainer" />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" class="fill-height">
        <v-card :loading="loadingForm">
          <v-card-title class="text-center">
            <h2>Iniciar sesión</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="form">
              <v-text-field
                v-model="cedula_user"
                label="Numero de identificacion"
                prepend-icon="mdi-account"
                :rules="cedulaRules"
                type="number"
                maxlength="10"
                counter
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Contraseña"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                maxlength="50"
                counter
              ></v-text-field>
              <v-checkbox
                v-model="checked"
                label="Recordarme el usuario"
              ></v-checkbox>
              <v-btn color="primary" block @click="submitForm">Ingresar</v-btn>
              <a href="/register" class="m-1">no tienes cuenta? registrate</a>
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
      cedula_user: "",
      password: "",
      form: true,
      loadingForm: false,
      checked: false,
      cedulaRules: [
        (value) => !!value || "Requerido.",
        (value) => (value || "").length <= 10 || "Max 10 numeros",
        (value) => (value || "").length >= 6 || "Min 6 numeros",
      ],
      passwordRules: [
        (value) => !!value || "Requerido.",
        (value) => (value || "").length >= 8 || "Min 8 letras",
        (value) => (value || "").length <= 50 || "Max 50 letras",
      ],
    };
  },
  methods: {
    async submitForm() {
      this.loadingForm = true;
      const { valid } = await this.$refs.form.validate();
      // VALIDACION DEL FOLMULARIO
      if (valid) {
      //CREAR UN OBJETO PARA ENVIAR  
        const credentials = {
          cedula_user: this.cedula_user,
          password: this.password,
          checked: this.checked,
        };

        try {
            // CARGAR LA ACCION DE LOGIN
            const response = await this.$store.dispatch(
              "auth/login",
              credentials
            );
            // CARGAR LA ALERTA
            this.$refs.alertContainer.addAlert({
              id: 1,
              type: "success",
              message: response,
            });

            this.loadingForm = false;
            this.$router.push("/");
        } catch (error) {
          // CARGAR LA ALERTE DE ERROR
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
  