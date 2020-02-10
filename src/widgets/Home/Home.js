import React from "react";

import "./Home.style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="main">
        <div className="jumbo-text">
          <div className="jumbo-text-normal">
            <span style={{ fontWeight: "bold" }}>RET RAM&reg;</span> Blasts
            through barriers — Developed For
          </div>

          <div className="jumbo-text-bold">Firefighters & First Responders</div>
          <div className="jumbo-text-bold">Law Enforcement</div>
          <div className="jumbo-text-bold">Military</div>
        </div>
        <div className="jumbo-image">
          <div className="image"></div>
        </div>
      </div>

      <FontAwesomeIcon
        style={{ color: "white" }}
        icon={faAngleDown}
        size="2x"
      />
    </section>
  );
};

export default Home;
