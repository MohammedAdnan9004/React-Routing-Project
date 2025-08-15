import React, { useEffect, useState } from "react";
// import product from "./component/Product";

const NewProduct = () => {
  let [data, setData] = useState();
  useEffect((data) => {
    window.fetch("https://fakestoreapi.com/products/").then(
      (data) =>
        data.json().then(
          (fdata) => {
            setData(fdata);
          },
          (e) => e
        ),
      (e) => e
    );
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((v, i) => {
            let { id, title, description, price, image } = v;
            return (
              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                  <img src={image} alt="img" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NewProduct;
