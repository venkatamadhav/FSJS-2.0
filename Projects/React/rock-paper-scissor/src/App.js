
import './App.css';
// import {FaHandRock , FaHandPaper, FaHandScissors } from "react-icons/fa"
import Player from './components/Player.js';
import Buttons from './components/Buttons.js';
import { useState } from 'react';
// import ActionIcon from './components/ActionIcon.js'


const actions = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper",
};
function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculateWinner(action1, action2){
    if(action1 === action2){
      return 0;
    }
    else if (actions[action1] === action2){
      return -1;
    }
    else if (actions[action2] === action1){
      return 1;
    }

    return null;
}

function App() {
  const [playerAction, setPlayerAction] = useState([]);
  const [computerAction, setComputerAction] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);



  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction);
    const newComputerAction = randomAction();
    setComputerAction(newComputerAction);
    const winner = calculateWinner(selectedAction, newComputerAction);
    if (winner === -1){
      setPlayerScore(playerScore + 1);  
    }
    else if (winner === 1){
      setComputerScore(computerScore + 1);
    }
  }
  return (
    <div className='main-component'>
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className='player-container'>
        <Player name='Player' score={playerScore} action={playerAction}/>
        <Player name='Computer' score={computerScore} action={computerAction}/>
        </div>
        <div>
          <Buttons action="rock" onActionSelected={onActionSelected}/>
          <Buttons action="paper" onActionSelected={onActionSelected}/>
          <Buttons action="scissor" onActionSelected={onActionSelected}/>
        </div>
        <h2>Player 1 Wins</h2>
      </div>
    </div>
  );
}

export default App;
