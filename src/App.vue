<template>
  <v-app>
    <v-main>
      <Nav></Nav>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Nav,
  },

  data: () => ({
    //
  }),
}
</script>
