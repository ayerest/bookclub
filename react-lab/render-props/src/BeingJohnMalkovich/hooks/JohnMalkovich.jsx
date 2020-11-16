import React, { useState } from 'react';
import useMirror from './useMirror';
import useMarionette from './useMarionettes';
import useKickOut from './useKickOut';
import CameronDiaz from '../CameronDiaz';
import CatherineKeener from '../CatherineKeener';
import JohnCusack from '../JohnCusack';
import RealJohnMalkovich from '../RealJohnMalkovich';
import johnjohn from '../images/johnjohn.jpg';

const JohnMalk =  () => {
  const [personSelected, setPersonSelected] = useState(false);
  const mirror = useMirror();
  const marionette = useMarionette();
  const fickOut = useKickOut();
  console.log(mirror);
  console.log(fickOut);

  const selectPerson = (e) => {
    setPersonSelected(e.target.value)
  }

  const personBeingJohnMalkovich = () => {
    switch(personSelected) {
      case 'John Cusack':
        return <JohnCusack malkovich={"hi"}/>;
      case 'Cameron Diaz':
        return <CameronDiaz malkovich={"hi"}/>;
      case 'Catherine Keener':
        return <CatherineKeener malkovich={"hi"}/>;
      case 'John Malkovich':
        return <RealJohnMalkovich malkovich={"hi"}/>;        
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
    </div>
  )
}

export default JohnMalk;
  
