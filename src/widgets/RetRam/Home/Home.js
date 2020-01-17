import React from "react";

import "./Home.style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home" class="home">
      <div class="main">
        <div className="jumbo-text">
          <div className="jumbo-text-normal">
            The device that blasts through barriers between
          </div>
          <div className="jumbo-text-bold">
            Military <span>|</span> First Responders <span>|</span> Firefighters
          </div>
          <div className="jumbo-text-normal">and those in need of rescue</div>
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
