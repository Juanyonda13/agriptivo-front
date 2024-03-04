<template>
    <div>
        <div id="container"></div>
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
let dataArray = data.value.map(item => item.lectura_msensor)
onMounted(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Temperatura Ambiente'
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1
      },
      series: [{
        data: dataArray,
        pointStart: 0
      }]
    })
  })
</script>
  