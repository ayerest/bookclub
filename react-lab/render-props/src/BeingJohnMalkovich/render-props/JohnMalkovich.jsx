import React, { Component } from 'react';
import BeingJohnMalkovich from './BeingJohnMalkovich';
import CameronDiaz from '../CameronDiaz';
import CatherineKeener from '../CatherineKeener';
import JohnCusack from '../JohnCusack';
import RealJohnMalkovich from '../RealJohnMalkovich';
import johnjohn from '../images/johnjohn.jpg';

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

  personBeingJohnMalkovich = (malkovich) => {
    switch(this.state.personSelected) {
      case 'John Cusack':
        return <JohnCusack malkovich={malkovich}/>;
      case 'Cameron Diaz':
        return <CameronDiaz malkovich={malkovich}/>;
      case 'Catherine Keener':
        return <CatherineKeener malkovich={malkovich}/>;
      case 'John Malkovich':
        return <RealJohnMalkovich malkovich={malkovich}/>;        
      default:
        return <img className="person" src={johnjohn} alt="Still of many John Malkovich's from the movie Being John Malkovich" />;
    }
  }

  render() {
    return (
      <div className="component class">
        <h2>Render Props</h2>
        <div>
          <select name="person" id="person" onChange={this.selectPerson}>
            <option value={false}>Select a person</option>
            <option value="John Cusack">John Cusack</option>
            <option value="Cameron Diaz">Cameron Diaz</option>
            <option value="Catherine Keener">Catherine Keener</option>
            <option value="John Malkovich">John Malkovich</option>
          </select>
          <label htmlFor="person">...is being John Malkovich.</label>
        </div>

        <BeingJohnMalkovich person={this.state.personSelected} render={(malkovich) => this.personBeingJohnMalkovich(malkovich)} />
      </div>
    )
  }
}

export default JohnMalkovich;
  
