import React, { Component } from "react";
import ClassGuessingGame from "./ClassGuessingGame";
import WindowResize from "./WindowResize";

class ClassComponent extends Component {

  render() {
    return (

      <WindowResize render={windowWidth => (<ClassGuessingGame windowWidth={windowWidth} />)} />
    );
  }
}

export default ClassComponent;
