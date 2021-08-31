import React from "react";

// Components
import Button from "../Button";

// Styles
import "./styles.css";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 4.99;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <div className="basket">
      <h2>Your basket</h2>
      <div>{cartItems.length === 0 && <p>Your basket is empty.</p>}</div>

      {cartItems.map((item) => (
        <div key={item.id} className="basket-row">
          <img src={item.img} className="basket-image" alt="{item.name}" />
          <p className="item-name">{item.name}</p>

          <div className="quantity-row">
            <p>£{item.price.toFixed(2)}</p>
            <div className="quantity-input">
              <Button
                onClick={() => onRemove(item)}
                className="remove"
                action="-"
              />
              <div className="quantity">
                <p>{item.qty}</p>
              </div>
              <Button onClick={() => onAdd(item)} className="add" action="+" />
            </div>
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <div className="price-rows">
          <div className="price-row">
            <p>Price</p>
            <p className="cost-text">£{itemsPrice.toFixed(2)}</p>
          </div>
          <div className="price-row">
            <p>Delivery</p>
            <p className="cost-text">£{shippingPrice.toFixed(2)}</p>
          </div>
          <div className="price-row">
            <p className="total">Total</p>
            <p className="cost-text total">£{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;