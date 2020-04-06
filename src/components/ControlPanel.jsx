import React, { Component } from "react";
import { Context } from "../context";

class ControlPanel extends Component {
  state = { Calm: false, Beginner: false, Intermediate: false, Expert: false };

  handleInputChange = event => {
    const target = event.target;
    const checked = target.checked;
    const name = target.name;

    this.setState({
      [name]: checked
    });

    const difficulty = { ...this.state };
    difficulty[name] = checked;
    this.props.setDifficulty(difficulty);
  };

  render() {
    const levels = ["Calm", "Beginner", "Intermediate", "Expert"];

    return (
      <div className="control-panel">
        {levels.map((level, levelIndex) => (
          <div className="form-check form-check-inline" key={levelIndex}>
            <input
              className="form-check-input"
              type="checkbox"
              name={level}
              checked={this.state[level]}
              onChange={this.handleInputChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              {level}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default props => (
  <Context.Consumer>
    {({ setDifficulty }) => (
      <ControlPanel {...props} setDifficulty={setDifficulty} />
    )}
  </Context.Consumer>
);