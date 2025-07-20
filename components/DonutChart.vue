<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartData = {
  labels: ['Design', 'Code', 'Marketing', 'Support'],
  datasets: [
    {
      label: 'Sessions',
      data: [30, 40, 15, 15],
      backgroundColor: ['#0ea5e9', '#34d399', '#facc15', '#a78bfa'],
      hoverOffset: 6
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right'
    }
  }
}
</script>
