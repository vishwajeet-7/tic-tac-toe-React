import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Board from "./Board";

function App() {
  // const [squareArray, setSquareArray] = useState(Array(9).fill(null)); //[null,null,..9]
  const [historyArray, setHistoryArray] = useState([Array(9).fill(null)]);
  // const [toggleValueOfSqaure, setToggleValueOfSquare] = useState(false);
  const [currentMove,setCurrentMove] = useState(0)
  const currentArray = historyArray[currentMove];
  const toggleValueOfSqaure = currentMove % 2 !== 0

  const handlePlay = (nextArray) => {
    const nextHistory = [...historyArray.slice(0,currentMove+1),nextArray];
    setHistoryArray(nextHistory); // [[null,null,null],['X',null,null],['x',null,'O']]
    setCurrentMove(nextHistory.length-1)
    // setToggleValueOfSquare(!toggleValueOfSqaure);
  };
const jumpToMove = (nextMove)=>{
  setCurrentMove(nextMove);
  // setToggleValueOfSquare(nextMove % 2 === 0)
}
  const moves = historyArray.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Game move #" + move;
    } else {
      description = "Start the game #" + move;
    }

    return (
      <li>
        <button style={{background:'blue',color:'white',padding:'10px'}} onClick={() => jumpToMove(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="App">
      <div>
        <Board
          xIsNext={toggleValueOfSqaure}
          onPlay={handlePlay}
          squareArray={currentArray}
        />
      </div>

      <div style={{marginTop: "65px"}}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
