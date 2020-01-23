import React from "react";

import "./About.style.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-secondary">
          Ret Ram&reg; &ndash; the world's most versitile battering ram.
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            This device will give military the ability to move past barriers
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aspernatur porro nostrum veniam impedit fuga amet in eum at tempore
            fugiat, beatae quae ratione nobis laborum ab odit.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            This device will help firefighters/first responders break down
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aspernatur porro nostrum veniam impedit fuga amet in eum at tempore
            fugiat
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            This device will help firefighters/first responders break down.
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aspernatur porro nostrum veniam impedit fuga amet in eum at tempore
            fugiat
          </p>
          {/* <a href="#" className="btn-text">
            Learn More &rarr;
          </a> */}
        </div>
        <div className="col-1-of-2">
          <div className="img-comp">
            <img
              src={require(`../../../assets/about_imgs/primary.jpg`)}
              alt="team"
              className="img-comp__photo img-comp__photo--p1"
            />
            <img
              src={require(`../../../assets/about_imgs/secondary.JPG`)}
              alt="ret-ram"
              className="img-comp__photo img-comp__photo--p2"
            />
            <img
              src={require(`../../../assets/about_imgs/tertiary.JPG`)}
              alt="development"
              className="img-comp__photo img-comp__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
