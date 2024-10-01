import styles from "../cssModules/SearchInput.module.css";
import searchImage from "../assets/search-outline.svg";

function SearchInput() {
  return (
    <>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBarIcon}>
          <img src={searchImage} alt="Search" />
        </div>
        <div className={styles.searchBarInput}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </>
  );
}

export default SearchInput;
