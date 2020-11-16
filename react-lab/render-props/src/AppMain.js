import './App.css';
import React, { useState } from 'react';
import ExampleComponent from './mainexample/ExampleComponent';
import ExampleContainer from './render-props/ExampleContainer';

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
        {displayRenderPropsExample && <ExampleContainer />}
        {!displayRenderPropsExample && <ExampleComponent />}
      </div>
    </div>
  );
}

export default App;
