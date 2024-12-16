const Card = ({image, title, text}) => {
    return (   
        <div className="container">
            <img src={image} alt={title} className="card-image"/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Card