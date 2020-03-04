import React from 'react';
import { withFirebase } from '../Firebase/context';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import Tab from '@material-ui/core/Tab';
const SignOutButton = ({ firebase }) => (
  <Tab label="Sign Out" type="button" href={ROUTES.LANDING} onClick={firebase.doSignOut}>
    Sign Out
  </Tab>
);
export default withFirebase(SignOutButton);