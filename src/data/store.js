import axiosInstance from '../api/axiosInstances'
import axios from 'axios'

import auth from './modules/auth'
import finca from './modules/finca'

import municipality from './modules/municipality'
import departament from './modules/departament'
import vereda from './modules/vereda'



import cultive from './modules/cultive'
import subCategory from './modules/subCategory'
import cropMonitoring from './modules/cropMonitoring'
import Wunit from './modules/WUnit'
import Munit from './modules/MUnit'
import system from './modules/system'
import category from './modules/category'

import supply from './modules/supply'
import process from './modules/process'
import labour from './modules/labour'
import cif from './modules/cif'
import role from './modules/role'

export default function storeConfig(apiUrl) {

  axiosInstance.defaults.baseURL = apiUrl
  axios.defaults.baseURL = apiUrl

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
      labour,
      cif,
      role
    },
  }

  return store
}
