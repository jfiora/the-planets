export default function InfoControllerButton({number, title}){
    return (
        <button>
            <span>{number}</span>
            <p>{title}</p>
        </button>
    );
}