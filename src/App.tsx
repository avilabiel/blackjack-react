import "./App.css";
import StartGame from "./components/start-game";
import { CurrentGameContextProvider } from "./context/game";

function App() {
  return (
    <>
      <CurrentGameContextProvider>
        <StartGame />
      </CurrentGameContextProvider>
    </>
  );
}

export default App;
