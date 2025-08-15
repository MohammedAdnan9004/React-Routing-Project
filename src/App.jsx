import React from "react";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";

import PageNotFound from "./Components/PageNotFound";

import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Users from "../User/Users";

import OrderSummary from "./Components/OrderSummary";
import NewProduct from "../src/Products/NewProduct";
import UserData from "../User/UserData";
import Admin from "../User/Admin";

import FeaturedProduct from "../src/Products/FeaturedProduct";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Product" element={<Product />}>
          <Route index element={<NewProduct />} />

          <Route path="NewProduct" element={<NewProduct />} />
          <Route path="FeaturedProduct" element={<FeaturedProduct />} />
        </Route>
        <Route path="/AboutUS" element={<AboutUs />} />
        <Route path="/Users" element={<Users />}>
          <Route path=":UserId" element={<UserData />} />
          <Route path="Admin" element={<Admin />} />
        </Route>

        <Route path="/OrderSummary" element={<OrderSummary />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
