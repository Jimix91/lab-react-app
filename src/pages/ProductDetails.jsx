import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ProductDetails({ products, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  
  if (!product) return <h2>Product not found</h2>;

 
  const [mainImage, setMainImage] = useState(product.thumbnail);

  const handleDelete = () => {
    onDelete(product.id);
    navigate("/");
  };

  const renderProductDimensions = (dimensions) => {
    return (
      <div className="dimensions-box">
        <h3>Dimensions</h3>
        <p>Width: {dimensions.width}</p>
        <p>Height: {dimensions.height}</p>
        <p>Depth: {dimensions.depth}</p>
      </div>
    );
  };

  return (
    <div className="product-details-container">
      
      <div className="product-images">
        <img className="main-thumbnail" src={mainImage} alt={product.title} />

        <div className="gallery">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`img-${i}`}
              onClick={() => setMainImage(img)}
              className="thumbnail-small"
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">{product.price}€</p>
        <p className="description">{product.description}</p>

        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>

        <p className={product.stock > 0 ? "in-stock" : "out-stock"}>
          {product.stock > 0
            ? `In Stock (${product.stock} units)`
            : "Out of Stock"}
        </p>

        <div className="extra-info">
          <p><strong>Discount:</strong> {product.discountPercentage}%</p>
          <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
          <p><strong>Shipping:</strong> {product.shippingInformation}</p>
          <p><strong>Availability:</strong> {product.availabilityStatus}</p>
          <p><strong>Min. Order:</strong> {product.minimumOrderQuantity}</p>
        </div>

         {product.dimensions && renderProductDimensions(product.dimensions)}

        <div className="tags">
          {product.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="reviews">
          <h3>Reviews</h3>
          {product.reviews?.map((review, i) => (
            <div key={i} className="review-card">
              <p><strong>{review.reviewerName}</strong> — ⭐ {review.rating}</p>
              <p>{review.comment}</p>
              <small>{new Date(review.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>

        <div className="details-buttons">
          <Link className="btn edit" to={`/products/${product.id}/edit`}>
            Edit Product
          </Link>

          <button className="btn delete" onClick={handleDelete}>
            Delete Product
          </button>

          <Link className="btn back" to="/">
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;