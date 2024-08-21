import axiosInstance from "../api/axiosInstances";
import axios from "axios";

// MODULOS
import auth from "./modules/auth";
import finca from "./modules/finca";
import municipality from "./modules/municipality";
import departament from "./modules/departament";
import vereda from "./modules/vereda";
import cultive from "./modules/cultive";
import subCategory from "./modules/subCategory";
import cropMonitoring from "./modules/cropMonitoring";
import Wunit from "./modules/WUnit";
import Munit from "./modules/MUnit";
import system from "./modules/system";
import category from "./modules/category";
// PRODUCCION
import supply from "./modules/supply";
import outsupply from "./modules/outsupply";
import process from "./modules/process";

export default function storeConfig(apiUrl) {
  axiosInstance.defaults.baseURL = apiUrl;
  axios.defaults.baseURL = apiUrl;

  const store = {
    modules: {
      auth,
      finca,
      municipality,
      cultive,
      subCategory,
      cropMonitoring,
      Wunit,
      Munit,
      departament,
      vereda,
      system,
      category,
      process,
      supply,
      outsupply,
    },
  };

  return store;
}
