import React, { Component } from 'react';
import newjerseyturnpike from '../images/newjerseyturnpike2.png'

class BeingJohnMalkovich extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kickedOut: false,
      mirror: false,
    }
  }

  inhabit = () => {
    this.setState({kickedOut: false});
  }

  lookInTheMirror = () => {
    this.setState({mirror: !this.state.mirror});
  }

  kickOut = () => {
    this.setState({kickedOut: true, mirror: false})
  }

  componentDidMount = () => {
   console.log("render props did mount");
  }

  componentDidUpdate = () => {
    console.log("render props did update");
  }

  componentWillUnmount = () => {
    console.log("render props will unmount");
  }

  render() {
    return (
      <>
        {this.props.render({inhabit: this.inhabit, mirror: this.state.mirror, kickOut: this.kickOut, kickedOut: this.state.kickedOut})}
        {this.state.kickedOut &&
          <div>
            <h2>{`${this.props.person} has been kicked out of John Malkovich!`}</h2>
            <img className="NewJersey" src={newjerseyturnpike} alt="Man hurled out of thin air onto the side of the New Jersey Turnpike after being kicked out of John Malkovich"/>
          </div>
        }
        <div>
          <button onClick={this.lookInTheMirror}>Look in the mirror</button>
        </div>
      </>
    )
  }
}

export default BeingJohnMalkovich;