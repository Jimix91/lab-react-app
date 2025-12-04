
import { Link } from "react-router-dom";

function ItemCard(props) {

  return (

    <div className="product-card">

      <img src={props.productDetail.thumbnail} alt={props.productDetail.title} />

      <h3>{props.productDetail.title}</h3>

      <p className="price">{props.productDetail.price}€</p>

      <p> {props.productDetail.rating}⭐</p>

      {props.productDetail.stock > 0 
      ? <p>✔️ In stock</p> 
      : <p>❌ Out of stock</p>}

      <button onClick={() => {props.onDelete(props.productDetail.id)}}>Delete</button>

          <Link to={`/products/${props.productDetail.id}`}>
              <button>Product Detail</button>
          </Link>
    </div>
  );
}

export default ItemCard;

 