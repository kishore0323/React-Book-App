import React, { Component } from 'react';
import BookItem from './BookItem';

export default class BookList extends Component {
  render() {
    const bookItems = this.props.data.books.map((item, i) => (
      <BookItem
        key={i}
        item={item}
        id={i}
        handleDelete={this.props.handleDelete}
        handleEdit={this.props.handleEdit}
      />
    ));
    return <div> {bookItems} </div>;
  }
}
