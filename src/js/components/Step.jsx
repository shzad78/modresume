// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';

// ########## Import Components Here ##########

const Step = props => {
  const { step } = props;
  return (
    <Fragment>
      <div className="step" key={step.id}>
        <div className="step-icon-circle">
          <i className={`fas ${step.stepIcon}`} />
        </div>
        <h5 className="step-label">{step.stepLabel}</h5>
      </div>
    </Fragment>
  );
};

export default Step;
