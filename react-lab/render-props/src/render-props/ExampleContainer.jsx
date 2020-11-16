import React, { Component } from "react";
import ExampleComponent from "./ExampleComponent";
import DocTitle from "./DocTitle";
import WindowResize from "./WindowResize";

class ExampleContainer extends Component {
  componentDidMount() {
    console.log("Example Container Component did mount");
  }

  componentDidUpdate() {
    console.log("Example Container component did update");
  }
  render() {
    return (
      <>
        <DocTitle>
          {(docTitle) => (
            <WindowResize>
              {(windowResize) => (
                <ExampleComponent 
                  windowResize={windowResize}
                  docTitle={docTitle}/>
              )}
            </WindowResize>
          )}
        </DocTitle>
      </>
    );
  }
}

export default ExampleContainer;
