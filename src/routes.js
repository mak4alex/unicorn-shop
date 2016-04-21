import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import { HomePage, CategoryPage, AboutPage, ContactPage, CheckoutPage,
          NotFoundPage, SignupPage, LoginPage, ProfilePage } from './containers';
import { requireAuth } from './utils';


export default (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/profile" component={ProfilePage} />
    <Route path="/category/:categoryId" component={CategoryPage} />
    <Route path="/checkout" component={CheckoutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

// onEnter={requireAuth}