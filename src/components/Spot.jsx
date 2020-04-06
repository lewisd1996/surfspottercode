import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";

var owmApiKey = "45337256c20dc4f994cf898688c17897";

var BeginnerIcon = L.icon({
  //SETS UP THE PIN ICON THAT IS USED TO PLOT MARKERS ON THE MAP
  iconUrl: process.env.PUBLIC_URL + "/markers/Green-marker.png",
  iconSize: [41, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

var intIcon = L.icon({
  //SETS UP THE PIN ICON THAT IS USED TO PLOT MARKERS ON THE MAP
  iconUrl: process.env.PUBLIC_URL + "/markers/Red-marker.png",
  iconSize: [41, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

var expertIcon = L.icon({
  //SETS UP THE PIN ICON THAT IS USED TO PLOT MARKERS ON THE MAP
  iconUrl: process.env.PUBLIC_URL + "/markers/Purple-marker.png",
  iconSize: [41, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

export default class Spot extends Component {
  constructor(props) {
    super();
    this.state = {
      county_name: props.county_name,
      latitude: props.latitude,
      longitude: props.longitude,
      spot_id: props.spot_id,
      spot_name: props.spot_name,
      wind_speed: 0
    };
  }

  getWindSpeed = (latitude, longitude) => {
    //THE FUNCTION TO POPULATE THE LIST OF SPOTS USING AXIOS
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${latitude}&appid=${owmApiKey}`
      )
      .then(res => {
        this.setState({
          wind_speed: res.data.wind.speed * 1.944
        });
      });
  };

  componentDidMount() {
    this.getWindSpeed(this.state.latitude, this.state.longitude);
  }

  render() {
    const { spot_name, county_name, wind_speed } = this.state;
    const {
      difficulty: { Calm, Beginner, Intermediate, Expert }
    } = this.props;

    const marker = (
      <Marker
        position={[this.state.latitude, this.state.longitude]}
        icon={this.state.wind_speed < 15 ? BeginnerIcon : this.state.wind_speed < 20 ? intIcon : expertIcon}
        className="Beginner-marker"
      >
        <Popup>
          <p className="marker-label">
            {spot_name + ", " + county_name}
            <br />
            Wind Speed: {wind_speed} knots
            <br />
            Difficulty:
            {wind_speed < 15
              ? " Calm"
              : wind_speed < 20
              ? " Beginner"
              : wind_speed > 25
              ? " Intermediate"
              : " Expert"}
          </p>
        </Popup>
      </Marker>
    );

    if (Calm && !Beginner) return wind_speed < 15 && marker;
    else if (!Calm && Beginner)
      return wind_speed >= 15 && wind_speed < 20 && marker;
    else if (Calm && Beginner) return wind_speed < 25 && marker;
    return null;
  }
}
