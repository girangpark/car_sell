import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";


const data = [
  {
    p_id: "1",
    p_name: "Revuelto",
    p_price: "700,000",
    p_text: "람보르기니 V12 슈퍼카",
    
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
    p_name: "PHANTOM",
    p_price: "800,000",
    p_text: "롤스로이스 대형 세단"
  }
];

const ProductPage = () => {
  const { p_id } = useParams();
  const product = data.find((item) => item.p_id === p_id);


  const { p_price } = product;

  return (
    <div className="productDetail">
      <h2>베스트 셀러</h2>
      <div className="productImg">
        <img src={`../carimg/s${p_id}.JPG`} alt="" />
      </div>
      <div>
        <p>자동차 연간 베스트</p>
        <p>프리미엄 자동차</p>
        <p>가격 : ${p_price}</p>
        <p>무료배송</p>
      </div>
    </div>
  );
};

export default ProductPage;
