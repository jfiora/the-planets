import React, { useState } from 'react';
import { routes } from '../../../routes';
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
        <NavigationItem path={routes.mercury} name="mercury" />
        <NavigationItem path={routes.venus} name="venus" />
        <NavigationItem path={routes.earth} name="earth" />
        <NavigationItem path={routes.mars} name="mars" />
        <NavigationItem path={routes.jupiter} name="jupiter" />
        <NavigationItem path={routes.saturn} name="saturn" />
        <NavigationItem path={routes.uranus} name="uranus" />
        <NavigationItem path={routes.neptune} name="neptune" />
      </nav>
    </div>
  );
}
