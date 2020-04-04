import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import main from '../styles/main.scss';
import SpotList from "./SpotList.js";
import Spot from "./Spot.js";
import axios from 'axios';
import jsonLocations from '../jsonLocations.json';

export default class SurfMap extends Component {

    constructor() {
        super()
        this.state = {
            spots: [], //THE ARRAY THAT WILL HOLD THE LIST OF SURFING SPOTS
        }
        }

    getSpots = () => { //THE FUNCTION TO POPULATE THE LIST OF SPOTS USING AXIOS
       
       axios.get("https://api.jsonbin.io/b/5e8733f193960d63f0782ad5/2")
        .then(res => {
            this.setState({
                spots: res.data
            });
        });

    }

    componentDidMount(){
        this.getSpots();
    }
    
    render() {
        var startPosition = [36.778259, -119.417931] //STARTING POSITION OF THE MAP
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
    }
}








/*
render() {
    var startPosition = [36.778259, -119.417931] //STARTING POSITION OF THE MAP
    return (
        <>
        {this.state.spots.length ? 
            <Map className="map" center={startPosition} zoom={5}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                {this.state.spots.map (spot => //LOOP THROUGH THE LIST OF SPOTS AND CREATE A MARKER FOR EACH ONE TO BE PLOTTED ONTO THE MAP
                    <Marker position={[spot.latitude,spot.longitude]} icon={myIcon}>
                        <Popup>
                            {spot.spot_name + ", " + spot.county_name}
                        </Popup>
                    </Marker>    
                )}
            </Map>:
    <p>loading data....</p>}
  </>
            
    )
}*/
