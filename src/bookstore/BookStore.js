import React, { Component } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';
import Navigation from './Navigation';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class BookStore extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/view" exact component={BookList} />
            <Route path="/home" exact component={AddBook} />
            <Route path="/edit/:id" exact component={AddBook} />
            <Route path="*" render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
