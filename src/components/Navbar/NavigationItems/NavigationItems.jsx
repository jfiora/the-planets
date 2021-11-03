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
        <NavigationItem path={routes.mercury} name="mercury" color='lighter-blue'/>
        <NavigationItem path={routes.venus} name="venus" color='yellow'/>
        <NavigationItem path={routes.earth} name="earth" color='purple'/>
        <NavigationItem path={routes.mars} name="mars" color='light-red'/>
        <NavigationItem path={routes.jupiter} name="jupiter" color='red'/>
        <NavigationItem path={routes.saturn} name="saturn" color='orange'/>
        <NavigationItem path={routes.uranus} name="uranus" color='cyan'/>
        <NavigationItem path={routes.neptune} name="neptune" color='ligth-blue'/>
      </nav>
    </div>
  );
}
