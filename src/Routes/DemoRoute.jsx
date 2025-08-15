import React from "react";
import { useRoutes } from "react-router-dom";
import NewProduct from "../Products/NewProduct";

const DemoRoute = () => {
  let route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Product",
      element: <Product />,
      children: [
        {
          path: "NewProducts",
          element: <NewProduct />,
        },
        {},
      ],
    },
    {},
    {},
  ]);
};

export default DemoRoute;
