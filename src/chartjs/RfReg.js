import { Line } from 'vue-chartjs'
import ori_data from '../data/realbtcprice.json'
import pred_data from '../data/rfreg.json'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
        labels: ori_data.index.map(x => x.slice(0,10)),
        datasets: [{
            label: 'Real Bitcoin Price',
            fill: false,
            data: ori_data.data,
            borderColor: '#f7931a',
        }, {
            label: 'Predicted Bitcoin Price - Random Forest Regression',
            fill: false,
            data: pred_data.data,
            borderColor: '#4d4d4d'
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}