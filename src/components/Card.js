import '../styles/Card.css'

const Card = ({name, price , image, description}) => {
  return (
    <div className="product-card">
        <img src= {image} alt = {name} className="product-card__image" />
        <h2 className="product-card__name">{name}</h2>
        <span className="product-card__price">{price}</span>
        <div className="product-card__description">{description}</div>
    </div>
  );
};
export default Card;
