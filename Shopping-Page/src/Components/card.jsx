import { Link } from "react-router-dom";

function Card(img, name, price, link) {
  return (
    <>
      <div className="card">
        <Link to={link}>
          <div className="cardWrapper">
            <div className="cardImgWrapper">
              <img src={img} alt={name} />
            </div>
            <div className="CardBottomTextWrapper">
              <p>{name}</p>
              <p>{price}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

/*
{
   <Card
  img="https://example.com/product.jpg"
  name="Product Name"
  price="$10"
  link="/product/1"
  />; 
}
*/

export default Card;
