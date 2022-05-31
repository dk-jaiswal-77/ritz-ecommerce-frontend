import "./navbarCard.css";

export default function NavbarCard({lower, upper}){
    return (
        <div className="navbarCard">
            <span className="upperSpan">{upper}</span>
            <span className="lowerSpan">{lower}</span>
        </div>
    );
}