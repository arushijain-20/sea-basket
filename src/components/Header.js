import React from "react";
import "./../css/Header.css";
import Logo from "./../images/logo 1.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header_logo" src={Logo} alt="logo" />
      <div className="header_nav">
        <div className="header_option"><a href="#categories">Category</a></div>
        <div className="header_option"> <a href="#faq"> FAQs</a></div>
        <div className="header_option"><a href="/">My Cart </a></div>
        <div className="header_option">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
