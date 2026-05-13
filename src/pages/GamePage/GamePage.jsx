// libs
import { useState } from "react";

// components
import ConnectingView from "../../components/ConnectingView";

// hooks
import useSocket from "../../hooks/useSocket";

// constants
import GAME_STATES from '../../constants/gameStates';

// styles
import classes from "./styles.module.css";

export default function GamePage() {
  const [gameState, setGameState] = useState(GAME_STATES.CONNECTING);
  console.log(gameState);
  
  const isConnectingState = gameState === GAME_STATES.CONNECTING;

  return (
    <div className={classes.root}>
      {isConnectingState && <ConnectingView setGameState={setGameState}/>}
      
      {/* lobby */}
      {/* searching */}
      {/* gameView */}
    </div>
  );
}
