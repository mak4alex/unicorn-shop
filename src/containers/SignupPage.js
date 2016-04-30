import React, { Component } from 'react';
import { EmailSignUpForm } from 'redux-auth/bootstrap-theme';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { redirect } from './../actions/user';


class SignupPage extends Component {

  componentWillReceiveProps(props) {
    if (props.auth.getIn(['user', 'isSignedIn'])) {
      props.redirect();
    }
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Sign Up Form</h1>
        </div>
        <EmailSignUpForm />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
