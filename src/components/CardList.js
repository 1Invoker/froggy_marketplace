const CardList = ({name, price , image, description}) => {
  return (
    <div className="product-card">
        <img src= {image} alt = {name} className="product-card__image" />
    </div>
  );
};
export default CardList;
