import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';

import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={routes.home}>
          <Redirect to={routes.mercury} />
        </Route>
        <Route path={routes.mercury}>Mercury</Route>
        <Route path={routes.venus}>Venus</Route>
        <Route path={routes.earth}>Earth</Route>
        <Route path={routes.mars}>Mars</Route>
        <Route path={routes.jupiter}>Jupiter</Route>
        <Route path={routes.saturn}>Saturn</Route>
        <Route path={routes.uranus}>Uranus</Route>
        <Route path={routes.neptune}>Neptune</Route>
        <Route path="*"><NotFoundPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
