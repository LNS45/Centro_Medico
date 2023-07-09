import './Button.css'

const Button = (props) => {
    const {text, type} = props;
    //Colores por Defecto
    let color = "#FFFFFF"
    let colorText = "#458FF6"
    //Cambio de color si se especifica 'Filled'
    if(type === "Filled"){
        color = "#458FF6";
        colorText = "#FFFFFF";
    }
    return <a className="Button" href='/' style={{backgroundColor: color, color: colorText}} >
        {text}
    </a>
};

export default Button;
