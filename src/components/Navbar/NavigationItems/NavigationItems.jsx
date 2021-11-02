import React from 'react';
import { routes } from '../../../routes';

import NavigationItem from './NavigationItem/NavigationItem';

export default function NavigationItems() {
  return (
    <nav>
      <NavigationItem path={routes.mercury} name="mercury" />
      <NavigationItem path={routes.venus} name="venus" />
      <NavigationItem path={routes.earth} name="earth" />
      <NavigationItem path={routes.mars} name="mars" />
      <NavigationItem path={routes.jupiter} name="jupiter" />
      <NavigationItem path={routes.saturn} name="saturn" />
      <NavigationItem path={routes.uranus} name="uranus" />
      <NavigationItem path={routes.neptune} name="neptune" />
    </nav>
  );
}
