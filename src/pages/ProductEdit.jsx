import { useParams } from "react-router-dom";
import EditProduct from "../components/EditProduct";

function ProductEdit({ products, updateProduct }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Producto no encontrado</h2>;

  return <EditProduct product={product} updateProduct={updateProduct} />;
}

export default ProductEdit;