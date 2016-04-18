import React, { Component } from 'react';
import { EmailSignInForm } from 'redux-auth/bootstrap-theme';
import { connect } from 'react-redux';


class LoginPage extends Component {

  render() {
    return <EmailSignInForm />;
  }

}


export default connect(({ auth }) => ({ auth }))(LoginPage);
