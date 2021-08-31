import React from "react";

// Components
import Button from "../Button";

// Styles
import "./styles.css";

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.img} className="card-image" alt={product.name} />
      </div>
      <div className="product-information">
        <p className="product-name">{product.name}</p>
        <p>£{product.price.toFixed(2)}</p>
      </div>
      <div>
        <Button onClick={() => onAdd(product)} action="add to basket" />
      </div>
    </div>
  );
};

export default Product;