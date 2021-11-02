import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div>
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
        <Route path="*">404</Route>
      </Switch>
    </div>
  );
}

export default App;