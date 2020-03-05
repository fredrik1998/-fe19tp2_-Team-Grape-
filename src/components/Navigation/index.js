import React from "react"
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { green } from '@material-ui/core/colors';
import styled, { withTheme } from 'styled-components';
import Grid from '@material-ui/core/Grid';
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const StyledTabs = styled(Tabs)({
  background: `#252830`,
  color: 'white',
  display: 'flex',
  flexDirection: 'row'
});

const NavigationAuth = () => (

  <Paper >
    <StyledTabs
      centered

    >



      <Tab label="Home" component={Link} to="/Home" />

      <Tab label="Teams" component={Link} to="/Teams" />

      <Tab label="Games" component={Link} to="/Games" />

      <Tab label="Account" component={Link} to="/Account" />

      <Tab label="Dashboard" component={Link} to="/Dashboard" />

      <Tab label="Admin" component={Link} to="/Admin" />

      <SignOutButton />

    </StyledTabs>
  </Paper>

)

const NavigationNonAuth = () => (
  <Paper >
    <StyledTabs
      centered
    >
      <Tab label="Landing" component={Link} to="/" />

      <Tab label="Login" component={Link} to="/signin" />

    </StyledTabs>
  </Paper>

);
export default Navigation;