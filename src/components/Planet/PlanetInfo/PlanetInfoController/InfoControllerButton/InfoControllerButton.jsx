import './infoControllerButton.css';

const InfoControllerButton = ({
  information,
  setCurrentInfoPlanet,
  isSelected,
}) => {
  const { number, title, planetColor } = information;

  let mobileTitle = '';
  switch (title) {
    case 'SURFACE GEOLOGY':
      mobileTitle = 'surface';
      break;
    case 'INTERNAL STRUCTURE':
      mobileTitle = 'structure';
      break;
    default:
      mobileTitle = 'overview';
      break;
  }

  return (
    <button
      className={`infoControllerButton ${planetColor} ${ isSelected ? 'active' : '' }`}
      onClick={() => setCurrentInfoPlanet(number)}>
      <span>{number}</span>
      <p className="title--mobile">{mobileTitle}</p>
      <p className="title--desktop">{title}</p>
    </button>
  );
};

export default InfoControllerButton;
