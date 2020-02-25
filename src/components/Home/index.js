import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';

import LineDemo from '../Chartjs/linegraph';
import styled from 'styled-components';
import DoughnutDemo from '../Chartjs/Doughnut';
import KDA from '../Chartjs/kdaBar';
import './styles.css';
import Grid from '@material-ui/core/Grid';



const StyledGrid = styled(Grid)`
display: flex;
flex-direction: row-reverse;`



export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              //stack: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [65, 59, 80, 81, 56, 55, 40]
            },
  
            {
              label: "My second dataset",
              backgroundColor: "rgba(155,231,91,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              //stack: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [45, 79, 50, 41, 16, 85, 20]
            },
            {
              label: "My First dataset",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              //stack: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [65, 59, 80, 81, 56, 55, 40]
            },
          ]
        }
      };
    }
  
  render() {
    const options = {
    
      responsive: true,
      legend: {
        display: false
      },
      type: "bar"}
    return (
      <div>
        {<LineDemo />}
        {<DoughnutDemo/>}
        <Bar
        data={this.state.data}
        width={null}
        height={null}
        options={options}
      />
 
        
      
      </div>
    
    );
  }
}
