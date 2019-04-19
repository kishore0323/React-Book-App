import React, { Component } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';
import Navigation from './Navigation';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class BookApp extends Component {
  constructor() {
    super();
    this.state = {
      book: { title: '', description: '', price: '', imgurl: '' },
      act: 0,
      index: '',
      message: '',
      btntext: 'Add Book',
      books: []
    };
  }

  handleSubmit = book => {
    if (this.state.act === 0) {
      //new
      this.setState(prevState => {
        return {
          books: prevState.books.concat(book),
          message: `${book.title} Book Added Successfully`
        };
      });
    } else {
      //update
      let books = this.state.books;
      // console.log("updating edit action" + this.state.index);
      let index = this.state.index;
      books[index] = book;
      this.setState({
        books: books,
        act: 0,
        btntext: 'Add Book',
        message: `${book.title} Book Updated Successfully`
      });
    }
  };

  handleDelete = i => {
    console.log(i);
    let books = this.state.books;
    books.splice(i, 1);
    this.setState({
      books: books
    });
  };

  handleEdit = i => {
    let book = this.state.books[i];
    this.setState({
      book: book,
      act: 1,
      index: i,
      view: false,
      btntext: 'Edit Book',
      message: ''
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route
              path="/view"
              exact
              render={() => (
                <BookList
                  data={this.state}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                />
              )}
            />

            <Route
              path="/home"
              exact
              render={() => (
                <AddBook data={this.state} handleSubmit={this.handleSubmit} />
              )}
            />

            <Route path="*" render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
