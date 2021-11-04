import mercury from './mercury';
import venus from './venus';
import earth from './earth';
import mars from './mars';
import jupiter from './jupiter';
import saturn from './saturn';
import uranus from './uranus';
import neptune from './neptune';

import { routes } from '../routes';

export default [
  { ...mercury, route: routes[mercury.name] },
  { ...venus, route: routes[venus.name] },
  { ...earth, route: routes[earth.name] },
  { ...mars, route: routes[mars.name] },
  { ...jupiter, route: routes[jupiter.name] },
  { ...saturn, route: routes[saturn.name] },
  { ...uranus, route: routes[uranus.name] },
  { ...neptune, route: routes[neptune.name] },
];
