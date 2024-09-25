import { useState } from "react";
import styles from "../cssModules/HomePage.module.css";
import FeaturedItems from "../Components/FeaturedItems.jsx";
import Banner from "../Components/Banner.jsx";
import NavBar from "../Components/NavBar.jsx";
import ProductList from "../Components/ProductList.jsx";
import CartSideBar from "../Components/CartSideBar.jsx";

function HomePage() {
  const [cartVisible, setCartVisible] = useState(false);

  function toggleCart() {
    setCartVisible((prev) => !prev);
  }

  return (
    <>
      <div className={styles.HomePage}>
        <NavBar toggleCart={toggleCart} />
        <Banner />
        <FeaturedItems />
        <ProductList />
        {cartVisible && <CartSideBar />}
      </div>
    </>
  );
}

export default HomePage;
