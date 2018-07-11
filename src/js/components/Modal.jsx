// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';
import AriaModal from "react-aria-modal";

// ########## Import Components Here ##########
import Button from "./Button";

const Modal = props => {
  const { openModal, closeModal } = props;
  return (
    <Fragment>
      <div id="modal">
        <AriaModal
          titleText="Signin Modal"
          onExit={() => closeModal()}
          initialFocus=".modal-username-input"
          underlayStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "coloumn"
          }}
        >
          <div id="modal">
            <div className="modal-body-container">
              <div className="modal-signin">
                <h3 className="modal-heading">sign in</h3>
                <h5 className="modal-subtitle">via socials</h5>
                <div className="modal-social-icons">
                  <div className="social-circle">
                    <i className="fab fab fa-google fa-lg" />
                  </div>
                  <div className="social-circle">
                    <i className="fab fa-facebook-f fa-lg" />
                  </div>
                  <div className="social-circle">
                    <i className="fab fa-linkedin-in fa-lg" />
                  </div>
                </div>
                <h5 className="modal-subtitle">or</h5>
                <div className="modal-username">
                  <label className="modal-username-label" htmlFor="user">
                    Username
                  </label>
                  <input
                    className="modal-username-input"
                    id="user"
                    type="text"
                    name="username"
                    placeholder="johndoe"
                  />
                </div>
                <div className="modal-password">
                  <label className="modal-password-label" htmlFor="pass">
                    Password
                  </label>
                  <input
                    className="modal-password-input"
                    id="pass"
                    type="password"
                    name="password"
                    placeholder="********"
                  />
                </div>
                <div className="modal-signin-button">
                  <Button buttonText="sign in" />
                </div>
                <p className="modal-forgot-password">Forgot Password?</p>
              </div>
              <div className="modal-signup">
                <h3 className="modal-heading">sign up</h3>
                <div className="modal-username">
                  <label className="modal-username-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="modal-username-input"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="johndoe"
                  />
                </div>
                <div className="modal-email">
                  <label className="modal-email-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="modal-email-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                  />
                </div>
                <div className="modal-password">
                  <label className="modal-password-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="modal-password-input"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="********"
                  />
                </div>
                <p className="modal-disclaimer">
                  By signing up you agree to{" "}
                  <span className="highlight">Terms of Use</span> and{" "}
                  <span className="highlight">Privacy Policy</span>
                </p>
                <div className="modal-signup-button">
                  <Button buttonText="sign up" />
                </div>
                <p className="modal-have-account">Have an account? Sign In</p>
              </div>
            </div>
          </div>
        </AriaModal>
      </div>
    </Fragment>
  );
};

export default Modal;
