import React, { useState, useEffect } from "react";
import useWindowWidth from './hooks/useWindowWidth';

const FunctionalComponent = ({ thisThing, thisOtherThing }) => {
  const [guessInput, setGuessInput] = useState('');
  const windowWidth = useWindowWidth();

  useEffect(() => {
    console.log("document title update");
    document.title = guessInput;
  }, [guessInput]);

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