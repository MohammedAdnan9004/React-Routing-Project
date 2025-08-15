import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  let navigate = useNavigate();
  return (
    <>
      <aside className="h11">
        {" "}
        <h1>OrderSummary component</h1>
      </aside>
      <aside className="btn">
        <button
          onClick={(e) => {
            navigate(-1);
          }}
        >
          Back To Home
        </button>
      </aside>
    </>
  );
};

export default OrderSummary;
