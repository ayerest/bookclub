import React, { Component } from 'react';
import catherinekeener from './images/catherinekeener.jpg'

class CatherineKeener extends Component {
  
  render() {
    return (
      <>
        <h2>Hi I'm Catherine Keener!</h2>
        <img className="person" src={catherinekeener} alt="Still of Catherine Keener in the movie Being John Malkovich"/>
      </>
    )
  }
}

export default CatherineKeener;