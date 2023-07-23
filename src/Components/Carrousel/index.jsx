//Componente Cliente
'use client'

//Carrusel completamente personalizable
import { useState } from "react";
import './Carrousel.css'
import DataContainer from "./DataContainer";


const Carrousel = () => {
    //Controla la imagen actual
    const [testimonioActual, setTestimonioActual] = useState(0);

    //Para almacenar la info a mostrar
    const data = [
        {
            image: "https://i.blogs.es/ee8285/assassins-20creed-20iv/1366_2000.jpg",
            name: "Edward Kenway",
            comment: "Es un excelente servicio, no hace mucho que tuve un malestar estomacal y de forma inmediata recibi indicaciones por parte de un profesional de la salud en la misma app."
        },
        {
            image: "https://pm1.aminoapps.com/6557/4bea0135da581ac3d4d3e369c39ad7e4cd9baefd_hq.jpg",
            name: "Connor Kenway",
            comment: "Me encanto el servicio, pude llevar de forma facil y sencilla el monitoreo de mi salud."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofjOVtaTF1EpoJzdzrpV8hUShLJp7eoTTqA&usqp=CAU",
            name: "Ezio Auditore",
            comment: "De los mejores servicios que hay, logre sanar correctamente mi cicatriz gracias a los consejos de los expertos en salud."
        }
    ];
    //Controlar botones
    const nextPerson = () => {
        (testimonioActual == data.length - 1) ? setTestimonioActual(0) : setTestimonioActual(testimonioActual + 1)
        
    };
    const prevPerson = () => {
        (testimonioActual == 0) ? setTestimonioActual(data.length - 1) : setTestimonioActual(testimonioActual - 1)
    };
    //Editar como se requiera
    return <div className="Carrousel">
        <div className="Content">
            <span className="titleCarrousel">Que dicen nuestros clientes?</span>
            {
                data.map((item, index) => (
                    (index == testimonioActual) ? <DataContainer key={index} image={item.image} name={item.name} comment={item.comment}/> : <div key={index}></div>
                ))
            }
        </div>
        <div className="Buttons">
            <button onClick={prevPerson} className="btnLeft"><img src="/flechaL.png"/></button>

            <button onClick={nextPerson} className="btnRight"><img src="/flechaR.png"/></button>
        </div>
    </div>
};

export default Carrousel;