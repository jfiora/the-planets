import './PlanetStatItem.css';

const PlanetStatItem = ({ statType, statValue }) => {
  return (
    <div className="PlanetStatItem">
      <h2>{statType}</h2>
      <p>{statValue}</p>
    </div>
  );
};

export default PlanetStatItem;
