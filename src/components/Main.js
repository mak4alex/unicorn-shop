import React, { Component, PropTypes } from 'react';
import { AuthGlobals } from 'redux-auth/bootstrap-theme';
import Header from './Header';
import CategoryNav from './CategoryNav';
import Footer from './Footer';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render() {
    const { category, fetchMenuCategory } = this.props;

    return (
      <div className="container-fluid">
          <AuthGlobals />
          <Header />
          <CategoryNav category={category} fetchMenuCategory={fetchMenuCategory} />
          <main>{this.props.children}</main>
          <Footer />
      </div>
    );
  }
}
