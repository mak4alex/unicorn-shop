import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { redirect } from './../actions/user';

class ProfilePage extends Component {

 componentWillReceiveProps(props) {
    if (!props.auth.getIn(['user', 'isSignedIn'])) {
      props.redirect();
    }
  }

  render() {
    return (
      <div>
        <h1>ProfilePage</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
