import React, { Component } from 'react';
import { Link } from 'react-router';
import Cart from './../containers/Cart';
import { SignOutButton } from 'redux-auth';

export default class Header extends Component {

  render() {
    let isSignedIn = this.props.auth.getIn(['user', 'isSignedIn']);

    return (
      <header>
        <h1>Header here</h1>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li>{ isSignedIn ? (<Link to={'/profile'}>Profile</Link>) :
                               (<Link to={'/login'}>Login</Link>) }
            </li>
            <li>{ isSignedIn ? (<SignOutButton />) :
                               (<Link to={'/signup'}>Sing Up</Link>) }
            </li>
          </ul>
        </nav>
        <Cart />
      </header>
    );
  }

}

