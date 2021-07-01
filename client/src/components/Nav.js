import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/cats" activeStyle={{ fontWeight: "bold" }}>
            Cats
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
