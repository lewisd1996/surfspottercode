import React, { Component, setState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import main from '../styles/main.scss'
import ReactDOM from "react-dom";
import ControlPanel from "./ControlPanel.js";



var owmApiKey = '45337256c20dc4f994cf898688c17897';

var beginnerIcon = L.icon({ //SETS UP THE PIN ICON THAT IS USED TO PLOT MARKERS ON THE MAP
    iconUrl: process.env.PUBLIC_URL + '/markers/Green-marker.png',
    iconSize: [41,41],
    iconAnchor: [12.5,41],
    popupAnchor: [0, -41]
});

var intIcon = L.icon({ //SETS UP THE PIN ICON THAT IS USED TO PLOT MARKERS ON THE MAP
    iconUrl:  process.env.PUBLIC_URL + '/markers/Red-marker.png',
    iconSize: [41,41],
    iconAnchor: [12.5,41],
    popupAnchor: [0, -41]
});

var expertIcon = L.icon({ //SETS UP THE PIN ICON THAT IS USED TO PLOT MARKERS ON THE MAP
    iconUrl: process.env.PUBLIC_URL + '/markers/Purple-marker.png',
    iconSize: [41,41],
    iconAnchor: [12.5,41],
    popupAnchor: [0, -41]
});

export default class Spot extends Component {
    
    constructor(props) {
        super()
        this.state = {
            county_name: props.county_name,
            latitude: props.latitude,
            longitude: props.longitude,
            spot_id: props.spot_id,
            spot_name: props.spot_name,
            wind_speed: 0,
        }
    }

    getWindSpeed = (latitude, longitude) => {//THE FUNCTION TO POPULATE THE LIST OF SPOTS USING AXIOS
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${latitude}&appid=${owmApiKey}`)
            .then(res => {
                this.setState({
                    wind_speed: (res.data.wind.speed * 1.944)
                });
            });
    }

    componentDidMount() {
        this.getWindSpeed(this.state.latitude,this.state.longitude);
    }

    
    render() {
        return(
        <>
            {(() => {
            if (this.state.wind_speed < 8) {
                return (
                    <Marker position={[this.state.latitude,this.state.longitude]} icon={beginnerIcon} className="beginner-marker">
                    <Popup >
                        <p className="marker-label">{this.state.spot_name + ", " + this.state.county_name}<br/>Wind Speed: {this.state.wind_speed} knots<br/>Difficulty: Beginner</p>
                    </Popup>
                    </Marker>    
                )
            } else if (this.state.wind_speed > 8) {
                return (
                    <Marker position={[this.state.latitude,this.state.longitude]} icon={intIcon}  className="intermediate-marker">
                    <Popup >
                        <p className="marker-label">{this.state.spot_name + ", " + this.state.county_name}<br/>Wind Speed: {this.state.wind_speed} knots<br/>Difficulty: Intermediate</p>
                    </Popup>
                    </Marker>    
                )
            } else if (this.state.wind_speed > 16) {
                return (
                    <Marker position={[this.state.latitude,this.state.longitude]} icon={expertIcon}  className="expert-marker">
                    <Popup >
                        <p className="marker-label">{this.state.spot_name + ", " + this.state.county_name}<br/>Wind Speed: {this.state.wind_speed} knots<br/>Difficulty: Expert</p>
                    </Popup>
                    </Marker>   
                )
            }
            })()}
            </>
        )
    }

}
