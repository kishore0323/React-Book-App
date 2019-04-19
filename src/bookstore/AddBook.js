import React, { Component } from 'react';
import { initialState } from './book.model';
import BookForm from './BookForm';

export default class AddBook extends Component {
  constructor({ props }) {
    super(props);
    this.state = initialState;
  }

  componentDidMount = () => {
    //  console.log(this.props.match.path);
    if (this.props.match.path !== '/home') {
      console.log('book id: ' + this.props.match.params.id);
      let id = this.props.match.params.id;
      this.getBookById(id);
    }
  };

  componentWillUnmount = () => {
    this.setState({
      ...initialState
    });
  };

  getBookById = id => {
    fetch('http://localhost:5000/book/' + id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          book: data,
          act: 1,
          id: id,
          btntext: 'Edit Book',
          message: ''
        });
      });
  };

  handleChange = e => {
    const { book } = this.state;
    const { name, value } = e.target;
    book[name] = value;
    this.setState({
      book
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate(this.state.book);
    if (isValid && this.state.act === 0) {
      this.addBook(this.state.book);
    } else if (isValid) {
      this.editBook(this.state.book);
    }
  };

  addBook = book => {
    fetch('http://localhost:5000/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json())
      .then(data => {
        if (data)
          this.setState({
            ...initialState,
            message: `${book.title} Book Added Successfully`,
            redirect: true
          });
      });
  };

  editBook = book => {
    fetch('http://localhost:5000/book/' + this.state.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json())
      .then(data => {
        if (data)
          this.setState({
            ...initialState,
            act: 0,
            btntext: 'Add Book',
            message: `${book.title} Book Updated Successfully`,
            redirect: true
          });
      });
  };

  validate = book => {
    let titleError,
      descriptionError,
      priceError,
      imgurlError = '';
    let alphanum = /^[a-zA-Z0-9 ]*$/;
    let num = /^[0-9]*$/;

    if (!book.title) {
      titleError = 'Title cannot be blank';
    } else if (!book.title.match(alphanum)) {
      titleError = 'Tilte must be alphanumeric';
    }

    if (!book.description) {
      descriptionError = 'Description cannot be blank';
    }

    if (!book.price) {
      priceError = 'Price cannot be blank';
    } else if (!book.price.match(num)) {
      priceError = 'Price must be numeric only';
    }

    if (!book.imgurl) {
      imgurlError = 'Image URL cannot be blank';
    } else if (!book.imgurl.includes('http')) {
      imgurlError = 'Please enter valid URL';
    }

    if (titleError || descriptionError || priceError || imgurlError) {
      this.setState({ titleError, descriptionError, priceError, imgurlError });
      return false;
    }

    return true;
  };

  render() {
    return (
      <BookForm
        data={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}
