import React, { Component } from 'react';
import ClassComponent from './ClassComponent2';
import WindowResize from './WindowResize';

class ClassComponentContainer extends Component {
  render() {
    return (
      <>
        <WindowResize render={(injectedState) => <ClassComponent window={injectedState} />}/>
      </>
    )
  }
}

export default ClassComponentContainer;