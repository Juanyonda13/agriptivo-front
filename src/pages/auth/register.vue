<template>
  <v-container fluid>
    <AlertContainer ref="alertContainer" />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" class="fill-height">
        <v-card :loading="loadingForm">
          <v-card-title class="text-center">
            <h2>Registro</h2>
          </v-card-title>
          <v-card-text>
            <v-form  ref="form"  v-model="form">
              <v-text-field
                v-model="cedula_user"
                :rules="cedulaRules"
                label="Numero de identificacion"
                prepend-icon="mdi-card-account-details"
                maxlength="10"
                counter
                type="number"
              ></v-text-field>
              <v-text-field
                v-model="name_user"
                label="Nombre de usuario"
                :rules="nameRules"
                prepend-icon="mdi-account"
                maxlength="50"
                counter
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="email_user"
                label="Correo electronico"
                :rules="emailRules"
                prepend-icon="mdi-email"
                maxlength="50"
                counter
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password_user"
                label="Contraseña"
                :rules="passwordRules"
                prepend-icon="mdi-lock"
                maxlength="50"
                counter
                type="password"
                required
              ></v-text-field>
              <v-text-field
                v-model="celular1"
                label="Celular"
                :rules="celulardRules"
                prepend-icon="mdi-phone"
                maxlength="10"
                counter
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-model="celular2"
                label="Celular 2"
                :rules="celulardRules"
                maxlength="10"
                lazy
                counter
                prepend-icon="mdi-phone"
                type="number"
                required
              ></v-text-field>
              <v-btn color="primary" block @click="submitForm">Ingresar</v-btn>
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
      cedula_user: null,
      name_user: null,
      email_user: null,
      password_user: null,
      celular1: null,
      celular2: null,
      typeMessage: "",
      form: true,
      valid: true,
      loadingForm: false,
      cedulaRules: [
        (value) => !!value || "Requerido.",
        (value) => (value || "").length <= 10 || "Max 10 numeros",
        (value) => (value || "").length >= 6 || "Min 6 numeros",
      ],
      nameRules:[
        (value) => !!value || "Requerido.",
        (value) => (value || "").length >= 8 || "Min 8 letras",
        (value) => (value || "").length <= 50 || "Max 50 letras",
      ],
      emailRules:[
        (value) => !!value || "Requerido.",
        (value) => (value || "").length <= 50 || "Max 50 letras",
        (value)=> {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Correo invalido.'
        }
      ],
      passwordRules:[
        (value) => !!value || "Requerido.",
        (value) => (value || "").length >= 8 || "Min 8 letras",
        (value) => (value || "").length <= 50 || "Max 50 letras",
      ],
      celulardRules:[
       (value) => !!value || "Requerido.",
        (value) => (value || "").length <= 10 || "Max 10 numeros",
        (value) => (value || "").length >= 10 || "Min 10 numeros",
      ],
    };
  },
  methods: {
    // async validate () {
    //     const { valid } = await this.$refs.form.validate()
    //     this.valid=valid
    // },
    async submitForm() {
      this.loadingForm = true;
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        const credentials = {
          cedula_user: this.cedula_user,
          name_user: this.name_user,
          email_user: this.email_user,
          password_user: this.password_user,
          celular1: this.celular1,
          celular2: this.celular2,
        };

        try {
          const response = await this.$store.dispatch(
            "auth/register",
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
            const typeMessage = code === 409 ?"error": "info";

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
  