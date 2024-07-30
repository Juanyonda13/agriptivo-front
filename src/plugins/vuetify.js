// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

// CONFIGURACION DE IDIOMA
import { pl, es } from 'vuetify/locale'


// PERZONALICAZION DE COMPONENTES SI LLEGA SER NECESARIO
// import sv from './i18n/vuetify/sv'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#498470',
    'primary-darken-1': '#3700B3',
    secondary: '#2E975C',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },  
    components: {
      ...components,
      ...labsComponents,
    },
    locale: {
      locale: 'es',
      // fallback: 'sv',
      messages: { es, pl,  },
    },
  }
)
