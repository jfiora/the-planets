import PlanetInfo from "./PlanetInfo/PlanetInfo";
import PlanetStats from "./PlanetStats/PlanetStats";

const Planet = ({planet}) => {
    return (
        <>
            <PlanetInfo planet={planet} />
            <PlanetStats stats={planet.stats} /> 
        </>
    );
}

export default Planet;