<template>
  <div class="bg-white p-4 rounded shadow">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { reactive, onMounted } from 'vue'

const { $chartGradient } = useNuxtApp()

const chartData = reactive({
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Sales',
      data: [120, 90, 150, 180],
      backgroundColor: '',
      borderColor: '#4f46e5',
      tension: 0.4,
      fill: true
    }
  ]
})

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      display: true
    }
  }
})

onMounted(() => {
  // Add gradient after DOM is mounted
  const canvas = document.querySelector('canvas')
  if (canvas) {
    const ctx = canvas.getContext('2d')
    const area = canvas.getBoundingClientRect()
    if (ctx) {
      chartData.datasets[0].backgroundColor = $chartGradient(ctx, area, '#4f46e5', '#c7d2fe')
    }
  }
})
</script>
