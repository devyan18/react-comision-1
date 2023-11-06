import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="/tasks"
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
