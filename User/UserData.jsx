import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import axios from "axios";

const UserData = () => {
  let [data, setData] = useState([]);
  let { UserId } = useParams();
  useEffect(
    (e) => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${UserId}`).then(
        ({ data }) => {
          console.log(data);
          setData([data]);
        },
        (d) => {
          d;
        }
      );
    },
    [UserId]
  );
  return (
    <>
      <div className="container2">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>EMAIL</th>
              <th>Phone </th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((v, i) => {
              let { id, name, phone, website, email } = v;
              return (
                <tr key={i + 1}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <aside>
        <Outlet />
      </aside>
    </>
  );
};

export default UserData;
