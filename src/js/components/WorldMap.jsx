// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';

// ########## Import Components Here ##########
import ReactSVG from "react-svg";

const WorldMap = () => {
  return (
    <Fragment>
      <div id="world-map">
        <ReactSVG
          path="/images/world-map.svg"
          svgClassName="svg-class-name"
          svgStyle={{ width: "100%" }}
          className="wrapper-class-name"
        />
      </div>
    </Fragment>
  );
};

export default WorldMap;
