import { useState } from "react";
import styles from "../cssModules/HomePage.module.css";
import NavBar from "../Components/NavBar.jsx";
import ProductList from "../Components/ProductList.jsx";
import CartSideBar from "../Components/CartSideBar.jsx";

function StorePage() {
  const [cartVisible, setCartVisible] = useState(false);

  function toggleCart() {
    setCartVisible((prev) => !prev);
  }

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <>
      <div className={styles.HomePage}>
        <NavBar toggleCart={toggleCart} />
        <ProductList />
        {cartVisible && (
          <CartSideBar closeCart={closeCart} isVisible={cartVisible} />
        )}
      </div>
    </>
  );
}

export default StorePage;
