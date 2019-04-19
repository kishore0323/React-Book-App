import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const initialState = {
  book: {
    title: '',
    description: '',
    price: '',
    imgurl: ''
  },
  redirect: false,
  titleError: '',
  descriptionError: '',
  priceError: '',
  imgurlError: ''
};
export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount = () => {
    this.setState(initialState);
    if (this.props.data) {
      this.setState(() => {
        return {
          book: this.props.data.book
        };
      });
    }
  };

  validate = book => {
    let titleError,
      descriptionError,
      priceError,
      imgurlError = '';
    let alphanum = /^[a-zA-Z0-9]*$/;
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
    if (isValid) {
      this.props.handleSubmit(this.state.book);

      this.setState({ ...initialState, redirect: true });
    }
  };

  render() {
    let { title, description, price, imgurl } = this.state.book;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/view" />;
    }

    return (
      <main className="addbook">
        <h4> {this.props.data.message} </h4>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <div className="error">{this.state.titleError}</div>
          <br />

          <label>Description</label>
          <textarea
            maxLength={200}
            type="text"
            value={description}
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
          />
          <div className="error">{this.state.descriptionError}</div>
          <br />

          <label>Price</label>
          <input
            type="text"
            value={price}
            name="price"
            placeholder="price"
            onChange={this.handleChange}
          />
          <div className="error">{this.state.priceError}</div>
          <br />

          <label>Image URL</label>
          <input
            type="text"
            value={imgurl}
            name="imgurl"
            placeholder="Image Url"
            onChange={this.handleChange}
          />
          <div className="error">{this.state.imgurlError}</div>
          <button type="submit" className="btn" value="Submit">
            {this.props.data.btntext}
          </button>
        </form>
      </main>
    );
  }
}
