import React from "react";
import { NavLink } from "react-router-dom";

let NavBar = () => {
  return (
    <div className={"container"}>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/Product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/Users"}>Users</NavLink>
        </li>
        <li>
          <NavLink to={"/AboutUs"}>About-us</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
