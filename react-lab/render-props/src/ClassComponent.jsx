import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessInput: "Guess",
      windowWidth: window.innerWidth,
    };
  }
  
  componentDidMount() {
    console.log("Component did mount");
    document.title = this.state.guessInput;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    console.log("Component did update");
    document.title = this.state.guessInput;
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  guessInputChangeHandler = (e) => {
    this.setState({ guessInput: e.target.value });
  };

  render() {
    return (
      <div className="component class">
        <h2>Class Component</h2>
        <p className="windowWidth">Window width: {this.state.windowWidth}</p>
        <input
          type="text"
          id="filled-basic"
          label="Guess the phrase"
          onChange={this.guessInputChangeHandler}
          value={this.state.guessInput}
        />
      </div>
    );
  }
}

export default ClassComponent;
