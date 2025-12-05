import { NavLink } from "react-router-dom"
import { FaCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><NavLink to="/"><FaHouse /> Home</NavLink></li>
        <li><NavLink to="/about"><FaCircleInfo /> About</NavLink></li>
        <li><NavLink to="/addproduct"><FaCirclePlus /> Add New Product</NavLink></li>
      </ul>
    </aside>
  );
}

export default Sidebar;