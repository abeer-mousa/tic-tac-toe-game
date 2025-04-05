import { useState } from "react";
import "./player.css";

export default function Player({ initialName, symbol, isActive }) {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(initialName);

  const buttonLable = editing ? "Save" : "Edit";

  const playerName = !editing ? (
    <span className="player-name">{name}</span>
  ) : (
    <input
      type="text"
      required
      defaultValue={name}
      value={name}
      onChange={handleNameChange}
    />
  );

  function handleClicked() {
    /*Note */
    // setEditing(!editing); // Dont do this
    setEditing((editing) => !editing); // Do this when depending on previous state
  }

  function handleNameChange(event) {
    /*Note */
    // setEditing(!editing); // Dont do this
    setName(event.target.value); // Do this when depending on previous state
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClicked}>{buttonLable}</button>
    </li>
  );
}
