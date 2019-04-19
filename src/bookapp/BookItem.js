import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BookItem(props) {
  return (
    <div className="bookitem">
      <ul>
        <li>
          <img alt="book" src={props.item.imgurl} height="200" width="150" />
          <h5>{props.item.title}</h5>
          <p>{props.item.description}</p>
          <h5>$ {props.item.price}</h5> <br />
          <NavLink
            to="/home"
            className="btn"
            onClick={() => props.handleEdit(props.id)}
          >
            Edit
          </NavLink>
          <button className="btn" onClick={() => props.handleDelete(props.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
