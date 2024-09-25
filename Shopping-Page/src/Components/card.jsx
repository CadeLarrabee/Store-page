import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "../cssModules/Card.module.css";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartProvider";

function Card({ img, name, price, link }) {
  console.log("name:", name, "price:", price);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { img, name, price, link };
    addToCart(product);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Link to={link} className={styles.cardLink}>
          <div className={styles.cardImgWrapper}>
            <img src={img} alt={name} />
          </div>
          <div className={styles.cardBottomTextWrapper}>
            <p>{typeof name === "object" ? JSON.stringify(name) : name}</p>
            <p>{typeof price === "object" ? JSON.stringify(price) : price}</p>
          </div>
        </Link>
        <button className={styles.cardAddToCart} onClick={handleAddToCart}>
          <img src="placeholder" alt="Add to Cart" />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
