import React from 'react'
import Highcharts from 'highcharts/highstock'
import fixOverlap from './fixOverlap'
import options from './options'
import chartOptions from './chartOptions'
window.Highcharts = Highcharts

const containerID = 'highcharts'

export default class PriceGraph extends React.Component {
  componentDidMount() {
    let { priceData, newsItems } = this.props
    window.Highcharts.setOptions(options)
    window.Highcharts.stockChart(
      containerID,
      chartOptions({ priceData, newsItems })
    )
    fixOverlap()
  }
  render() {
    return <div id={containerID} />
  }
}