import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import ProductsList from "./components/ProductsList";
import { useState } from "react";
import products from "./data/products.json";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";


function App() {

  const [productsToDisplay, setProductsToDisplay] = useState(products);

  const deleteProducts = (productID) => {
    const newList = productsToDisplay.filter(
      (productCard) => productCard.id !== productID
    );
    setProductsToDisplay(newList);
  };

  const createProduct = (productDetail) => {
    
    const productID = productsToDisplay.map((productObj) => {
      return productObj.id ;
    })
    const maxId = Math.max(...productID);
    const nextId = maxId + 1

    const newProduct = {
      ...productDetail,
      id: nextId
    }
    const newList = [newProduct, ...productsToDisplay]

    
    setProductsToDisplay(newList)
  }



  const updateProduct = (productDetail) => {
    const newList = productsToDisplay.map((productObj, i, arr) => {
      if(productObj.id === productDetail.id) {
        return productDetail
      } else {
        // if the product id is different than the one we want to modify, keep the product as it is
        return productObj        
      }
    })

    setProductsToDisplay(newList)
  }
  


  return (

    <div >
      <Navbar />
      <Home />
      <Sidebar />
      <Routes>
        <Route path="/" element={<ProductsList products={productsToDisplay} onDelete={deleteProducts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:productsId" element={<ProductDetail products={productsToDisplay} />} />
        <Route path="/addproduct" element ={<AddProduct onCreate={createProduct}/>}/>

        {/* /editproduct/2 */}
        {/* /products/:productsId/edit */}
        <Route path="/editproduct"element ={<EditProduct products={productsToDisplay}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App
