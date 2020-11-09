import React, { Component } from "react";
// import withWindowResize from './withWindowResize';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessInput: "Guess",
    };
  }
  
  componentDidMount() {
    document.title = this.state.guessInput;
  }

  componentDidUpdate() {
    document.title = this.state.guessInput;
  }

  guessInputChangeHandler = (e) => {
    this.setState({ guessInput: e.target.value });
  };

  render() {
    return (
      <div className="component class">
        <h2>Class Component</h2>
        <p className="windowWidth">Window width: {this.props.window.windowWidth}</p>
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

// ClassComponent = withWindowResize(ClassComponent);

export default ClassComponent;
