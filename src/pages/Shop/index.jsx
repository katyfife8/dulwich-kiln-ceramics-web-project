import { useState } from "react";

// Components
import Products from "../../components/Products";
import Basket from "../../components/Basket";
import Data from "../../components/Data";

function Shop() {
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <main>
      <section className="page-intro">
        <h1>Shop</h1>

        <p className="subtitle">
          All items are made by hand in our London studio.
        </p>
      </section>

      <section className="content-section">
        <Products onAdd={onAdd} products={products} />
      </section>
      <section className="content-section">
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </section>
    </main>
  );
}

export default Shop;