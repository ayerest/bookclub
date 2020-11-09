import React, { Component } from "react";

class ClassGuessingGame extends Component {
  render() {
    return (
      <div className="component class">
        <h2>Class Component</h2>
        <p className="windowWidth">Window width: {this.props.windowResize.windowWidth}</p>
        <input
          type="text"
          label="Guess the phrase"
          onChange={this.props.docTitle.guessInputChangeHandler}
          value={this.props.docTitle.guessInput}
        />
    </div>
    );
  }
}

export default ClassGuessingGame;
