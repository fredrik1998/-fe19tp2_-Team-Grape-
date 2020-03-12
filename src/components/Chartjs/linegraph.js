import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { findPrizePool } from '../Data/tournaments';
import { makeLineGraph } from './chartHelpers';

const prizeData = findPrizePool();
const data = makeLineGraph(prizeData);

export default class LineDemo extends Component {
    render() {
        return (
            <div>
                <h2>Line Example</h2>
                <Line ref="chart" data={data} height={70} />
            </div>
        );
    }
    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }
}

   

   


       
       
      

  