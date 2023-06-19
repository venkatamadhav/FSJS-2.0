import React from 'react'
import {FaHandRock , FaHandPaper, FaHandScissors } from "react-icons/fa"

// function ActionIcon({action, ...props}){
//     const icons = {
//       rock: FaHandRock,
//       paper: FaHandPaper,
//       scissor: FaHandScissors,
//     };
//     const Icon = icons[action]
//     return (<Icon {...props}/>);
// }
 function ActionIcon({action, ...props}){
  const _action = action.action;
  if(_action === "rock"){
    return <FaHandRock {...props}/>
  }
  else if (_action === "paper"){
    return <FaHandPaper {...props}/>
  }
  else if (_action === "scissor"){
    return <FaHandScissors {...props}/>
  }
  else {
    return <FaHandRock {...props}/>
  }
}

export default ActionIcon