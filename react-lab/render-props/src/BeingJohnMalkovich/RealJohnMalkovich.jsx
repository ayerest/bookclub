import React, { Component } from 'react';

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
      </>
    )
  }
}

export default RealJohnMalkovich;