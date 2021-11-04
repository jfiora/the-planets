import React from 'react';
import './Navbar.css'

import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

export default function Navbar() {
  return (
    <div className="Navbar">
      <Logo />
      <NavigationItems />
    </div>
  );
}
