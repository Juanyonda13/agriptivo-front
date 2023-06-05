import auth from './modules/auth';
import axios from 'axios';

export default function storeConfig(apiUrl) {
  axios.defaults.baseURL =apiUrl
  // Configuración de tu store
  const store = {
    modules: {
      // Módulos de tu aplicación
      auth
    }
  };

  return store;
}