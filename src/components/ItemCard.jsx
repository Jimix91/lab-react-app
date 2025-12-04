function ItemCard({ productDetail, onDelete }) {

  return (

    <div className="product-card">

      <img src={productDetail.thumbnail} alt={productDetail.title} />

      <h3>{productDetail.title}</h3>

      <p className="price">{productDetail.price}€</p>

      <p> {productDetail.rating}⭐</p>

      {productDetail.stock > 0 
      ? <p>✔️ In stock</p> 
      : <p>❌ Out of stock</p>}

      <button onClick={() => onDelete(productDetail.id)}>Delete</button>
    </div>
  );
}

export default ItemCard;

 