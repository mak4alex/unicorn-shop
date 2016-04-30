import React, { Component } from 'react';
import { Link } from 'react-router';
import { SignOutButton } from 'redux-auth';
import activeComponent from 'react-router-active-component';


export default class Header extends Component {

  render() {
    const isSignedIn = this.props.auth.getIn(['user', 'isSignedIn']);
    const NavLink = activeComponent('li');

    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" 
                data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Unicorn Shop</Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                { isSignedIn ? (<NavLink to={'/profile'}>Profile</NavLink>) :
                               (<NavLink to={'/login'}>Login</NavLink>) }
                { isSignedIn ? (<li><SignOutButton icon=""
                                      className="btn navbar-btn" /></li>) :
                               (<NavLink to={'/signup'}>Sing Up</NavLink>) }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
