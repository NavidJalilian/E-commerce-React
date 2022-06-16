import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { CartContext } from "../contexts/cartContext";
import "./CategorySection.css";

export default function CategorySection({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { id, name, imageUrl, price } = product;

  const handleAddToCart = (product) => {
    addProductToCart(product);
    setIsAddedToCart(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAddedToCart(false), 2000);
    return () => clearTimeout(timer);
  });

  const notifCssClass = isAddedToCart && "noift-tab-navbar";

  return (
    <div className="shop-card" key={id}>
      <div className="shop-image">
        <img src={imageUrl} alt={name} />
        <button className="btn btn-inverted" onClick={handleAddToCart}>
          add to cart
        </button>
        <div className={"success-tab " + notifCssClass}>
          <span className="shop-success-title ">added to cart</span>
          <span className="success-tab-check">&#10004;</span>
        </div>
      </div>
      <div className="shop-card-content">
        <span>{name}</span>
        <span>{price}$</span>
      </div>
    </div>
  );
}
