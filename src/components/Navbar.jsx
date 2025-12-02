import logo from "../assets/logoecommerce.png";


function Navbar() {
  return (
    <nav className="navbar">
       <img className="logo" src={logo} alt="logo" />
      <h1>IRON COMMERCE</h1>
    </nav>
  );
}

export default Navbar;