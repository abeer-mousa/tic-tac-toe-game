import "./gameBoard.css";

export default function GameBoard({ handlePlayerTurn, turns = [], board }) {
  // driven state
  console.log(board);
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((item, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={item !== null}
                  onClick={() => handlePlayerTurn(rowIndex, colIndex)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
