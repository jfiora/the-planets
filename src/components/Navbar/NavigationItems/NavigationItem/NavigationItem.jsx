import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

export default function NavigationItem({ path, name }) {
  return (
    <li className="NavigationItem">
      <NavLink to={path} className="navlink">
        {name.toUpperCase()}
      </NavLink>
    </li>
  );
}
