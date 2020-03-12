import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase/context';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

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
  background: #252830
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
  

const PasswordForgetPage = () => (
  <Form>
  <div>
  <Wrapper>
    <Title>
    <h1>PasswordForget</h1>
    </Title>
  </Wrapper>
    <PasswordForgetForm />
  </div>
  </Form>
);
const INITIAL_STATE = {
  email: '',
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <StyledInput
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Reset My Password
        </StyledButton>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const PasswordForgetLink = () => (
  <p>
    <StyledButton>
    <Link style={{ textDecoration: 'none' }}to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </StyledButton>
  </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };