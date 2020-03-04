import React from 'react';
import { withFirebase } from '../Firebase/context';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
const SignOutButton = ({ firebase }) => (
  <button type="button" href={ROUTES.LANDING} onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);