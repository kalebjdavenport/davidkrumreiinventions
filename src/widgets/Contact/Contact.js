import React from "react";

import "./Contact.style.scss";

const Contact = () => {
  return (
    <section id="contact" className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form name="contact" method="post" className="form">
              <input type="hidden" name="form-name" value="contact" />
              <div className="u-margin-bottom-medium">
                <p className="heading-tertiary">
                  * The RET RAM® battering ram is currently out of production.
                </p>
                <h2 className="heading-secondary contact-title">
                  Request more information on pending development of 2
                  <sup>nd</sup> generation RET RAM&reg;.
                </h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  name="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  name="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <textarea
                  className="form__input form__message"
                  placeholder="Message to Rapid Entry Technologies (optional)"
                  id="message"
                  name="message"
                ></textarea>
                <label htmlFor="message" className="form__label">
                  Message
                </label>
              </div>

              <div className="form__group select u-margin-bottom-medium">
                <label className="select-label" htmlFor="invention[]">
                  Updates For:
                </label>
                <select
                  className="form__select"
                  name="invention[]"
                  id="select-intention"
                >
                  <option value="retram">Ret Ram&reg;</option>
                  <option value="elevated-launcher-sight">
                    Elevated Launcher Sight - ELS&trade;
                  </option>
                </select>
              </div>

              <div className="form__group">
                <button className="btn btn--green">
                  CONFIRM &nbsp; &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
