import React, { Component } from "react";
import ClassComponent from "./ClassComponent";
import DocTitle from "./DocTitle";
import WindowResize from "./WindowResize";

class ClassComponentContainer extends Component {
  render() {
    return (
      <DocTitle>
        {
          (docTitle) => (
            <WindowResize>
              {
                (windowResize) => (
                  <ClassComponent windowResize={windowResize} docTitle={docTitle}/>
                )
              }
            </WindowResize>
          )
        }
      </DocTitle>
    );
  }
}

export default ClassComponentContainer;
