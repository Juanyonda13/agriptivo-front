<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <v-card-title>
        </v-card-title>
        <v-card-text>
          <SingleDataLineChart  v-if="hasGraphData" :graphData2="graphData"/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <v-card-title>
        </v-card-title>
        <v-card-text>
          <SingleDataLineChart2  v-if="hasGraphData2" :graphData2="graphData2"/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <v-card-title>
        </v-card-title>
        <v-card-text>
          <SingleDataChart  v-if="hasGraphData3" :graphData2="graphData3"/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <v-card-title>
        </v-card-title>
        <v-card-text>
          <SingleDataChart2  v-if="hasGraphData4" :graphData2="graphData4"/>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
  
<script setup>

import { ref, onMounted, onUnmounted,watchEffect } from 'vue'
import { io } from 'socket.io-client'
import {  useRoute } from "vue-router"
import SingleDataLineChart from './SingleLineChart.vue'
import SingleDataLineChart2 from './SingleLineChart2.vue'

import SingleDataChart from './SingleDataChart.vue'
import SingleDataChart2 from './SingleDataChart2.vue'


//ROUTER
const route=useRoute()

const socket = io(import.meta.env.VITE_API_URL) 

const graphData = ref([])
const graphData2 = ref([])
const graphData3 = ref([])
const graphData4 = ref([])

const sensor1 = (graphName) => {
  socket.emit(graphName,`${route.params.id_cultive},1`)

  socket.on(graphName, (data) => {
    graphData.value = data
  })
}
const sensor2 = (graphName) => {
  socket.emit(graphName,`${route.params.id_cultive},2`)

  socket.on(graphName, (data) => {
    graphData2.value = data
  })
}
const sensor3 = (graphName) => {
  socket.emit(graphName,`${route.params.id_cultive},3`)

  socket.on(graphName, (data) => {
    graphData3.value = data
  })
}
const sensor4 = (graphName) => {
  socket.emit(graphName,`${route.params.id_cultive},4`)

  socket.on(graphName, (data) => {
    graphData4.value = data
  })
}
onMounted(() => {
  sensor1('grafica1')
  sensor2('grafica2')
  sensor3('grafica3')
  sensor4('grafica4')
})
onUnmounted(() => {
  socket.disconnect()
})
const hasGraphData = ref(false)
const hasGraphData2 = ref(false)
const hasGraphData3 = ref(false)
const hasGraphData4 = ref(false)

watchEffect(() => {
  if (graphData.value.length > 0) {
    hasGraphData.value = true
  }
  if (graphData2.value.length > 0) {
    hasGraphData2.value = true
  }
  if (graphData3.value.length > 0) {
    hasGraphData3.value = true
  }
  if (graphData4.value.length > 0) {
    hasGraphData4.value = true
  }
})
</script>
