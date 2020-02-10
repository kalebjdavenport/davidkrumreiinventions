import React from "react";

import "./About.style.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-secondary">
          RET RAM&reg; &ndash; the world's most versitile battering ram.
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Device Description
          </h3>
          <p className="paragraph">
            The RET RAM&reg; Battering Ram is a single man hand held breaching
            device weighing approximately 40 pounds. The Ram carries a self
            contained high pressure air cylinder and is capable of delivering
            quick repeatable multiple blows. The ram can be recharged at any
            fire station, scuba shop or “on site” by portable field compressors.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Exclusive Features
          </h3>
          <p className="paragraph">
            The RET RAM&reg; Battering Ram is equipped with the Eaton/Aeroquip
            FD-17&reg; high pressure disconnect coupling. This coupling is the
            only coupling authorized and demanded by the Department of Homeland
            Security for standardized use by all first responders, Rapid
            Intervention Teams (RIT Teams), and all fire departments nationwide.
            This coupling is exclusive to the RET RAM&reg; and makes the ram not
            only the only pneumatic battering ram on the market, but the only
            ram compatable with a firefighter’s RIT PAK™ air line.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Additional Features
          </h3>
          <p className="paragraph">
            Further, the RET RAM&reg; carries a “buddy breathing” safety
            feature, designed in conjunction with the engineers of
            Eaton/Aeroquip. This makes the RET RAM&reg; not only a superior
            breaching tool, but a life saving source of breathable air for
            firefighters in need.
          </p>
          <a href="#history" className="btn-text">
            Learn More &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="img-comp">
            <img
              src={require(`../../../assets/about_imgs/secondary.JPG`)}
              alt="team"
              className="img-comp__photo img-comp__photo--p1"
            />
            <p className="caption">
              First generation Ret Ram&reg; working model.
            </p>
            <img
              src={require(`../../../assets/about_imgs/DevelopmentInLab.JPG`)}
              alt="ret-ram"
              className="img-comp__photo img-comp__photo--p2"
            />
            <p className="caption">
              Milwaukee School of Engineering's fluid power institute.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
