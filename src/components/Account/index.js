import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import color from '@material-ui/core/colors/amber';
import { withTheme } from 'styled-components';
import styled from 'styled-components';

const Title = styled.h1`
color: white;
`
const Wrapper = styled.section`
background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
border: 0,
borderRadius: 3,
boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
color: 'white',
height: 48,
padding: '0 30px',
`;

const Form = styled.h5`
size: 10em;
display: flex;
flex-direction: column;
align-items: center;
width: max;
height: max;
border: none;
background: #252830;
padding: 0 15px;
font-size: 16px;
outline: none;
color: white;
`;

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <Form><Wrapper><Title>Account: {authUser.email}</Title></Wrapper></Form>
        {/* <Form><Wrapper><PasswordForgetForm /></Wrapper></Form> */}
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);