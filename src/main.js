import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from'./data/store'
import { createRouter, createWebHistory } from 'vue-router';

loadFonts()
const router = createRouter({
  history: createWebHistory(),
  routes: [] // Define tus rutas aquí
});
createApp(App)
  .use(vuetify)
  .use(store)
  .use(router)
  .mount('#app')
