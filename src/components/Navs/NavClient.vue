<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app hide-overlay link class="d-lg-none">
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon class="d-lg-none"></v-app-bar-nav-icon>
      <v-toolbar-title @click="home">Agrictivo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="(item, index) in menuItems" :key="index" link class="hidden-sm-and-down">
        <v-btn text @click="item?.click">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content class="pt-12 mt-12">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          title: "Finca",
          icon: "mdi-home",
          click: this.finca,
        },
        {
          title: "Suministro",
          icon: "mdi-home",
          click: this.suministro,
        },
        {
          title: "Suministro de salida",
          icon: "mdi-home",
          click: this.salida_suministro,
        }
      ],
    };
  },
  mounted() {
    this.$store.dispatch("auth/userInfo");
  },
  methods: {
    finca() {
      this.$router.push("/finca_gestionar");
    },
    cultive() {
      this.$router.push("/cultive_gestionar");
    },
    home() {
      this.$router.push("/");
    },
    suministro() {
      this.$router.push("/suministro_gestionar");
    },
    salida_suministro() {
      this.$router.push("/salida_suministro_gestionar")
    }
  },
};
</script>