import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
<header className="navcontainer">
  <div className="my-app">
  <h2><span className="title">Emergency</span> Application</h2>
  </div>
  <div className="links">
  <NavLink
  to="/:id/:username/:role"
  exact="true"
  >
    <li>Home</li>
  </NavLink>

  {/* <NavLink
  to="/register"
  exact="true"
  >
        <li>Register</li>
  </NavLink> */}

  <NavLink
  to="/reports"
  exact="true"
  >
    <li>Reports</li>
  </NavLink>

  <NavLink
  to="/"
  exact="true"
  >
   <li>Logout</li> 
  </NavLink>
  </div>

</header>
  );
};

export default NavBar;
