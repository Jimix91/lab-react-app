
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div >
     
   <Navbar />
   <Sidebar />  
   <ProductsList/> 
   <Footer />
    </div>
  );
}


export default App
