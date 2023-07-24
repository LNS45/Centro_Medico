import './Footer.css';
import CopyRight_Container from './CopyRight_Container';
import Links_Container from './Links_Container';
const Footer = () => {

    const links = [
        {
            title: "Compañía",
            link_1: "Acerca de",
            link_2: "Testimonios",
            link_3: "Encuentra a doctor",
            link_4: "Apps",
        },
        {
            title: "Region",
            link_1: "Indonesia",
            link_2: "Singapore",
            link_3: "HongKong",
            link_4: "USA",
        },
        {
            title: "Ayuda",
            link_1: "Centro de ayuda",
            link_2: "Atención al cliente",
            link_3: "Instrucciones",
            link_4: "Cómo funciona?",
        },
    ];

    return <footer className='Footer'>
        <CopyRight_Container />
        <Links_Container Links={links[0]}/>
        <Links_Container Links={links[1]}/>
        <Links_Container Links={links[2]}/>
    </footer>

};

export default Footer;