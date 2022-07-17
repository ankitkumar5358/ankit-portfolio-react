import React from 'react'
import './FloatingDiv.css'


function FlaotingDiv({image,txt1,txt2}) {
  return (
      <div className="floating-div">
            <img src={image}  alt=''/>
            <span> {txt1} </span>
            <br/>
            <span> {txt2} </span>
      </div>
  )
}

export default FlaotingDiv