import React from "react";

import { Link } from "react-router-dom";
import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <h1 className="logo">Ret Ram</h1>
      </Link>
      <div className="links">
        <a className="nav-link" href="#home">
          Home
        </a>
        <a className="nav-link" href="#about">
          About
        </a>
        <Link className="nav-link" href="#development">
          Development
        </Link>
        <a className="menu-button" href="#navigation">
          Other Patents
        </a>
      </div>
    </div>
  );
};

export default Navigation;
