import "./TextInformative.css"
import Button from "../Button"

const TextInformative = (props) => {
    const {title, text, buttonText, type, buttonType} = props

    if(type == "Title"){
        return <div className="TextInformative">
            <h1>{title}</h1>
            <p>{text}</p>
            <Button text={buttonText} buttonType={buttonType}/>
        </div>
    }else if(type == 'Subtitle'){
        return <div className="TextInformative">
            <h4 className="subtitle">{title}</h4>
            <p>{text}</p>
            <Button text={buttonText} buttonType={buttonType}/>
        </div>
    }
}

export default TextInformative;