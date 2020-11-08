import React, { Component } from "react";
import ClassGuessingGame from "./ClassGuessingGame";
import WindowResize from "./WindowResize";

// STEP 10: create component to render WindowResize
class ClassComponent extends Component {
  render() {
    return (
      // STEP 11: render props function
      <WindowResize render={windowWidth => (<ClassGuessingGame windowWidth={windowWidth} />)} />
    );
  }
}

export default ClassComponent;
