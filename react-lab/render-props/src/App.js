import './App.css';
import React, { useState } from 'react';
import JohnMalk from './BeingJohnMalkovich/hooks/JohnMalkovich';
import JohnMalkovich from './BeingJohnMalkovich/render-props/JohnMalkovich';

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
        {!displayRenderPropsExample && <JohnMalk />}
      </div>
    </div>
  );
}

export default App;
