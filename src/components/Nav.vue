<template>
    <v-card color="grey-lighten-4" flat rounded="0">
      <v-toolbar density="compact">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  
        <v-toolbar-title>
        <v-icon color="secondary">
          mdi-barley
        </v-icon>
          Acuaponia
        </v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon color="primary">
            <v-icon>mdi-account</v-icon>
        </v-btn>
       
            <v-btn variant="tonal" color="primary">
              Iniciar sesion
            </v-btn>
            <v-btn variant="flat" class="mx-2" color="primary">
              registrate
            </v-btn>
      </v-toolbar>
      <v-col cols="12" height="600px" >
        <router-view></router-view>
      </v-col>
    </v-card>
  </template>