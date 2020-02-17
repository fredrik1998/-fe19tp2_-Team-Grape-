import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase/context';
import * as ROUTES from '../../constants/routes';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #FFF;
`;

const Wrapper = styled.section`
  padding: 4em;
  width: 100%;
  height: 50px;
  border: none;
  background: #2b2b2b;
  font-size: 16px;
  outline: none;
  color: #f4f4f4;
  display: flex;
  align-items: center;
  
`;

const Form = styled.h5`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max;
  height: max;
  border: none;
  background: #2b2b2b;
  padding: 0 15px;
  font-size: 16px;
  outline: none;
  color: #f4f4f4;
`;

const Button = styled.button`
width: 100%;
height: 25px;
background: #FFF;
border: none;
outline: none;
cursor: pointer;
text-transform: uppercase;
font-weight: 700;
transition: .3s linear;`;

const Textbox = styled.h5`width: 100%;
height: 25px;
border: none;
background: #2b2b2b;
padding: 0 15px;
font-size: 16px;
outline: none;
color: #f4f4f4;`;




const SignInPage = () => (
  <Form>
  <div> 
  <Wrapper>
    <Title>
      Sign In
    </Title>
  </Wrapper>
          <Avatar >
          <LockOutlinedIcon />
        </Avatar>
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
         <input 
          name="email"
          value={email} 
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
       <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
        <Button>
          Sign In
          </Button>
        </button>
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