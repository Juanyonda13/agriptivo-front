import IndiceService from './pages/IndiceService.vue'
import Login from './pages/auth/login.vue'
import Nav from './components/Nav.vue'
import Register from './pages/auth/register.vue'

export const routes = [

  {path:'/login',name:'login-auth',component:Login},
  {path:'/register',name:'register-auth',component:Register},
  {
    path: '/',
    component: Nav,
    children: [
      {
        path: '/services',
        name:'index-services',
        component: IndiceService
      }
    ]
  },
]