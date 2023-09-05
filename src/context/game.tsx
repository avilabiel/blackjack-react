import { createContext, useState } from "react";
import Game from "../entities/game";

interface CurrentGameContextValue {
  game: Game | null;
  setGame: (game: Game | null) => void;
}

const CurrentGameContext = createContext({} as CurrentGameContextValue);

export function CurrentGameContextProvider({
  children,
}: React.PropsWithChildren) {
  const [game, setGame] = useState<Game | null>(null);

  return (
    <CurrentGameContext.Provider value={{ game, setGame }}>
      {children}
    </CurrentGameContext.Provider>
  );
}

export default CurrentGameContext;
