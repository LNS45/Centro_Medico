import Presentation from "./Presentation";
import "./Header.css"

const Header = () => {
    const visibilidad = "visible";

    return <header className="Header">
        <Presentation />
        <img src="/Header-Illustration.png" alt="Ilustracion" style={{visibility: {visibilidad}}}></img>
    </header>
};

export default Header;