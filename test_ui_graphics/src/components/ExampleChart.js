import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class ExampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Energy Usage',
        pieHole: 0.4,
        "is3D": true,
      },
      data: [
        ["Energy", "Usage over time period"],
        ["Electric", 9],
        ["Solar", 5.5],
        ["Pure Rage", 14],
        ["Meditation", 5],
        ["Wind", 3.5],
      ],
    };
  }
  render() {
    return (
      <Chart
        chartTitle="DonutChart"
        chartType="PieChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    );
  }
}
export default ExampleChart;
