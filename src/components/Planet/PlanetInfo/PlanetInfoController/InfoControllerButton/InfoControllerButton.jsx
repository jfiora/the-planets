import './infoControllerButton.css';

const InfoControllerButton = ({
  information,
  setCurrentInfoPlanet,
  isSelected,
}) => {
  const number = information.number;
  const title = information.title;
  const color = information.color;

  return (
    <button
      className="infoControllerButton"
      onClick={() => setCurrentInfoPlanet(number)}
      style={{ backgroundColor: isSelected ? color : '' }}>
      <span>{number}</span>
      <p>{title}</p>
    </button>
  );
};

export default InfoControllerButton;
