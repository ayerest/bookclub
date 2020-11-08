import React, { useState, useEffect } from "react";

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
  const windowWidth = useCustomHook();

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
      <p>Window width: {windowWidth}</p>
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