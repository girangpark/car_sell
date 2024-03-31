import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">G&P 자동차 마켓</Link>
      </h1>
      <ul>
        <li>외제차</li>
        <li>국산차</li>
        <li>
          <Link to="/upload">중고차 등록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
