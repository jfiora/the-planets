import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

export default function NavigationItem({ path, name, color }) {
  return (
    <li className="NavigationItem">
      <div className={`indicator ${color}`}></div>
      <NavLink to={path} className="navlink">
        {name.toUpperCase()}
      </NavLink>
    </li>
  );
}
