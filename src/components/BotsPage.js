import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const API = "http://localhost:8002/bots";

  const [bots, setBots] = useState([]);
  const [botsInArmy, setBotsInArmy] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((allTheBots) => setBots(allTheBots));
  }, []);

  function handleAddToArmy(bot) {
    const botIsAlreadyInArmy = botsInArmy.find((b) => b.id === bot.id);
    if (botIsAlreadyInArmy) {
      return;
    }
    setBotsInArmy([...botsInArmy, bot]);
  }

  function handleRemoveFromArmy(bot) {
    const newArray = botsInArmy.filter((aBot) => aBot.id !== bot.id);
    setBotsInArmy(newArray);
  }

  function fireRobot(e, bot) {
    e.stopPropagation();

    fetch(API + "/" + bot.id, {
      method: "DELETE",
    }).then((res) => res.json());

    const newListOfBots = bots.filter((aBot) => aBot.id !== bot.id);
    setBots(newListOfBots);

    const newBotArmy = botsInArmy.filter((aBot) => aBot.id !== bot.id);
    setBotsInArmy(newBotArmy);
  }

  return (
    <div>
      <YourBotArmy
        botsInArmy={botsInArmy}
        handleClick={handleRemoveFromArmy}
        fireRobot={fireRobot}
      />
      <BotCollection
        bots={bots}
        handleAddToArmy={handleAddToArmy}
        fireRobot={fireRobot}
      />
    </div>
  );
}

export default BotsPage;
