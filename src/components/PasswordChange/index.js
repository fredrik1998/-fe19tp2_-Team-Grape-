import React, { Component } from 'react';
import { withFirebase } from '../Firebase/context';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

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

const Wrapper = styled.section`
background: 'linear-gradient(to right, #cfd9df, e2ebf0, #30dd8a, #2bb673);',
border: 0,
borderRadius: 3,
boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
color: 'white',
height: 48,
padding: '0 30px',
  
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

   const StyledButton = styled(Button)({
    background: 'linear-gradient(to right, #cfd9df, e2ebf0, #30dd8a, #2bb673);',
      border: 0,
      borderRadius: 3,
      boxShadow: '0px 3px 3px 0 #000',
      color: 'white',
      height: 48,
      padding: '0 30px',
    });
const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
    return (
      <Form onSubmit={this.onSubmit}>
        <div>
        <Wrapper>
        <StyledInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <StyledInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <StyledButton type="submit">
          Reset My Password
        </StyledButton>
        {error && <p>{error.message}</p>}
        </Wrapper>
        </div>
      </Form>
    );
  }
}
export default withFirebase(PasswordChangeForm);