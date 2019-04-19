import React, { Component } from 'react';
import BookItem from './BookItem';

export default class BookList extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      books: []
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    this.setState({ loading: true });
    fetch('http://localhost:5000/book')
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          books: data
        });
      });
  };

  handleDelete = id => {
    fetch('http://localhost:5000/book/' + id, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if (data) this.getBooks();
      });
  };

  render() {
    const bookItems = this.state.books.map((item, i) => (
      <BookItem key={i} item={item} handleDelete={this.handleDelete} />
    ));
    return <div> {bookItems} </div>;
  }
}
