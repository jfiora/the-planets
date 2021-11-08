import React, { useState } from 'react';
import planets from '../../../data/index';
import './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

export default function NavigationItems() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="NavigationItems">
      <div
        role="button"
        className="navmenu-toggle"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="hamburguer-bar"></div>
        <div className="hamburguer-bar"></div>
        <div className="hamburguer-bar"></div>
      </div>
      <nav
        className="navmenu"
        hidden={!isOpen}
        onClick={() => setIsOpen(!isOpen)}>
        {planets.map((planet) => (
          <NavigationItem
            path={planet.route}
            name={planet.name}
            color={planet.color}
          />
        ))}
      </nav>
    </div>
  );
}
