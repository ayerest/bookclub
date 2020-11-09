import React, { Component } from "react";

class WindowResize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }
  
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };
  
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    console.log("WindowResize will unmount");
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <>
        {this.props.render({windowWidth: this.state.windowWidth})}
      </>
    );
  }
}

export default WindowResize;
