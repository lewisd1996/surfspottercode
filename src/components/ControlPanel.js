import React, { Component } from 'react';
import main from '../styles/main.scss';


export default class ControlPanel extends Component {
    render() {
        return (
            <div className="control-panel">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" ref="novicecheckbox"></input>
                <label className="form-check-label" htmlFor="inlineCheckbox1">Novice</label>
            </div>

            <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" ref="intermediatecheckbox"></input>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Intermediate</label>
            </div>

            <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" ref="expertcheckbox"></input>
            <label className="form-check-label" htmlFor="inlineCheckbox3">Expert</label>
            </div>
        </div>
        )
    }
}
