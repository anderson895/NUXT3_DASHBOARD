<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Bar } from 'vue-chartjs'

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Visits A',
      data: [30, 50, 70, 40, 90, 60, 20],
      backgroundColor: '#0ea5e9'
    },
    {
      label: 'Visits B',
      data: [20, 40, 50, 30, 60, 50, 10],
      backgroundColor: '#3b82f6'
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
