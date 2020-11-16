import React, { useState } from 'react';
import useMirror from './useMirror';
import useTunnel from './useTunnel';
import CameronDiaz from '../CameronDiaz';
import CatherineKeener from '../CatherineKeener';
import JohnCusack from '../JohnCusack';
import RealJohnMalkovich from '../RealJohnMalkovich';
import johnjohn from '../images/johnjohn.jpg';
import Tunnel from './Tunnel';

const JohnMalk =  () => {
  const [personSelected, setPersonSelected] = useState(false);
  const [mirror, lookInTheMirror] = useMirror();
  const [kickedOut, kickOut, inhabit] = useTunnel();

  const selectPerson = (e) => {
    setPersonSelected(e.target.value)
  }

  const personBeingJohnMalkovich = () => {
    switch(personSelected) {
      case 'John Cusack':
        return <JohnCusack malkovich={{mirror, lookInTheMirror, kickedOut, kickOut, inhabit}}/>;
      case 'Cameron Diaz':
        return <CameronDiaz malkovich={{mirror, lookInTheMirror, kickedOut, kickOut, inhabit}}/>;
      case 'Catherine Keener':
        return <CatherineKeener malkovich={{mirror, lookInTheMirror, kickedOut, kickOut, inhabit}}/>;
      case 'John Malkovich':
        return <RealJohnMalkovich malkovich={{mirror, lookInTheMirror, kickedOut, kickOut, inhabit}}/>;        
      default:
        return <img className="person" src={johnjohn} alt="Still of many John Malkovich's from the movie Being John Malkovich" />;
    }
  }

  return (
    <div className="component functional">
      <h2>Hooks</h2>
      <div>
        <select name="person" id="person" onChange={selectPerson}>
          <option value={false}>Select a person</option>
          <option value="John Cusack">John Cusack</option>
          <option value="Cameron Diaz">Cameron Diaz</option>
          <option value="Catherine Keener">Catherine Keener</option>
          <option value="John Malkovich">John Malkovich</option>
        </select>
        <label htmlFor="person">...is being John Malkovich.</label>
      </div>
      {personSelected && personBeingJohnMalkovich()}
      <Tunnel person={personSelected} lookInTheMirror={lookInTheMirror} kickedOut={kickedOut}/>
    </div>
  )
}

export default JohnMalk;
  
