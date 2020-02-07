import React from "react";

import "./Contact.style.scss";

const Contact = () => {
  return (
    <section id="contact" className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form netlify name="contact" data-netlify="true" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Request more information.</h2>
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
                <label for="name" className="form__label">
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
                <label for="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="send_updates"
                    name="send_updates"
                  />
                  <label for="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Send me updates
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="purchase_inquiry"
                    name="purchase_inquiry"
                  />
                  <label for="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Purchase Inquiry
                  </label>
                </div>
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
