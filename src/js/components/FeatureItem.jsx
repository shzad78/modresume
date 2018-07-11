// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';
import { connect } from "react-redux";

// ########## Import Components Here ##########

const FeatureItem = props => {
  const { featureItem } = props;
  return (
    <Fragment>
      <div key={featureItem.id} className="feature-item">
        <img className="feature-item-icon" src={featureItem.featureIcon} />
        <h3 className="feature-item-heading">{featureItem.featureHeading}</h3>
        <p className="feature-item-description">
          {featureItem.featureDescription}
        </p>
      </div>
    </Fragment>
  );
};

export default FeatureItem;
