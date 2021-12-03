import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botsInArmy, handleClick, fireRobot }) {
  console.log(botsInArmy);

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botsInArmy.map((bot) => {
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
    </div>
  );
}

export default YourBotArmy;
