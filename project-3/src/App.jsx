import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";




const App = () => {
  
const [isGameStarted, setIsGameStarted] = useState(true);
  const toggleGameButton = () => {
  setIsGameStarted((prev) => !prev );
}

  return (
    <div>
     {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGameButton}/>}
    </div>
  )
}

export default App

