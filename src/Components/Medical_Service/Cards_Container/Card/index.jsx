import './Card.css'

const Card = (props) => {
    const {title, image, info} = props

    return <div className='Card'>
        <img src={image} alt='Service Image'/>
        <h3>{title}</h3>
        <p className='normalText'>{info}</p>
    </div>
};

export default Card;