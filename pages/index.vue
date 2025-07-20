<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow p-4 hidden md:block">
      <h2 class="text-xl font-semibold mb-4">ChartsJs</h2>
      <ul class="space-y-2">
        <li>
          <button
            class="w-full text-left px-4 py-2 rounded hover:bg-blue-100"
            :class="{ 'bg-blue-200 font-bold': selectedChart === 'all' }"
            @click="selectedChart = 'all'"
          >
            All
          </button>
        </li>
        <li>
          <button
            class="w-full text-left px-4 py-2 rounded hover:bg-blue-100"
            :class="{ 'bg-blue-200 font-bold': selectedChart === 'line' }"
            @click="selectedChart = 'line'"
          >
            Line Chart
          </button>
        </li>
        <li>
          <button
            class="w-full text-left px-4 py-2 rounded hover:bg-blue-100"
            :class="{ 'bg-blue-200 font-bold': selectedChart === 'bar' }"
            @click="selectedChart = 'bar'"
          >
            Bar Chart
          </button>
        </li>
        <li>
          <button
            class="w-full text-left px-4 py-2 rounded hover:bg-blue-100"
            :class="{ 'bg-blue-200 font-bold': selectedChart === 'radar' }"
            @click="selectedChart = 'radar'"
          >
            Radar Chart
          </button>
        </li>
        <li>
          <button
            class="w-full text-left px-4 py-2 rounded hover:bg-blue-100"
            :class="{ 'bg-blue-200 font-bold': selectedChart === 'donut' }"
            @click="selectedChart = 'donut'"
          >
            Donut Chart
          </button>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-4">
      <div v-if="selectedChart === 'all'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div class="bg-white shadow rounded p-4 min-h-[250px]"><LineChart /></div>
        <div class="bg-white shadow rounded p-4 min-h-[250px]"><BarChart /></div>
        <div class="bg-white shadow rounded p-4 min-h-[250px]"><RadarChart /></div>
        <div class="bg-white shadow rounded p-4 min-h-[250px]"><DonutChart /></div>
      </div>

      <div v-else class="bg-white shadow rounded p-4 min-h-[300px]">
        <component :is="activeChart" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import LineChart from '~/components/LineChart.vue'
import BarChart from '~/components/BarChart.vue'
import RadarChart from '~/components/RadarChart.vue'
import DonutChart from '~/components/DonutChart.vue'

// Default to 'all' view
const selectedChart = ref('all')

const activeChart = computed(() => {
  switch (selectedChart.value) {
    case 'line': return LineChart
    case 'bar': return BarChart
    case 'radar': return RadarChart
    case 'donut': return DonutChart
    default: return null
  }
})
</script>
