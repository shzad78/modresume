// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';
import { connect } from "react-redux";

// ########## Import Components Here ##########
import FeatureItem from "./FeatureItem";

const Features = props => {
  const { features } = props;

  function renderFeatureItems() {
    const { features } = props;
    return features.sectionData.map(item => <FeatureItem featureItem={item} />);
  }

  return (
    <Fragment>
      <div id="features">
        <div className="wrapper">
          <h3 className="features-heading">{features.sectionHeading}</h3>
          {features.sectionDescription && (
            <p className="features-description">
              {features.sectionDescription}
            </p>
          )}
          <div className="feature-item-container">{renderFeatureItems()}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
