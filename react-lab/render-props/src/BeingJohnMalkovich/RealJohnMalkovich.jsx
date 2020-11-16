import React, { Component } from 'react';
import johnmalkovich from './images/johnmalkovich.jpg';

class RealJohnMalkovich extends Component {
  componentDidMount() {
    this.props.malkovich.inhabit();
    this.timer = setTimeout(() => {
      this.props.malkovich.kickOut();
    }, 5000)
  }

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  }
  render() {
    return (
      <>
        {!this.props.malkovich.kickedOut &&
        <img className="person" src={johnmalkovich} alt="Still of John Cusack from the movie Being John Malkovich" /> }
      </>
    )
  }
}

export default RealJohnMalkovich;