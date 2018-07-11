// ########## Import Dependencies Here ##########
import React, { Component } from "react";
// import { arrayOf, shape, func, bool } from 'prop-types';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import * as actions from "../actions";
import Home from "./Home";
import Dashboard from "./Dashboard";

export class App extends Component {
  // componentWillMount() {
  //   const { loadAppAction } = this.props;
  //   loadAppAction();
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  null,
  {
    loadAppAction: actions.loadAppAction
  }
)(App);
