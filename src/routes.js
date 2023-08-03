
// NAVS
import Admin from './components/Navs/Admin.vue'
import Nav from './components/Navs/Nav.vue'
import NavClient from './components/Navs/NavClient.vue'

// PAGES
import IndiceService from './pages/IndiceService.vue'
import Login from './pages/auth/login.vue'
import Register from './pages/auth/register.vue'

//FINCAS
import FincaGestionar from './pages/finca/Gestionar.vue'
//CULTIVES
import CultiveGestionar from './pages/cultive/Gestionar.vue'

//CROP MONITORING
import cropMonitoring from './pages/cropMonitoring/Gestionar.vue'
export const routes = [

  {path:'/login',name:'login-auth',component:Login},
  {path:'/register',name:'register-auth',component:Register},
  {
    path: '/',
    component: Nav,
    children: [
      {
        path: '/',
        name:'index-services',
        component: IndiceService
      }
    ]
  },
  {
    path: '/admin',
    component:Admin,
    children:[

    ]
  },
  {
    path: '/ModuleFree',
    component:NavClient,
    children:[
      {
        path: '/finca_gestionar',
        name:'finca_gestionar',
        component: FincaGestionar
      },
      {
        path: '/cultive_gestionar',
        name:'cultive_gestionar',
        component: CultiveGestionar
      },
      {
        path: '/crop_monitoring_gesiotnar/:id_cultive',
        name:'crop_monitoring_gesiotnar',
        component: cropMonitoring
      }
    ]
  },
]