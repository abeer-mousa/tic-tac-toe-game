export default function Logs({ turns }) {
  return (
    <>
      {turns.map((turn) => (
        <li key={`${turn.row},${turn.col}`}>
          player: {turn.player} | Box: {turn.row}, {turn.col}
        </li>
      ))}
    </>
  );
}
