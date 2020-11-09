import React, { useState, useEffect } from "react";

const useDocTitle = () => {
  const [guessInput, setGuessInput] = useState('');

  useEffect(() => {
    console.log("document title update");
    document.title = guessInput;
  }, [guessInput]);

  return [guessInput, setGuessInput];
};

export default useDocTitle;