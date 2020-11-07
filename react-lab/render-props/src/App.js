import './App.css';
import React, { useState } from 'react';
import Switch from "@material-ui/core/Switch";
import Container from "@material-ui/core/Container";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from './ClassComponent';

function App() {
  const [displayClassComponent, setDisplayClassComponent] = useState(true);

  const toggleDisplay = () => {
    setDisplayClassComponent((prevState => !prevState))
  }
  return (
    <Container>
      <p>Toggle Components</p>
      <Switch
        checked={displayClassComponent}
        onChange={toggleDisplay}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Container>
        {displayClassComponent && <ClassComponent />}
        {!displayClassComponent && <FunctionalComponent />}
      </Container>
    </Container>
  );
}

export default App;
