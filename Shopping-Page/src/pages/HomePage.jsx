import styles from "../cssModules/HomePage.module.css";
import FeaturedItems from "../Components/FeaturedItems.jsx";
import Banner from "../Components/Banner.jsx";
import NavBar from "../Components/NavBar.jsx";
import ProductList from "../Components/ProductList.jsx";

function HomePage() {
  return (
    <>
      <div className={styles.HomePage}>
        <NavBar />
        <Banner />
        <FeaturedItems />
        <ProductList />
      </div>
    </>
  );
}

export default HomePage;
