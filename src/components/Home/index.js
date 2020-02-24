import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';
// import { players, findPlayersByGameID } from '../Data';
import LineDemo from '../Chartjs/linegraph';
import styled from 'styled-components'
import DoughnutDemo from '../Chartjs/Doughnut';
import BarDemo from '../Chartjs/Bar';
import './styles.css';
import Grid from '@material-ui/core/Grid';

const StyledGrid = styled(Grid)`
display: flex;
flex-direction: row-reverse;`



export default class Home extends React.Component {


  // componentDidMount() {
  //   // console.log(findPlayersByGameID(5));
  //   // console.log(findPlayersByGameID(3));
  //   console.log(findPrizePool());
  // }

  render() {
    return (
      <div>
        {<LineDemo />}
        {<DoughnutDemo/>}
        {<BarDemo/>}
      </div>
    
    );
  }
}



