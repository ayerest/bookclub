import React, { Component } from 'react';
import johnmalkovich from './images/johnmalkovich.jpg';

class RealJohnMalkovich extends Component {
  name = 'John Malkovich'
  // TODO: crawl through tunnel could be a render prop too...

  crawlThroughTunnel = () => {
    this.props.jm.controlJohnMalkovich('Raise hand', this.name);
  }
  
  render() {
    console.log(this.props.jm);
    return (
      <>
        <h2>Hi I'm John Malkovich!</h2>
        <img className="person" src={johnmalkovich} alt="Still of John Cusack from the movie Being John Malkovich" />
      </>
    )
  }
}

export default RealJohnMalkovich;