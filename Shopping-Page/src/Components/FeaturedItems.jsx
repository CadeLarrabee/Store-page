import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import styles from "../cssModules/FeaturedItems.module.css";

function FeaturedItems() {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedItems(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className={styles.featuredItemsWrapper}>
      <div>
        <h1 className={styles.featuredItemsTitle}>Featured Items</h1>
      </div>
      <div className={styles.featuredItemsCardWrapper}>
        {featuredItems.length === 0 ? (
          <p className={styles.loadingMessage}>Loading products...</p>
        ) : (
          featuredItems
            .slice(0, 4)
            .map((featuredItems) => (
              <Card
                key={featuredItems.id}
                img={featuredItems.image}
                name={featuredItems.title}
                price={`$${featuredItems.price}`}
                link={`/product/${featuredItems.id}`}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default FeaturedItems;
