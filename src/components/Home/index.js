import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';

import LineDemo from '../Chartjs/linegraph';
import styled from 'styled-components';
import DoughnutDemo from '../Chartjs/Doughnut';
import BarDemo from '../Chartjs/Bar';
import './styles.css';
import Grid from '@material-ui/core/Grid';

const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: ;
  justify-content: space-evenly;
  align-items: center;
`;

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {<LineDemo />}
        {<DoughnutDemo />}
        {<BarDemo />}
      </div>
    );
  }
}
