import React, { Component } from "react";

class ClassGuessingGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessInput: "Guess",
      // windowWidth: window.innerWidth,
      previousGuesses: [],
    };
  }
  
  componentDidMount() {
    console.log("Component did mount");
    document.title = this.state.guessInput;
    // window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    console.log("Component did update");
    document.title = this.state.guessInput;
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    // window.removeEventListener("resize", this.handleResize);
  }

  guessInputChangeHandler = (e) => {
    this.setState({ guessInput: e.target.value });
  };

  guessSubmitHandler = () => {
    this.setState((state, props) => ({
      previousGuesses: [...state.previousGuesses, state.guessInput],
      guessInput: "",
    }));
  };

  render() {
    return (
      <div className="component class">
        <h2>Class Component</h2>
        <p>Window width: {this.props.windowWidth.windowWidth}</p>
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
