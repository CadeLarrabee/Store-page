import { Link } from "react-router-dom";
import styles from "../cssModules/NavBar.module.css"; // Import the CSS module
import PropTypes from "prop-types";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";
import cartImage from "../assets/cart-outline.svg";
import Logo from "../assets/logoipsum-327.svg";
import SearchInput from "../Components/SearchBar.jsx";

function NavBar({ toggleCart }) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className={styles.navBarWrapper}>
        <div className={styles.navBarLogo}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <SearchInput />
        <div className={styles.navButtons}>
          <div className={styles.HomePageTextLink}>
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
          <div className={styles.HomePageTextLink}>
            <Link to="/store">
              <p>Store</p>
            </Link>
          </div>
          <div className={styles.CartButtonWrapper}>
            <button className={styles.CartButton} onClick={toggleCart}>
              <img
                src={cartImage}
                alt="cart"
                className={styles.CartImage}
              ></img>
              {cart.length > 0 && `(${cart.length})`}
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
