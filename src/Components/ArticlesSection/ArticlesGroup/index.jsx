import ArticleContainer from './ArticleContainer';
import './ArticleGroup.css'

const ArticleGroup = () => {

    const articles = [
        {
            title: "La importancia de una deteccion temprana.",
            text: "Los laboratorios juegan un rol importante en el cuidado de tu salud...",
            image: "/article1.png"
        },
        {
            title: "Hierbas naturales que son seguras de consumir.",
            text: "El uso de hierbas naturales hoy en dia es muy usada porque es bueno para tu salud...",
            image: "/article2.png"
        },
        {
            title: "Cuidado facial.",
            text: "Una vida saludable comienza desde ahora, sobre todo para el cuidado de tu piel...",
            image: "/article3.png"
        },
    ];

    return <div className="ArticleGroup">
        {articles.map((article) => {
            return <ArticleContainer text={article.text} image={article.image} title={article.title}/>
        })}
    </div>
};

export default ArticleGroup;