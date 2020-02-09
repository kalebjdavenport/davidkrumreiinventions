import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navigation.styles.scss";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <h1 className="logo">Rapid Entry Technologies</h1>
      </Link>
      <a
        href="#nav"
        class={`nav__toggle ${mobileMenuOpen && `nav--open`}`}
        role="button"
        aria-expanded="false"
        aria-controls="menu"
        onClick={() => setMobileMenuOpen(prev => !prev)}
      >
        <svg
          class="menuicon"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <title>Toggle Menu</title>
          <g>
            <line class="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5" />
            <line class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
            <line class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
            <line class="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5" />
          </g>
        </svg>
      </a>

      <div className="links">
        <div className="content-links">
          <a
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
            href="/"
          >
            Home
          </a>
          <a
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
            href="#about"
          >
            About
          </a>
          <a
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
            href="#development"
          >
            Development
          </a>
          <a
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
            href="#contact"
          >
            Contact
          </a>
        </div>
        <input type="checkbox" class="navigation__checkbox" id="nav-toggl" />
        <label for="nav-toggl" className="menu-button">
          <span className="menu-inactive">Other Patents</span>
          <span className="menu-active">&times; &nbsp;Close Menu </span>
        </label>
        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <Link
                to="/"
                className="logo-container"
                onClick={() =>
                  (document.getElementById("nav-toggl").checked = false)
                }
                class="navigation__link"
              >
                <span
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1.5rem",
                    display: "block",
                    height: "20px"
                  }}
                >
                  US Patent 9,155,918 B2
                </span>
                Ret-Ram&reg;
              </Link>
            </li>
            {/* <li class="navigation__item">
              <Link
                to="/ll25"
                className="logo-container"
                onClick={() =>
                  (document.getElementById("nav-toggl").checked = false)
                }
                class="navigation__link"
              >
                <span style={{ fontSize: "2.7rem" }}>Less Lethal Weapon</span>-
                LL25&reg;
              </Link>
            </li> */}
            <li class="navigation__item">
              <a href="/#els" alt="Invention Three" class="navigation__link">
                <span
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1.5rem",
                    display: "block",
                    height: "20px"
                  }}
                >
                  US Patent 9,459,075 B1
                </span>
                ELS&trade;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
