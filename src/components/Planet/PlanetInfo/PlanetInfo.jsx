import React, { useState, useEffect } from "react";
import PlanetDescription from "./PlanetDescription/PlanetDescription";
import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetInfoController from "./PlanetInfoController/PlanetInfoController";

const PlanetInfo = ({planet}) => {
    const [data, setData] = useState(planet.overview);
    const [currentPlanetInfo, setCurrentPlanetInfo] = useState("OVERVIEW");

    function handlePLanetInfoChange(planetInfo) {
        setCurrentPlanetInfo(planetInfo);
    }

    function setPlanetInfo() {
        if (currentPlanetInfo == "OVERVIEW") {
            setData(planet.overview);
        } else if (currentPlanetInfo == "INTERNAL STRUCTURE") {
            setData(planet.structure);
        } else {
            setData(planet.surface);
        }
    }

    useEffect(() => {
        setPlanetInfo();
    }, [currentPlanetInfo]);

    return (
        <div>
            <PlanetImage image={data.image} />
            <div className="PlanetInfoWrapper">
                <PlanetDescription title={planet.name} props={data} />
                <PlanetInfoController sendDataToParent={handlePLanetInfoChange} currentPlanetInfo={currentPlanetInfo} planetColor={planet.color} />
            </div>
        </div>
    );
}

export default PlanetInfo;