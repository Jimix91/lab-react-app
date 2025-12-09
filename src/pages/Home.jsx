import { useState } from "react";
import ProductList from "../components/ProductList";


function Home({ products }) {
  const [search, setSearch] = useState("");

 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      
      <h1>IRON PRODUCTS</h1>

      
      <input
        type="text"
        placeholder="Search by product name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px"
        }}
      />

   
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Home;