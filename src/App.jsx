import { Switch, Link, Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div>
      <nav>
        <li>
          <Link to={routes.mercury}>mercury</Link>
        </li>
      </nav>
      <Switch>
        <Route path={routes.mercury}>Mercury</Route>
      </Switch>
    </div>
  );
}

export default App;
