// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';
import Menu from "react-burger-menu/lib/menus/stack";

// ########## Import Components Here ##########
import WorldMap from "./WorldMap";
import HeroPromo from "./HeroPromo";
import Button from "./Button";

const Hero = props => {
  const { hero, openModal, closeModal, stickyMenu, sideMenu } = props;

  function checkWindowSize() {
    const screenSize = window.innerWidth;
    if (screenSize <= 1024) {
      return true;
    } else {
      return false;
    }
  }

  function closeMenu() {
    const { sideMenuClose } = props;
    sideMenuClose();
  }

  function renderResponsiveNavItems() {
    const { hero } = props;
    return hero.navigation.map(item => (
      <a
        key={item.id}
        onClick={() => closeMenu()}
        className="menu-item"
        href={item.link}
      >
        {item.menuItem}
      </a>
    ));
  }

  function renderNavItems() {
    const { hero } = props;
    return hero.navigation.map(item => (
      <ul key={item.id} className="nav">
        <a className="nav-links" href={item.link}>
          <li className="nav-items">{item.menuItem}</li>
        </a>
      </ul>
    ));
  }

  function renderHeroPromo() {
    const { hero } = props;
    return hero.heroPromo.map(item => <HeroPromo heroPromo={item} />);
  }

  return (
    <Fragment>
      <div id="hero">
        <div className="hero">
          <div className="overlay">
            {checkWindowSize() && (
              <Menu isOpen={sideMenu}>{renderResponsiveNavItems()}</Menu>
            )}
            <div
              className={
                stickyMenu ? "navigation-bar-on-scroll" : "navigation-bar"
              }
            >
              <div className="wrapper">
                <div className="logo-container">
                  <a href="/">
                    <img
                      src={
                        stickyMenu
                          ? "/images/modresume-logo.png"
                          : "/images/modresume-logo-white.png"
                      }
                    />
                  </a>
                </div>
                <div className="nav-container">{renderNavItems()}</div>
              </div>
            </div>
            <div className="wrapper">
              {stickyMenu && <div className="filler" />}
              <WorldMap />
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
              <div className="spacer" />
              <div className="hero-promo">{renderHeroPromo()}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
