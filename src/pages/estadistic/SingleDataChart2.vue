<template>
  <div>
    <div id="container4">{{ dataArray }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'

HighchartsMore(Highcharts)

// Prop para recibir los datos de la gráfica
const prop = defineProps(["graphData2"])
const data = ref(prop.graphData2)
let dataArray = data.value[0].lectura_msensor
onMounted(() => {
  Highcharts.chart('container4', {
    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Ph Agua'
    },
    pane: {
      startAngle: -150,
      endAngle: 150
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Value'
      },
      labels: {
        distance: 20
      },
      plotBands: [{
        from: 0,
        to: 60,
        color: '#55BF3B'
      }, {
        from: 60,
        to: 80,
        color: '#DDDF0D'
      }, {
        from: 80,
        to: 100,
        color: '#DF5353'
      }]
    },
    series: [{
      name: 'Value',
      data: [dataArray]
    }]
  })
}) 
</script>
