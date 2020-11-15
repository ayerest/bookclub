import React, { Component } from 'react';
import BeingJohnMalkovich from './BeingJohnMalkovich';
import CameronDiaz from './CameronDiaz';
import CatherineKeener from './CatherineKeener';
import JohnCusack from './JohnCusack';
import RealJohnMalkovich from './RealJohnMalkovich';

class JohnMalkovich extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personSelected: false
    }
  }

  selectPerson = (e) => {
    this.setState({personSelected: e.target.value})
  }

  personBeingJohnMalkovich = (jm) => {
    switch(this.state.personSelected) {
      case 'John Cusack':
        return <JohnCusack jm={jm}/>;
      case 'Cameron Diaz':
        return <CameronDiaz jm={jm}/>;
      case 'Catherine Keener':
        return <CatherineKeener jm={jm}/>;
      default:
        return <RealJohnMalkovich jm={jm}/>;
    }
  }

  render() {
    return (
      <div className="component class">
        <h2>Render Props</h2>
        <label htmlFor="person">John Malkovich is...</label>
        <select name="person" id="person" onChange={this.selectPerson}>
          <option value={false}>Select a person</option>
          <option value="John Cusack">John Cusack</option>
          <option value="Cameron Diaz">Cameron Diaz</option>
          <option value="Catherine Keener">Catherine Keener</option>
        </select>

        <BeingJohnMalkovich person={this.state.personSelected} render={(jm) => this.personBeingJohnMalkovich(jm)} />
      </div>
    )
  }
}

export default JohnMalkovich;
  
