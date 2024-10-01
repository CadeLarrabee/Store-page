import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // function AddToCart(item, quantity) {
  //   for (let i = 0; i < quantity; i++) {
  //     setCart((prevCart) => [...prevCart, item]);
  //   }
  // }
  function AddToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  const removeFromCart = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  return (
    <CartContext.Provider value={{ cart, AddToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Or optional: PropTypes.node
};
