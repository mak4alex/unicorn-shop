import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import { HomePage, CategoryPage, ProductPage,
				 AboutPage, ContactPage, NotFoundPage } from './containers';


export default (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/category/:category" component={CategoryPage} />
    <Route path="/category/:category/product/:product" component={ProductPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
