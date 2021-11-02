import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationItem({ path, name }) {
  return (
    <li>
      <NavLink to={path}>{name.toUpperCase()}</NavLink>
    </li>
  );
}
