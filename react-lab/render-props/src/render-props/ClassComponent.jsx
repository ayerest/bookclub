import React, { Component } from "react";
import ClassGuessingGame from "./ClassGuessingGame";
import DocTitle from "./DocTitle";
import WindowResize from "./WindowResize";

class ClassComponent extends Component {
  render() {
    return (
      <DocTitle>
        {
          (docTitle) => (
            <WindowResize>
              {
                (windowResize) => (
                  <ClassGuessingGame windowResize={windowResize} docTitle={docTitle}/>
                )
              }
            </WindowResize>
          )
        }
      </DocTitle>
    );
  }
}

export default ClassComponent;
