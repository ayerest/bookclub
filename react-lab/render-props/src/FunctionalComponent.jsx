import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useCustomHook = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
   useEffect(() => {
    console.log("window width");
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth]);
  return windowWidth;
}

const FunctionalComponent = ({ thisThing, thisOtherThing }) => {
  const [guessInput, setGuessInput] = useState('');
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const windowWidth = useCustomHook();

  useEffect(() => {
    console.log("document title update");
    document.title = guessInput;
  }, [guessInput]);

  const guessInputChangeHandler = (e) => {
    setGuessInput(e.target.value);
  }

  const guessSubmitHandler = () => {
    setPreviousGuesses(prevState => [...prevState, guessInput]);
  }
  return (
    <div className="component">
      <h2>Functional Component</h2>
      <p>Window width: {windowWidth}</p>

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
              onChange={guessInputChangeHandler}
              value={guessInput}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={guessSubmitHandler}
            >
              Submit Guess
            </Button>
          </div>
        </div>
        <div className="inputHolder">
          <p>Guesses so far...</p>
          {previousGuesses.length > 0 && (
            <ul>
              {previousGuesses.map((guess) => (
                <li key={Math.random()}>{guess}</li>
              ))}
            </ul>
          )}
        </div>
      </Grid>
    </Grid>
  </div>
  );
};

export default FunctionalComponent;