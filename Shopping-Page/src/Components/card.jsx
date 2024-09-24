import { Link } from "react-router-dom";
import styles from "../cssModules/Card.module.css";
import PropTypes from "prop-types";

function Card({ img, name, price, link }) {
  console.log("name:", name, "price:", price);

  return (
    <>
      <div className={styles.cardWrapper}>
        <Link to={link}>
          <div className={styles.card}>
            <div className={styles.cardImgWrapper}>
              <img src={img} alt={name} />
            </div>
            <div className={styles.CardBottomTextWrapper}>
              <p>{typeof name === "object" ? JSON.stringify(name) : name}</p>
              <p>{typeof price === "object" ? JSON.stringify(price) : price}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
