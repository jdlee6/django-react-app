import React from 'react';
import { Route } from 'react-router-dom';
import ArticleListView from './containers/ArticleListView';
import ArticleDetailView from './containers/ArticleDetailView';

export default function BaseRouter() {
  return (
    <div>
      <Route exact path="/" component={ArticleListView} />
      <Route exact path="/:articleID" component={ArticleDetailView} />
    </div>
  );
}
