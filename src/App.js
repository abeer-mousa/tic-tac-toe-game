import { useState } from "react";
import GameBoard from "./components/gameBoard/gameBoard";
import GameOver from "./components/gameOver/gameOver";
import Log from "./components/log/log";
import Player from "./components/player/palyer";
import { WINNER_MATRIX } from "./constants/winnerMatrix";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  // the active player should be managed here and pass to the components
  // lifting state up.
  const [turns, setTurns] = useState([]);
  const prevTurn = turns;

  const board = getBoard(turns);
  const winner = checkWinner(board);

  function handlePlayerTurn(row, col) {
    setTurns((turn) => [{ row, col, player: getSymbol(turn) }, ...turn]);
  }

  // driven state
  function getSymbol(turns) {
    switch (true) {
      case turns.length === 0:
        return "X";
      case turns[0].player === "O":
        return "X";
      default:
        return "O";
    }
  }

  function handleRestart() {
    setTurns([]);
  }

  function getBoard(turns) {
    console.log("getBoard ******");
    const dummyBoard = initialBoard.map((row) => [...row]);
    if (turns && turns.length > 0) {
      turns.map((turn) => {
        dummyBoard[turn.row][turn.col] = turn.player;
      });
    }
    return dummyBoard;
  }

  function checkWinner(board) {
    console.log("checkWinner ***");
    const win = WINNER_MATRIX.find((pattern) => {
      if (
        board[pattern[0].row][pattern[0].col] &&
        board[pattern[0].row][pattern[0].col] ===
          board[pattern[1].row][pattern[1].col] &&
        board[pattern[0].row][pattern[0].col] ===
          board[pattern[2].row][pattern[2].col]
      ) {
        console.log("winnnnnner");
        console.log(board[pattern[0].row][pattern[0].col]);
        return pattern;
      }
    });
    return win ? board[win[0].row][win[0].col] : undefined;
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="player1"
              symbol="X"
              isActive={getSymbol(turns) === "X"}
            />
            <Player
              initialName="player2"
              symbol="O"
              isActive={getSymbol(turns) === "O"}
            />
          </ol>

          <GameBoard
            handlePlayerTurn={handlePlayerTurn}
            turns={prevTurn}
            board={board}
          />
          {(winner || turns.length === 9) && (
            <GameOver winner={winner} onClick={handleRestart} />
          )}
        </div>
        <ol id="log">
          <Log turns={prevTurn} />
        </ol>
      </main>
    </>
  );
}

export default App;
