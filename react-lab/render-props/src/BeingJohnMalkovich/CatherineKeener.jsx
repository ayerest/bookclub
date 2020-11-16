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
  render() {
    return (
      <>
        <img className="person" src={catherinekeener} alt="Still of Catherine Keener in the movie Being John Malkovich"/>
      </>
    )
  }
}

export default CatherineKeener;