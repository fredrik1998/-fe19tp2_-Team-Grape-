import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase/context';
import Tab from '@material-ui/core/Tab';
const SignOutButton = ({ firebase }) => (
  <Tab label="Sign Out" type="button" component={Link} to="/" onClick={firebase.doSignOut}>
    Sign Out
  </Tab>
);
export default withFirebase(SignOutButton);