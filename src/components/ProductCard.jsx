import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail || product.image}
          alt={product.title}
          onError={(e) =>
            (e.target.src = "https://placehold.co/300x300?text=No+Image")
          }
        />
      </Link>

      <h3>{product.title}</h3>
      <p><strong>{product.price}€</strong></p>

      {product.stock > 0 ? (
        <p style={{ color: "green" }}>✔ In stock</p>
      ) : (
        <p style={{ color: "red" }}>❌ Out of stock</p>
      )}

      <Link to={`/products/${product.id}`}>See Details</Link>
    </div>
  );
}

export default ProductCard;
 