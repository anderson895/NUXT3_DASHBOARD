<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Modal Welcome Message -->
    <div
      v-if="showWelcome"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    >
      <div class="bg-[#1e1e1e] text-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <div class="flex justify-center mb-4">
          <VuetifyLogo />
        </div>
        <h1 class="text-2xl font-bold mb-2">Welcome to System Integration Subject</h1>
        <p class="mb-4">
          Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.
        </p>
        <p class="mb-2">For more information on Vuetify, check out the <a href="https://vuetifyjs.com" class="text-blue-400 underline" target="_blank">documentation</a>.</p>
        <p class="mb-2">If you have questions, please join the official <a href="https://discord.com/invite/vuetify" class="text-blue-400 underline" target="_blank">discord</a>.</p>
        <p class="mb-2">Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" class="text-blue-400 underline" target="_blank">issue board</a>.</p>
        <p class="italic text-sm mt-4">— John Leider</p>

        <div class="mt-6 flex justify-center gap-4">
          <a href="https://nuxt.com/docs" class="text-blue-400 underline" target="_blank">Nuxt Documentation</a>
          <a href="https://github.com/nuxt/nuxt" class="text-blue-400 underline" target="_blank">Nuxt GitHub</a>
        </div>

        <button @click="showWelcome = false" class="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          CONTINUE
        </button>
      </div>
    </div>

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

const selectedChart = ref('all')
const showWelcome = ref(true)

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
