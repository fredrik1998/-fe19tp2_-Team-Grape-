import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase/context';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #FFF;
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




const SignUpPage = () => (
  <Form>
    <div>
      <Wrapper>
        <Title>
          <h1>SignUp</h1>
        </Title>
      </Wrapper>
      <SignUpForm />
    </div>
  </Form>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  isAdmin: false,
  isBranded: false
};


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin, isBranded } = this.state;

    const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
    if (isBranded) {
      roles[ROLES.BRANDED] = ROLES.BRANDED;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })

      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      isAdmin,
      isBranded
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Admin:
          <StyledInput
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </label>
        <label>
          Branded:
          <StyledInput
            name="isAdmin"
            type="checkbox"
            checked={isBranded}
            onChange={this.onChangeCheckbox}
          />
        </label>
        <StyledInput
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <StyledInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <StyledInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <StyledInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Sign Up
        </StyledButton>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const SignUpLink = () => (
  <p>
    <StyledButton>
      <Link style={{ textDecoration: 'none' }} to={ROUTES.SIGN_UP}>Don't have an account? Sign Up</Link>
    </StyledButton>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));




export default SignUpPage;
export { SignUpForm, SignUpLink };

