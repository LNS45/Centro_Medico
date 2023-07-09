import "./TextInformative.css"
import Button from "../Button"

const TextInformative = (props) => {
    const {title, text, buttonText, type} = props

    if(type == "Title"){
        return <div className="TextInformative">
            <h1>{title}</h1>
            <p>{text}</p>
            <Button text={buttonText} type="Filled"/>
        </div>
    }else if(type == 'Subtitle'){
        return <div className="TextInformative">
            <h4 className="subtitle">{title}</h4>
            <p>{text}</p>
            <Button text={buttonText} type="Filled"/>
        </div>
    }
}

export default TextInformative;