import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

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
        <Grid container spacing={1} justify="center">
          <Grid
            container
            item
            xs={6}
            spacing={1}
            direction="column"
            alignItems="center"
          >
          <div className="inputInfo">
            <div className="inputHolder">
              <TextField
                id="filled-basic"
                label="Guess the phrase"
                variant="outlined"
                onChange={this.guessInputChangeHandler}
                value={this.state.guessInput}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={this.guessSubmitHandler}
              >
                Submit Guess
              </Button>
            </div>
          </div>
          <div className="inputHolder">
            <p>Guesses so far...</p>
            {this.state.previousGuesses.length > 0 && (
              <ul>
                {this.state.previousGuesses.map((guess) => (
                  <li key={Math.random()}>{guess}</li>
                ))}
              </ul>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
    );
  }
}

export default ClassGuessingGame;
