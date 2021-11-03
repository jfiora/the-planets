import InfoControllerButton from './infoControllerButton/InfoControllerButton';
import './planetInfoController.css';

const PlanetInfoController = ({
  sendDataToParent,
  currentPlanetInfo,
  planetColor,
}) => {
  const titles = ['OVERVIEW', 'INTERNAL STRUCTURE', 'SURFACE GEOLOGY'];

  return (
    <div className="planetInfoController">
      {titles.map((title, index) => (
        <InfoControllerButton
          key={title}
          information={{ number: `0${index + 1}`, title, planetColor }}
          setCurrentInfoPlanet={() => sendDataToParent(title)}
          isSelected={currentPlanetInfo == title}
        />
      ))}
    </div>
  );
};

export default PlanetInfoController;
