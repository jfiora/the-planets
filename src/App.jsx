import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';

import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Navbar from './components/Navbar/Navbar';
import Planet from './components/Planet/Planet';

import planets from './data/index';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        {/* Home redirect */}
        <Route exact path={routes.home}><Redirect to={routes.mercury} /></Route>

        {/* Planets */}
        {planets.map((planet) => (
          <Route path={planet.route} key={planet.id}>
            <Planet planet={planet} />
          </Route>
        ))}

        {/* Page 404 */}
        <Route path="*"><NotFoundPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
