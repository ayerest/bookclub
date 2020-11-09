import React, { Component } from "react";

class DocTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessInput: '',
    }
  }

  componentDidMount() {
    console.log("DocTitle did mount");
    document.title = this.state.guessInput;
  }

  componentDidUpdate() {
    console.log("DoctTitle did update");
    document.title = this.state.guessInput;
  }

  componentWillUnmount() {
    console.log("DocTitle will unmount");
  }

  guessInputChangeHandler = (e) => {
    this.setState({ guessInput: e.target.value });
  };

  render() {
    return (
      <div>
        {this.props.children({guessInput: this.state.guessInput, guessInputChangeHandler: this.guessInputChangeHandler})}
      </div>
    )
  }
}

export default DocTitle;