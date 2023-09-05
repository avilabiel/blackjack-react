import { ReactElement, useState } from "react";
import BlackjackGame from "../../entities/blackjack-game";
import Game from "../../entities/game";

export default function StartGame(): ReactElement {
  const [game, setGame] = useState<Game | null>(null);

  const playersAmount = 2;
  const payload = { playersAmount };

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:3333/casino/blackjack/start-game",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    if (response.status === 200) {
      const rawGame = await response.json();
      const blackjackGame = new BlackjackGame(rawGame);
      setGame(blackjackGame);
    }
  };

  if (!game) {
    return (
      <button data-testid="start-game" onClick={handleClick}>
        Start Game
      </button>
    );
  }

  if (game) {
    return <h1>Game Id: {game.id}</h1>;
  }

  return <></>;
}
