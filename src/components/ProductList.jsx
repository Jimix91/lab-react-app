import ProductCard from "./ProductCard";

function ProductList({ products, onDelete }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onDelete={onDelete}   
        />
      ))}
    </div>
  );
}

export default ProductList;