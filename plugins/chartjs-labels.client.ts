import { Chart } from 'chart.js'

export default defineNuxtPlugin(() => {
  const drawLabels = {
    id: 'drawLabels',
    afterDatasetsDraw(chart: Chart) {
      const { ctx } = chart
      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint: any, index: number) => {
          const { x, y } = datapoint.tooltipPosition()
          ctx.fillStyle = '#333'
          ctx.font = '12px sans-serif'
          ctx.textAlign = 'center'
          ctx.fillText(String(dataset.data[index]), x, y - 10)
        })
      })
    }
  }

  Chart.register(drawLabels)
})
