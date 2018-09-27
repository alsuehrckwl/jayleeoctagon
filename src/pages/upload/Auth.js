import React, { Component } from 'react';
import Login from '../../components/Login/Login';

export default class Auth extends Component {
  doLogin() {
    // auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // ...
    //   });
  }

  render() {
    return <Login />;
  }
}
