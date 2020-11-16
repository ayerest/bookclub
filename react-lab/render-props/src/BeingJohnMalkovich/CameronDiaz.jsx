import React, { Component } from 'react';
import camerondiaz from './images/camerondiaz.jpg';
import mirror from './images/mirror.jpg';

class CameronDiaz extends Component {
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
        {!this.props.malkovich.kickedOut ? (this.props.malkovich.mirror ? <img className="person" src={mirror} alt="John Malkovich looks in the mirror." />:<img className="person" src={camerondiaz} alt="Still of Cameron Diaz in the movie Being John Malkovich"/> ) : null}
      </>
    )
  }
}

export default CameronDiaz;