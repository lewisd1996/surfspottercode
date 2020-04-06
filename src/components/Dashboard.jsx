import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SurfMap from "./SurfMap.jsx";
import ControlPanel from "./ControlPanel.jsx";
import main from "../styles/main.scss";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__control-panel">
          <ControlPanel />
        </div>
        <SurfMap />
      </div>
    );
  }
}
