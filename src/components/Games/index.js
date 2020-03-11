import React from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'

const StyleTypography = styled(Typography)`
  font-size: 2vw;
  position: fixed;
  left: 15%;
  top: 7%;
  text-align: center;
  color: #FFF;
`;

const StyledTypography = styled(Typography)`
font-size: 2vw;
  position: fixed;
  left: 60%;
  top: 7%;
  text-align: center;
  color: #FFF;
`;

const StyledFormLabel = styled(FormLabel)`
display: flex;
flex-direction: row;
justify-content: space-around;
color: #FFF;
`
const StyledPaper = styled(Paper)`
 background-color: #252f4a; 
 
`
const StyledGrid = styled(Grid)`
display: flex;
flex-direction: row;
justify-content: space-around;`

const StyledAvatar = styled(Avatar)`
display: flex;
flex-direction: row;
justify-content: space-around;`
 
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
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }));


  export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  
    const handleChange = event => {
      setSpacing(Number(event.target.value));
    };
  
    return (
      <Grid container className={classes.root} spacing={8}><StyleTypography variant="button" display="block" gutterBottom>Recent matches</StyleTypography> <StyledTypography variant="button" display="block" gutterBottom> Upcomming matches</StyledTypography>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
               
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6} >
          <StyledPaper className={classes.control}>
            <Grid container>
              <Grid item>
                <StyledFormLabel>
                Europe Minor Rio 2020, Closed Qualifier, Upper Bracket, Round 2 March 07, 18:00 CET, Best of 3</StyledFormLabel>
                </Grid>
          </Grid>
        </StyledPaper>
        <StyledGrid item xs={8} sm={12} >
        <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.large}></Avatar>
        <Button variant="outlined" color="primary" >
  2-1
</Button>
        <Avatar alt="flusha" img src={require('./Dignitas.png')} className={classes.large}></Avatar>
        </StyledGrid>
      </Grid>
      <Grid item xs={6} >
          <StyledPaper className={classes.control}>
            <Grid container>
              <Grid item>
              <StyledFormLabel>
              ESL Pro League S11, Group Stage, Group B March 17, 22:00 CET, Best of 3</StyledFormLabel>
                </Grid>
                </Grid>
                </StyledPaper>
                <StyledGrid item xs={8} sm={12} >
        <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.large}></Avatar>
        
        <Avatar alt="flusha" img src={require('./Furia.png')} className={classes.large}></Avatar>
        </StyledGrid>
      </Grid>
                  
      <Grid item xs={6} >
          <StyledPaper className={classes.control}>
            <Grid container>
              <Grid item>
              <StyledFormLabel>
              Europe Minor Rio 2020, Closed Qualifier, Upper Bracket, Round 1 March 07, 12:00 CET, Best of 3</StyledFormLabel>
                </Grid>
                </Grid>
                </StyledPaper>
                <StyledGrid item xs={8} sm={12} >
        <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.large}></Avatar>
        <Button variant="outlined" color="primary" >
  2-0
</Button>
        <Avatar alt="flusha" img src={require('./Smash.jpg')} className={classes.large}></Avatar>
        </StyledGrid>
      </Grid>
      <Grid item xs={6} >
          <StyledPaper className={classes.control}>
            <Grid container>
              <Grid item>
              <StyledFormLabel>
              ESL Pro League S11, Group Stage, Group B
March 19, 14:25 CET, Best of 3</StyledFormLabel>
                </Grid>
                </Grid>
                </StyledPaper>
                <StyledGrid item xs={8} sm={12} >
        <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.large}></Avatar>
        
        <Avatar alt="flusha" img src={require('./Heroic.png')} className={classes.large}></Avatar>
        </StyledGrid>
      </Grid>

      <Grid item xs={6} >
          <StyledPaper className={classes.control}>
            <Grid container>
              <Grid item>
              <StyledFormLabel>
              IEM Katowice 2020, Playoff, 1/2
February 29, 15:00 CET, Best of 3
</StyledFormLabel>
                </Grid>
                </Grid>
                </StyledPaper>
                <StyledGrid item xs={8} sm={12} >
        <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.large}></Avatar>
        <Button variant="outlined" color="primary" >
  1-2
</Button>
        <Avatar alt="flusha" img src={require('./G2 ESPORTS.png')} className={classes.large}></Avatar>
        </StyledGrid>
      </Grid>

      <Grid item xs={6} >
          <StyledPaper className={classes.control}>
            <Grid container>
              <Grid item>
              <StyledFormLabel>
              ESL Pro League S11, Group Stage, Group B
March 21, 18:00 CET, Best of 3</StyledFormLabel>
                </Grid>
                </Grid>
                </StyledPaper>
                <StyledGrid item xs={8} sm={12} >
        <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.large}></Avatar>
        
        <Avatar alt="flusha" img src={require('./Forze.png')} className={classes.large}></Avatar>
        </StyledGrid>
      </Grid>

      <Grid item xs={6} >
          <StyledPaper className={classes.control}>
            <Grid container>
              <Grid item>
              <StyledFormLabel>
              IEM Katowice 2020, Playoff, Round 1
February 28, 15:00 CET, Best of 3</StyledFormLabel>
                </Grid>
                </Grid>
                </StyledPaper>
                <StyledGrid item xs={8} sm={12} >
        <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.large}></Avatar>
        <Button variant="outlined" color="primary" >
  2-0
</Button>
        <Avatar alt="flusha" img src={require('./100T.png')} className={classes.large}></Avatar>
        </StyledGrid>
      </Grid>

      <Grid item xs={6} >
          <StyledPaper className={classes.control}>
            <Grid container>
              <Grid item>
              <StyledFormLabel>
              ESL Pro League S11, Group Stage, Group B
March 23, 22:00 CET, Best of 3</StyledFormLabel>
                </Grid>
                </Grid>
                </StyledPaper>
                <StyledGrid item xs={8} sm={12} >
        <Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.large}></Avatar>
        
        <Avatar alt="flusha" img src={require('./coL.png')} className={classes.large}></Avatar>
        </StyledGrid>
      </Grid>

      
    </Grid>
    
  );
}