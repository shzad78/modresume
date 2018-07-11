// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';
import { connect } from "react-redux";

// ########## Import Components Here ##########

const ResponsiveResume = props => {
  const { responsiveResume } = props;
  return (
    <Fragment>
      <div id="responsive-resume">
        <div className="wrapper">
          <h3 className="responsive-resume-heading">
            {responsiveResume.sectionHeading}
          </h3>
          <p className="responsive-resume-subtitle">
            {responsiveResume.sectionSubtitle}
          </p>
          <img
            className="responsive-resume-image"
            src={responsiveResume.sectionImage}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ResponsiveResume;
