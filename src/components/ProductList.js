import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ p_id, p_price, p_name, p_text }) => {
  return (
    <li>
      <Link to={`/detailView/${p_id}`}>
        <img src={`../carimg/s${p_id}.JPG`} alt="" />
        <h3>{p_name}</h3>
        <p>${p_price}</p>
        <p>{p_text}</p>
      </Link>
    </li>
  );
};

export default ProductList;
