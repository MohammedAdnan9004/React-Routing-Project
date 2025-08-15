import React, { useEffect, useState } from "react";
// import product from "./component/Product";

const FeaturedProduct = () => {
  let [data, setData] = useState();
  useEffect((data) => {
    window.fetch("https://dummyjson.com/products").then(
      (data) =>
        data.json().then(
          (fdata) => {
            setData(fdata.products);
            console.log(fdata);
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
            let { id, title, description, price, thumbnail } = v;
            return (
              <tr key={i + 1}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                  <img src={thumbnail} alt="img" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedProduct;
