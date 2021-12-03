import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleClick, fireRobot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => {
          return (
            <BotCard
              bot={bot}
              key={bot.id}
              handleClick={handleClick}
              fireRobot={fireRobot}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
