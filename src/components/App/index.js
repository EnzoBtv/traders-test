import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import Home from "../../pages/Home";
import "../../assets/styles/Shared.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </>
    );
  }
}
