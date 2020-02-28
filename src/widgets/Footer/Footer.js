import React from "react";

import { Link } from "react-router-dom";

import "./Footer.style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footernav">
        <div className="footernav__links">
          <div className="link">
            <Link to="/#home" className="navlink">
              RET RAM&reg;
            </Link>
            <span className="underline" />
          </div>
          {/* <div className="link">
            <Link to="/ll25#" className="navlink">
              LL25&reg; Launcher
            </Link>
            <span className="underline" />
          </div> */}
          <div className="link">
            <Link to="/#els" className="navlink">
              Elevated Launcher Sight - ELS&trade;
            </Link>
            <span className="underline" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-row">
        <div>Rapid Entry Technologies COPYRIGHT &copy; 2020, All rights reserved.</div>
        <div>
          developed by{" "}
          <a
            className="navlink"
            rel="noopener noreferrer"
            target="_blank"
            href="http://theearlynerd.org"
          >
            Wow Your Client
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
