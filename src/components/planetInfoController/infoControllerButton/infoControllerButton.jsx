import './infoControllerButton.css'

const InfoControllerButton = ({number, title}) => {
    return (
        <button className="infoControllerButton">
            <span>{number}</span>
            <p>{title}</p>
        </button>
    );
}

export default InfoControllerButton;