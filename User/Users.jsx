// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import UserData from "../User/UserData";
// import Admin from "../User/Admin";

// const Users = () => {
//   return (
//     <>
//       <div className="container1">
//         <aside className="h11">
//           <h1>User Component</h1>
//         </aside>
//       </div>

//       <aside className="btn">
//         <Outlet />
//       </aside>
//     </>
//   );
// };

// export default Users;

//*Chatgpt code for inputfield:
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Users = () => {
  const [inputId, setInputId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputId.trim() !== "") {
      navigate(`/users/${inputId}`);
    }
  };

  return (
    <>
      <div className="container1">
        <aside className="h11">
          <div style={{ marginTop: "10px" }}>
            <aside className="h11">
              {" "}
              <input
                type="number"
                placeholder="Enter User ID"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                style={{ padding: "6px", marginRight: "10px" }}
              />
            </aside>

            <button onClick={handleSearch} style={{ padding: "6px" }}>
              Search
            </button>
          </div>
        </aside>
      </div>

      <aside className="btn">
        <Outlet />
      </aside>
    </>
  );
};

export default Users;
