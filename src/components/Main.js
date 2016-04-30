import React, { Component, PropTypes } from 'react';
import { AuthGlobals } from 'redux-auth/bootstrap-theme';
import Header from './Header';
import CategoryNav from './CategoryNav';
import Footer from './Footer';
import Cart from './../containers/Cart';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render() {
    const { category, fetchMenuCategory, auth } = this.props;

    return (
      <div className="container-fluid">
          <AuthGlobals />
          <Header auth={auth} />
          <Cart />
          <div className="row">     
            <div className="col-sm-3">
              <CategoryNav category={category} fetchMenuCategory={fetchMenuCategory} />
            </div>
            <div className="col-sm-9">
              <main>{this.props.children}</main>
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}
