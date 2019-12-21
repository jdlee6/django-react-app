import React from 'react';
import { Route } from 'react-router-dom';
import ArticleListView from './containers/ArticleListView';
import ArticleDetailView from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

export default function BaseRouter() {
  return (
    <div>
      <Route exact path="/" component={ArticleListView} />
      <Route exact path="/articles/:articleID/" component={ArticleDetailView} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/signup/" component={Signup} />
    </div>
  );
}
