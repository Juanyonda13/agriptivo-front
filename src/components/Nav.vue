<template>
  <v-card color="grey-lighten-4" flat rounded="0">
    <section class="section-nav">
      <v-card rounded="0" class="d-flex pl-12">
        <v-img
          max-height="450"
          max-width="260"
          src="agrictivo3.png"
        ></v-img>
      </v-card>
      <v-toolbar density="compact" :elevation="8" class="pl-10">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <!-- <v-spacer></v-spacer> -->
        <v-btn value="recent">
          <v-icon color="primary">mdi-heart</v-icon>

          Quienes somos
        </v-btn>

        <v-btn value="favorites">
          <v-icon color="primary"> mdi-barley </v-icon>

          Agrictivo
        </v-btn>

        <v-btn value="nearby">
          <v-icon color="primary">mdi-map-marker</v-icon>

          Medicion de variable
        </v-btn>

        <v-btn value="nearby">
          <v-icon color="primary">mdi-map-marker</v-icon>

          Cooperativa
        </v-btn>

        <v-btn value="nearby">
          <v-icon color="primary">mdi-map-marker</v-icon>

          Servicios
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon color="primary">
          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn variant="tonal" color="primary" @click="login">
          Iniciar sesion
        </v-btn>
        <v-btn variant="flat" class="mx-2" color="primary" @click="register">
          registrate
        </v-btn>
      </v-toolbar>
    </section>
    <div class="p-0 col-12">
      <router-view></router-view>
    </div>
  </v-card>
</template>
<script>
// import { mapState } from 'vuex';
export default {
  data() {},
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
  },
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
    },
    //   ...mapState('data', {
    //   isLoggedIn: state => state
    // }),
  },
};
</script>
<style>
.section-nav {
  height: 14vh;
}
</style>