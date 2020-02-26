import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';
import { makeBarGraph, makeDonutGraph, makeLineGraph } from '../Chartjs/chartHelpers';
import { weaponLabels, weaponData } from '../Data/gunstats';
import LineDemo from '../Chartjs/linegraph';
import styled from 'styled-components';
import DoughnutDemo from '../Chartjs/Doughnut';
import KDA from '../Chartjs/kdaBar';
import './styles.css';
import Grid from '@material-ui/core/Grid';
const prizeData = findPrizePool();
const data = makeLineGraph(prizeData);



const StyledGrid = styled(Grid)`
display: flex;
justify-content: space-around;
flex-direction: row-reverse;
`



export default class Home extends React.Component {

  render() {
    const options = {

      maintainAspectRatio: false,
      responsive: false,
      legend: {
        display: true
      },
      type: "Doughnut", 
    }

    return (
      <div>
        <Line
         data={makeLineGraph(prizeData)}
         width={1800}
         height={400}
         options={options}

        />
        <StyledGrid>
        <Doughnut
           data={makeDonutGraph(weaponLabels, weaponData)}
           width={400}
           height={500}
           options={options}
        />
        <Bar
          data={makeBarGraph().data}
          width={600}
          height={275}
          options={options}
        />
        </StyledGrid>



      </div>

    );
  }
}
