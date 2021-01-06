import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navigation.styles.scss";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <h1 className="logo">Rapid Entry Technologies, LLC</h1>
      </Link>
      <a
        href="#nav"
        className={`nav__toggle ${mobileMenuOpen && `nav--open`}`}
        role="button"
        aria-expanded="false"
        aria-controls="menu"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        <svg
          className="menuicon"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <title>Toggle Menu</title>
          <g>
            <line
              className="menuicon__bar"
              x1="13"
              y1="16.5"
              x2="37"
              y2="16.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="24.5"
              x2="37"
              y2="24.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="24.5"
              x2="37"
              y2="24.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="32.5"
              x2="37"
              y2="32.5"
            />
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
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="nav-toggl"
        />
        <label htmlFor="nav-toggl" className="menu-button">
          <span className="menu-inactive">Other Patents</span>
          <span className="menu-active">&times; &nbsp;Close Menu </span>
        </label>
        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="/#about"
                onClick={() =>
                  (document.getElementById("nav-toggl").checked = false)
                }
                alt="Invention: occluded eye sight"
                className="navigation__link"
              >
                <span
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1.5rem",
                    display: "block",
                    height: "20px",
                  }}
                >
                  US Patent 10,821,308 B1
                </span>
                Ret-Ram&reg;
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="/#els"
                onClick={() =>
                  (document.getElementById("nav-toggl").checked = false)
                }
                alt="Invention: occluded eye sight"
                className="navigation__link"
              >
                <span
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1.5rem",
                    display: "block",
                    height: "20px",
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
