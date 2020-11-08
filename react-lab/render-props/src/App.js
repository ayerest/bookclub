import './App.css';
import React, { useState } from 'react';
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from './ClassComponent';

function App() {
  const [displayClassComponent, setDisplayClassComponent] = useState(true);

  const toggleDisplay = () => {
    setDisplayClassComponent((prevState => !prevState))
  }
  return (
    <div className="container">
      <div className="checkbox">
        <p>Display Class Component</p>
        <input 
          type="checkbox"
          checked={displayClassComponent}
          onChange={toggleDisplay}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>
      <div>
        {displayClassComponent && <ClassComponent />}
        {!displayClassComponent && <FunctionalComponent />}
      </div>
    </div>
  );
}

export default App;
