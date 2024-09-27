import { Link } from "react-router-dom";
import styles from "../cssModules/NavBar.module.css"; // Import the CSS module
import PropTypes from "prop-types";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";

function NavBar({ toggleCart }) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className={styles.navBarWrapper}>
        <div className={styles.navBarLogo}>
          <Link to="/">
            <img src="logo-placeholder.png" alt="Logo" />
          </Link>
        </div>
        <div>
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchBarIcon}>
              <img src="placeholder" alt="Search" />
            </div>
            <div className={styles.searchBarInput}>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className={styles.HomePageButton}>
            <Link to="/">
              <p>HomePage</p>
            </Link>
          </div>
          <div className={styles.CartButtonWrapper}>
            <button className={styles.CartButton} onClick={toggleCart}>
              Cart {cart.length > 0 && `(${cart.length})`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

NavBar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default NavBar;
