import React, { useState, useEffect } from 'react';
import './PlanetInfo.css';

import PlanetDescription from './PlanetDescription/PlanetDescription';
import PlanetImage from './PlanetImage/PlanetImage';
import PlanetInfoController from './PlanetInfoController/PlanetInfoController';

const PlanetInfo = ({ planet }) => {
  const [data, setData] = useState(planet.overview);
  const [currentPlanetInfo, setCurrentPlanetInfo] = useState('OVERVIEW');

  function handlePLanetInfoChange(planetInfo) {
    setCurrentPlanetInfo(planetInfo);
  }

  function setPlanetInfo() {
    if (currentPlanetInfo == 'OVERVIEW') {
      setData(planet.overview);
    } else if (currentPlanetInfo == 'INTERNAL STRUCTURE') {
      setData(planet.structure);
    } else {
      setData(planet.surface);
    }
  }

  useEffect(() => {
    setPlanetInfo();
  }, [currentPlanetInfo, planet]);

  return (
    <div className="PlanetInfo">
      <PlanetInfoController
        sendDataToParent={handlePLanetInfoChange}
        currentPlanetInfo={currentPlanetInfo}
        planetColor={planet.color}
      />
      <PlanetImage image={data.image} />
      <PlanetDescription title={planet.name} props={data} />
    </div>
  );
};

export default PlanetInfo;
