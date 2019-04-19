import React from 'react';
import { Redirect } from 'react-router-dom';

export default function BookForm(props) {
  let { title, description, price, imgurl } = props.data.book;
  const { redirect } = props.data;

  if (redirect) {
    return <Redirect to="/view" />;
  }

  return (
    <main className="addbook">
      <h4> {props.data.message} </h4>
      <form onSubmit={props.handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          onChange={props.handleChange}
        />
        <div className="error">{props.data.titleError}</div>
        <br />

        <label>Description</label>
        <textarea
          maxLength={200}
          type="text"
          value={description}
          name="description"
          placeholder="Description"
          onChange={props.handleChange}
        />
        <div className="error">{props.data.descriptionError}</div>
        <br />

        <label>Price</label>
        <input
          type="text"
          value={price}
          name="price"
          placeholder="price"
          onChange={props.handleChange}
        />
        <div className="error">{props.data.priceError}</div>
        <br />

        <label>Image URL</label>
        <input
          type="text"
          value={imgurl}
          name="imgurl"
          placeholder="Image Url"
          onChange={props.handleChange}
        />
        <div className="error">{props.data.imgurlError}</div>
        <button type="submit" className="btn" value="Submit">
          {props.data.btntext}
        </button>
      </form>
    </main>
  );
}
