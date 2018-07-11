// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';

// ########## Import Components Here ##########

const Contact = props => {
  const { contact } = props;
  return (
    <Fragment>
      <div id="contact">
        <div className="wrapper">
          <h3 className="contact-heading">{contact.sectionHeading}</h3>
          <p className="contact-subtitle">{contact.sectionSubtitle}</p>
          <div className="contact-form-container">
            <form className="contact-form">
              <input
                className="contact-field"
                type="text"
                name="name"
                placeholder={contact.contactFormNamePlaceholder}
                required
              />
              <input
                className="contact-field"
                type="email"
                name="email"
                placeholder={contact.contactFormEmailPlaceholder}
                required
              />
              <textarea
                className="contact-field"
                rows="4"
                cols="75"
                type="textarea"
                name="message"
                placeholder={contact.contactFormMessagePlaceholder}
                required
              />
              <input className="contact-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
