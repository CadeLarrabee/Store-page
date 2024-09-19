import { Link } from "react-router-dom";

//TODO: Setup outlet & remove placeholders

function NavBar() {
  return (
    <>
      <div className="navBarWrapper">
        <div className="navBarLogo">
          <Link to={HomePage}></Link>
        </div>
        <div>
          <div className="searchBarWrapper">
            <div className="searchBarIcon">
              <img src="placeholder" alt="" />
            </div>
            <div className="searchBarInput">
              <input type="text" />
            </div>
          </div>
          <div className="HomePageButton">
            <Link to={HomePage}></Link>
            <p>HomePage</p>
          </div>
          <div className="CartButtonWrapper">
            <button className="CartButton"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
