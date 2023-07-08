import CardsContainer from './Cards_Container';
import './Medical.css'

const Medical_Service = () => {

    return <section className='Medical'> 
        <h2 className='highlightText subtitle'>Nuestros Servicios</h2>
        <p className='normalText'>Te proveemos con las mejores opciones para ti. Nos ajustamos a tu salud y nos aseguramos de que tu tratamiento sea de alta calidad. Puedes consultarnos para saber que tipo de servicio es el mejor para tu salud.</p>
        <CardsContainer />
    </section>
};

export default Medical_Service;