import './WikiLink.css';
import img from '../../../../../img/external-link.svg';

const WikiLink = ({link}) => {
    return (
        <div className="wikiItem">
            Source : 
            <a id="wikiItem" href={link}>Wikipedia</a>
            <a href={link}><img src={img}></img></a>
        </div>
    );
}

export default WikiLink;