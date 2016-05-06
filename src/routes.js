import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import {
  HomePage, CategoryPage, AboutPage, ContactPage, CheckoutPage,
  NotFoundPage, SignupPage, LoginPage, ProfilePage, ProfileViewPage,
  ProfileUpdatePage, ProfileHistoryPage, ProfileFavouritesPage,
} from './containers';


export default (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/profile" component={ProfilePage} >
      <IndexRoute component={ProfileViewPage} />
      <Route path="/profile/update" component={ProfileUpdatePage} />
      <Route path="/profile/history" component={ProfileHistoryPage} />
      <Route path="/profile/favourites" component={ProfileFavouritesPage} />
    </Route>
    <Route path="/category/:categoryId" component={CategoryPage} />
    <Route path="/checkout" component={CheckoutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
