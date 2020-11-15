import React, { Component } from 'react';
import johncusack from './images/johncusack.jpg';

class JohnCusack extends Component {
  name = 'John Cusack'
  // TODO: crawl through tunnel could be a render prop too...

  crawlThroughTunnel = () => {
    this.props.jm.controlJohnMalkovich('Raise hand', this.name);
  }
  
  render() {
    console.log(this.props.jm);
    return (
      <>
        <h2>Hi I'm John Cusack!</h2>
        <img className="person" src={johncusack} alt="Still of John Cusack from the movie Being John Malkovich" />
      </>
    )
  }
}

export default JohnCusack;