import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import storeConfig from'./data/store'
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import {routes} from './routes.js'
loadFonts()


const apiUrl = import.meta.env.VITE_API_URL;
const store = createStore(storeConfig(apiUrl));

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(vuetify)
  .use(store)
  .use(router)
  .mount('#app')
