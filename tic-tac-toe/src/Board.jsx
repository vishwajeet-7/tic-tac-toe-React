import React from "react";
import Button from "./Button";

const Board = ({ xIsNext, onPlay, squareArray }) => {
  const handleClick = (index) => {
    if (squareArray[index] || checkWinner(squareArray)) {
      return;
    }
    const newArray = squareArray.slice();
    if (!xIsNext) {
      // console.log("inside handle click")
      //[null,null]
      newArray[index] = "X";
    } else {
    //[null,null]
      newArray[index] = "O";
    }
    onPlay(newArray);
    // setToggleValueOfSquare(!xIsNext);
  };

  const checkWinner = (squareArray) => {
    let winnerArray = [
      [0, 1, 3],
      [4, 5, 6],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerArray.length; i++) {
      const [a, b, c] = winnerArray[i];
      if (
        squareArray[a] &&
        squareArray[a] === squareArray[b] &&
        squareArray[a] === squareArray[c]
      ) {
        console.log("checking winner", squareArray[a]);
        return squareArray[a];
      }
    }
    return null;
  };

  const winnerOfTheGame = checkWinner(squareArray);
  let status;
  if (winnerOfTheGame) {
    status = "Winner of the game is " + winnerOfTheGame;
  } else {
    status = "Next move is of " + `${!xIsNext ? "X" : "O"}`;
  }
  return (
    <div>
        <div>
        <h1 style={{color:'blue'}}>{status}</h1>
      </div>
      <div>
        <div className="row">
          <Button value={squareArray[0]} onSquareClick={() => handleClick(0)} />
          <Button value={squareArray[1]} onSquareClick={() => handleClick(1)} />
          <Button value={squareArray[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Button value={squareArray[3]} onSquareClick={() => handleClick(3)} />
          <Button value={squareArray[4]} onSquareClick={() => handleClick(4)} />
          <Button value={squareArray[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Button value={squareArray[6]} onSquareClick={() => handleClick(6)} />
          <Button value={squareArray[7]} onSquareClick={() => handleClick(7)} />
          <Button value={squareArray[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      
    </div>
  );
};

export default Board;
