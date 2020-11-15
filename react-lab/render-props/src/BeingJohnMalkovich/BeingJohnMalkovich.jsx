import React, { Component } from 'react';
import newjerseyturnpike from './newjerseyturnpike2.png'
// TODO: better naming?

class BeingJohnMalkovich extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inhabitedBy: 'No one', 
      action: 'None',
      kickedOut: false,
    }
  }

  inhabitJohnMalkovich = (name) => {
    this.setState({inhabitedBy: name, kickedOut: false});
  }

  controlJohnMalkovich = (action, name) => {
    this.setState({action, inhabitedBy: name, kickedOut: false})
  }

  kickOut = () => {
    this.setState({inhabitedBy: 'No one', action: 'None', kickedOut: true})
  }

  componentDidMount = () => {
   console.log("render props did mount");
   this.timer = setTimeout(() => {
      this.kickOut();
   }, 5000)
  }

  componentDidUpdate = () => {
    console.log("render props did update");
    this.timer = setTimeout(() => {
      this.kickOut();
    }, 5000)
  }

  componentWillUnmount = () => {
    console.log("render props will unmount");
    clearTimeout(this.timer);
  }

  render() {
    return (
      <>
      {!this.state.kickedOut && 
        this.props.render({inhabitedBy: this.state.inhabitedBy, inhabitJohnMalkovich: this.inhabitJohnMalkovich, controlJohnMalkovich: this.controlJohnMalkovich})}
        {this.state.kickedOut && 
        <div>
          <h2>{`${this.props.person} has been kicked out of John Malkovich!`}</h2>
          <img className="NewJersey" src={newjerseyturnpike} alt="Man hurled out of thin air onto the side of the New Jersey Turnpike after being kicked out of John Malkovich"/>
        </div>
        }
      </>
    )
  }
}

export default BeingJohnMalkovich;