import React, { Component } from "react";

class WindowResize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    }
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    console.log("window resize did mount");
    window.addEventListener('resize', this.handleResize);
  }

  // componentDidUpdate() {
  //   console.log("window resize did update")
  // }

  componentWillUnmount() {
    console.log("window resize will unmount");
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        {this.props.children({windowWidth: this.state.windowWidth})}
      </div>
    )
  }
}

export default WindowResize;