import { NavLink } from "react-router-dom"
import { FcHome } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";

function Sidebar() {
  return (
    <aside className="sidebar">
      
        <NavLink to="/"><FcHome/> Home</NavLink>
        <NavLink to="/about"><FcInfo /> About</NavLink>
        <NavLink to="/addproduct"><FcPlus /> Add </NavLink>
      
    </aside>
  );
}

export default Sidebar;