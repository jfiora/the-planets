import InfoControllerButton from "./infoControllerButton/InfoControllerButton";

export default function PlanetInfoController(){
    const titles = ['OVERVIEW', 'INTERNAL STRUCTURE', 'SURFACE GEOLOGY'];

    return (
        <div>
            {titles.map((title, index) => (
                <InfoControllerButton key={index} number={`0${index+1}`} title={title}/>
            ))}
        </div>
    );
}