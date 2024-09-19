import { FeaturedItems } from "./FeaturedItems.jsx";
import { Banner } from "./Banner.jsx";
import { NavBar } from "./NavBar.jsx";

function HomePage() {
  return (
    <>
      <NavBar />
      <Banner />
      <FeaturedItems />
    </>
  );
}

export default HomePage;
