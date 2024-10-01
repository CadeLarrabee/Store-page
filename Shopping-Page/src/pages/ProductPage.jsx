import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "../cssModules/ProductPage.module.css";
import NavBar from "../Components/NavBar.jsx";
import { CartContext } from "../context/CartProvider.jsx";
import CartSideBar from "../Components/CartSideBar.jsx";

function ProductPage() {
  //Cart
  const { AddToCart } = useContext(CartContext);
  const [cartVisible, setCartVisible] = useState(false);

  //Product
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  //const [productQuantity, setQuantity] = useState(1);
  //

  function toggleCart() {
    setCartVisible((prev) => !prev);
  }

  const closeCart = () => {
    setCartVisible(false);
  };
  // const addQuantity = () => {
  //   setQuantity((prev) => prev + 1);
  // };
  // const decreaseQuantity = () => {
  //   setQuantity((prev) => Math.max(1, prev - 1));
  // };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.ProductPage}>
        <NavBar toggleCart={toggleCart} />
        <div className={styles.productPageWrapper}>
          <div className={styles.productWrapper}>
            <img src={product.image} className={styles.productImage}></img>
            <div className={styles.productInfoWrapper}>
              <div className={styles.productDescWrapper}>
                <div className={styles.productDescText}>
                  {product.description}
                </div>
              </div>
              <div className={styles.AddToCartWrapper}>
                <div className={styles.counterWrapper}>
                  {/* <div className={styles.counterButton} onClick={decreaseQuantity}>
                -
              </div>
              <div className={styles.counterQuantityCount}>
                {productQuantity}
              </div>
              <div className={styles.counterButton} onClick={addQuantity}>
                +
              </div> */}
                </div>
                <button onClick={() => AddToCart(product)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        {cartVisible && (
          <CartSideBar closeCart={closeCart} isVisible={cartVisible} />
        )}
      </div>
    </>
  );
}

export default ProductPage;
