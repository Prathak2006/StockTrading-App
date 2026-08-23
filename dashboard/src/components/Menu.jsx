import { NavLink } from "react-router-dom";
import Profile from "./Profile";

function Menu() {
  

  return (
    <div className="menu-container">
      <img
        src="/logo.png"
        style={{ width: "50px" }}
      />

      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              end
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/orders"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/holdings"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Holdings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/positions"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Positions
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/funds"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Funds
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/apps"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              Apps
            </NavLink>
          </li>
        </ul>

        <hr />

        <Profile/>
       
      </div>
    </div>
  );
}

export default Menu;