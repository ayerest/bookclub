import './App.css';
import React, { useState } from 'react';
import FunctionalComponent from "./BeingJohnMalkovich/FunctionalComponent";
import ClassComponent from './BeingJohnMalkovich/ClassComponent';
// import ClassComponentContainer from './ClassComponentContainer';

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
        />
      </div>
      <div>
        {/* {displayClassComponent && <RenderProps />} */}
        {displayClassComponent && <ClassComponent />}
        {!displayClassComponent && <FunctionalComponent />}
      </div>
    </div>
  );
}

export default App;
