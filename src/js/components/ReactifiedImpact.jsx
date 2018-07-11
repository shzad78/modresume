// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';

// ########## Import Components Here ##########
import Button from "./Button";

const ReactifiedImpact = props => {
  const { reactifiedImpact, openModal, closeModal } = props;
  return (
    <Fragment>
      <div id="reactified-impact">
        <div className="wrapper">
          <h3 className="reactified-impact-heading">
            {reactifiedImpact.sectionHeading}
          </h3>
          <p className="reactified-impact-subtitle">
            {reactifiedImpact.sectionSubtitle}
          </p>
          <p className="reactified-impact-description">
            {reactifiedImpact.sectionDescription}
          </p>
          <div className="button-container">
            <Button
              openModal={openModal}
              closeModal={closeModal}
              buttonText="sign up now"
            />
            <Button
              openModal={openModal}
              closeModal={closeModal}
              buttonText="sign in"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReactifiedImpact;
