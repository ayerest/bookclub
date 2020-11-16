import React from 'react';
import WindowResize from './WindowResize';

function withWindowResize(Component) {
  return class extends React.Component {
    render() {
      return (
        <WindowResize render={injectedState => (
          <Component {...this.props} window={injectedState} />
        )}/>
      );
    }
  }
}

export default withWindowResize;