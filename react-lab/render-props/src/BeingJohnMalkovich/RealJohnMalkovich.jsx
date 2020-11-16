import React, { Component } from 'react';
import johnmalkovich from './images/johnmalkovich.jpg';

class RealJohnMalkovich extends Component {  
  render() {
    return (
      <>
        <img className="person" src={johnmalkovich} alt="Still of John Cusack from the movie Being John Malkovich" />
      </>
    )
  }
}

export default RealJohnMalkovich;