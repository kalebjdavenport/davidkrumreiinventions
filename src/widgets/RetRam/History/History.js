import React from "react";
import "./History.style.scss";

const History = () => {
  return (
    <section id="history" className="history">
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-secondary">
          Ret Ram&reg; Additional Information
        </h2>
      </div>
      <div className="history__content">
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="u-margin-bottom-small heading-center">BACKSTORY</h3>
            <p className="paragraph">
              Detroit, March 1993: A single house fire claimed the lives of all
              seven children of the Robinson family. Although the children
              ranged in age, the older children were capable of caring for the
              younger. All the children perished in the home behind security
              bars on the ground floor doors and windows. Because of the
              security bars the children were unable to escape the burning home
              and firefighters were unable to timely gain access to the home to
              rescue the trapped children. Those tragic and preventable deaths
              offered the impetus for the development of the RET RAM® Battering
              Ram.
            </p>
          </div>

          <div className="col-1-of-2">
            <h3 className="u-margin-bottom-small heading-center">
              FIRST GENERATION RET RAM®
            </h3>
            <p className="paragraph">
              The first commercial RET RAM® was first developed over several
              years with the help of Adrian Tools, Adrian MI, Ladysmith
              Machining, Ladysmith, WI and Vector Engineering of Chaska, MN.
              Testing of the ram was done at the Milwaukee School of
              Engineering’s Fluid Power Institute. Formal documentation of the
              ram’s performance was published in an academic paper developed by
              Thomas Labus and inventor David Krumrei. This paper was formally
              presented at the 2011 International Fluid Power Institute
              Exposition in Las Vegas, USA. The RET RAM® testing results were
              also presented to the Department of Homeland Security at a meeting
              at the Milwaukee School of Engineering’s Fluid Power Institute in
              2011.
            </p>
          </div>
        </div>

        <hr />

        <div className="features-row">
          <h3 className="u-margin-bottom-small heading-center">
            FIRST GENERATION RET RAM® FEATURES
          </h3>
          <div className="paragraph">
            The RET RAM® Battering Ram is a single man use close quarters
            battering ram powered by high-pressure compressed air.
            <ul>
              <li>
                The ram is rechargeable at any firehouse/or in the field using
                the same portable air compressors used to fill firefighter's
                SCBA tanks.
              </li>
              <li>
                CGA fittings compatible with firehouse compressors and matched
                for precise filling of air tanks: 2500, 3000, 4500 PSI depending
                on what the firefighters use in their SCBA tanks.
              </li>
              <li>
                Eaton Aeroquip's FD-17 quick disconnect (under pressure) fitting
                for using the ram’s compressed air tank for emergency aid for
                the firefighter.{" "}
              </li>
              <li>
                Changeable battering heads for different circumstances including
                brick breaking heads for rescue through brick or block walls.
              </li>
              <li>Dead man handle on manifold as a safety feature.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
