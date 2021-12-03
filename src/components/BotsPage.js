import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const API = "http://localhost:8002/bots";
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((allTheBots) => setBots(allTheBots));
  }, []);

  function handleAddToArmy(bot) {
    setBots(bots.map(b => (b.id === bot.id ? {...b, inArmy: true } : b )));
  }

  function handleRemoveFromArmy(bot) {
    setBots(bots.map(b => (b.id === bot.id ? {...b, inArmy: false } : b )));
  }

  function fireRobot(bot) {
    fetch(API + "/" + bot.id, {
      method: "DELETE",
    }).then(res => res.json())
      .then(setBots(bots.filter(b => b.id !== bot.id)))
  }

  return (
    <div>
      <YourBotArmy
        bots={bots}
        handleClick={handleRemoveFromArmy}
        fireRobot={fireRobot}
      />
      <BotCollection
        bots={bots}
        handleClick={handleAddToArmy}
        fireRobot={fireRobot}
      />
    </div>
  );
}

export default BotsPage;
