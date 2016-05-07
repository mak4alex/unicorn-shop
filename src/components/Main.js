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
      <div className="container">
          <AuthGlobals />
          <div className="row">
            <Header auth={auth} />
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="row">
                <Cart />
                <CategoryNav category={category} fetchMenuCategory={fetchMenuCategory} />
              </div>
            </div>
            <main className="col-sm-9">
              {this.props.children}
            </main>
          </div>
          <Footer />
      </div>
    );
  }
}
