
import ItemCard from "./ItemCard";


function ProductsList(props) {
  

  return (
    <div className="content">

      <div className="products-grid">

        {props.products.map((productObj) => (

          <ItemCard
            key={productObj.id}
            productDetail={productObj}
            onDelete={props.onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;