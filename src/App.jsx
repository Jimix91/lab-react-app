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



function App() {

  const [productsToDisplay, setProductsToDisplay] = useState(products);

  const deleteProducts = (productID) => {
    const newList = productsToDisplay.filter(
      (productCard) => productCard.id !== productID
    );
    setProductsToDisplay(newList);
  };

  return (


    <div >
      <Navbar />
      <Home />
      <Sidebar />
      <Routes>
        <Route path="/" element={<ProductsList products={productsToDisplay} onDelete={deleteProducts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:productsId" element={<ProductDetail products={productsToDisplay} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App
