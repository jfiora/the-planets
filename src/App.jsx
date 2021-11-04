import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';

import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Navbar from './components/Navbar/Navbar';
import Planet from './components/Planet/Planet';

import mercury from './data/mercury';
import venus from './data/venus';
import earth from './data/earth';
import mars from './data/mars';
import jupiter from './data/jupiter';
import saturn from './data/saturn';
import uranus from './data/uranus';
import neptune from './data/neptune';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={routes.home}>
          <Redirect to={routes.mercury} />
        </Route>
        <Route path={routes.mercury}>
          <Planet planet={mercury} />
        </Route>
        <Route path={routes.venus}>
          <Planet planet={venus} />
        </Route>
        <Route path={routes.earth}>
          <Planet planet={earth} />
        </Route>
        <Route path={routes.mars}>
          <Planet planet={mars} />
        </Route>
        <Route path={routes.jupiter}>
          <Planet planet={jupiter} />
        </Route>
        <Route path={routes.saturn}>
          <Planet planet={saturn} />
        </Route>
        <Route path={routes.uranus}>
          <Planet planet={uranus} />
        </Route>
        <Route path={routes.neptune}>
          <Planet planet={neptune} />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
