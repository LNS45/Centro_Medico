import Button from "../Basics/Button";
import ArticleGroup from "./ArticlesGroup";
import './ArticlesSection.css'

const ArticlesSection = () => {

    return <section className="ArticlesSection">
        <h2 className="subtitle">Checa nuestros últimos artículos</h2>
        <ArticleGroup />
        <Button text={"Ver todos"} ></Button>
    </section>
};

export default ArticlesSection;