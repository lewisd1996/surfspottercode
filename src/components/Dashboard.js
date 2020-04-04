import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import main from '../styles/main.scss'
import SurfMap from './SurfMap.js'
import ControlPanel from './ControlPanel.js';
import Spot from './Spot.js';
import SpotList from './SpotList.js';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__control-panel">
                    <ControlPanel />
                    
                </div>
                    <SurfMap />
            </div>
        )
    }
}
