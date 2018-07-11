// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';
import { connect } from "react-redux";

// ########## Import Components Here ##########

const HeroPromo = props => {
  const { heroPromo } = props;
  return (
    <Fragment>
      <div key={heroPromo.id} className="hero-promo-item">
        <h4 className="hero-promo-heading">{heroPromo.promoHeading}</h4>
        <p className="hero-promo-description">{heroPromo.promoDescription}</p>
      </div>
    </Fragment>
  );
};

export default HeroPromo;
