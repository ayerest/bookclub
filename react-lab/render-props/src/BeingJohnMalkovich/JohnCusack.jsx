import React, { Component } from 'react';
import johncusack from './images/johncusack.jpg';
import mirror from './images/mirror2.jpeg';

class JohnCusack extends Component {
  componentDidMount() {
    this.props.malkovich.inhabit();
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
        {!this.props.malkovich.kickedOut ? (this.props.malkovich.mirror ? <img className="person" src={mirror} alt="John Malkovich looks in the mirror." /> : <img className="person" src={johncusack} alt="Still of John Cusack from the movie Being John Malkovich" />) : null }
      </>
    )
  }
}

export default JohnCusack;