import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase/context';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });




const SignUpPage = () => (
    <div>
      <h1>SignUp</h1>
      <SignUpForm />
    </div>
  );

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
 
  
class SignUpFormBase extends Component {
constructor(props) {
super(props);
this.state = { ...INITIAL_STATE };
}
onSubmit = event => {const { username, email, passwordOne } = this.state;
this.props.firebase
  .doCreateUserWithEmailAndPassword(email, passwordOne)
  .then(authUser => {
    this.setState({ ...INITIAL_STATE });
    this.props.history.push(ROUTES.HOME);
  })
  .catch(error => {
    this.setState({ error });
  });
event.preventDefault();
}
onChange = event => { this.setState({ [event.target.name]: event.target.value });
};

render() { const {
    username,
    email,
    passwordOne,
    passwordTwo,
    error,
  } = this.state;

  const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
        <form onSubmit={this.onSubmit}>
             <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
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

        