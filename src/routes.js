
// NAVS
import Admin from './components/Navs/Admin.vue'
import Nav from './components/Navs/Nav.vue'
import NavClient from './components/Navs/NavClient.vue'

// PAGES
import IndiceService from './pages/IndiceService.vue'
import Login from './pages/auth/login.vue'
import Register from './pages/auth/register.vue'

import FincaRegister from './pages/finca/FincaRegister.vue'
import FincaGestionar from './pages/finca/Gestionar.vue'

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
        path: '/finca_register',
        name:'finca_register',
        component: FincaRegister
      },
      {
        path: '/finca_gestionar',
        name:'finca_gestionar',
        component: FincaGestionar
      },
    ]
  },
]