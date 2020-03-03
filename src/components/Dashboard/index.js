import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Grid from '@material-ui/core/Grid';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';
import { makeBarGraph, makeDonutGraph, makeLineGraph } from '../Chartjs/chartHelpers';
import { weaponLabels, weaponData } from '../Data/gunstats';
import { stats, } from '../Data/fakestats'
import React from 'react';
import * as ROUTES from '../../constants/routes';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';
import { makeBarGraph, makeDonutGraph, makeLineGraph } from '../Chartjs/chartHelpers';
import { weaponLabels, weaponData } from '../Data/gunstats';
import LineDemo from '../Chartjs/linegraph';
import styled from 'styled-components';
import DoughnutDemo from '../Chartjs/Doughnut';
import KDA from '../Chartjs/kdaBar';
import Avatar from '@material-ui/core/Avatar'
import { stats, } from '../Data/fakestats'

const prizeData = findPrizePool();
const data = makeLineGraph(prizeData);

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
          <Title>
          <h2>Welcome Fnatic</h2>
          <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.mega} />
          </Title>
        <StyledGrid item xs={12} zeroMinWidth>
        <Avatar alt="flusha" img src={require('./flusha.jpg')} className={classes.large} />
  <Avatar alt="KRIMZ" img src={require("./KRIMZ.jpg")} className={classes.large} />
  <Avatar alt="Cindy Baker" img src={require("./JW.jpg")} className={classes.large} />
  <Avatar alt="Cindy Baker" img src={require("./Brollan.jpg")} className={classes.large}  />
  <Avatar alt="Cindy Baker" img src={require("./Golden.jpg")} className={classes.large}/>
  </StyledGrid>
  
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