import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <NavLink to="/">🏠 Home</NavLink>
        <NavLink to="/about">ℹ️ About</NavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;