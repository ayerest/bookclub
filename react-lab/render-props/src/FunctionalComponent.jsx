import React from "react";
import useWindowWidth from './hooks/useWindowWidth';
import useDocTitle from './hooks/useDocTitle';

const FunctionalComponent = () => {
  const [guessInput, setGuessInput] = useDocTitle();
  const windowWidth = useWindowWidth();

  const guessInputChangeHandler = (e) => {
    setGuessInput(e.target.value);
  }

  return (
    <div className="component functional">
      <h2>Functional Component</h2>
      <p className="windowWidth">Window width: {windowWidth}</p>
      <div className="inputHolder">
        <input
          type="text"
          label="Guess the phrase"
          onChange={guessInputChangeHandler}
          value={guessInput}
        />
      </div>
    </div>
  );
};

export default FunctionalComponent;