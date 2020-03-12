import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar'


const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 `
const Title = styled.h2`
text-align: center;
color: #FFF;
font-family: Arial, Helvetica, sans-serif;
`
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

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <Grid height="100%" container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Title>
            <h2>Welcome Fnatic</h2>
            <StyledGrid><Avatar alt="flusha" img src={require('./fnatic.png')} className={classes.mega} /></StyledGrid>
          </Title>
          <StyledGrid item xs={12} zeroMinWidth>
            <Avatar alt="flusha" img src={require('./flusha.jpg')} className={classes.large} />
            <Avatar alt="KRIMZ" img src={require("./KRIMZ.jpg")} className={classes.large} />
            <Avatar alt="Cindy Baker" img src={require("./JW.jpg")} className={classes.large} />
            <Avatar alt="Cindy Baker" img src={require("./Brollan.jpg")} className={classes.large} />
            <Avatar alt="Cindy Baker" img src={require("./Golden.jpg")} className={classes.large} />
          </StyledGrid>
        </Grid>
      </Grid>
    </div >
  );
}





