import { CartContext } from "../context/CartProvider";
import { useContext } from "react";
import PropTypes from "prop-types";
import styles from "../cssModules/CartSideBar.module.css";

function CartSideBar({ isVisible, closeCart }) {
  const { cart } = useContext(CartContext);

  function CalculateTotal() {}

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
              <img src={item.img} alt={item.name} />
              <div className={styles.cartItemDetails}>
                <p className={styles.cartItemName}>{item.name}</p>
                <p className={styles.cartItemPrice}>${item.price}</p>
              </div>
              <button className={styles.cartItemRemove}>Remove</button>
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
  closeCart: PropTypes.isRequired,
};

export default CartSideBar;
