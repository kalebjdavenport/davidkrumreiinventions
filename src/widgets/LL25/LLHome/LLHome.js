import React from "react";

import "./LLHome.style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home" class="llhome">
      <div class="main">
        <div className="jumbo-text">
          <div className="jumbo-text-normal">
            The device that blasts through barriers between
          </div>
          <div className="jumbo-text-bold">First Responders & Firefighters</div>
          <div className="jumbo-text-normal">and those in need of rescue.</div>
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
