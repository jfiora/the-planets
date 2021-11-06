import './Planet.css';

import PlanetInfo from './PlanetInfo/PlanetInfo';
import PlanetStats from './PlanetStats/PlanetStats';

const Planet = ({ planet }) => {
  return (
    <div className="Planet">
      <PlanetInfo planet={planet} />
      <PlanetStats stats={planet.stats} />
    </div>
  );
};

export default Planet;
