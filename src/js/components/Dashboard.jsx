// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { arrayOf, shape, func, bool } from 'prop-types';
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import DashboardHome from "./Dashboard/DashboardHome";

const Dashboard = () => {
  return (
    <Fragment>
      <DashboardHome />
    </Fragment>
  );
};

export default Dashboard;
