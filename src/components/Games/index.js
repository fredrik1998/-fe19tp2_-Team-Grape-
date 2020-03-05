import React from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';

 
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  
  export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  
    const handleChange = event => {
      setSpacing(Number(event.target.value));
    };
  
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
               
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6} >
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel justify="center">spacing</FormLabel>
                </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} >
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel justify="center">spacing</FormLabel>
                </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} >
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel justify="center">spacing</FormLabel>
                </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    
  );
}