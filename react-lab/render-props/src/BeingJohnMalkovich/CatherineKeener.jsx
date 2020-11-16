import React, { Component } from 'react';
import catherinekeener from './images/catherinekeener.jpg'

class CatherineKeener extends Component {
   componentDidMount() {
    this.props.malkovich.inhabit();
    console.log("JohnCusack Component did mount")
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
        <img className="person" src={catherinekeener} alt="Still of Catherine Keener in the movie Being John Malkovich"/> }
      </>
    )
  }
}

export default CatherineKeener;