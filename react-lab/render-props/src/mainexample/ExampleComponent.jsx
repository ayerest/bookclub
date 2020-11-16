import React from "react";
import useWindowWidth from '../hooks/useWindowWidth';
import useDocTitle from '../hooks/useDocTitle';

const ExampleComponent = () => {
  const [guessInput, setGuessInput] = useDocTitle();
  const windowWidth = useWindowWidth();

  const guessInputChangeHandler = (e) => {
    setGuessInput(e.target.value);
  }

  return (
    <div className="component functional">
      <h2>Hooks Example</h2>
      <p className="windowWidth">Window width: {windowWidth}</p>
      <input
        type="text"
        label="Guess the phrase"
        onChange={guessInputChangeHandler}
        value={guessInput}
      />
    </div>
  );
};

export default ExampleComponent;