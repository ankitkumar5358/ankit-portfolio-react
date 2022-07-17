import React from 'react'
import './Card.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Card = ({emoji, heading, detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='card'>
      <img src={emoji} alt='' />
      <span  style={{color : darkMode ? 'yellow' : 'black'}}> {heading} </span>
      <span  style={{color : darkMode ? 'white' : 'black'}}> {detail} </span>
      <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card