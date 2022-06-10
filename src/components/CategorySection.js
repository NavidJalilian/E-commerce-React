import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export default function CategorySection({product}) {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  const { id, name, imageUrl, price } = product;

  return (
    <div className="shop-card" key={id}>
      <div className="shop-image">
        <img src={imageUrl} alt={name} />
        <button className="btn btn-inverted" onClick={addProductToCart}>
          add to cart
        </button>
      </div>
      <div className="shop-card-content">
        <span>{name}</span>
        <span>{price}$</span>
      </div>
    </div>
  );
}
