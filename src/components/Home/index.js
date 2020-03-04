// import React from 'react';
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
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar'
// import Grid from '@material-ui/core/Grid';
const prizeData = findPrizePool();
const data = makeLineGraph(prizeData);

// export default class Home extends React.Component {
  const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
 `

const Title = styled.h2`
text-align: center;
color: #FFF;`

const useTabs = makeStyles({
  root: {
    flexGrow: 1
  },
  tabs: {
    color: green
  }
});
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mega: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },

}));


const StyledTabs = styled(Tabs)({
  background: `#252830`,
  color: 'white',
  display: 'flex',
  alignItems: 'flex-start'
  
});

export default function CenteredTabs() {
 const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
    <Paper className={classes.root}>
        <StyledTabs
          value={value}
          centered
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#F5F5F5'
            }
          }}
        >
          {/* <Tab label="Home" href={ROUTES.HOME} />
          <Tab label="Teams" />
          <Tab label="Games" />
          <Tab label="Dashboard" href={ROUTES.DASHBOARD} /> */}
        </StyledTabs>
      </Paper>
    
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={12}>
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
</Grid>
</Grid>
</div>
</React.Fragment>
  );
}

      

  

