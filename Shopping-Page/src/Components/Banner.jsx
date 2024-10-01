import { Link } from "react-router-dom";
import styles from "../cssModules/Banner.module.css";

function Banner() {
  return (
    <>
      <div className={styles.BannerWrapper}>
        {/* </div><img src="placeholder" alt="" /> */}
        <div className={styles.callToActionTextWrapper}>
          <h1 className={styles.callToActionTitle}>
            Your one-stop destination for all your shopping needs
          </h1>
          <p className={styles.callToActionText}>
            Discover an unparalleled shopping experience with our extensive
            selection of products, unbeatable prices, and exceptional customer
            service. Shop now and transform your shopping journey with us.
          </p>
        </div>
        <Link to="/store">
          <button className={styles.callToActionButton}>Shop Now</button>
        </Link>
      </div>
    </>
  );
}

export default Banner;
