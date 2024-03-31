import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="inner">
          <div>
            <h2>무통장입금계좌</h2>
            <div>
              <p>BANK ACCOUNT</p>
              <p>신한은행 - 110-249-719350</p>
              <p>예금주 - 박기랑</p>
            </div>
          </div>
          <div>
            <h2>고객센터</h2>
            <div>
              <p>
                영업시간 이외에는 문의 게시판을 이용해주시면 당담자 확인 후 빠른
                답변 도와드리겠습니다.
              </p>
              <p>010-7129-3195</p>
            </div>
          </div>
          <div>
            <h2>공지사항</h2>
            <ul>
              <li>안전운전 가이드</li>
              <li>신차 입고 안내 </li>
             
            </ul>
          </div>
        </div>
      </div>
      <div className="footermenu">
        <div className="inner">
          <ul>
            <li>홈</li>
            <li>매장안내</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
      </div>
      <div className="address">
        <div className="inner">
          상호 : 자동차 마켓 주소 : 고양시 덕양구 대덕산로147 대표전화 :
          국번없이 010-7129-3195 대표이사 : 박기랑 개인정보관리자 : 박기랑
          사업자 등록번호 : 211-21-151511 copyright(c) G&P, .LTD all rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
