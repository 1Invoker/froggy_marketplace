import React from 'react';
import Card from './Card';

const CardList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Card
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default CardList;