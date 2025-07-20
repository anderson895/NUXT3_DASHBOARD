<template>
  <Radar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

const chartData = {
  labels: ['Running', 'Cycling', 'Coding', 'Designing', 'Sleeping', 'Drawing'],
  datasets: [
    {
      label: 'User A',
      data: [70, 65, 80, 45, 50, 90],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: '#3b82f6',
      pointBackgroundColor: '#3b82f6'
    },
    {
      label: 'User B',
      data: [50, 75, 60, 55, 65, 70],
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      borderColor: '#0ea5e9',
      pointBackgroundColor: '#0ea5e9'
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    }
  }
}
</script>
