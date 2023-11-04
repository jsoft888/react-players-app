// src/PlayersList.js
import React from "react";
import Player from "./src/Player.js";
import Players from "./src/Players.js";

const PlayersList = () => {
  return (
    <div className="players-list">
      {Players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
