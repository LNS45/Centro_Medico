import './ArticleContainer.css'

const ArticleContainer = ({image, title, text}) => {

    return <div className="ArticleContainer">
        <img src={image} alt="Imagen de articulo"/>
        <div>
            <h4>{title}</h4>
            <p>{text}</p>
            <a href="/">Leer más...</a>
        </div>
    </div>
};

export default ArticleContainer;