import { useEffect, useState } from "react";
import Card from "../Components/card.jsx";
import styles from "../cssModules/ProductList.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className={styles.productListWrapper}>
      {products.length === 0 ? (
        <p className={styles.loadingMessage}>Loading products...</p>
      ) : (
        products.map((product) => (
          <Card
            key={product.id}
            img={product.image}
            name={product.title}
            price={`$${product.price}`}
            link={`/product/${product.id}`}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
