// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';

// ########## Import Components Here ##########

const Button = props => {
  const { buttonText, openModal, closeModal } = props;
  return (
    <Fragment>
      <div id="button" onClick={() => openModal()}>
        <a className="button-text">{buttonText}</a>
      </div>
    </Fragment>
  );
};

export default Button;
