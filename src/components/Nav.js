import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/computers">Computers</NavLink></li>
      <li><NavLink to="/gaming">Gaming</NavLink></li>
      <li><NavLink to="/dogs">Dogs</NavLink></li>
    </ul>
  </nav>
);

export default Nav;