import React from "react";

import "./Footer.style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footernav">
        <div className="footernav__links">
          <div className="link">
            <a className="navlink" href="#">
              Ret Ram&reg;
            </a>
            <span className="underline" />
          </div>
          <div className="link">
            <a className="navlink" href="#">
              LL25&reg; Launcher
            </a>
            <span className="underline" />
          </div>
          <div className="link">
            <a className="navlink" href="#">
              Elevated Eye Sight
            </a>
            <span className="underline" />
          </div>
        </div>
      </div>
      <hr />
      <p>
        <div>Rapid Entry Technologies &copy; 2020</div>
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
      </p>
    </div>
  );
};

export default Footer;
