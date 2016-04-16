import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import { HomePage, CategoryPage, AboutPage, ContactPage, CheckoutPage,
          NotFoundPage } from './containers';


export default (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/category/:categoryId" component={CategoryPage} />
    <Route path="/checkout" component={CheckoutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
