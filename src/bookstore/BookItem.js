import React from 'react';
import { Link } from 'react-router-dom';

export default function BookItem({ item, handleDelete }) {
  return (
    <div className="bookitem">
      <ul>
        <li>
          <img alt="book" src={item.imgurl} height="200" width="150" />
          <h5>{item.title}</h5>
          <p>{item.description}</p>
          <h5>$ {item.price}</h5> <br />
          <Link to={'/edit/' + item.id} className="btn">
            Edit
          </Link>
          <button className="btn" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
