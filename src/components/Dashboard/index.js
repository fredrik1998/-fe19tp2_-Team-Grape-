import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';
import { makeBarGraph, makeDonutGraph, makeLineGraph } from '../Chartjs/chartHelpers';
import { weaponLabels, weaponData } from '../Data/gunstats';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

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
  