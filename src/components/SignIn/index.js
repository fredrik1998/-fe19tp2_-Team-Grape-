import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase/context';
import * as ROUTES from '../../constants/routes';

import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styled, { withTheme } from 'styled-components';
import { Input } from '@material-ui/core';

const StyledLockOutlinedIcon = styled(LockOutlinedIcon)``

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #FFF;
`;

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

const StyledButton = styled(Button)({
  background: 'linear-gradient(to right, #cfd9df, e2ebf0, #30dd8a, #2bb673);',
  border: 0,
  borderRadius: 3,
  boxShadow: '0px 3px 3px 0 #000',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const StyledInput = styled(Input)`
  label="Filled";
   variant="filled"; 
   background-color:#26262b;
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  color: white;
   `
const SignInPage = () => (
  <Form>
  <div> 
  <Wrapper>
    <Title>
      Sign In
    </Title>
  </Wrapper> 
  <StyledLockOutlinedIcon/>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
  </Form>
  
);
const INITIAL_STATE = {
  email: '', 
  password: '',
  error: null,
  
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <StyledInput
          name="email"
          value={email} 
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
       <StyledInput 
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <StyledButton  type="submit">
          Sign In
        </StyledButton>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };