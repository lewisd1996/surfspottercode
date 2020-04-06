import React, { Component } from "react";
import { Context } from "./context";

class Provider extends Component {
  state = {
    difficulty: {
      Novice: true,
      Intermediate: false,
      Expert: false
    }
  };

  setDifficulty = difficulty => {
    this.setState({ difficulty });
  };

  render() {
    return (
      <Context.Provider
        value={{
          difficulty: this.state.difficulty,
          setDifficulty: this.setDifficulty
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;