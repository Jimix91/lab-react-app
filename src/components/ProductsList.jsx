import products from "../data/products.json";
import ItemCard from "./ItemCard";
import { useState } from "react";

function ProductsList() {
  const [productsToDisplay, setProductsToDisplay] = useState(products);

  const deleteProducts = (productID) => {
    const newList = productsToDisplay.filter(
      (productCard) => productCard.id !== productID
    );
    setProductsToDisplay(newList);
  };

  return (
    <div className="content">

      <div className="products-grid">

        {productsToDisplay.map((productObj) => (
            
          <ItemCard
            key={productObj.id}
            productDetail={productObj}
            onDelete={deleteProducts}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;