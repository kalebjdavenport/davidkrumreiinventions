import React from "react";

import "./Development.style.scss";

const Development = () => {
  return (
    <a class="nolink" name="about">
      <section id="about" class="about">
        <div class="u-center-text u-margin-bottom-medium">
          <h2 class="heading-secondary">The Ret-Ram is 10x available tools</h2>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">
              This device will give military the ability to move past barriers
            </h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              aspernatur porro nostrum veniam impedit fuga amet in eum at
              tempore fugiat, beatae quae ratione nobis laborum ab odit.
            </p>

            <h3 class="heading-tertiary u-margin-bottom-small">
              This device will help firefighters/first responders break down
              doors and barriers.
            </h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              aspernatur porro nostrum veniam impedit fuga amet in eum at
              tempore fugiat
            </p>
            <a href="#" class="btn-text">
              Learn More &rarr;
            </a>
          </div>
          <div class="col-1-of-2">
            <div class="img-comp">
              <img
                src={require(`../../../assets/about_imgs/primary.jpg`)}
                alt="team"
                class="img-comp__photo img-comp__photo--p1"
              />
              <img
                src={require(`../../../assets/about_imgs/secondary.JPG`)}
                alt="ret-ram"
                class="img-comp__photo img-comp__photo--p2"
              />
              <img
                src={require(`../../../assets/about_imgs/tertiary.JPG`)}
                alt="development"
                class="img-comp__photo img-comp__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </a>
  );
};

export default Development;
