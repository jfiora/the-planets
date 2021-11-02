import './PlanetStatItem.css';

const PlanetStatItem = ({ name, rotationTime }) => {
  return (
    <div className="PlanetStatItem">
      <h2>{name}</h2>
      <p>{rotationTime}</p>
    </div>
  );
};

export default PlanetStatItem;
