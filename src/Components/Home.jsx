import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="btn1">
      <aside className="h11">
        <h1>Home Component</h1>
      </aside>
      <br />
      <aside className="btn">
        {" "}
        <button
          onClick={(e) => {
            navigate("OrderSummary");
          }}
        >
          Place Order
        </button>
      </aside>
    </div>
  );
}
export default Home;
