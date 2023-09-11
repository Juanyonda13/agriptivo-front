import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import storeConfig from'./data/store'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import {routes} from './routes.js'
import es from 'vuetify/lib/locale/es'

loadFonts()

const apiUrl = import.meta.env.VITE_API_URL
const store = createStore(storeConfig(apiUrl))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)

app.use(vuetify)
app.config.globalProperties.$vuetify = { lang: {es} }
// app.config.globalProperties.$vuetify.lang.current = 'es'

app.use(store)
app.use(router)
app.mount('#app')
