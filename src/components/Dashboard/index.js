import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';
import { makeBarGraph, makeDonutGraph, makeLineGraph } from '../Chartjs/chartHelpers';
import { weaponLabels, weaponData } from '../Data/gunstats';
import * as ROUTES from '../../constants/routes';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { green } from '@material-ui/core/colors';
import LineDemo from '../Chartjs/linegraph';
import styled from 'styled-components';
import DoughnutDemo from '../Chartjs/Doughnut';
import KDA from '../Chartjs/kdaBar';
import Avatar from '@material-ui/core/Avatar'
import { stats, } from '../Data/fakestats'

const prizeData = findPrizePool();
const data = makeLineGraph(prizeData);

const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
 `

const Title = styled.h2`
text-align: center;
color: #FFF;`

const options = {

    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: true
    },
  
  }


export default function FullWidthGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          
  
          <Grid item xs={12} zeroMinWidth >
            <Line 
              data={makeLineGraph(prizeData)}
              width={500}
              height={100}
              options={options}
  
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Doughnut 
              data={makeDonutGraph(weaponLabels, weaponData)}
              width={500}
              height={225}
              options={options}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Bar
              data={makeBarGraph().data}
              width={500}
              height={225}
              options={options}
            />
          </Grid>
        </Grid>
  
  
      </div>
    );
  }

  
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    mega: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  
  }));
  