import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="title">
      <h3>REACT BOOK APP</h3>
      <div className="menu">
        <NavLink to="/home" activeStyle={{ color: 'black' }} className="btn">
          Add Books
        </NavLink>

        <NavLink to="/view" activeStyle={{ color: 'black' }} className="btn">
          View Books
        </NavLink>
      </div>
    </div>
  );
}
