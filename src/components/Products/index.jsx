import React from "react";

// Components
import Product from "../Product";

// Styles
import "./styles.css";

const Products = (props) => {
    const { products, onAdd } = props;
    return (
        <div className="product-row">
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd} />
            ))}
        </div>
    );
};

export default Products;