import IndiceService from './pages/IndiceService.vue'
import Login from './pages/auth/login.vue'

export const routes = [
{path:'/services',name:'index-services',component:IndiceService},
{path:'/login',name:'login-auth',component:Login},

]