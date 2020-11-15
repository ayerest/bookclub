import React, { Component } from 'react';
import newjerseyturnpike from './images/newjerseyturnpike2.png'
// TODO: better naming?

class BeingJohnMalkovich extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inhabitedBy: this.props.person || 'No one', 
      action: 'None',
      kickedOut: false,
    }
  }

  controlJohnMalkovich = (action) => {
    this.setState({action, kickedOut: false})
  }

  kickOut = () => {
    this.setState({inhabitedBy: 'No one', action: 'None', kickedOut: true})
  }

  componentDidMount = () => {
   console.log("render props did mount");
  //  this.timer = setTimeout(() => {
  //     this.kickOut();
  //  }, 5000)
  }

  // shouldComponentUpdate = (props, state) => {
  //   // console.log(props, "props")
  //   // console.log("--------------------")
  //   // console.log(state, "state")
  //   // return true
  // }

  componentDidUpdate = () => {
    console.log("render props did update");

    // this.timer = setTimeout(() => {
    //   this.kickOut();
    // }, 5000)
  }

  componentWillUnmount = () => {
    console.log("render props will unmount");
    // clearTimeout(this.timer);
  }

  render() {
    return (
      <>
      {this.props.render({inhabitedBy: this.props.person, controlJohnMalkovich: this.controlJohnMalkovich})}
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