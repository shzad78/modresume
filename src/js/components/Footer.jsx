// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';

// ########## Import Components Here ##########

const Footer = props => {
  const { footer } = props;

  function scrollToTop() {
    scrollTo(0, 0);
  }

  function renderScrollToTopButton() {
    const { scrollY } = props;
    if (scrollY > 3500) {
      return (
        <div className="scroll-to-top" onClick={() => scrollToTop()}>
          <i className="fas fa-arrow-up fa-lg" />
        </div>
      );
    }
  }

  return (
    <Fragment>
      <div id="footer">
        <div className="wrapper">
          <div className="footer-container">
            <div className="footer-column">
              <img className="footer-logo" src={footer.footerLogo} />
              <p className="footer-description">{footer.footerDescription}</p>
              <p className="footer-disclaimer">{footer.footerDisclaimer}</p>
            </div>
            <div className="footer-column">
              <h4 className="follow-heading">{footer.footerFollowHeading}</h4>
              <div className="social">
                <div className="social-circle">
                  <a
                    className="social-link"
                    href="http://facebook.com"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f fa-lg" />
                  </a>
                </div>
                <div className="social-circle">
                  <a
                    className="social-link"
                    href="http://twitter.com"
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-lg" />
                  </a>
                </div>
                <div className="social-circle">
                  <a
                    className="social-link"
                    href="http://instagram.com"
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-lg" />
                  </a>
                </div>
                <div className="social-circle">
                  <a
                    className="social-link"
                    href="http://linkedin.com"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in fa-lg" />
                  </a>
                </div>
                <div className="social-circle">
                  <a
                    className="social-link"
                    href="http://google.com"
                    target="_blank"
                  >
                    <i className="fab fa-google-plus-g fa-lg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{footer.footerContactHeading}</h4>
              <p className="footer-address">{footer.footerAddress}</p>
              <p className="footer-email">{footer.footerEmail}</p>
            </div>
          </div>
        </div>
        {renderScrollToTopButton()}
      </div>
    </Fragment>
  );
};

export default Footer;
