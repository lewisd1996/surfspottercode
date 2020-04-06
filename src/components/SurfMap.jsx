import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import axios from "axios";
import { Context } from "../context";
import Spot from "./Spot";

export default class SurfMap extends Component {
  constructor() {
    super();
    this.state = {
      spots: [] //THE ARRAY THAT WILL HOLD THE LIST OF SURFING SPOTS
    };
  }

  getSpots = () => {
    //THE FUNCTION TO POPULATE THE LIST OF SPOTS USING AXIOS

    axios
      .get("https://api.jsonbin.io/b/5e8733f193960d63f0782ad5/8")
      .then(res => {
        this.setState({
          spots: res.data
        });
      });
  };

  componentDidMount() {
    this.getSpots();
  }

  render() {
    const startPosition = [36.778259, -119.417931]; //STARTING POSITION OF THE MAP
    return (
      <>
        {this.state.spots.length ? (
          <Map
            className="map"
            center={startPosition}
            zoom={5}
            style={{ height: "100%" }}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <>
              <Context.Consumer>
                {({ difficulty }) =>
                  this.state.spots.map((
                    spot,
                    spotIndex //LOOP THROUGH THE LIST OF SPOTS AND CREATE A SPOT FOR EACH ONE TO BE PLOTTED ONTO THE MAP
                  ) => (
                    <Spot key={spotIndex} {...spot} difficulty={difficulty} />
                  ))
                }
              </Context.Consumer>
            </>
          </Map>
        ) : (
          <p>loading data....</p>
        )}
      </>
    );
  }
}








/*
render() {
    return (
            <>
            {this.state.spots.length ? 
                <Map className="map" center={startPosition} zoom={5}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    {this.state.spots.map (spot => //LOOP THROUGH THE LIST OF SPOTS AND CREATE A SPOT FOR EACH ONE TO BE PLOTTED ONTO THE MAP
                        <Spot {...spot} />
                    )}
                </Map>:
                
        <p>loading data....</p>}
      </>
            
    )
}*/
