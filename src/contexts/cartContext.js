import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemsToCart: () => null,
  cartItemsCount: 0,
  removeItemFromCart: () => null,
  decrementItemCount: () => null,
  totalPayment: 0,
});



const removeItem = (cartItems, productToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementItem = (cartItems, productToDecrease) =>
  cartItems.map((cartItem) => {
    return cartItem.id === productToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) =>
    setCartItems(removeItem(cartItems, productToRemove));

  const decrementItemCount = (productToDecrease) => {
    if (productToDecrease.quantity !== 1)
      setCartItems(decrementItem(cartItems, productToDecrease));
  };
  useEffect(() => {
    setTotalPayment(
      cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    if (cartItemsCount === 1) setIsCartOpen(true);
  }, [cartItemsCount]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    totalPayment,
    cartItemsCount,
    removeItemFromCart,
    decrementItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
