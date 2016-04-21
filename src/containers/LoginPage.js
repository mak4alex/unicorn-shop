import React, { Component } from 'react';
import { EmailSignInForm } from 'redux-auth/bootstrap-theme';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { redirect } from './../actions/user';

class LoginPage extends Component {

  componentWillReceiveProps(props) {
    if (props.auth.getIn(['user', 'isSignedIn'])) {
      props.redirect();
    }
  }

  render() {
    return <EmailSignInForm />;
  }

}


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      redirect,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
