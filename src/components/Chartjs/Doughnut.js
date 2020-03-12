import React, { Component } from 'react';
import { Doughnut} from 'react-chartjs-2'
import { weaponLabels, weaponData } from '../Data/gunstats';
import { makeDonutGraph } from './chartHelpers';

const DoughnutData = makeDonutGraph(weaponLabels, weaponData);

export default class DoughnutDemo extends Component {
    render() {
        return (
            <div>
                <h2>Doughnut Example</h2>
                <Doughnut ref="chart" data={DoughnutData} height={40}/>
            </div>
        );
    } 

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }
}