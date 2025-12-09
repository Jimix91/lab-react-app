import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import productsData from "./data/products.json";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AddProduct from "./components/AddProduct";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import ProductEdit from "./pages/ProductEdit";
import NotFound from "./pages/NotFound";




function App() {
  const [products, setProducts] = useState(productsData);


  const deleteProduct = (productID) => {
    const newList = products.filter((p) => p.id !== productID);
    setProducts(newList);

    
  };


  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };
  const createProduct = (productDetail) => {

    const productID = products.map((productObj) => {
      return productObj.id;
    })
    const maxId = Math.max(...productID);
    const nextId = maxId + 1

    const newProduct = {
      ...productDetail,
      id: nextId
    }
    const newList = [newProduct, ...products]


    setProducts(newList)
  }

  const updateProduct = (updatedProduct) => {
    const updatedList = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedList);
  };

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home
                products={products}
                addProduct={addProduct} />}
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetails
                  products={products}
                  onDelete={deleteProduct}
                />
              }
            />

            <Route
              path="/addproduct"
              element={<AddProduct
                onCreate={createProduct} />} />

            <Route
              path="/products/:id/edit"
              element={<ProductEdit products={products} updateProduct={updateProduct} />}
            />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>




        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;