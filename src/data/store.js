import axiosInstance from '../api/axiosInstances';
import axios from 'axios';

// MODULOS
import auth from './modules/auth';
import finca from './modules/finca';
import municipality from './modules/municipality';
import cultive from './modules/cultive';
import subCategory from './modules/subCategory';
export default function storeConfig(apiUrl) {

  axiosInstance.defaults.baseURL = apiUrl; 
  axios.defaults.baseURL = apiUrl; 
  // Configuración de tu store
  const store = {
    modules: {
      // Módulos de tu aplicación
      auth,
      finca,
      municipality,
      cultive,
      subCategory,
    }
  };

  return store;
}