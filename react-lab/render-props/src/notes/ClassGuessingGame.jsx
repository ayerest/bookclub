import React, { Component } from "react";

class ClassGuessingGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessInput: "Guess",
      // STEP 1: remove windowWidth from state
      // windowWidth: window.innerWidth,
    };
  }
  
  componentDidMount() {
    console.log("Component did mount");
    document.title = this.state.guessInput;
    // STEP 2a: remove event listener
    // window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    console.log("Component did update");
    document.title = this.state.guessInput;
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    // STEP 2b: remove event listener
    // window.removeEventListener("resize", this.handleResize);
  }

  guessInputChangeHandler = (e) => {
    this.setState({ guessInput: e.target.value });
  };

  render() {
    return (
      <div className="component class">
        <h2>Class Component</h2>
        {/* STEP 3: this.props instead of this.state */}
        <p className="windowWidth">Window width: {this.props.windowWidth.windowWidth}</p>
        <div className="inputHolder">
          <input
            type="text"
            label="Guess the phrase"
            onChange={this.guessInputChangeHandler}
            value={this.state.guessInput}
          />
        </div>
    </div>
    );
  }
}

export default ClassGuessingGame;
