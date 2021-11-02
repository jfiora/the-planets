import data from '../../../../planets-info.json';
import './PlanetStatItem.css';

const PlanetStatItem = (props) => {
  const planetStats = data.planets[1].stats;
  console.log(planetStats.rotationTime);
  return (
    <div className="PlanetStatItem">
      <h2>Rotation Time</h2>
      <p>{planetStats.rotationTime}</p>
    </div>
  );
};

export default PlanetStatItem;
