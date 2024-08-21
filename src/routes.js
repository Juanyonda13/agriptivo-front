// NAVS
import Admin from "./components/Navs/Admin.vue"
import Nav from "./components/Navs/Nav.vue"
import NavClient from "./components/Navs/NavClient.vue"

import IndiceService from './pages/IndiceService.vue'

import Login from "./pages/auth/login.vue"
import Register from "./pages/auth/register.vue"


import FincaGestionar from "./pages/finca/Gestionar.vue"

import CultiveGestionar from "./pages/cultive/Gestionar.vue"

import SuppliesGestionar from "./pages/supplies/Gestionar.vue"

import OutSupplies from "./pages/output_supplies/Gestionar.vue"


import cropMonitoring from "./pages/cropMonitoring/Gestionar.vue"

import Estadistic from "./pages/estadistic/estadistic.vue"

import Process from "./pages/process/Gestionar.vue"

import Labour from './pages/labour/Gestionar.vue'

import Cif from './pages/cif/Gestionar.vue'

export const routes = [
  { path: "/login", name: "login-auth", component: Login },
  { path: "/register", name: "register-auth", component: Register },
  {
    path: "/",
    component: Nav,
    children: [
      {
        path: "/",
        name: "index-services",
        component: IndiceService,
      },
    ],
  },
  {
    path: "/admin",
    component: Admin,
    children: [],
  },
  {
    path: "/ModuleFree",
    component: NavClient,
    children: [
      {
        path: "/finca_gestionar",
        name: "finca_gestionar",
        component: FincaGestionar,
      },
      {
        path: "/cultive_gestionar/:id_finca",
        name: "cultive_gestionar",
        component: CultiveGestionar,
      },
      {
        path: "/crop_monitoring_gesiotnar/:id_cultive",
        name: "crop_monitoring_gesiotnar",
        component: cropMonitoring,
      },
      {
        path: "/estadistic/:id_cultive",
        name: "estadistic",
        component: Estadistic,
      },
      // PRODUCCION
      {
        path: "/process/:id_cultive",
        name: "process",
        component: Process,
      },
      {
        path: "/suministro_gestionar",
        name: "suministro_gestionar",
        component: SuppliesGestionar,
      },
      {
        path: '/process/:id_cultive',
        name: 'process',
        component: Process,
      },
      {
        path: '/labour/:id_process',
        name: 'labour',
        component: Labour,
      },
      {
        path: '/cif/:id_process',
        name: 'cif',
        component: Cif,
      },
      {
        path: "/salida_suministro_gestionar",
        name: "salida_suministro_gestionar",
        component: OutSupplies,
      },
    ],
  },
];
