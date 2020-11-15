import React, { Component } from 'react';
import camerondiaz from './camerondiaz.jpeg';

class CameronDiaz extends Component {
  
  render() {
    return (
      <>
        <h2>Hi I'm Cameron Diaz!</h2>
        <img className="person" src={camerondiaz} alt="Still of Cameron Diaz in the movie Being John Malkovich"/>
      </>
    )
  }
}

export default CameronDiaz;