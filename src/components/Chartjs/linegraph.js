import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { findPrizePool } from '../Data/tournaments';
import { makeLineGraph } from './chartHelpers';

const prizeData = findPrizePool();
const data = makeLineGraph(prizeData);

/* const data = {
    labels: Object.keys(prizeData),
    datasets: [
        {
            label: 'Prize Pools',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 196, 235)',
            borderColor: 'rgba(0, 196, 235)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 196, 235)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 196, 235',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(prizeData)
        }
    ]
};

 */


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

   

   


       
       
      

  