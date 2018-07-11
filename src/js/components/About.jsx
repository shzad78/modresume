// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';

// ########## Import Components Here ##########

const About = props => {
  const { about } = props;
  return (
    <Fragment>
      <div id="about">
        <div className="container">
          <div className="text-container">
            <h3 className="about-heading">{about.sectionHeading}</h3>
            <p className="about-description">{about.sectionDescription}</p>
          </div>
          <div className="image-container">
            <div className="about-image" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
