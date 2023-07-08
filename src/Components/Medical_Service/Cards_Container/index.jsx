import './Cards_Container.css'
import Card from './Card';

const CardsContainer = () => {

    const services = [
        {
            image: "/SearchDoctor.png",
            title: "Busca un Doctor",
            info: "Escoje tu doctor de entre cientos de especialistas de absoluta confianza. ",
        },
        {
            image: "/Farmacia.png",
            title: "Farmacia Online",
            info: "Compra tu medicina desde nuestra aplicacion móvil",
        },
        {
            image: "/Consulta.png",
            title: "Consulta",
            info: "Consulta gratis con nuestros doctores de confianza para obtener las mejores recomendaciones.",
        },
        {
            image: "/Detalles.png",
            title: "Información de detalles",
            info: "Obtén de forma gratuita los detalles de tus consultas previas.",
        },
        {
            image: "/Emergencia.png",
            title: "Cuidado de emergencias",
            info: "Puedes obtener cuidado de emergencias 24/7 para tu cuidado, el de tus hijos o familia.",
        },
        {
            image: "/Monitoreo.png",
            title: "Monitoreo",
            info: "Monitorea y guarda tu historial médico.",
        },
    ];
    return <div className="Cards_Container">
        {services.map((service, index) => (
            <Card title={service.title} image={service.image} info={service.info}/>
        ))}
    </div>
};

export default CardsContainer;