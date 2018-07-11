// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';

// ########## Import Components Here ##########
import Step from "./Step";

const HowItWorks = props => {
  const { howItWorks } = props;

  function renderSteps() {
    const { howItWorks } = props;
    return howItWorks.sectionSteps.map(item => <Step step={item} />);
  }

  return (
    <Fragment>
      <div id="how-it-works">
        <div className="wrapper">
          <h3 className="how-it-works-heading">{howItWorks.sectionHeading}</h3>
          <p className="how-it-works-subtitle">{howItWorks.sectionSubtitle}</p>
          <div className="steps-container">{renderSteps()}</div>
          <div className="text-container">
            <div className="main-para">
              <h5 className="main-para">
                {howItWorks.sectionSteps[0].stepMainPara}
              </h5>
            </div>
            <div className="sub-para">
              <p className="sub-para">
                {howItWorks.sectionSteps[0].stepSubPara}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HowItWorks;
