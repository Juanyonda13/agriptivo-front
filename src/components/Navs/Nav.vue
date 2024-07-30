<template>
      <div class="p-0 col-12">
          <router-view></router-view>
      </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {},
  methods: {
    login() {
      this.$router.push("/login")
    },
    register() {
      this.$router.push("/register")
    },
    logout(){
      this.$store.dispatch('auth/logout').then(
        this.$store.dispatch('auth/userInfo')
      )
    },
    client(){
      this.$router.push("/ModuleFree")
    }
  },
  mounted(){
    if(Cookies.get('token')){
      this.$store.dispatch('auth/userInfo')
    }
  },
  computed: {
    auth() {
      return this.$store.getters['auth/isLoggedIn']
    },
    user(){
      return this.$store.getters['auth/currentUser']
    },

  },
};
</script>