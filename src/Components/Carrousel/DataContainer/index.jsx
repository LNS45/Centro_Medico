import "../Carrousel.css"

const DataContainer = ({image, comment, name,}) => {
    return <div className="clientInfo">
    <div className="clientInfoPersonal">
        <img src={image} alt="Foto del Testimonio"/>
        <span>{name}</span>
    </div>
    <p>{comment}</p>
</div> 
}

export default DataContainer;