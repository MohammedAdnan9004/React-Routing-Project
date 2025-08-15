import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Product() {
  return (
    <>
      <div className="container1">
        <ul>
          <li>
            <NavLink to={"NewProduct"}>NewProduct</NavLink>
          </li>
          <li>
            <NavLink to={"FeaturedProduct"}>FeaturedProduct</NavLink>
          </li>
        </ul>
      </div>

      <aside className="container3">
        <Outlet />
      </aside>
    </>
  );
}
