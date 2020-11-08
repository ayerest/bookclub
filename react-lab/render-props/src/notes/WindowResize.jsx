import React, { Component } from "react";
// STEP 4: create new component for window resize logic
class WindowResize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // STEP 5: windowwidth in state
      windowWidth: window.innerWidth,
    }
  }
  // STEP 7: resize funtion to update state
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    console.log("window resize did mount");
    // STEP 6: add event listener
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    console.log("window resize will unmount");
    // STEP 8: remove event listener
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        {/* STEP 9: render props */}
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default WindowResize;