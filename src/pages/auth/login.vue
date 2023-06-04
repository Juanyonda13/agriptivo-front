<template>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4" class="fill-height">
          <v-card>
            <v-card-title class="text-center">
              <h2>Iniciar sesión</h2>
            </v-card-title>
            <v-card-text>
              <v-form @submit="login">
                <v-text-field
                  v-model="identification"
                  label="Numero de identificacion"
                  prepend-icon="mdi-account"
                  type="number"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Contraseña"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary" block>Ingresar</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        identification: '',
        password: '',
      };
    },
    methods: {
       submitForm() {
      const credentials = {
        identification: this.identification,
        password: this.password
      };

      this.$store.dispatch('auth/login', credentials)
        .then(() => {
          // Redireccionar al usuario a la página después de iniciar sesión
          this.$router.push('/services');
        })
        .catch(error => {
          this.error = error.message;
        });
    }
    },
  };
  </script>
  