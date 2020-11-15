import React, { Component } from 'react';
import BeingJohnMalkovich from './BeingJohnMalkovich';
import CameronDiaz from './CameronDiaz';
import CatherineKeener from './CatherineKeener';
import JohnCusack from './JohnCusack';
import RealJohnMalkovich from './RealJohnMalkovich';

class JohnMalkovich extends Component {
  // TODO: fill out render function
  // TODO: add other components or render other ui here?

  personBeingJohnMalkovich = () => {
    switch(this.props.person) {
      case 'John Cusack':
        return <JohnCusack />;
      case 'Cameron Diaz':
        return <CameronDiaz />;
      case 'Catherine Keener':
        return <CatherineKeener />;
      default:
        return <RealJohnMalkovich />;
    }
  }

  render() {
    return (
      <>
        <BeingJohnMalkovich person={this.props.person} render={(jm) => this.personBeingJohnMalkovich()} />
      </>
    )
  }
}

export default JohnMalkovich;