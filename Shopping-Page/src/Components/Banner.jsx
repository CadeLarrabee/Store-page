import styles from "../cssModules/Banner.module.css";
//TODO: Setup outlet & remove placeholders

function Banner() {
  return (
    <>
      <div className={styles.BannerWrapper}>
        <img src="placeholder" alt="" />
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
        <button className={styles.callToActionButton}>Shop Now</button>
      </div>
    </>
  );
}

export default Banner;
