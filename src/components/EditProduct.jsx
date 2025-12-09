import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProduct({ product, updateProduct }) {
  const [thumbnail, setThumbnail] = useState(product.thumbnail || product.image);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [stock, setStock] = useState(product.stock);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = {
      ...product,
      thumbnail,
      title,
      price: Number(price),
      description,
      stock: Number(stock),
    };

    updateProduct(updated);

    navigate(`/products/${product.id}`);
  };

 return (
  <div className="page-center">
    <form className="edit-product-form" onSubmit={handleSubmit}>
      <h2>Editar producto</h2>

      <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>
        Stock:
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </label>

      <button>Guardar cambios</button>
    </form>
  </div>
);
}

export default EditProduct;