<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler)

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Series A',
      data: [90, 40, 60, 20, 90, 80, 10],
      fill: true,
      borderColor: '#0ea5e9',
      backgroundColor: 'rgba(14, 165, 233, 0.3)',
      tension: 0.4
    },
    {
      label: 'Series B',
      data: [60, 20, 80, 10, 100, 30, 5],
      fill: true,
      borderColor: '#34d399',
      backgroundColor: 'rgba(52, 211, 153, 0.3)',
      tension: 0.4
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
