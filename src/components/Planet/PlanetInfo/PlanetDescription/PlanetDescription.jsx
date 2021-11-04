import PlanetName from "./PlanetName/PlanetName";
import PlanetBio from "./PlanetBio/PlanetBio";
import WikiLink from "./WikiLink/WikiLink";
import "./PlanetDescription.css";

const PlanetDescription = ({title, props}) => {
    return (
        <div className="PlanetDescriptionWrapper">
            <PlanetName name={title}/>
            <PlanetBio bio={props.text}/>
            <WikiLink link={props.url}/>
        </div>
    );
}

export default PlanetDescription;