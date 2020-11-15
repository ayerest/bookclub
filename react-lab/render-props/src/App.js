import './App.css';
import React, { useState } from 'react';
import FunctionalComponent from "./BeingJohnMalkovich/FunctionalComponent";
import JohnMalkovich from './BeingJohnMalkovich/JohnMalkovich';

function App() {
  const [displayRenderPropsExample, setDisplayRenderPropsExample] = useState(true);

  const toggleDisplay = () => {
    setDisplayRenderPropsExample((prevState => !prevState))
  }
  return (
    <div className="container">
      <div className="checkbox">
        <p>Display Render Props Example</p>
        <input 
          type="checkbox"
          checked={displayRenderPropsExample}
          onChange={toggleDisplay}
        />
      </div>
      <div>
        {displayRenderPropsExample && <JohnMalkovich />}
        {!displayRenderPropsExample && <FunctionalComponent />}
      </div>
    </div>
  );
}

export default App;
