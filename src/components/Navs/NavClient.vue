<template>
    <v-app>
      <v-navigation-drawer v-model="drawer" app hide-overlay link class="d-lg-none">
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index" >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app >
        <v-app-bar-nav-icon @click="drawer = !drawer"  class="d-lg-none"></v-app-bar-nav-icon>
        <v-toolbar-title>Menú</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-for="(item, index) in menuItems" :key="index" link class="hidden-sm-and-down">
          <v-btn text>{{ item.title }}</v-btn>
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
          { title: 'Finca', icon: 'mdi-home' },
          { title: 'Acerca de', icon: 'mdi-information' },
          { title: 'Servicios', icon: 'mdi-cogs' },
          { title: 'Contacto', icon: 'mdi-email' }
        ]
      };
    }
  };
  </script>
  