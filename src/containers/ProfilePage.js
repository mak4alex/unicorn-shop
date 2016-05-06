import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { redirect } from './../actions/user';
import activeComponent from 'react-router-active-component';


class ProfilePage extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  componentWillReceiveProps(props) {
    if (!props.auth.getIn(['user', 'isSignedIn'])) {
      props.redirect();
    }
  }

  render() {
    const NavLink = activeComponent('li');
    const auth = this.props.auth.get('user');

    return (
      <div>
        <div className="page-header">
          <h1>{auth.getIn(['attributes', 'name'])}</h1>
        </div>
        <nav>
          <ul className="nav nav-tabs nav-justified">
            <NavLink to="/profile" onlyActiveOnIndex >View Profile</NavLink>
            <NavLink to="/profile/update">Update profile</NavLink>
            <NavLink to="/profile/history">Order History</NavLink>
            <NavLink to="/profile/favourites">Favourites</NavLink>
          </ul>
        </nav>
        { this.props.children }
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
