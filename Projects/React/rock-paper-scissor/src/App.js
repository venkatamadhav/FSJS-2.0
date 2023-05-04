
import './App.css';
// import {FaHandRock , FaHandPaper, FaHandScissors } from "react-icons/fa"
import PlayerMenu from './components/PlayerMenu.js';
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

function ShowWinner({winner = 0}){
  const text = {
    "-1": "You Win!",
    0: "Its a Tie",
    1: "You Lose!",
  };

  return(
    <h2>{text[winner]}</h2>
  )
}




function App() {
  const [playerAction, setPlayerAction] = useState([]);
  const [computerAction, setComputerAction] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);


  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction);
    const newComputerAction = randomAction();
    setComputerAction(newComputerAction);
    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner)
    if (newWinner === -1){
      setPlayerScore(playerScore + 1);  
    }
    else if (newWinner === 1){
      setComputerScore(computerScore + 1);
    }
  };
  return (
    <div className='main-component'>
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className='player-container'>
        <PlayerMenu name='Player' score={playerScore} action={playerAction}/>
        <PlayerMenu name='Computer' score={computerScore} action={computerAction}/>
        </div>
        <div>
          <Buttons action="rock" onActionSelected={onActionSelected}/>
          <Buttons action="paper" onActionSelected={onActionSelected}/>
          <Buttons action="scissor" onActionSelected={onActionSelected}/>
        </div>
        <ShowWinner winner={winner}/>
      </div>
    </div>
  );
}

export default App;
