import React, { useContext } from "react";
import "./CheckOut.css";
import { CartContext } from "../contexts/cartContext";
import emptyCartImg from "../images/empty-cart.jpg";
export default function CheckOut() {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    decrementItemCount,
    totalPayment,
  } = useContext(CartContext);
  return (
    <>
      <div className="checkOut ">
        {cartItems.length !== 0 && (
          <ul className="grid grid-col-5 box-shadow">
            <li>product</li>
            <li>description</li>
            <li>price</li>
            <li>quantity</li>
            <li>remove</li>
          </ul>
        )}
        <div className="checkOut-items ">
          {cartItems.map((item) => {
            const { id, name, imageUrl, price, quantity } = item;
            return (
              <div
                className="checkOut-item grid grid-col-5 box-shadow"
                key={id}
              >
                <img src={imageUrl} alt={name} />
                <p>{name}</p>
                <span className="quantity">{price}$</span>
                <div className="checkOut-item-quantity">
                  <button
                    title="Decrement Quantity"
                    className="action-hover"
                    onClick={() => decrementItemCount(item)}
                  >
                    &#10094;
                  </button>
                  <span>{quantity}</span>
                  <button
                    title="Increase Quantity"
                    className="action-hover"
                    onClick={() => addItemToCart(item)}
                  >
                    &#10095;
                  </button>
                </div>

                <p
                  title="Remove item"
                  className="action-hover  cross-icon "
                  onClick={() => removeItemFromCart(item)}
                >
                  &#10005;
                </p>
              </div>
            );
          })}
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>ops your cart is empty !</p>
            <img src={emptyCartImg} alt="" srcset="" />
          </div>
        ) : (
          <div className="checkOut-total ">
            <span>
              Your total is : <strong> {totalPayment}$</strong>
            </span>
            <button className="btn">payment gateway</button>
          </div>
        )}
      </div>
    </>
  );
}
