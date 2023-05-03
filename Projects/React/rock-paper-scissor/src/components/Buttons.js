import React from 'react'
// import {FaHandRock , FaHandPaper, FaHandScissors } from "react-icons/fa"
// import Player from './components/Player.js';
import ActionIcon from './ActionIcon.js'
function Buttons(action = "rock", onActionSelected) {
  return (
    <button className='btn' onClick={() => onActionSelected(action)}>
    <ActionIcon action={action} size={25}/>
    </button>
  )
}

export default Buttons