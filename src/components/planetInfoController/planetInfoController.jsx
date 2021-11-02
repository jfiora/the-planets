import InfoControllerButton from "./infoControllerButton/infoControllerButton";

export default function PlanetInfoController(){
    const titles = ['OVERVIEW', 'INTERNAL STRUCTURE', 'SURFACE GEOLOGY'];

    return (
        <div>
            {titles.map((title, index) => (
                <InfoControllerButton number=""/>
            ))}
        </div>
    );
}