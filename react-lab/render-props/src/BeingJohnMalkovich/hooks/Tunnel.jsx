import React from 'react';
import newjerseyturnpike from '../images/newjerseyturnpike2.png'

const Tunnel = (props) => {

  return (
    <>
      {props.person && props.kickedOut && 
        <div>
          <h2>{`${props.person} has been kicked out of John Malkovich!`}</h2>
          <img className="NewJersey" src={newjerseyturnpike} alt="Man hurled out of thin air onto the side of the New Jersey Turnpike after being kicked out of John Malkovich"/>
        </div>
      }
      {!props.kickedOut && 
        <div>
          <button onClick={props.lookInTheMirror}>Look in the mirror</button>
        </div>
      }
    </>
  )
}

export default Tunnel;