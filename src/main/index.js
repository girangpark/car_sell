import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import "./index.css";

const data = [
  {
    p_id: "1",
    p_name: "Revuelto",
    p_price: "700,000",
    p_text: "람보르기니 V12 슈퍼카"
  },
  {
    p_id: "2",
    p_name: "Urus",
    p_price: "300,000",
    p_text: "람보르기니 쿠페형 SUV"
  },
  {
    p_id: "3",
    p_name: "K5",
    p_price: "30,000",
    p_text: "기아자동차 중형 세단"
  },
  {
    p_id: "4",
    p_name: "Phantom",
    p_price: "800,000",
    p_text: "롤스로이스 초호화 세단"
  }
];

const MainPage = () => {
  return (
    <div className="main">
      <div className="visual">
        <img src="images/banner1.jpg" alt="배너이미지1" />
      </div>
      <div className="product">
        <h2>차량 목록</h2>
        <ul>
          {data.map((pro) => (
            <ProductList
              key={pro.p_id}
              p_id={pro.p_id}
              p_name={pro.p_name}
              p_price={pro.p_price}
              p_text={pro.p_text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
