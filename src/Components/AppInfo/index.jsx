import TextInformative from '../Basics/TextInformative';
import './AppInfo.css'

const AppInfo = () => {
    const visibilidad = 'visible'
    const texts = {
        title: "Descarga nuestra App",
        text: "Nuestra aplicacion y portal web permite acceder a toda tu informacion de forma instantanea y segura.",
        buttonText: "Descargar"
    };

    return <section className='AppInfo'>
        <img src="/Diferencial_Illustration.png" alt="Ilustracion" style={{visibility: {visibilidad}}} />
        <TextInformative title={texts.title} text={texts.text} buttonText={texts.buttonText} type="Subtitle"/>
    </section>
};

export default AppInfo;