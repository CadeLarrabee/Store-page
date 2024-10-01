import { CartContext } from "../context/CartProvider";
import { useContext } from "react";
import PropTypes from "prop-types";
import styles from "../cssModules/CartSideBar.module.css";

function CartSideBar({ isVisible, closeCart }) {
  const { cart, removeFromCart } = useContext(CartContext);

  // function CalculateTotal(cart) {
  //   return cart.reduce((sumOfItemPrices, cartItem) => {
  //     let cartItemFixedPrice = parseFloat(cartItem.price.replace("$", ""));
  //     return (sumOfItemPrices += cartItemFixedPrice);
  //   }, 0);
  // }

  function CalculateTotal(cart) {
    return cart.reduce((sumOfItemPrices, cartItem) => {
      return (sumOfItemPrices += cartItem.price);
    }, 0);
  }

  return (
    <div className={`${styles.cartSidebar} ${isVisible ? styles.open : ""}`}>
      <div className={styles.cartSidebarHeader}>
        <span className={styles.cartSidebarTitle}>Your Cart</span>
        <button className={styles.cartSidebarClose} onClick={closeCart}>
          &times;
        </button>
      </div>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.title} />
              <div className={styles.cartItemDetails}>
                <p className={styles.cartItemName}>{item.title}</p>
                <p className={styles.cartItemPrice}>{item.price}</p>
              </div>
              <button
                className={styles.cartItemRemove}
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className={styles.cartSidebarFooter}>
        <span className={styles.totalPrice}>
          Total: ${CalculateTotal(cart)}
        </span>
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
}

CartSideBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
};

export default CartSideBar;
