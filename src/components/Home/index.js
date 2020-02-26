// import React from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';
import { makeBarGraph, makeDonutGraph, makeLineGraph } from '../Chartjs/chartHelpers';
import { weaponLabels, weaponData } from '../Data/gunstats';
import LineDemo from '../Chartjs/linegraph';
import styled from 'styled-components';
import DoughnutDemo from '../Chartjs/Doughnut';
import KDA from '../Chartjs/kdaBar';
import './styles.css';
import {stats, } from '../Data/fakestats'
// import Grid from '@material-ui/core/Grid';
const prizeData = findPrizePool();
const data = makeLineGraph(prizeData);





// const StyledGrid = styled(Grid)`
// display: flex;
// justify-content: space-around;
// flex-direction: row-reverse;`



// export default class Home extends React.Component {

//   render() {
    const options = {

      maintainAspectRatio: true,
      responsive: true,
      legend: {
        display: true
      },
     
    }



//     return (
//       <div>
//         <Line
//          data={makeLineGraph(prizeData)}
//          width={500}
//          height={500}
//          options={options}

//         />
//         <StyledGrid>
        // <Doughnut
        //    data={makeDonutGraph(weaponLabels, weaponData)}
        //    width={500}
        //    height={500}
        //    options={options}
        // />
        // <Bar
        //   data={makeBarGraph().data}
        //   width={500}
        //   height={500}
        //   options={options}
        // />
//         </StyledGrid>



//       </div>

//     );
//   }
// }


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
 
}));
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