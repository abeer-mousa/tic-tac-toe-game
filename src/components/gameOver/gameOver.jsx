export default function GameOver({ winner, onClick }) {
  return (
    <div id="game-over">
      {winner ? <h2> {winner} won! </h2> : <h2> Game over</h2>}
      <button onClick={onClick}>play</button>
    </div>
  );
}
