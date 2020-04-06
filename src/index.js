import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "leaflet/dist/leaflet.css";
import Provider from "./Provider";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

