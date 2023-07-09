import TextInformative from '../Basics/TextInformative';
import './Diferencial.css'

const Diferencial = () => {
    const visibilidad = 'visible'
    const texts = {
        title: "Líderes en el cuidado de tu salud",
        text: "Trafalgar te provee de un accesible y confortable servicio de salud online o desde tu celular. Para nosotros no solo es un trabajo, es el cuidado de tu salud.",
        buttonText: "Ver más"
    };

    return <section className='Diferencial'>
        <img src="/Diferencial_Illustration.png" alt="Ilustracion" style={{visibility: {visibilidad}}} />
        <TextInformative title={texts.title} text={texts.text} buttonText={texts.buttonText} type="Subtitle"/>
    </section>
};

export default Diferencial;