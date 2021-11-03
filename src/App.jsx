import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';

import Navbar from './components/Navbar/Navbar';
import Planet from './components/Planet/Planet';

import data from './planets-info.json';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={routes.home}>
          <Redirect to={routes.mercury} />
        </Route>
        <Route path={routes.mercury}><Planet planet={data.planets[0]}/></Route>
        <Route path={routes.venus}><Planet planet={data.planets[1]}/></Route>
        <Route path={routes.earth}><Planet planet={data.planets[2]}/></Route>
        <Route path={routes.mars}><Planet planet={data.planets[3]}/></Route>
        <Route path={routes.jupiter}><Planet planet={data.planets[4]}/></Route>
        <Route path={routes.saturn}><Planet planet={data.planets[5]}/></Route>
        <Route path={routes.uranus}><Planet planet={data.planets[6]}/></Route>
        <Route path={routes.neptune}><Planet planet={data.planets[7]}/></Route>
        <Route path="*">404</Route>
      </Switch>
    </div>
  );
}

export default App;
