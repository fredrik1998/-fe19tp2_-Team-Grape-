import React, { Component } from 'react';
import { Bar} from 'react-chartjs-2'
import { findPrizePool } from '../Data/tournaments'
import '/index.css';
const prizeData = findPrizePool();

const BarData = {  labels: Object.keys(prizeData),
    datasets: [
        {
            label: 'Prize Pools',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 106, 235)',
            borderColor: 'rgba(0, 106, 235)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(prizeData),
            responsive:true,
maintainAspectRatio: false, 
        }
    ]
};

export default class BarDemo extends Component {
    render() {
        return (
            <div>
                <h2>Bar Example</h2>
                <Bar ref="chart" data={BarData} height={40} width={20}  />
            </div>
        );
    } 

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }
}
    