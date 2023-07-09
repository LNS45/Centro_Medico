import TextInformative from "../Basics/TextInformative";
import "./Header.css"

const Header = () => {
    const visibilidad = "visible";
    const texts = {
        title: "Tu centro médico virtual",
        text: "Trafalgar te provee de un accesible y confortable servicio de salud online o desde tu celular",
        buttonText: "Consulta hoy"
    };
    return <header className="Header">
        <TextInformative title={texts.title} text={texts.text} buttonText={texts.buttonText} type="Title"/>
        <img src="/Header-Illustration.png" alt="Ilustracion" style={{visibility: {visibilidad}}}></img>
    </header>
};

export default Header;